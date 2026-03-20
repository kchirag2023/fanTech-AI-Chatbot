// SupportForm.jsx — escalation ticket form

import { useState } from "react";

export default function SupportForm({ prefill = "", onSubmit, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", issue: prefill });
  const [busy, setBusy] = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const valid = form.name.trim() && form.email.trim() && form.issue.trim();

  function handleSubmit() {
    if (!valid || busy) return;
    setBusy(true);
    setTimeout(() => { setBusy(false); onSubmit({ ...form }); }, 1400);
  }

  return (
    <div className="support-form-card">
      <div className="sf-header">
        <div className="sf-icon">📬</div>
        <div>
          <div className="sf-title">Contact Support Team</div>
          <div className="sf-sub">We'll get back within 24 hours</div>
        </div>
        <button className="sf-close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="sf-fields">
        <div className="sf-row-2">
          <div className="sf-field">
            <label>Name <span>*</span></label>
            <input className="sf-input" placeholder="Your full name" value={form.name} onChange={set("name")} />
          </div>
          <div className="sf-field">
            <label>Email <span>*</span></label>
            <input className="sf-input" type="email" placeholder="your@email.com" value={form.email} onChange={set("email")} />
          </div>
        </div>
        <div className="sf-field">
          <label>Phone <span className="optional">(optional)</span></label>
          <input className="sf-input" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set("phone")} />
        </div>
        <div className="sf-field">
          <label>Issue <span>*</span></label>
          <textarea className="sf-input sf-textarea" placeholder="Describe your problem in detail…" value={form.issue} onChange={set("issue")} />
        </div>
      </div>

      <div className="sf-actions">
        <button className="sf-btn-cancel" onClick={onClose}>Cancel</button>
        <button className={`sf-btn-submit${!valid ? " disabled" : ""}`} onClick={handleSubmit} disabled={!valid || busy}>
          {busy ? <span className="sf-spinner" /> : <>Submit Ticket <span className="arrow">→</span></>}
        </button>
      </div>
    </div>
  );
}
