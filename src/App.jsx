// App.jsx — root state and orchestration

import { useState, useCallback } from "react";
import { sendMessage } from "./lib/llmService.js";
import ChatWindow from "./components/ChatWindow.jsx";
import Sidebar from "./components/Sidebar.jsx";

export const QUICK_PROMPTS = [
  { icon: "⚡", label: "Fan won't start" },
  { icon: "🔊", label: "Noise or wobble" },
  { icon: "📡", label: "Remote not pairing" },
  { icon: "🌀", label: "Running too slow" },
  { icon: "📱", label: "Connect to app" },
  { icon: "🛡️", label: "Warranty query" },
];

const WELCOME = {
  role: "assistant",
  content: "Hey there 👋  I'm **Aria**, FanTech's support assistant.\n\nAsk me anything about your fan — installation, troubleshooting, smart features, warranty, spare parts, and more.",
  id: 0,
};

let _id = 1;
const uid = () => _id++;

export default function App() {
  const [messages,    setMessages]    = useState([WELCOME]);
  const [loading,     setLoading]     = useState(false);
  const [showForm,    setShowForm]    = useState(false);
  const [formPrefill, setFormPrefill] = useState("");
  const [ended,       setEnded]       = useState(false);

  const llmHistory = messages.slice(1).map(m => ({ role: m.role, content: m.content }));

  const handleSend = useCallback(async (text) => {
    if (!text.trim() || loading || ended) return;
    setShowForm(false);

    const userMsg = { role: "user", content: text, id: uid() };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    const result = await sendMessage(text, llmHistory);
    setLoading(false);

    setMessages(prev => [...prev, {
      role: "assistant",
      content: result.text,
      id: uid(),
      isError: result.error,
    }]);

    if (result.escalate) {
      setFormPrefill(text);
      setShowForm(true);
    }
  }, [loading, ended, llmHistory]);

  const handleFormSubmit = useCallback((formData) => {
    const ticket = `FT-${Math.floor(1e5 + Math.random() * 9e5)}`;
    setShowForm(false);
    setMessages(prev => [...prev, {
      role: "assistant",
      content: `✅ **Ticket submitted!** Our team will contact **${formData.email}** within 24 hours.\n\nYour reference: **${ticket}**\n\nAnything else I can help with?`,
      id: uid(),
    }]);
  }, []);

  const handleEndChat = useCallback(() => {
    setEnded(true);
    setShowForm(false);
    setMessages(prev => [...prev, {
      role: "assistant",
      content: "Thanks for reaching out to FanTech support! 🙏\n\nFor future queries, call **1800-200-FANS** or visit **fantech.in**. Have a great day!",
      id: uid(),
    }]);
  }, []);

  const handleNewChat = useCallback(() => {
    setMessages([{ ...WELCOME, id: 0 }]);
    setEnded(false);
    setShowForm(false);
    setFormPrefill("");
    _id = 1;
  }, []);

  return (
    <div className="app-root">
      <Sidebar />
      <main className="chat-area">
        <ChatWindow
          messages={messages}
          loading={loading}
          ended={ended}
          showForm={showForm}
          formPrefill={formPrefill}
          onSend={handleSend}
          onEndChat={handleEndChat}
          onNewChat={handleNewChat}
          onFormSubmit={handleFormSubmit}
          onFormClose={() => setShowForm(false)}
        />
      </main>
    </div>
  );
}
