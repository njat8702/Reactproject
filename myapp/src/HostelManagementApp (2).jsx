import { useState } from "react";

/* ─────────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────────── */
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --indigo:       #4f46e5;
  --indigo-dark:  #4338ca;
  --indigo-light: #e0e7ff;
  --indigo-pale:  #f0f0ff;
  --teal:         #0d9488;
  --teal-light:   #ccfbf1;
  --amber:        #d97706;
  --amber-light:  #fef3c7;c:\Users\HP\Downloads\HostelManagementApp (2).jsx
  --rose:         #e11d48;
  --rose-light:   #ffe4e6;
  --green:        #16a34a;
  --green-light:  #dcfce7;
  --text:         #1e1b4b;
  --text-2:       #4b5563;
  --muted:        #9ca3af;
  --border:       #e5e7eb;
  --bg:           linear-gradient(135deg,#dbeafe 0%,#c7d2fe 50%,#ddd6fe 100%);
  --white:        #ffffff;
  --radius:       16px;
  --radius-sm:    10px;
  --shadow:       0 8px 32px rgba(79,70,229,0.12);
  --shadow-lg:    0 16px 56px rgba(79,70,229,0.18);
}

body { font-family:'DM Sans',sans-serif; }

/* scrollbar */
::-webkit-scrollbar { width:6px; }
::-webkit-scrollbar-track { background:#f1f5f9; }
::-webkit-scrollbar-thumb { background:#c7d2fe; border-radius:3px; }

/* ── SHARED LAYOUT ── */
.hms { min-height:100vh; background:var(--bg); font-family:'DM Sans',sans-serif; }

/* NAVBAR */
.hms-nav {
  position:fixed; top:0; left:0; right:0; z-index:200;
  background:rgba(255,255,255,0.94);
  backdrop-filter:blur(14px);
  box-shadow:0 2px 24px rgba(79,70,229,0.09);
  height:64px; padding:0 2rem;
  display:flex; align-items:center; justify-content:space-between;
}
.hms-brand {
  font-family:'Playfair Display',serif;
  font-size:1.35rem; font-weight:800;
  color:var(--indigo);
  display:flex; align-items:center; gap:9px;
  cursor:pointer; border:none; background:none;
}
.hms-nav-right { display:flex; align-items:center; gap:1.6rem; }
.hms-nav-right button {
  background:none; border:none; cursor:pointer;
  font-family:'DM Sans',sans-serif;
  font-weight:600; font-size:0.875rem;
  color:var(--text-2); transition:color .2s;
}
.hms-nav-right button:hover { color:var(--indigo); }
.hms-nav-right button.active { color:var(--indigo); }

.hms-nav-btn {
  background:var(--indigo) !important;
  color:white !important;
  border-radius:10px !important;
  padding:8px 20px !important;
  font-size:0.85rem !important;
  box-shadow:0 3px 12px rgba(79,70,229,0.3);
  transition:background .2s, transform .15s !important;
}
.hms-nav-btn:hover { background:var(--indigo-dark) !important; transform:scale(1.03); }

/* ── HERO (HOME) ── */
.hero { padding:130px 1.5rem 60px; text-align:center; animation:fadeUp .8s ease both; }
.hero h1 {
  font-family:'Playfair Display',serif;
  font-size:clamp(2.2rem,6vw,4rem);
  font-weight:900; color:var(--indigo);
  letter-spacing:-1.5px; line-height:1.12;
  margin-bottom:1.2rem;
}
.hero p { color:var(--text-2); max-width:640px; margin:0 auto; font-size:1.08rem; line-height:1.75; }

/* PORTAL CARDS */
.portal-cards {
  display:flex; justify-content:center; gap:2.5rem;
  flex-wrap:wrap; padding:20px 1.5rem 80px;
  animation:fadeUp 1s .2s ease both;
}
.portal-card {
  background:white; border-radius:22px; width:340px;
  overflow:hidden; box-shadow:var(--shadow);
  transition:transform .3s,box-shadow .3s;
}
.portal-card:hover { transform:translateY(-8px); box-shadow:var(--shadow-lg); }
.portal-card-header {
  height:160px; display:flex; align-items:center; justify-content:center;
  font-size:4.5rem;
}
.portal-card-header.student { background:linear-gradient(135deg,#c7d2fe,#818cf8); }
.portal-card-header.warden  { background:linear-gradient(135deg,#99f6e4,#0d9488); }
.portal-card-body  { padding:1.4rem 1.5rem .6rem; }
.portal-card-title {
  font-family:'Playfair Display',serif;
  font-size:1.5rem; font-weight:700; color:var(--indigo); margin-bottom:.5rem;
}
.portal-card-text  { color:var(--muted); font-size:.9rem; line-height:1.65; }
.portal-feat-list  { list-style:none; border-top:1px solid #f1f5f9; }
.portal-feat-list li {
  padding:12px 20px; border-bottom:1px solid #f1f5f9;
  font-weight:500; font-size:.9rem; display:flex; align-items:center; gap:10px;
  color:var(--text);
}
.portal-feat-list li span { color:var(--indigo); width:18px; text-align:center; }
.portal-card-foot  { padding:1.2rem; text-align:center; }

/* ── BUTTONS ── */
.btn {
  display:inline-flex; align-items:center; gap:7px;
  background:var(--indigo); color:white;
  border:none; border-radius:12px;
  padding:11px 28px; font-weight:700;
  font-size:.9rem; cursor:pointer;
  font-family:'DM Sans',sans-serif;
  text-decoration:none;
  box-shadow:0 4px 16px rgba(79,70,229,.3);
  transition:background .2s,transform .15s,box-shadow .2s;
}
.btn:hover { background:var(--indigo-dark); transform:translateY(-1px); box-shadow:0 6px 24px rgba(79,70,229,.4); color:white; }
.btn-teal  { background:var(--teal); box-shadow:0 4px 16px rgba(13,148,136,.25); }
.btn-teal:hover { background:#0f766e; }
.btn-sm    { padding:8px 18px; font-size:.82rem; border-radius:9px; }
.btn-ghost { background:transparent; color:var(--indigo); border:2px solid var(--indigo); box-shadow:none; }
.btn-ghost:hover { background:var(--indigo); color:white; }
.btn-danger { background:var(--rose); box-shadow:0 4px 16px rgba(225,29,72,.25); }
.btn-danger:hover { background:#be123c; }
.btn-success { background:var(--green); box-shadow:0 4px 16px rgba(22,163,74,.25); }
.btn-success:hover { background:#15803d; }

/* ── PORTAL SHELL ── */
.portal-shell {
  display:flex; min-height:100vh; padding-top:64px;
}
.sidebar {
  width:240px; flex-shrink:0;
  background:white;
  box-shadow:2px 0 20px rgba(79,70,229,.07);
  padding:1.5rem 0;
  position:fixed; top:64px; left:0; bottom:0;
  overflow-y:auto;
}
.sidebar-section { padding:0 1rem .5rem; margin-bottom:.25rem; }
.sidebar-label {
  font-size:.7rem; font-weight:700; letter-spacing:.1em;
  text-transform:uppercase; color:var(--muted);
  padding:.6rem .75rem .3rem;
}
.sidebar-item {
  display:flex; align-items:center; gap:10px;
  padding:10px 14px; border-radius:10px;
  font-weight:500; font-size:.88rem; color:var(--text-2);
  cursor:pointer; transition:all .2s;
  margin-bottom:2px; border:none; background:none; width:100%;
  font-family:'DM Sans',sans-serif; text-align:left;
}
.sidebar-item:hover { background:var(--indigo-pale); color:var(--indigo); }
.sidebar-item.active { background:var(--indigo-light); color:var(--indigo); font-weight:700; }
.sidebar-item span.icon { width:20px; text-align:center; font-size:1rem; }

.portal-content {
  margin-left:240px; flex:1; padding:2rem 2.5rem;
  min-height:calc(100vh - 64px);
}

/* ── PAGE HEADER ── */
.page-header { margin-bottom:2rem; }
.page-header h2 {
  font-family:'Playfair Display',serif;
  font-size:1.9rem; font-weight:800;
  color:var(--text); letter-spacing:-.5px;
}
.page-header p { color:var(--text-2); font-size:.95rem; margin-top:.35rem; }

/* ── CARDS / STATS ── */
.stats-grid {
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
  gap:1.25rem; margin-bottom:2rem;
}
.stat-card {
  background:white; border-radius:var(--radius);
  padding:1.4rem 1.5rem;
  box-shadow:var(--shadow); animation:fadeUp .5s ease both;
}
.stat-card .stat-icon {
  width:44px; height:44px; border-radius:12px;
  display:flex; align-items:center; justify-content:center;
  font-size:1.2rem; margin-bottom:.9rem;
}
.stat-card .stat-val {
  font-family:'Playfair Display',serif;
  font-size:1.9rem; font-weight:800; color:var(--text);
  line-height:1; margin-bottom:.3rem;
}
.stat-card .stat-lbl { font-size:.82rem; color:var(--muted); font-weight:500; }

/* ── CONTENT CARD ── */
.content-card {
  background:white; border-radius:var(--radius);
  box-shadow:var(--shadow); overflow:hidden;
  animation:fadeUp .5s ease both;
}
.content-card-header {
  padding:1.2rem 1.5rem;
  border-bottom:1px solid var(--border);
  display:flex; align-items:center; justify-content:space-between;
}
.content-card-header h3 {
  font-family:'Playfair Display',serif;
  font-size:1.15rem; font-weight:700; color:var(--text);
}
.content-card-body { padding:1.5rem; }

/* ── FORM ── */
.form-grid { display:grid; grid-template-columns:1fr 1fr; gap:1.25rem; }
.form-grid.single { grid-template-columns:1fr; }
.form-group { display:flex; flex-direction:column; gap:.45rem; }
.form-group.full { grid-column:1/-1; }
.form-label { font-size:.82rem; font-weight:600; color:var(--text); letter-spacing:.02em; }
.form-control {
  padding:10px 14px; border:1.5px solid var(--border);
  border-radius:10px; font-size:.9rem;
  font-family:'DM Sans',sans-serif; color:var(--text);
  outline:none; transition:border .2s,box-shadow .2s;
  background:white;
}
.form-control:focus { border-color:var(--indigo); box-shadow:0 0 0 3px rgba(79,70,229,.12); }
textarea.form-control { resize:vertical; min-height:100px; }
select.form-control { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 12px center; background-size:16px; padding-right:36px; }

/* ── TABLE ── */
.hms-table { width:100%; border-collapse:collapse; font-size:.88rem; }
.hms-table th {
  background:var(--indigo-pale); color:var(--indigo);
  font-weight:700; font-size:.78rem; letter-spacing:.06em; text-transform:uppercase;
  padding:11px 14px; text-align:left;
}
.hms-table td { padding:12px 14px; border-bottom:1px solid #f1f5f9; color:var(--text-2); }
.hms-table tr:last-child td { border-bottom:none; }
.hms-table tr:hover td { background:#fafafe; }

/* ── BADGE ── */
.badge {
  display:inline-flex; align-items:center;
  padding:3px 10px; border-radius:20px;
  font-size:.75rem; font-weight:700; letter-spacing:.02em;
}
.badge-green  { background:var(--green-light);  color:#15803d; }
.badge-amber  { background:var(--amber-light);  color:#b45309; }
.badge-rose   { background:var(--rose-light);   color:#be123c; }
.badge-indigo { background:var(--indigo-light); color:var(--indigo); }
.badge-teal   { background:var(--teal-light);   color:#0f766e; }

/* ── NOTICE CARD ── */
.notice-card {
  border-left:4px solid var(--indigo);
  background:var(--indigo-pale); border-radius:0 var(--radius-sm) var(--radius-sm) 0;
  padding:1rem 1.2rem; margin-bottom:1rem; transition:transform .2s;
}
.notice-card:hover { transform:translateX(4px); }
.notice-card h4 { font-weight:700; color:var(--text); margin-bottom:.3rem; font-size:.95rem; }
.notice-card p  { font-size:.87rem; color:var(--text-2); line-height:1.6; }
.notice-card .meta { font-size:.75rem; color:var(--muted); margin-top:.5rem; }

/* ROOM DETAIL */
.room-info-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
.room-info-item { background:var(--indigo-pale); border-radius:var(--radius-sm); padding:1rem 1.2rem; }
.room-info-item .lbl { font-size:.75rem; font-weight:700; color:var(--indigo); text-transform:uppercase; letter-spacing:.06em; margin-bottom:.35rem; }
.room-info-item .val { font-size:1.05rem; font-weight:600; color:var(--text); }

/* ALERT */
.alert {
  padding:.9rem 1.2rem; border-radius:var(--radius-sm);
  font-size:.88rem; font-weight:500; margin-bottom:1.2rem;
  display:flex; align-items:center; gap:.6rem; animation:fadeUp .3s ease;
}
.alert-success { background:var(--green-light); color:#15803d; }
.alert-error   { background:var(--rose-light);  color:#be123c; }
.alert-info    { background:var(--indigo-light); color:var(--indigo); }

/* LOGIN PAGE */
.login-wrap {
  min-height:100vh; display:flex; align-items:center; justify-content:center;
  padding:1.5rem;
}
.login-box {
  background:white; border-radius:24px;
  box-shadow:var(--shadow-lg); overflow:hidden;
  width:100%; max-width:440px;
  animation:fadeUp .6s ease both;
}
.login-top {
  padding:2.5rem 2.5rem 1.5rem; text-align:center;
}
.login-top .icon { font-size:3rem; margin-bottom:.8rem; }
.login-top h2 {
  font-family:'Playfair Display',serif;
  font-size:1.8rem; font-weight:800; color:var(--text);
  margin-bottom:.4rem;
}
.login-top p { color:var(--muted); font-size:.9rem; }
.login-form { padding:0 2.5rem 2.5rem; }
.login-form .form-group { margin-bottom:1.1rem; }

/* FOOTER */
.hms-footer { background:white; box-shadow:0 -4px 30px rgba(79,70,229,.07); padding:3rem 0 0; margin-top:auto; }
.footer-grid {
  max-width:1200px; margin:0 auto; padding:0 2.5rem;
  display:grid; grid-template-columns:2fr 1fr 1.5fr 1.5fr; gap:2.5rem;
}
.footer-brand { font-family:'Playfair Display',serif; font-size:1.25rem; font-weight:800; color:var(--indigo); display:flex; align-items:center; gap:9px; margin-bottom:.9rem; }
.footer-desc { color:var(--muted); font-size:.88rem; line-height:1.7; }
.footer-socials { display:flex; gap:1rem; margin-top:1.1rem; }
.footer-socials a { color:var(--indigo); font-size:1.2rem; transition:transform .2s,opacity .2s; }
.footer-socials a:hover { transform:scale(1.2); opacity:.75; }
.footer h5 { font-weight:700; color:var(--indigo); margin-bottom:1rem; font-size:.8rem; letter-spacing:.06em; text-transform:uppercase; }
.footer-links { list-style:none; }
.footer-links li { margin-bottom:.65rem; }
.footer-links a { text-decoration:none; color:var(--muted); font-size:.88rem; transition:color .2s; }
.footer-links a:hover { color:var(--indigo); }
.footer-services { list-style:none; }
.footer-services li { margin-bottom:.65rem; color:var(--muted); font-size:.88rem; display:flex; align-items:center; gap:9px; }
.footer-contact-item { display:flex; align-items:flex-start; gap:9px; color:var(--muted); font-size:.88rem; margin-bottom:.65rem; }
.footer-bottom { max-width:1200px; margin:0 auto; padding:1.2rem 2.5rem; border-top:1px solid var(--border); margin-top:2.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; }
.footer-bottom p { color:var(--muted); font-size:.83rem; }
.footer-bottom-links { display:flex; gap:1.5rem; }
.footer-bottom-links a { text-decoration:none; color:var(--muted); font-size:.83rem; transition:color .2s; }
.footer-bottom-links a:hover { color:var(--indigo); }

/* ANIMATIONS */
@keyframes fadeUp {
  from { opacity:0; transform:translateY(20px); }
  to   { opacity:1; transform:translateY(0); }
}

/* RESPONSIVE */
@media(max-width:900px) {
  .footer-grid { grid-template-columns:1fr 1fr; }
  .sidebar { transform:translateX(-100%); transition:transform .3s; z-index:150; }
  .sidebar.open { transform:translateX(0); }
  .portal-content { margin-left:0; padding:1.5rem; }
}
@media(max-width:640px) {
  .portal-card { width:100%; max-width:380px; }
  .footer-grid { grid-template-columns:1fr; }
  .form-grid { grid-template-columns:1fr; }
  .room-info-grid { grid-template-columns:1fr; }
  .stats-grid { grid-template-columns:1fr 1fr; }
  .footer-bottom { flex-direction:column; text-align:center; }
}
`;

/* ─────────────────────────────────────────────
   MOCK DATA
───────────────────────────────────────────── */
const NOTICES = [
  { id:1, title:"Hostel Fees Due – Last Date 30 May", date:"12 May 2026", body:"All students are reminded to pay their hostel fees before 30 May 2026 to avoid a late fine of ₹200/day.", tag:"Finance" },
  { id:2, title:"Water Supply Disruption on 15 May", date:"11 May 2026", body:"Due to maintenance work, water supply will be interrupted from 9 AM to 1 PM on 15 May. Please store water in advance.", tag:"Maintenance" },
  { id:3, title:"Annual Cultural Fest – Registrations Open", date:"10 May 2026", body:"Students can register for the Annual Cultural Fest events via the student portal. Last date: 20 May.", tag:"Event" },
  { id:4, title:"New Mess Menu Effective 13 May", date:"9 May 2026", body:"A revised mess menu with more nutritional options will be effective from 13 May. Check the notice board for the full schedule.", tag:"Mess" },
];

const COMPLAINTS = [
  { id:101, studentId:"S-1021", name:"Aarav Sharma", room:"A-204", type:"Electrical", description:"Ceiling fan not working since 3 days.", date:"10 May 2026", status:"Pending" },
  { id:102, studentId:"S-1045", name:"Priya Mehta", room:"B-108", type:"Plumbing", description:"Washroom tap leaking.", date:"9 May 2026", status:"In Progress" },
  { id:103, studentId:"S-1003", name:"Rohan Verma", room:"A-115", type:"Cleanliness", description:"Common area not cleaned for 2 days.", date:"8 May 2026", status:"Resolved" },
  { id:104, studentId:"S-1067", name:"Ananya Singh", room:"C-305", type:"Security", description:"Room door lock is broken.", date:"7 May 2026", status:"Pending" },
];

const STUDENTS = [
  { id:"S-1021", name:"Aarav Sharma", room:"A-204", course:"B.Tech CSE", year:"2nd", feeStatus:"Paid", phone:"9876501234" },
  { id:"S-1045", name:"Priya Mehta", room:"B-108", course:"B.Tech ECE", year:"3rd", feeStatus:"Pending", phone:"9876502345" },
  { id:"S-1003", name:"Rohan Verma", room:"A-115", course:"BCA", year:"1st", feeStatus:"Paid", phone:"9876503456" },
  { id:"S-1067", name:"Ananya Singh", room:"C-305", course:"MCA", year:"2nd", feeStatus:"Overdue", phone:"9876504567" },
  { id:"S-1089", name:"Karan Patel", room:"B-210", course:"B.Tech ME", year:"4th", feeStatus:"Paid", phone:"9876505678" },
  { id:"S-1012", name:"Neha Gupta", room:"C-102", course:"B.Sc IT", year:"1st", feeStatus:"Paid", phone:"9876506789" },
];

const ATTENDANCE = [
  { id:"S-1021", name:"Aarav Sharma", room:"A-204", today:"Present", month:"92%" },
  { id:"S-1045", name:"Priya Mehta", room:"B-108", today:"Present", month:"87%" },
  { id:"S-1003", name:"Rohan Verma", room:"A-115", today:"Absent", month:"74%" },
  { id:"S-1067", name:"Ananya Singh", room:"C-305", today:"Present", month:"95%" },
  { id:"S-1089", name:"Karan Patel", room:"B-210", today:"Leave", month:"80%" },
  { id:"S-1012", name:"Neha Gupta", room:"C-102", today:"Present", month:"98%" },
];

const VISITORS = [
  { id:"V-001", visitorName:"Suresh Sharma", studentName:"Aarav Sharma", room:"A-204", relation:"Father", inTime:"10:30 AM", outTime:"12:00 PM", date:"12 May 2026", status:"Checked Out" },
  { id:"V-002", visitorName:"Sunita Mehta", studentName:"Priya Mehta", room:"B-108", relation:"Mother", inTime:"02:15 PM", outTime:"—", date:"12 May 2026", status:"Inside" },
  { id:"V-003", visitorName:"Rakesh Verma", studentName:"Rohan Verma", room:"A-115", relation:"Brother", inTime:"09:00 AM", outTime:"10:30 AM", date:"11 May 2026", status:"Checked Out" },
];

/* ─────────────────────────────────────────────
   HELPER COMPONENTS
───────────────────────────────────────────── */
function Badge({ type, label }) {
  const map = { Paid:"badge-green", Pending:"badge-amber", Overdue:"badge-rose",
    Present:"badge-green", Absent:"badge-rose", Leave:"badge-amber",
    "In Progress":"badge-teal", Resolved:"badge-green", "Checked Out":"badge-indigo",
    Inside:"badge-green", Finance:"badge-indigo", Maintenance:"badge-amber",
    Event:"badge-teal", Mess:"badge-rose" };
  return <span className={`badge ${map[label]||"badge-indigo"}`}>{label}</span>;
}

function Alert({ type, msg, onClose }) {
  if(!msg) return null;
  return (
    <div className={`alert alert-${type}`}>
      <span>{type==="success"?"✓":type==="error"?"✕":"ℹ"}</span>
      <span style={{flex:1}}>{msg}</span>
      {onClose && <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",fontWeight:700,color:"inherit"}}>×</button>}
    </div>
  );
}

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
function Navbar({ page, setPage, currentPortal }) {
  return (
    <nav className="hms-nav">
      <button className="hms-brand" onClick={()=>setPage("home")}>
        🏛️ Hostel Management
      </button>
      <div className="hms-nav-right">
        <button className={page==="home"?"active":""} onClick={()=>setPage("home")}>Home</button>
        <button onClick={()=>setPage("home")}>About Us</button>
        <button onClick={()=>setPage("home")}>Contact Us</button>
        {currentPortal ? (
          <button className="hms-nav-btn" onClick={()=>setPage("home")}>⬅ Exit Portal</button>
        ) : (
          <>
            <button className="hms-nav-btn" onClick={()=>setPage("student-login")}>Student Login</button>
            <button style={{background:"var(--teal)",color:"white",borderRadius:"10px",padding:"8px 20px",fontSize:".85rem",fontWeight:700,fontFamily:"DM Sans,sans-serif",cursor:"pointer",border:"none",boxShadow:"0 3px 12px rgba(13,148,136,.3)"}} onClick={()=>setPage("warden-login")}>Warden Login</button>
          </>
        )}
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer({ setPage }) {
  return (
    <footer className="hms-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">🏛️ Hostel Management</div>
          <p className="footer-desc">A centralized hostel management platform simplifying room allocation, complaints, fee management, attendance tracking, visitor records, and hostel communication.</p>
          <div className="footer-socials">
            {["📘","📷","💼","🐦"].map((ic,i)=>(
              <a href="#" key={i} style={{textDecoration:"none"}}>{ic}</a>
            ))}
          </div>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul className="footer-links">
            {["Home","About Us","Student Portal","Warden Portal"].map((l,i)=>(
              <li key={i}><a href="#" onClick={e=>{e.preventDefault();setPage(l==="Student Portal"?"student-login":l==="Warden Portal"?"warden-login":"home")}}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Student Services</h5>
          <ul className="footer-services">
            {[["🛏","Room Allocation"],["💳","Online Fee Payment"],["⚠️","Raise Complaints"],["📢","View Notices"]].map(([ic,l],i)=>(
              <li key={i}><span>{ic}</span>{l}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Contact Information</h5>
          {[["📍","College Hostel Campus, Uttar Pradesh, India"],["📞","+91 9876543210"],["✉️","hostelmanagement@gmail.com"],["🕐","Available 24×7"]].map(([ic,t],i)=>(
            <div className="footer-contact-item" key={i}><span>{ic}</span><span>{t}</span></div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Hostel Management System | All Rights Reserved</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a><a href="#">Terms & Conditions</a><a href="#">Help</a>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
function HomePage({ setPage }) {
  const studentFeats=[["🛏","View Room Details"],["💳","Pay Fees"],["⚠️","Raise Complaints"],["📢","View Notices"]];
  const wardenFeats=[["👥","Monitor Students"],["📅","Monitor Attendance"],["🚶","Visitor Entry Management"],["🔧","Handle Complaints"]];
  return (
    <div className="hms">
      <div className="hero">
        <h1>Hostel Management System</h1>
        <p>Simplify hostel administration with student management, fee tracking, complaints handling, attendance monitoring, and digital notice updates — all in one platform.</p>
      </div>
      <div className="portal-cards">
        {[
          {cls:"student",emoji:"🎓",title:"Student",desc:"Access room details, pay hostel fees, raise complaints, and stay updated with hostel notices.",feats:studentFeats,btnLabel:"Student Portal",page:"student-login",btnCls:""},
          {cls:"warden",emoji:"🏠",title:"Warden",desc:"Manage students, attendance, visitor records, complaints, and hostel activities efficiently.",feats:wardenFeats,btnLabel:"Warden Portal",page:"warden-login",btnCls:"btn-teal"}
        ].map(c=>(
          <div className="portal-card" key={c.cls}>
            <div className={`portal-card-header ${c.cls}`}>{c.emoji}</div>
            <div className="portal-card-body">
              <div className="portal-card-title">{c.title}</div>
              <p className="portal-card-text">{c.desc}</p>
            </div>
            <ul className="portal-feat-list">
              {c.feats.map(([ic,l],i)=>(
                <li key={i}><span>{ic}</span>{l}</li>
              ))}
            </ul>
            <div className="portal-card-foot">
              <button className={`btn ${c.btnCls}`} onClick={()=>setPage(c.page)}>{c.btnLabel} →</button>
            </div>
          </div>
        ))}
      </div>
      <Footer setPage={setPage}/>
    </div>
  );
}

/* ─────────────────────────────────────────────
   LOGIN PAGES
───────────────────────────────────────────── */
function LoginPage({ role, setPage }) {
  const [form,setForm]=useState({id:"",pass:""});
  const [err,setErr]=useState("");
  const isStudent=role==="student";
  const demoId=isStudent?"S-1021":"W-001";
  const demoPass=isStudent?"student123":"warden123";

  function handleSubmit(){
    if(!form.id||!form.pass){setErr("Please fill in all fields.");return;}
    if(form.id===demoId&&form.pass===demoPass){
      setPage(isStudent?"student-dashboard":"warden-dashboard");
    } else {
      setErr(`Invalid credentials. Use ID: ${demoId} / Password: ${demoPass}`);
    }
  }

  return (
    <div className="hms" style={{background:"var(--bg)"}}>
      <div className="login-wrap" style={{paddingTop:"80px"}}>
        <div className="login-box">
          <div className="login-top">
            <div className="icon">{isStudent?"🎓":"🏠"}</div>
            <h2>{isStudent?"Student Login":"Warden Login"}</h2>
            <p>Enter your credentials to access the {isStudent?"Student":"Warden"} Portal</p>
          </div>
          <div className="login-form">
            <Alert type="error" msg={err} onClose={()=>setErr("")}/>
            <div className="form-group">
              <label className="form-label">{isStudent?"Student ID":"Warden ID"}</label>
              <input className="form-control" placeholder={`e.g. ${demoId}`} value={form.id} onChange={e=>setForm({...form,id:e.target.value})}/>
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input className="form-control" type="password" placeholder="Enter password" value={form.pass} onChange={e=>setForm({...form,pass:e.target.value})}
                onKeyDown={e=>e.key==="Enter"&&handleSubmit()}/>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.4rem"}}>
              <label style={{display:"flex",alignItems:"center",gap:"7px",fontSize:".85rem",color:"var(--text-2)",cursor:"pointer"}}>
                <input type="checkbox" style={{accentColor:"var(--indigo)"}}/>Remember me
              </label>
              <a href="#" style={{fontSize:".85rem",color:"var(--indigo)",textDecoration:"none"}}>Forgot password?</a>
            </div>
            <button className={`btn ${isStudent?"":"btn-teal"}`} style={{width:"100%",justifyContent:"center"}} onClick={handleSubmit}>
              Login to {isStudent?"Student":"Warden"} Portal
            </button>
            <p style={{textAlign:"center",marginTop:"1.2rem",fontSize:".83rem",color:"var(--muted)"}}>
              Demo — ID: <b style={{color:"var(--indigo)"}}>{demoId}</b> &nbsp;|&nbsp; Pass: <b style={{color:"var(--indigo)"}}>{demoPass}</b>
            </p>
            <button onClick={()=>setPage("home")} style={{display:"block",width:"100%",marginTop:".8rem",background:"none",border:"none",cursor:"pointer",color:"var(--muted)",fontSize:".85rem",fontFamily:"DM Sans,sans-serif"}}>
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STUDENT PORTAL
───────────────────────────────────────────── */
const STUDENT_NAV=[
  {key:"student-dashboard",icon:"📊",label:"Dashboard"},
  {key:"student-room",icon:"🛏",label:"Room Details"},
  {key:"student-fees",icon:"💳",label:"Pay Fees"},
  {key:"student-complaints",icon:"⚠️",label:"Raise Complaint"},
  {key:"student-notices",icon:"📢",label:"Notices"},
];

function StudentSidebar({ page, setPage }) {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-label">Student Portal</div>
        {STUDENT_NAV.map(n=>(
          <button key={n.key} className={`sidebar-item${page===n.key?" active":""}`} onClick={()=>setPage(n.key)}>
            <span className="icon">{n.icon}</span>{n.label}
          </button>
        ))}
      </div>
      <div style={{borderTop:"1px solid var(--border)",margin:"1rem",paddingTop:"1rem"}}>
        <button className="sidebar-item" onClick={()=>setPage("home")}>
          <span className="icon">🚪</span>Logout
        </button>
      </div>
    </div>
  );
}

function StudentDashboard({ setPage }) {
  const stats=[
    {icon:"🛏",val:"A-204",lbl:"Room Number",bg:"#e0e7ff",ic:"#4f46e5"},
    {icon:"💳",val:"₹8,500",lbl:"Fees Due",bg:"#fef3c7",ic:"#d97706"},
    {icon:"⚠️",val:"1",lbl:"Active Complaints",bg:"#ffe4e6",ic:"#e11d48"},
    {icon:"📢",val:"4",lbl:"New Notices",bg:"#dcfce7",ic:"#16a34a"},
  ];
  return (
    <div>
      <div className="page-header">
        <h2>Welcome back, Aarav 👋</h2>
        <p>Here's a quick overview of your hostel status.</p>
      </div>
      <div className="stats-grid">
        {stats.map((s,i)=>(
          <div className="stat-card" key={i} style={{animationDelay:`${i*.08}s`}}>
            <div className="stat-icon" style={{background:s.bg,color:s.ic}}>{s.icon}</div>
            <div className="stat-val">{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem"}}>
        <div className="content-card">
          <div className="content-card-header"><h3>Recent Notices</h3><button className="btn btn-sm btn-ghost" onClick={()=>setPage("student-notices")}>View All</button></div>
          <div className="content-card-body">
            {NOTICES.slice(0,2).map(n=>(
              <div className="notice-card" key={n.id}>
                <h4>{n.title}</h4>
                <p>{n.body.slice(0,80)}…</p>
                <div className="meta">{n.date} · <Badge label={n.tag}/></div>
              </div>
            ))}
          </div>
        </div>
        <div className="content-card">
          <div className="content-card-header"><h3>My Complaints</h3><button className="btn btn-sm btn-ghost" onClick={()=>setPage("student-complaints")}>Raise New</button></div>
          <div className="content-card-body">
            {COMPLAINTS.filter(c=>c.studentId==="S-1021").map(c=>(
              <div style={{padding:".85rem",background:"var(--indigo-pale)",borderRadius:10,marginBottom:".75rem"}} key={c.id}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:".4rem"}}><b style={{fontSize:".9rem"}}>{c.type}</b><Badge label={c.status}/></div>
                <p style={{fontSize:".85rem",color:"var(--text-2)"}}>{c.description}</p>
                <p style={{fontSize:".75rem",color:"var(--muted)",marginTop:".3rem"}}>{c.date}</p>
              </div>
            ))}
            <button className="btn btn-sm" onClick={()=>setPage("student-complaints")}>+ Raise New Complaint</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentRoom() {
  const room={number:"A-204",block:"A Block",floor:"2nd Floor",type:"Double Sharing",roommate:"Vikram Nair (S-1035)",
    warden:"Mr. R.K. Sharma",wardenPhone:"9876510000",allotmentDate:"1 Jul 2025",checkoutDate:"30 Jun 2026"};
  return (
    <div>
      <div className="page-header"><h2>Room Details</h2><p>Your current room allocation and amenities.</p></div>
      <div className="content-card">
        <div className="content-card-header">
          <h3>Room A-204</h3><Badge label="Present" />
        </div>
        <div className="content-card-body">
          <div className="room-info-grid">
            {Object.entries(room).map(([k,v])=>(
              <div className="room-info-item" key={k}>
                <div className="lbl">{k.replace(/([A-Z])/g," $1").replace(/^./,s=>s.toUpperCase())}</div>
                <div className="val">{v}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:"1.5rem"}}>
            <h4 style={{fontWeight:700,marginBottom:"1rem",color:"var(--text)"}}>Amenities</h4>
            <div style={{display:"flex",gap:".75rem",flexWrap:"wrap"}}>
              {["🛏 Bed & Mattress","🪑 Study Table & Chair","🚿 Attached Washroom","📶 Wi-Fi","❄️ Ceiling Fan","💡 LED Light","🔒 Locker"].map(a=>(
                <span key={a} style={{background:"var(--indigo-pale)",color:"var(--indigo)",padding:"6px 14px",borderRadius:20,fontSize:".83rem",fontWeight:600}}>{a}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentFees() {
  const [step,setStep]=useState(1);
  const [method,setMethod]=useState("card");
  const [done,setDone]=useState(false);
  const [form,setForm]=useState({card:"",name:"",expiry:"",cvv:"",upi:""});

  const dues=[
    {label:"Hostel Fee (May–Jun 2026)",amount:8000},
    {label:"Electricity Charges",amount:350},
    {label:"Mess Advance",amount:150},
  ];
  const total=dues.reduce((a,d)=>a+d.amount,0);

  if(done) return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"50vh",textAlign:"center"}}>
      <div style={{fontSize:"4rem",marginBottom:"1rem"}}>✅</div>
      <h2 style={{fontFamily:"Playfair Display,serif",fontSize:"1.8rem",fontWeight:800,color:"var(--text)",marginBottom:".5rem"}}>Payment Successful!</h2>
      <p style={{color:"var(--text-2)",marginBottom:"1.5rem"}}>₹{total.toLocaleString()} paid successfully. Transaction ID: TXN{Math.floor(Math.random()*9000000+1000000)}</p>
      <button className="btn" onClick={()=>setDone(false)}>Back to Fees</button>
    </div>
  );

  return (
    <div>
      <div className="page-header"><h2>Pay Fees</h2><p>View your dues and make secure online payments.</p></div>
      <div style={{display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:"1.5rem"}}>
        <div className="content-card">
          <div className="content-card-header"><h3>Fee Breakdown</h3><Badge label="Pending"/></div>
          <div className="content-card-body">
            <table className="hms-table">
              <thead><tr><th>Description</th><th>Amount</th></tr></thead>
              <tbody>
                {dues.map((d,i)=><tr key={i}><td>{d.label}</td><td>₹{d.amount.toLocaleString()}</td></tr>)}
                <tr><td style={{fontWeight:700,color:"var(--text)"}}>Total Due</td><td style={{fontWeight:700,color:"var(--rose)"}}>₹{total.toLocaleString()}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="content-card">
          <div className="content-card-header"><h3>Payment Method</h3></div>
          <div className="content-card-body">
            <div style={{display:"flex",gap:".75rem",marginBottom:"1.25rem"}}>
              {[["card","💳 Card"],["upi","📱 UPI"],["netbanking","🏦 Net Banking"]].map(([v,l])=>(
                <button key={v} onClick={()=>setMethod(v)} style={{flex:1,padding:"9px",borderRadius:10,border:`2px solid ${method===v?"var(--indigo)":"var(--border)"}`,background:method===v?"var(--indigo-pale)":"white",color:method===v?"var(--indigo)":"var(--text-2)",fontWeight:600,cursor:"pointer",fontSize:".82rem",fontFamily:"DM Sans,sans-serif"}}>{l}</button>
              ))}
            </div>
            {method==="card"&&(
              <div className="form-grid single">
                <div className="form-group"><label className="form-label">Card Number</label><input className="form-control" placeholder="1234 5678 9012 3456" value={form.card} onChange={e=>setForm({...form,card:e.target.value})}/></div>
                <div className="form-group"><label className="form-label">Cardholder Name</label><input className="form-control" placeholder="Name on card" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></div>
                <div className="form-grid" style={{gridTemplateColumns:"1fr 1fr"}}>
                  <div className="form-group"><label className="form-label">Expiry</label><input className="form-control" placeholder="MM/YY" value={form.expiry} onChange={e=>setForm({...form,expiry:e.target.value})}/></div>
                  <div className="form-group"><label className="form-label">CVV</label><input className="form-control" placeholder="•••" type="password" maxLength={3} value={form.cvv} onChange={e=>setForm({...form,cvv:e.target.value})}/></div>
                </div>
              </div>
            )}
            {method==="upi"&&(
              <div className="form-group"><label className="form-label">UPI ID</label><input className="form-control" placeholder="yourname@upi" value={form.upi} onChange={e=>setForm({...form,upi:e.target.value})}/></div>
            )}
            {method==="netbanking"&&(
              <div className="form-group"><label className="form-label">Select Bank</label>
                <select className="form-control"><option>State Bank of India</option><option>HDFC Bank</option><option>ICICI Bank</option><option>Axis Bank</option><option>Punjab National Bank</option></select>
              </div>
            )}
            <button className="btn btn-success" style={{width:"100%",justifyContent:"center",marginTop:"1.2rem"}} onClick={()=>setDone(true)}>
              Pay ₹{total.toLocaleString()} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentComplaints() {
  const [form,setForm]=useState({type:"",subject:"",description:"",urgency:"Normal"});
  const [submitted,setSubmitted]=useState(false);
  const [myComplaints,setMyComplaints]=useState(COMPLAINTS.filter(c=>c.studentId==="S-1021"));

  function handleSubmit(){
    if(!form.type||!form.subject||!form.description){return;}
    const newC={id:Date.now(),studentId:"S-1021",name:"Aarav Sharma",room:"A-204",type:form.type,description:form.description,date:"12 May 2026",status:"Pending"};
    setMyComplaints([newC,...myComplaints]);
    setForm({type:"",subject:"",description:"",urgency:"Normal"});
    setSubmitted(true);
    setTimeout(()=>setSubmitted(false),3000);
  }

  return (
    <div>
      <div className="page-header"><h2>Raise Complaint</h2><p>Submit maintenance or other hostel complaints.</p></div>
      {submitted&&<Alert type="success" msg="Complaint submitted successfully! Ref. #"+Date.now()%100000/>}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem"}}>
        <div className="content-card">
          <div className="content-card-header"><h3>New Complaint</h3></div>
          <div className="content-card-body">
            <div className="form-grid single">
              <div className="form-group"><label className="form-label">Complaint Type *</label>
                <select className="form-control" value={form.type} onChange={e=>setForm({...form,type:e.target.value})}>
                  <option value="">— Select Type —</option>
                  {["Electrical","Plumbing","Furniture","Cleanliness","Security","Internet","Mess","Other"].map(t=><option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group"><label className="form-label">Subject *</label><input className="form-control" placeholder="Brief subject" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}/></div>
              <div className="form-group"><label className="form-label">Urgency</label>
                <select className="form-control" value={form.urgency} onChange={e=>setForm({...form,urgency:e.target.value})}>
                  <option>Normal</option><option>High</option><option>Critical</option>
                </select>
              </div>
              <div className="form-group"><label className="form-label">Description *</label><textarea className="form-control" placeholder="Describe the issue in detail..." value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/></div>
              <button className="btn" style={{justifyContent:"center"}} onClick={handleSubmit}>Submit Complaint</button>
            </div>
          </div>
        </div>
        <div className="content-card">
          <div className="content-card-header"><h3>My Complaints</h3></div>
          <div className="content-card-body">
            {myComplaints.length===0?<p style={{color:"var(--muted)"}}>No complaints yet.</p>:myComplaints.map(c=>(
              <div style={{borderLeft:"3px solid var(--indigo)",paddingLeft:"1rem",marginBottom:"1rem"}} key={c.id}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:".3rem"}}>
                  <b style={{fontSize:".9rem"}}>{c.type}</b><Badge label={c.status}/>
                </div>
                <p style={{fontSize:".85rem",color:"var(--text-2)"}}>{c.description}</p>
                <p style={{fontSize:".75rem",color:"var(--muted)",marginTop:".3rem"}}>{c.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentNotices() {
  const [filter,setFilter]=useState("All");
  const tags=["All","Finance","Maintenance","Event","Mess"];
  const filtered=filter==="All"?NOTICES:NOTICES.filter(n=>n.tag===filter);
  return (
    <div>
      <div className="page-header"><h2>Hostel Notices</h2><p>Stay updated with the latest announcements.</p></div>
      <div style={{display:"flex",gap:".6rem",marginBottom:"1.5rem",flexWrap:"wrap"}}>
        {tags.map(t=>(
          <button key={t} onClick={()=>setFilter(t)} style={{padding:"7px 16px",borderRadius:20,border:`1.5px solid ${filter===t?"var(--indigo)":"var(--border)"}`,background:filter===t?"var(--indigo)":"white",color:filter===t?"white":"var(--text-2)",fontWeight:600,cursor:"pointer",fontSize:".83rem",fontFamily:"DM Sans,sans-serif"}}>{t}</button>
        ))}
      </div>
      <div className="content-card">
        <div className="content-card-body">
          {filtered.map(n=>(
            <div className="notice-card" key={n.id}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:".4rem"}}>
                <h4>{n.title}</h4><Badge label={n.tag}/>
              </div>
              <p>{n.body}</p>
              <div className="meta">📅 {n.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StudentPortal({ page, setPage }) {
  const views={
    "student-dashboard":<StudentDashboard setPage={setPage}/>,
    "student-room":<StudentRoom/>,
    "student-fees":<StudentFees/>,
    "student-complaints":<StudentComplaints/>,
    "student-notices":<StudentNotices/>,
  };
  return (
    <div className="hms" style={{background:"#f8f9ff"}}>
      <StudentSidebar page={page} setPage={setPage}/>
      <div className="portal-content">
        {views[page]||<StudentDashboard setPage={setPage}/>}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   WARDEN PORTAL
───────────────────────────────────────────── */
const WARDEN_NAV=[
  {key:"warden-dashboard",icon:"📊",label:"Dashboard"},
  {key:"warden-students",icon:"👥",label:"Monitor Students"},
  {key:"warden-attendance",icon:"📅",label:"Attendance"},
  {key:"warden-visitors",icon:"🚶",label:"Visitor Entry"},
  {key:"warden-complaints",icon:"🔧",label:"Handle Complaints"},
  {key:"warden-notices",icon:"📢",label:"Post Notices"},
];

function WardenSidebar({ page, setPage }) {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-label">Warden Portal</div>
        {WARDEN_NAV.map(n=>(
          <button key={n.key} className={`sidebar-item${page===n.key?" active":""}`} onClick={()=>setPage(n.key)}>
            <span className="icon">{n.icon}</span>{n.label}
          </button>
        ))}
      </div>
      <div style={{borderTop:"1px solid var(--border)",margin:"1rem",paddingTop:"1rem"}}>
        <button className="sidebar-item" onClick={()=>setPage("home")}>
          <span className="icon">🚪</span>Logout
        </button>
      </div>
    </div>
  );
}

function WardenDashboard({ setPage }) {
  const stats=[
    {icon:"👥",val:"156",lbl:"Total Students",bg:"#e0e7ff",ic:"#4f46e5"},
    {icon:"📅",val:"143",lbl:"Present Today",bg:"#dcfce7",ic:"#16a34a"},
    {icon:"⚠️",val:"4",lbl:"Pending Complaints",bg:"#ffe4e6",ic:"#e11d48"},
    {icon:"🚶",val:"2",lbl:"Visitors Inside",bg:"#fef3c7",ic:"#d97706"},
  ];
  return (
    <div>
      <div className="page-header"><h2>Warden Dashboard</h2><p>Overview of hostel operations today.</p></div>
      <div className="stats-grid">
        {stats.map((s,i)=>(
          <div className="stat-card" key={i} style={{animationDelay:`${i*.08}s`}}>
            <div className="stat-icon" style={{background:s.bg,color:s.ic}}>{s.icon}</div>
            <div className="stat-val">{s.val}</div>
            <div className="stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:"1.5rem"}}>
        <div className="content-card">
          <div className="content-card-header"><h3>Recent Complaints</h3><button className="btn btn-sm btn-ghost" onClick={()=>setPage("warden-complaints")}>Manage All</button></div>
          <div className="content-card-body" style={{padding:0}}>
            <table className="hms-table">
              <thead><tr><th>Student</th><th>Type</th><th>Status</th></tr></thead>
              <tbody>
                {COMPLAINTS.map(c=>(
                  <tr key={c.id}>
                    <td><b>{c.name}</b><br/><span style={{fontSize:".78rem",color:"var(--muted)"}}>{c.room}</span></td>
                    <td>{c.type}</td>
                    <td><Badge label={c.status}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="content-card">
          <div className="content-card-header"><h3>Active Visitors</h3><button className="btn btn-sm btn-ghost" onClick={()=>setPage("warden-visitors")}>Manage</button></div>
          <div className="content-card-body">
            {VISITORS.filter(v=>v.status==="Inside").map(v=>(
              <div key={v.id} style={{background:"var(--teal-light)",borderRadius:10,padding:".9rem 1rem",marginBottom:".75rem"}}>
                <b style={{fontSize:".9rem"}}>{v.visitorName}</b>
                <p style={{fontSize:".82rem",color:"var(--text-2)",margin:".2rem 0"}}>Visiting {v.studentName} · {v.room}</p>
                <p style={{fontSize:".78rem",color:"var(--muted)"}}>In since {v.inTime}</p>
              </div>
            ))}
            <button className="btn btn-teal btn-sm" onClick={()=>setPage("warden-visitors")}>+ Log New Visitor</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WardenStudents() {
  const [search,setSearch]=useState("");
  const [filter,setFilter]=useState("All");
  const filtered=STUDENTS.filter(s=>{
    const matchSearch=s.name.toLowerCase().includes(search.toLowerCase())||s.id.toLowerCase().includes(search.toLowerCase())||s.room.toLowerCase().includes(search.toLowerCase());
    const matchFilter=filter==="All"||s.feeStatus===filter;
    return matchSearch&&matchFilter;
  });
  return (
    <div>
      <div className="page-header"><h2>Monitor Students</h2><p>View and manage all hostel residents.</p></div>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",alignItems:"center",flexWrap:"wrap"}}>
        <input className="form-control" style={{maxWidth:280,marginBottom:0}} placeholder="🔍  Search by name, ID, or room..." value={search} onChange={e=>setSearch(e.target.value)}/>
        <div style={{display:"flex",gap:".5rem"}}>
          {["All","Paid","Pending","Overdue"].map(f=>(
            <button key={f} onClick={()=>setFilter(f)} style={{padding:"7px 14px",borderRadius:9,border:`1.5px solid ${filter===f?"var(--indigo)":"var(--border)"}`,background:filter===f?"var(--indigo)":"white",color:filter===f?"white":"var(--text-2)",fontWeight:600,cursor:"pointer",fontSize:".82rem",fontFamily:"DM Sans,sans-serif"}}>{f}</button>
          ))}
        </div>
      </div>
      <div className="content-card">
        <div className="content-card-body" style={{padding:0}}>
          <table className="hms-table">
            <thead><tr><th>ID</th><th>Name</th><th>Room</th><th>Course</th><th>Year</th><th>Fee Status</th><th>Phone</th></tr></thead>
            <tbody>
              {filtered.map(s=>(
                <tr key={s.id}>
                  <td style={{fontFamily:"monospace",color:"var(--indigo)"}}>{s.id}</td>
                  <td><b>{s.name}</b></td>
                  <td>{s.room}</td>
                  <td>{s.course}</td>
                  <td>{s.year}</td>
                  <td><Badge label={s.feeStatus}/></td>
                  <td>{s.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length===0&&<p style={{padding:"1.5rem",color:"var(--muted)",textAlign:"center"}}>No students found.</p>}
        </div>
      </div>
    </div>
  );
}

function WardenAttendance() {
  const [records,setRecords]=useState(ATTENDANCE);
  const [saved,setSaved]=useState(false);

  function toggle(id,val){
    setRecords(r=>r.map(s=>s.id===id?{...s,today:val}:s));
  }
  function saveAll(){
    setSaved(true);
    setTimeout(()=>setSaved(false),3000);
  }

  const present=records.filter(r=>r.today==="Present").length;
  const absent=records.filter(r=>r.today==="Absent").length;
  const leave=records.filter(r=>r.today==="Leave").length;

  return (
    <div>
      <div className="page-header" style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div><h2>Attendance — 12 May 2026</h2><p>Mark and monitor daily hostel attendance.</p></div>
        <button className="btn btn-success" onClick={saveAll}>💾 Save Attendance</button>
      </div>
      {saved&&<Alert type="success" msg="Attendance saved successfully!"/>}
      <div className="stats-grid" style={{gridTemplateColumns:"repeat(3,1fr)",marginBottom:"1.5rem"}}>
        {[{l:"Present",v:present,bg:"var(--green-light)",c:"#16a34a"},{l:"Absent",v:absent,bg:"var(--rose-light)",c:"#e11d48"},{l:"On Leave",v:leave,bg:"var(--amber-light)",c:"#d97706"}].map(s=>(
          <div className="stat-card" key={s.l}>
            <div className="stat-val" style={{color:s.c}}>{s.v}</div>
            <div className="stat-lbl">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="content-card">
        <div className="content-card-body" style={{padding:0}}>
          <table className="hms-table">
            <thead><tr><th>ID</th><th>Name</th><th>Room</th><th>Monthly %</th><th>Today's Status</th></tr></thead>
            <tbody>
              {records.map(s=>(
                <tr key={s.id}>
                  <td style={{fontFamily:"monospace",color:"var(--indigo)"}}>{s.id}</td>
                  <td><b>{s.name}</b></td>
                  <td>{s.room}</td>
                  <td><Badge label={s.today}/></td>
                  <td>
                    <div style={{display:"flex",gap:".5rem"}}>
                      {["Present","Absent","Leave"].map(v=>(
                        <button key={v} onClick={()=>toggle(s.id,v)} style={{padding:"5px 12px",borderRadius:8,border:`1.5px solid ${s.today===v?"var(--indigo)":"var(--border)"}`,background:s.today===v?"var(--indigo)":"white",color:s.today===v?"white":"var(--text-2)",fontWeight:600,cursor:"pointer",fontSize:".78rem",fontFamily:"DM Sans,sans-serif"}}>{v}</button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function WardenVisitors() {
  const [visitors,setVisitors]=useState(VISITORS);
  const [form,setForm]=useState({visitorName:"",studentName:"",room:"",relation:"",purpose:""});
  const [success,setSuccess]=useState("");

  function logEntry(){
    if(!form.visitorName||!form.studentName||!form.room){return;}
    const now=new Date();
    const timeStr=now.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"});
    const newV={id:`V-${String(visitors.length+1).padStart(3,"0")}`,visitorName:form.visitorName,studentName:form.studentName,room:form.room,relation:form.relation,inTime:timeStr,outTime:"—",date:"12 May 2026",status:"Inside"};
    setVisitors([newV,...visitors]);
    setForm({visitorName:"",studentName:"",room:"",relation:"",purpose:""});
    setSuccess(`Visitor ${form.visitorName} logged in successfully.`);
    setTimeout(()=>setSuccess(""),3000);
  }

  function checkout(id){
    const now=new Date();
    const timeStr=now.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"});
    setVisitors(v=>v.map(vis=>vis.id===id?{...vis,outTime:timeStr,status:"Checked Out"}:vis));
  }

  return (
    <div>
      <div className="page-header"><h2>Visitor Entry Management</h2><p>Log and monitor hostel visitor records.</p></div>
      {success&&<Alert type="success" msg={success}/>}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1.8fr",gap:"1.5rem"}}>
        <div className="content-card">
          <div className="content-card-header"><h3>Log New Visitor</h3></div>
          <div className="content-card-body">
            <div className="form-grid single">
              {[["visitorName","Visitor Name","e.g. Suresh Sharma"],["studentName","Student Name","e.g. Aarav Sharma"],["room","Room Number","e.g. A-204"],["relation","Relation","e.g. Father"]].map(([k,l,p])=>(
                <div className="form-group" key={k}><label className="form-label">{l}</label><input className="form-control" placeholder={p} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})}/></div>
              ))}
              <div className="form-group"><label className="form-label">Purpose of Visit</label><textarea className="form-control" placeholder="Optional..." value={form.purpose} onChange={e=>setForm({...form,purpose:e.target.value})} style={{minHeight:70}}/></div>
              <button className="btn btn-teal" style={{justifyContent:"center"}} onClick={logEntry}>✅ Log Entry</button>
            </div>
          </div>
        </div>
        <div className="content-card">
          <div className="content-card-header"><h3>Visitor Log</h3><span style={{fontSize:".82rem",color:"var(--muted)"}}>{visitors.filter(v=>v.status==="Inside").length} currently inside</span></div>
          <div className="content-card-body" style={{padding:0}}>
            <table className="hms-table">
              <thead><tr><th>Visitor</th><th>Student / Room</th><th>In</th><th>Out</th><th>Status</th><th></th></tr></thead>
              <tbody>
                {visitors.map(v=>(
                  <tr key={v.id}>
                    <td><b>{v.visitorName}</b><br/><span style={{fontSize:".75rem",color:"var(--muted)"}}>{v.relation}</span></td>
                    <td>{v.studentName}<br/><span style={{fontSize:".75rem",color:"var(--muted)"}}>{v.room}</span></td>
                    <td>{v.inTime}</td>
                    <td>{v.outTime}</td>
                    <td><Badge label={v.status}/></td>
                    <td>{v.status==="Inside"&&<button className="btn btn-sm btn-danger" onClick={()=>checkout(v.id)}>Check Out</button>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function WardenComplaints() {
  const [complaints,setComplaints]=useState(COMPLAINTS);
  const [filter,setFilter]=useState("All");
  const filtered=filter==="All"?complaints:complaints.filter(c=>c.status===filter);

  function updateStatus(id,status){
    setComplaints(c=>c.map(x=>x.id===id?{...x,status}:x));
  }

  return (
    <div>
      <div className="page-header"><h2>Handle Complaints</h2><p>Review and resolve student complaints.</p></div>
      <div style={{display:"flex",gap:".6rem",marginBottom:"1.5rem",flexWrap:"wrap"}}>
        {["All","Pending","In Progress","Resolved"].map(f=>(
          <button key={f} onClick={()=>setFilter(f)} style={{padding:"7px 16px",borderRadius:20,border:`1.5px solid ${filter===f?"var(--indigo)":"var(--border)"}`,background:filter===f?"var(--indigo)":"white",color:filter===f?"white":"var(--text-2)",fontWeight:600,cursor:"pointer",fontSize:".83rem",fontFamily:"DM Sans,sans-serif"}}>{f}</button>
        ))}
      </div>
      <div className="content-card">
        <div className="content-card-body" style={{padding:0}}>
          <table className="hms-table">
            <thead><tr><th>Ref</th><th>Student</th><th>Room</th><th>Type</th><th>Description</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              {filtered.map(c=>(
                <tr key={c.id}>
                  <td style={{fontFamily:"monospace",color:"var(--indigo)"}}>#{c.id}</td>
                  <td><b>{c.name}</b><br/><span style={{fontSize:".75rem",color:"var(--muted)"}}>{c.studentId}</span></td>
                  <td>{c.room}</td>
                  <td>{c.type}</td>
                  <td style={{maxWidth:180}}>{c.description}</td>
                  <td>{c.date}</td>
                  <td><Badge label={c.status}/></td>
                  <td>
                    <select className="form-control" style={{padding:"5px 10px",fontSize:".8rem",borderRadius:8,minWidth:120}} value={c.status} onChange={e=>updateStatus(c.id,e.target.value)}>
                      <option>Pending</option><option>In Progress</option><option>Resolved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length===0&&<p style={{padding:"1.5rem",color:"var(--muted)",textAlign:"center"}}>No complaints in this category.</p>}
        </div>
      </div>
    </div>
  );
}

function WardenNotices() {
  const [notices,setNotices]=useState(NOTICES);
  const [form,setForm]=useState({title:"",tag:"Finance",body:""});
  const [success,setSuccess]=useState(false);

  function postNotice(){
    if(!form.title||!form.body)return;
    const now=new Date();
    const dateStr=now.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
    setNotices([{id:Date.now(),title:form.title,tag:form.tag,body:form.body,date:dateStr},...notices]);
    setForm({title:"",tag:"Finance",body:""});
    setSuccess(true);
    setTimeout(()=>setSuccess(false),3000);
  }

  return (
    <div>
      <div className="page-header"><h2>Post Notices</h2><p>Publish announcements visible to all students.</p></div>
      {success&&<Alert type="success" msg="Notice posted successfully!"/>}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1.4fr",gap:"1.5rem"}}>
        <div className="content-card">
          <div className="content-card-header"><h3>New Notice</h3></div>
          <div className="content-card-body">
            <div className="form-grid single">
              <div className="form-group"><label className="form-label">Title *</label><input className="form-control" placeholder="Notice title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/></div>
              <div className="form-group"><label className="form-label">Category</label>
                <select className="form-control" value={form.tag} onChange={e=>setForm({...form,tag:e.target.value})}>
                  {["Finance","Maintenance","Event","Mess","General","Security"].map(t=><option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group"><label className="form-label">Content *</label><textarea className="form-control" placeholder="Write the notice content..." value={form.body} onChange={e=>setForm({...form,body:e.target.value})} style={{minHeight:120}}/></div>
              <button className="btn" style={{justifyContent:"center"}} onClick={postNotice}>📢 Post Notice</button>
            </div>
          </div>
        </div>
        <div className="content-card">
          <div className="content-card-header"><h3>Posted Notices ({notices.length})</h3></div>
          <div className="content-card-body" style={{maxHeight:460,overflowY:"auto"}}>
            {notices.map(n=>(
              <div className="notice-card" key={n.id}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:".4rem"}}>
                  <h4>{n.title}</h4><Badge label={n.tag}/>
                </div>
                <p>{n.body}</p>
                <div className="meta">📅 {n.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WardenPortal({ page, setPage }) {
  const views={
    "warden-dashboard":<WardenDashboard setPage={setPage}/>,
    "warden-students":<WardenStudents/>,
    "warden-attendance":<WardenAttendance/>,
    "warden-visitors":<WardenVisitors/>,
    "warden-complaints":<WardenComplaints/>,
    "warden-notices":<WardenNotices/>,
  };
  return (
    <div className="hms" style={{background:"#f0faf9"}}>
      <WardenSidebar page={page} setPage={setPage}/>
      <div className="portal-content">
        {views[page]||<WardenDashboard setPage={setPage}/>}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ROOT APP
───────────────────────────────────────────── */
export default function App() {
  const [page, setPage] = useState("home");

  const isStudentPortal = page.startsWith("student-") && page !== "student-login";
  const isWardenPortal  = page.startsWith("warden-")  && page !== "warden-login";
  const currentPortal   = isStudentPortal ? "student" : isWardenPortal ? "warden" : null;

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>

      {!isStudentPortal && !isWardenPortal && (
        <Navbar page={page} setPage={setPage} currentPortal={currentPortal}/>
      )}
      {(isStudentPortal || isWardenPortal) && (
        <Navbar page={page} setPage={setPage} currentPortal={currentPortal}/>
      )}

      {page === "home"           && <HomePage setPage={setPage}/>}
      {page === "student-login"  && <LoginPage role="student" setPage={setPage}/>}
      {page === "warden-login"   && <LoginPage role="warden"  setPage={setPage}/>}
      {isStudentPortal           && <StudentPortal page={page} setPage={setPage}/>}
      {isWardenPortal            && <WardenPortal  page={page} setPage={setPage}/>}
    </>
  );
}
