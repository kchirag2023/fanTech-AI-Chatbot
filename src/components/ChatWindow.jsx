// ChatWindow.jsx — messages, input, end/new chat

import { useState, useRef, useEffect } from "react";
import SupportForm from "./SupportForm.jsx";
import { QUICK_PROMPTS } from "../App.jsx";

function Md({ text }) {
  return (
    <>
      {text.split("\n").map((line, i, arr) => (
        <span key={i}>
          {line.split(/(\*\*[^*]+\*\*)/g).map((p, j) =>
            p.startsWith("**") && p.endsWith("**")
              ? <strong key={j}>{p.slice(2, -2)}</strong>
              : p
          )}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

function Message({ msg }) {
  const isUser = msg.role === "user";
  return (
    <div className={`msg-row ${isUser ? "msg-row--user" : "msg-row--bot"}`}>
      {!isUser && (
        <div className="aria-avatar">
          <svg width="14" height="14" viewBox="0 0 28 28" fill="none">
            {[0, 90, 180, 270].map(d => (
              <path key={d} d="M14 14 C12 9 12.5 4 14 1 C15.5 4 16 9 14 14Z"
                fill="#b85c38" transform={`rotate(${d} 14 14)`} />
            ))}
            <circle cx="14" cy="14" r="3" fill="#b85c38" />
          </svg>
        </div>
      )}
      <div className={`bubble ${isUser ? "bubble--user" : "bubble--bot"}${msg.isError ? " bubble--error" : ""}`}>
        <Md text={msg.content} />
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="msg-row msg-row--bot">
      <div className="aria-avatar">
        <svg width="14" height="14" viewBox="0 0 28 28" fill="none">
          {[0, 90, 180, 270].map(d => (
            <path key={d} d="M14 14 C12 9 12.5 4 14 1 C15.5 4 16 9 14 14Z"
              fill="#b85c38" transform={`rotate(${d} 14 14)`} />
          ))}
          <circle cx="14" cy="14" r="3" fill="#b85c38" />
        </svg>
      </div>
      <div className="bubble bubble--bot bubble--typing">
        <span className="dot" style={{ animationDelay: "0s" }} />
        <span className="dot" style={{ animationDelay: "0.2s" }} />
        <span className="dot" style={{ animationDelay: "0.4s" }} />
      </div>
    </div>
  );
}

export default function ChatWindow({
  messages, loading, ended, showForm, formPrefill,
  onSend, onEndChat, onNewChat, onFormSubmit, onFormClose,
}) {
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const showSuggestions = messages.length === 1 && !loading && !ended;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showForm, loading]);

  function submit() {
    if (!input.trim() || loading || ended) return;
    onSend(input.trim());
    setInput("");
  }

  return (
    <div className="chat-window">
      {/* HEADER */}
      <div className="chat-header">
        <div className="chat-header-left">
          <div className="aria-header-avatar">
            <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
              {[0, 90, 180, 270].map(d => (
                <path key={d} d="M14 14 C12 9 12.5 4 14 1 C15.5 4 16 9 14 14Z"
                  fill="#b85c38" transform={`rotate(${d} 14 14)`} />
              ))}
              <circle cx="14" cy="14" r="3" fill="#b85c38" />
            </svg>
          </div>
          <div>
            <div className="aria-header-name">Aria</div>
            <div className="aria-header-status">
              <span className="status-dot" />
              {ended ? "Chat ended" : "Support assistant · FanTech"}
            </div>
          </div>
        </div>
        <div className="chat-header-right">
          {!ended
            ? <button className="btn-end-chat" onClick={onEndChat}>End chat</button>
            : <button className="btn-end-chat btn-new" onClick={onNewChat}>New chat</button>
          }
        </div>
      </div>

      {/* MESSAGES */}
      <div className="messages-scroll">
        {messages.map(m => <Message key={m.id} msg={m} />)}
        {loading && <TypingIndicator />}

        {showSuggestions && (
          <div className="suggestions-wrap">
            <span className="suggestions-label">Quick questions</span>
            <div className="chips-row">
              {QUICK_PROMPTS.map(p => (
                <button key={p.label} className="chip" onClick={() => onSend(p.label)}>
                  <span className="chip-icon">{p.icon}</span>{p.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {showForm && (
          <div className="form-indent">
            <SupportForm prefill={formPrefill} onSubmit={onFormSubmit} onClose={onFormClose} />
          </div>
        )}

        {ended && (
          <div className="ended-banner">
            <div className="ended-icon">👋</div>
            <div className="ended-text">Chat ended</div>
            <button className="btn-new-chat" onClick={onNewChat}>Start a new chat</button>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      {!ended && (
        <>
          <div className="input-bar">
            <input
              className="input-field"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !e.shiftKey && submit()}
              placeholder="Ask about your FanTech fan…"
              disabled={loading}
              maxLength={500}
            />
            <button
              className={`send-btn${(!input.trim() || loading) ? " send-btn--off" : ""}`}
              onClick={submit}
              disabled={!input.trim() || loading}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="input-hint">Press Enter to send · 1800-200-FANS</div>
        </>
      )}
    </div>
  );
}
