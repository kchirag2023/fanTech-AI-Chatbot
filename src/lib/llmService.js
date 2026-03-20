// llmService.js — Groq API calls, escalation parsing, error handling

import { retrieveContext, buildSystemPrompt } from "./retriever.js";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

// Groq models (choose one)
// Free models available: 
// - "mixtral-8x7b-32768" (Mixtral MoE)
// - "llama3-70b-8192" (Meta Llama 3 70B)
// - "llama3-8b-8192" (Meta Llama 3 8B)
// - "gemma2-9b-it" (Google Gemma 2)
// - "llama-3.1-70b-versatile" (Llama 3.1 70B)
// - "llama-3.1-8b-instant" (Llama 3.1 8B)
const MODEL = "llama-3.1-8b-instant"; // Change this to your preferred model

// Groq API endpoint
const API_URL = "https://api.groq.com/openai/v1/chat/completions";

function stripCodeFences(text) {
  return text.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();
}

function parseEscalation(raw) {
  try {
    const cleaned = stripCodeFences(raw);
    if (!cleaned.startsWith("{")) return null;
    const parsed = JSON.parse(cleaned);
    if (parsed.escalate === true) {
      return {
        escalate: true,
        reason: parsed.reason || "Your query needs assistance from our human support team.",
      };
    }
  } catch { /* not JSON */ }
  return null;
}

export async function sendMessage(userQuery, history = []) {
  if (!API_KEY) {
    return {
      text: "⚠️ API key missing. Create a `.env` file in the project root with:\n\n`VITE_GROQ_API_KEY=your-key-here`\n\nThen restart the dev server.",
      escalate: false,
      error: true,
    };
  }

  // 🔍 RAG context
  const contextChunks = retrieveContext(userQuery);
  const systemPrompt = buildSystemPrompt(contextChunks);

  // 🧠 Convert chat history to Groq format (OpenAI-compatible)
  const groqHistory = history.map((m) => ({
    role: m.role === "assistant" ? "assistant" : "user",
    content: m.content,
  }));

  // ✅ Build messages array with system prompt
  const messages = [
    {
      role: "system",
      content: `${systemPrompt}\n\nAnswer ONLY from the provided context. If not found, say "I don't know".`,
    },
    ...groqHistory,
    {
      role: "user",
      content: userQuery,
    },
  ];

  let raw = "";
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: messages,
        max_tokens: 1024,
        temperature: 0.4,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      const errMsg = errData?.error?.message || `HTTP ${response.status}`;
      console.error("[FanTech LLM] Groq API error:", response.status, errMsg);
      
      return {
        text: `API error: ${errMsg}`,
        escalate: false,
        error: true,
      };
    }

    const data = await response.json();
    raw = data?.choices?.[0]?.message?.content ?? "";

    if (!raw) {
      console.error("[FanTech LLM] No content in response");
      return {
        text: "No response received from the API.",
        escalate: false,
        error: true,
      };
    }
  } catch (err) {
    console.error("[FanTech LLM] Fetch failed:", err);
    return {
      text: "Could not reach the Groq API. Check your VITE_GROQ_API_KEY in .env and restart the server.",
      escalate: false,
      error: true,
    };
  }

  // 🚨 escalation check
  const escalation = parseEscalation(raw);
  if (escalation) {
    return {
      text: `I wasn't able to find a solution for that — **${escalation.reason}**\n\nFill in the form below and our support team will get back to you within **24 hours**. 🙏`,
      escalate: true,
      reason: escalation.reason,
      error: false,
    };
  }

  return { text: raw.trim(), escalate: false, error: false };
}