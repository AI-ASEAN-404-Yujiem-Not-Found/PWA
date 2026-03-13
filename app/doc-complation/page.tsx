'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { MdNotificationsNone } from "react-icons/md";

// ── Icons (inline SVGs to avoid react-icons dependency) ──────────────────────
const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
);
const Bell = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#004868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
);
const Mic = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" /><line x1="12" y1="19" x2="12" y2="23" fill="none" /><line x1="8" y1="23" x2="16" y2="23" fill="none" /></svg>
);
const Plus = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);
const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
);
const InfoCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
);
const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#004868" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);
const OpportunityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const EducationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
);
const RecapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" /></svg>
);
const ProfileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
// Mastercard-like icon
const MastercardIcon = () => (
  <svg width="28" height="18" viewBox="0 0 38 24"><circle cx="14" cy="12" r="10" fill="#EB001B" opacity="0.9" /><circle cx="24" cy="12" r="10" fill="#F79E1B" opacity="0.9" /></svg>
);


function Header() {
  return (
    <div className='w-full bg-[#B4C9FF] p-5 flex items-start justify-between'>
      <div className='flex items-start gap-3'>
        <div className='bg-[#298191] p-2 w-9 h-9 rounded-md'>
          <FaChevronLeft className='w-5 h-5 text-white' />
        </div>
        <div className="w-full flex items-end gap-2">
          <Image alt="image header icon" src={'/icon-image-ok.png'} width={49} height={50} />
          <p className='font-medium text-[16px]'>Let&apos;s complete the documents</p>
        </div>
      </div>
      <div className='p-2 rounded-full bg-[#FFFFFF99]'>
        <MdNotificationsNone className='w-5 h-5 text-[#004868] fill-[#004868]' fill='#004868' />
      </div>
    </div>
  );
}

function UploadCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1a2740", margin: 0 }}>{title}</h2>
      <div style={{
        width: "100%", aspectRatio: "362/180",
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 14,
        borderRadius: 10, border: "2px dashed #cbd5e1", background: "#fafbfc"
      }}>
        <div style={{ background: "#9ca3af", padding: 12, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Plus />
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>{subtitle}</p>
          <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>Max file size : 10 MB</p>
        </div>
      </div>
    </div>
  );
}

function PhoneInput() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1a2740", margin: 0 }}>Phone Number</h2>
      <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, display: "flex", alignItems: "center", overflow: "hidden", background: "white" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "10px 12px", background: "#f8fafc", borderRight: "1px solid #e2e8f0", flexShrink: 0 }}>
          <span style={{ fontSize: 14, color: "#374151" }}>ID</span>
          <ChevronDown />
        </div>
        <input type="tel" placeholder="+62 (555) 000-0000" style={{ flex: 1, border: "none", outline: "none", padding: "10px 12px", fontSize: 14, color: "#374151", background: "transparent" }} />
        <div style={{ padding: "0 10px", flexShrink: 0 }}><InfoCircle /></div>
      </div>
      <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>This is a hint text to help user.</p>
    </div>
  );
}

function DropdownInput({ label, placeholder, hint }: { label: string; placeholder: string; hint: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1a2740", margin: 0 }}>{label}</h2>
      <div
        onClick={() => setOpen(!open)}
        style={{ border: "1px solid #e2e8f0", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "white", cursor: "pointer" }}
      >
        <span style={{ fontSize: 14, color: "#9ca3af" }}>{placeholder}</span>
        <ChevronDown />
      </div>
      <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>{hint}</p>
    </div>
  );
}

function AccountNumberInput() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1a2740", margin: 0 }}>Account number</h2>
      <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, display: "flex", alignItems: "center", overflow: "hidden", background: "white" }}>
        <div style={{ padding: "8px 12px", flexShrink: 0 }}>
          <MastercardIcon />
        </div>
        <input type="text" placeholder="Rekening number" style={{ flex: 1, border: "none", outline: "none", padding: "10px 8px", fontSize: 14, color: "#9ca3af", background: "transparent" }} />
        <div style={{ padding: "0 10px", flexShrink: 0 }}><InfoCircle /></div>
      </div>
      <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>This is a hint text to help user.</p>
    </div>
  );
}

const BUSINESS_OPTIONS = [
  "Daily business capital",
  "Business expansion",
  "Purchase of equipment/materialsD",
  "Other business needs",
];

