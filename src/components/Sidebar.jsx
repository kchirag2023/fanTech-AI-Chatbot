// Sidebar.jsx — brand panel with SVG ceiling fan illustrations

import { useState, useEffect } from "react";

function FanIllustration({ size = 160, color = "#b85c38", spinning = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" style={{ display: "block", overflow: "visible" }}>
      <defs>
        <radialGradient id="fanGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0"    />
        </radialGradient>
      </defs>
      <circle cx="80" cy="85" r="65" fill="url(#fanGlow)" />
      <rect x="64" y="4" width="32" height="10" rx="5" fill={color} opacity="0.5" />
      <rect x="78" y="13" width="5" height="28" fill={color} opacity="0.45" />
      <g style={{ transformOrigin: "80px 56px", animation: spinning ? "fanSpin 2s linear infinite" : "none" }}>
        {[0, 90, 180, 270].map(angle => (
          <g key={angle} transform={`rotate(${angle} 80 56)`}>
            <path d="M80 56 C74 42 75 22 80 12 C85 22 86 42 80 56Z" fill={color} opacity="0.88" />
            <path d="M80 56 C78 44 78.5 26 80 16 C81 26 81.5 42 80 56Z" fill="white" opacity="0.12" />
          </g>
        ))}
      </g>
      <circle cx="80" cy="56" r="13"  fill={color}       opacity="0.95" />
      <circle cx="80" cy="56" r="8.5" fill="#1e140d" />
      <circle cx="80" cy="56" r="3"   fill={color}       opacity="0.8"  />
      <circle cx="80" cy="56" r="11"  stroke={color} strokeWidth="0.8" fill="none" opacity="0.4" />
      <rect   x="77" y="40" width="6" height="6" rx="2" fill={color} opacity="0.6" />
      <ellipse cx="80" cy="71" rx="9"   ry="5"   fill={color}   opacity="0.35" />
      <ellipse cx="80" cy="75" rx="6"   ry="3.5" fill="#fff8e1" opacity="0.6"  />
      <ellipse cx="80" cy="77" rx="3.5" ry="2"   fill="#ffe699" opacity="0.45" />
    </svg>
  );
}

export default function Sidebar() {
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setSpinning(true);
      setTimeout(() => setSpinning(false), 2000);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
            {[0, 90, 180, 270].map(d => (
              <path key={d} d="M14 14 C12 9 12.5 4 14 1 C15.5 4 16 9 14 14Z"
                fill="#b85c38" transform={`rotate(${d} 14 14)`} opacity="0.9" />
            ))}
            <circle cx="14" cy="14" r="3.5" fill="#b85c38" />
          </svg>
        </div>
        <span className="brand-wordmark">FanTech</span>
      </div>

      <p className="sidebar-tagline">Premium ceiling fans,<br />crafted for Indian homes.</p>

      <div className="hero-fan-stage">
        <FanIllustration size={170} color="#b85c38" spinning={spinning} />
        <div className="hero-fan-shadow" />
      </div>

      <div className="stats-row">
        {[["200+","Cities"],["5★","BEE Rating"],["50%","Less Energy"]].map(([v,l]) => (
          <div key={l} className="stat-item">
            <span className="stat-val">{v}</span>
            <span className="stat-lbl">{l}</span>
          </div>
        ))}
      </div>

      <div className="models-label">Our Range</div>
      <div className="model-cards">
        {[
          { name: "Zephyr Elite", tag: "Bestseller",  color: "#b85c38", price: "₹3,999" },
          { name: "Apex Pro",     tag: "Smart BLDC",  color: "#4a7c9e", price: "₹6,499" },
          { name: "Breeze Base",  tag: "Value Pick",  color: "#5a8a5a", price: "₹1,499" },
        ].map(m => (
          <div key={m.name} className="model-card">
            <div className="model-fan-thumb" style={{ background: `${m.color}18` }}>
              <FanIllustration size={44} color={m.color} />
            </div>
            <div className="model-info">
              <span className="model-name">{m.name}</span>
              <span className="model-tag" style={{ color: m.color }}>{m.tag} · {m.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <span>1800-200-FANS</span>
        <span className="dot-sep">·</span>
        <span>fantech.in</span>
      </div>
    </aside>
  );
}