function MainBusinessInput() {
  const [selected, setSelected] = useState("Business expansion");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1a2740", margin: 0 }}>Select your main business needs</h2>
      <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "white", cursor: "pointer" }}>
        <span style={{ fontSize: 14, color: "#9ca3af" }}>Select service</span>
        <ChevronDown />
      </div>
      <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>This is a hint text to help user.</p>
      {/* Options list */}
      <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, overflow: "hidden" }}>
        {BUSINESS_OPTIONS.map((opt, i) => (
          <div
            key={opt}
            onClick={() => setSelected(opt)}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "13px 16px",
              background: selected === opt ? "#f0f4ff" : "white",
              borderBottom: i < BUSINESS_OPTIONS.length - 1 ? "1px solid #f1f5f9" : "none",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 14, color: "#1a2740", fontWeight: selected === opt ? 500 : 400 }}>{opt}</span>
            {selected === opt && <Check />}
          </div>
        ))}
      </div>
    </div>
  );
}

function OtherNeedsInput() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1a2740", margin: 0 }}>Any other needs?</h2>
      <textarea
        placeholder="Input keluhan kesehatanmu......."
        maxLength={500}
        rows={5}
        style={{
          width: "100%", border: "1px solid #e2e8f0", borderRadius: 8,
          padding: "12px 14px", fontSize: 14, color: "#374151", resize: "none",
          outline: "none", background: "white", boxSizing: "border-box", fontFamily: "inherit"
        }}
      />
      <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>Max 500 words</p>
    </div>
  );
}

function BottomNav() {
  const items = [
    { icon: <HomeIcon />, label: "Home" },
    { icon: <OpportunityIcon />, label: "Opportunity" },
    { icon: <EducationIcon />, label: "Education" },
    { icon: <RecapIcon />, label: "Recap" },
    { icon: <ProfileIcon />, label: "Profile" },
  ];
  return (
    <div style={{
      position: "sticky", bottom: 0, background: "white",
      borderTop: "1px solid #e2e8f0",
      display: "flex", justifyContent: "space-around", padding: "10px 0 6px",
    }}>
      {items.map(({ icon, label }) => (
        <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: "#94a3b8", cursor: "pointer" }}>
          {icon}
          <span style={{ fontSize: 10 }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function DocComplationPage() {
  return (
    <div style={{
      maxWidth: 430, margin: "0 auto", minHeight: "100vh",
      background: "white", fontFamily: "'Segoe UI', sans-serif",
      display: "flex", flexDirection: "column",
    }}>
      {/* Status bar placeholder */}
      <div style={{ background: "#B4C9FF", padding: "10px 20px 0", display: "flex", justifyContent: "space-between", fontSize: 12, fontWeight: 600, color: "#1a2740" }}>
        <span>09:41</span>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span>▲▲▲</span><span>WiFi</span><span>🔋</span>
        </div>
      </div>

      <Header />

      <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px 24px", display: "flex", flexDirection: "column", gap: 24 }}>

        {/* Voiceover button */}
        <button style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "#004868", color: "white", border: "none",
          borderRadius: 8, padding: "10px 18px", fontSize: 14, fontWeight: 500, cursor: "pointer",
          alignSelf: "flex-start"
        }}>
          Use Voiceover <Mic />
        </button>

        {/* Upload cards */}
        <UploadCard title="Scan/Upload identity card" subtitle="Scan/Upload KTP terbarumu" />
        <UploadCard title="Business Information Document" subtitle="Scan/Upload Business Information Document" />

        {/* Info text */}
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "#1a2740", margin: 0 }}>
          If you <strong>have not registered or created an insurance card</strong> or policy, click the button below to see the insurance card creation guide.
        </p>

        {/* Document Creation Guide button */}
        <button style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "#004868", color: "white", border: "none",
          borderRadius: 8, padding: "14px 18px", fontSize: 15, fontWeight: 500, cursor: "pointer",
          boxSizing: "border-box"
        }}>
          Document Creation Guide <ArrowRight />
        </button>

        {/* Form fields */}
        <PhoneInput />
        <DropdownInput label="Account Type" placeholder="Select service" hint="This is a hint text to help user." />
        <AccountNumberInput />
        <MainBusinessInput />
        <OtherNeedsInput />

        {/* Continue button */}
        <Link href={"/explore-ways"}>
          <button style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            background: "#004868", color: "white", border: "none",
            borderRadius: 8, padding: "14px 18px", fontSize: 15, fontWeight: 500, cursor: "pointer",
            boxSizing: "border-box"
          }}>

            Continue Process <ArrowRight />
          </button>
        </Link>
      </div>

      <BottomNav />
    </div >
  );
}