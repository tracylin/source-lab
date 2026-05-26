import { useState, useEffect } from "react";

const THINKERS = [
  {
    id: "wang",
    name: "XIAOWEI WANG",
    nameCn: "王小伟",
    tagline: "Tech entanglement, rural China, diaspora",
    tag: "WRITING",
    pieces: [
      {
        id: "wang-slate",
        title: "MADE IN CHINA",
        subtitle: "Blockchain Chicken Farm excerpt",
        format: "ESSAY",
        source: "Slate",
        time: "12 MIN READ",
        curatorNote: "Wang opens with a toy bird marked 'Made in China' found on a windowsill in California. Watch how the personal and systemic keep collapsing into each other — a family import-export business becomes a lens on global manufacturing, shame, innovation, and who gets to define value. That collapse is the move you might learn from.",
        type: "iframe",
        iframeUrl: "https://slate.com/technology/2020/10/innovation-immitation-made-in-china-xiaowei-wang.html",
        fallbackUrl: "https://slate.com/technology/2020/10/innovation-immitation-made-in-china-xiaowei-wang.html",
      },
      {
        id: "wang-ted",
        title: "WHY ENTREPRENEURSHIP FLOURISHES IN THE COUNTRYSIDE",
        subtitle: "TED Talk",
        format: "VIDEO",
        time: "14 MIN",
        curatorNote: "Wang argues that the most careful, thoughtful innovation happens in rural communities — not Silicon Valley. Listen for how they dissolve the urban/rural binary. Think about how your own practice sits between LA and the Chinese countryside where bamboo originates.",
        type: "youtube",
        youtubeId: "jsFAFsx9otw",
      },
      {
        id: "wang-podcast",
        title: "WHAT RURAL CHINA TEACHES US ABOUT THE FUTURE OF TECH",
        subtitle: "Tech Won't Save Us · Paris Marx",
        format: "PODCAST",
        time: "45 MIN",
        curatorNote: "A longer conversation where Wang gets into supply chains specifically — how technology connects rural producers to global markets, but doesn’t distribute power equally. The concept of ‘technocracy’ they introduce is sharp. Think about who holds technical knowledge in your own material chains.",
        type: "link",
        url: "https://podcasts.apple.com/podcast/what-rural-china-teaches-us-about-future-tech-w-xiaowei/id1507621076?i=1000495651660",
      },
    ],
  },
  {
    id: "steyerl",
    name: "HITO STEYERL",
    tagline: "Image circulation, digital labor, objects in systems",
    tag: "ART + TEXT",
    pieces: [
      {
        id: "steyerl-poor",
        title: "IN DEFENSE OF THE POOR IMAGE",
        subtitle: "e-flux journal #10, 2009",
        format: "ESSAY",
        time: "20 MIN READ",
        curatorNote: "Steyerl argues images are not representations but things that circulate — they get compressed, degraded, weaponized as they move through systems. The ‘poor image’ is a logistics story. Think about your lanterns: objects that resist this kind of circulation. What does it mean to make something that can’t become a poor image?",
        type: "iframe",
        iframeUrl: "https://www.e-flux.com/journal/10/61362/in-defense-of-the-poor-image/",
        fallbackUrl: "https://www.e-flux.com/journal/10/61362/in-defense-of-the-poor-image/",
      },
      {
        id: "steyerl-freeport",
        title: "DUTY FREE ART (ON FREEPORTS)",
        subtitle: "Book chapter — Duty Free Art, 2017",
        format: "BOOK",
        time: "25 MIN READ",
        curatorNote: "Freeports are literal supply chain art spaces — tax-free storage facilities where art exists in permanent transit, never arriving, never being seen. Steyerl asks: what kind of art is made for a world of permanent circulation? The JD museum is almost the inverse — a logistics company building a place for art to land.",
        type: "link",
        url: "https://www.versobooks.com/products/58-duty-free-art",
        altLinks: [
          { label: "LA Public Library", url: "https://www.lapl.org" },
          { label: "Buy", url: "https://bookshop.org/p/books/duty-free-art-art-in-the-age-of-planetary-civil-war-hito-steyerl/6436518" },
        ],
      },
    ],
  },
  {
    id: "tsing",
    name: "ANNA TSING",
    tagline: "Following materials through patchy supply chains",
    tag: "THEORY",
    pieces: [
      {
        id: "tsing-mushroom",
        title: "THE MUSHROOM AT THE END OF THE WORLD",
        subtitle: "Chapters 1–3: Arts of Noticing",
        format: "BOOK",
        time: "35 MIN READ",
        curatorNote: "Tsing’s method: follow a single organism (matsutake mushroom) through every hand it passes and discover that each person in the chain lives in a different economy. That’s ‘patchiness’ — supply chains aren’t smooth, they’re stitched together from incommensurable worlds. Could you do this with bamboo?",
        type: "link",
        url: "https://press.princeton.edu/books/paperback/9780691178325/the-mushroom-at-the-end-of-the-world",
        altLinks: [
          { label: "LA Public Library", url: "https://www.lapl.org" },
          { label: "Buy", url: "https://bookshop.org/p/books/the-mushroom-at-the-end-of-the-world-on-the-possibility-of-life-in-capitalist-ruins-anna-lowenhaupt-tsing/6692810" },
        ],
      },
      {
        id: "tsing-talk",
        title: "FERAL ATLAS: BOOK TALK",
        subtitle: "Lecture — 2022",
        format: "VIDEO",
        time: "50 MIN",
        curatorNote: "Tsing extends her supply chain thinking to ecological damage — how human infrastructure creates ‘feral’ effects that escape control. Listen for the word ‘entanglement’ — she means it literally. Every infrastructure produces unintended ecologies.",
        type: "youtube",
        youtubeId: "UyI5dbx2G2o",
      },
    ],
  },
  {
    id: "easterling",
    name: "KELLER EASTERLING",
    tagline: "Infrastructure space, zones, spatial software",
    tag: "THEORY",
    pieces: [
      {
        id: "easterling-lecture",
        title: "MEDIUM DESIGN",
        subtitle: "Strelka Institute, 2017",
        format: "VIDEO",
        time: "45 MIN",
        curatorNote: "Easterling’s core move: the most powerful design isn’t objects, it’s protocols — the rules that govern how things combine. Infrastructure has a ‘disposition,’ it actively shapes behavior without being visible. Think about Shenzhen, where the JD museum sits, as one of her ‘zones.’",
        type: "youtube",
        youtubeId: "x7RhIK9OIAE",
      },
      {
        id: "easterling-convo",
        title: "IN CONVERSATION",
        subtitle: "2025 — on Medium Design",
        format: "VIDEO",
        time: "40 MIN",
        curatorNote: "Easterling says ‘solutions are mistakes’ — the interesting design space is in relationships, not fixes. How does this apply to supply chain art? Maybe the point isn’t to critique the system but to work within its entanglements.",
        type: "youtube",
        youtubeId: "G0DNyuWvmjU",
      },
    ],
  },
  {
    id: "nguyen",
    name: "MIMI THI NGUYEN",
    nameCn: "阮",
    tagline: "Gift economies, refugee logistics, diaspora debt",
    tag: "THEORY",
    pieces: [
      {
        id: "nguyen-gift",
        title: "THE GIFT OF FREEDOM: INTRODUCTION",
        subtitle: "Duke University Press, 2012",
        format: "BOOK",
        time: "30 MIN READ",
        curatorNote: "Nguyen argues that humanitarian aid is itself a supply chain — with its own logistics of debt and gratitude. The ‘gift of freedom’ is not free; it creates permanent indebtedness. Think about informal supply chains of care in diaspora communities. Your lantern practice exists within these too.",
        type: "link",
        url: "https://read.dukeupress.edu/books/book/1364/The-Gift-of-FreedomWar-Debt-and-Other-Refugee",
        altLinks: [{ label: "Buy", url: "https://www.dukeupress.edu/the-gift-of-freedom" }],
      },
    ],
  },
  {
    id: "sekula",
    name: "ALLAN SEKULA",
    tagline: "Maritime labor, container shipping, the hidden sea",
    tag: "ART + TEXT",
    pieces: [
      {
        id: "sekula-walker",
        title: "FISH STORY",
        subtitle: "Walker Art Center",
        format: "ESSAY",
        time: "10 MIN READ",
        curatorNote: "Start here for the visual argument. Sekula spent seven years documenting harbors and port cities. His key claim: the ocean isn’t nature, it’s one of the most industrialized spaces on earth. Where he works at the macro scale of container ships, you work at the micro scale of a single bamboo.",
        type: "iframe",
        iframeUrl: "https://www.walkerart.org/whats-on/allan-sekula-fish-story/",
        fallbackUrl: "https://www.walkerart.org/whats-on/allan-sekula-fish-story/",
      },
      {
        id: "sekula-forgotten",
        title: "THE FORGOTTEN SPACE",
        subtitle: "Documentary with Noël Burch, 2010",
        format: "VIDEO",
        time: "5 MIN TRAILER",
        curatorNote: "The documentary version of Fish Story. Even the trailer gives you the visual vocabulary: containers, ports, labor, the sea as industrial space.",
        type: "youtube",
        youtubeId: "SMWGJ2GhBqk",
      },
    ],
  },
];

// ── PERSISTENCE (unchanged keys & shape) ──
const SK = "scrl-v5";
const DK = "scrl-dark";
function getDefault() { return { readPieces: [], notes: [], position: "" }; }
function load() { try { const r = localStorage.getItem(SK); if (r) return JSON.parse(r); } catch(e){} return getDefault(); }
function save(s) { try { localStorage.setItem(SK, JSON.stringify(s)); } catch(e){} }
function fmtDate(d) { return `${String(d.getMonth()+1).padStart(2,"0")}.${String(d.getDate()).padStart(2,"0")}.${d.getFullYear()}`; }

export default function App() {
  const [s, setS] = useState(null);
  const [dark, setDark] = useState(() => localStorage.getItem(DK) === "1");
  const [view, setView] = useState("home");
  const [thinker, setThinker] = useState(null);
  const [piece, setPiece] = useState(null);
  const [note, setNote] = useState("");
  const [pos, setPos] = useState("");
  const [iframeErr, setIframeErr] = useState({});
  const [expandedNote, setExpandedNote] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => { const d = load(); setS(d); setPos(d.position || ""); }, []);
  useEffect(() => { if (s) save(s); }, [s]);
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem(DK, dark ? "1" : "0");
  }, [dark]);

  if (!s) return <div style={{ padding: "3rem", fontSize: 12, letterSpacing: "0.1em" }}>LOADING...</div>;

  // ── THEME ──
  const fg = dark ? "#eee" : "#000";
  const bg = dark ? "#111" : "#fff";
  const fg2 = dark ? "#999" : "#555";
  const border = dark ? "#333" : "#000";
  const borderLight = dark ? "#282828" : "#e0e0e0";
  const inputBg = dark ? "#1a1a1a" : "#fafafa";
  const accent = dark ? "#fff" : "#000";

  // ── DATA HELPERS ──
  const isRead = id => s.readPieces.includes(id);
  const prog = t => { const d = t.pieces.filter(p => isRead(p.id)).length; return { done: d, total: t.pieces.length }; };
  const tNotes = id => s.notes.filter(n => n.tid === id);

  function markRead(id) { if (!isRead(id)) setS(p => ({ ...p, readPieces: [...p.readPieces, id] })); }
  function addNote() {
    if (!note.trim()) return;
    setS(p => ({ ...p, notes: [...p.notes, { id: Date.now().toString(), tid: thinker.id, pid: piece.id, pTitle: piece.title, text: note.trim(), date: new Date().toISOString() }] }));
    setNote("");
  }
  function delNote(id) { setS(p => ({ ...p, notes: p.notes.filter(n => n.id !== id) })); }
  function savePos() { setS(p => ({ ...p, position: pos })); }
  function goRead(t) { setThinker(t); setPiece(t.pieces[0]); setNote(""); setIframeErr({}); setExpandedNote(null); setView("read"); }

  // ── STYLE TOKENS (iPad-optimized: generous touch targets, readable type) ──
  const meta = { fontSize: 12, letterSpacing: "0.08em", color: fg2, lineHeight: 1.4 };
  const heading = { fontFamily: "'Space Grotesk', 'Helvetica Neue', sans-serif", fontWeight: 700, letterSpacing: "-0.02em", textTransform: "uppercase" };
  const bodyText = { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 16, lineHeight: 1.75, color: dark ? "#ccc" : "#333" };

  const btnBase = { fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "'Space Mono', monospace", cursor: "pointer", borderRadius: 0, WebkitTapHighlightColor: "transparent" };
  const solidBtn = { ...btnBase, background: fg, color: bg, border: "none", padding: "14px 24px", minHeight: 44 };
  const outlineBtn = { ...btnBase, background: "transparent", color: fg, border: `1.5px solid ${border}`, padding: "13px 22px", minHeight: 44 };
  const ghostBtn = { ...btnBase, background: "transparent", border: "none", color: fg, padding: "10px 4px" };

  const W = { maxWidth: 900, margin: "0 auto", padding: "0 1.5rem", paddingBottom: 40 };

  // ── FLOATING NAV ──
  const fabSize = 52;
  const fabSmall = 44;
  const fabShadow = dark ? "0 2px 16px rgba(0,0,0,0.6)" : "0 2px 16px rgba(0,0,0,0.15)";
  const fabBg = dark ? "#222" : "#fff";
  const fabBgActive = fg;

  const fabItem = (onClick, title, icon, isActive) => ({
    onClick, title,
    style: {
      width: fabSmall, height: fabSmall, borderRadius: "50%",
      background: isActive ? fabBgActive : fabBg,
      color: isActive ? bg : fg,
      border: `1.5px solid ${border}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "pointer", boxShadow: fabShadow,
      WebkitTapHighlightColor: "transparent",
    },
    children: icon,
  });

  function FloatingNav() {
    return (
      <div style={{
        position: "fixed", bottom: "calc(24px + env(safe-area-inset-bottom))",
        right: 24, zIndex: 200,
        display: "flex", flexDirection: "column-reverse", alignItems: "center", gap: 12,
      }}>
        {/* Menu FAB — always at bottom */}
        <button onClick={() => setNavOpen(o => !o)} style={{
          pointerEvents: "auto",
          width: fabSize, height: fabSize, borderRadius: "50%",
          background: navOpen ? fabBgActive : fabBg,
          color: navOpen ? bg : fg,
          border: `1.5px solid ${border}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", boxShadow: fabShadow,
          transition: "background 0.2s, color 0.2s",
          WebkitTapHighlightColor: "transparent",
        }}>
          {navOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="14" y2="14"/><line x1="14" y1="4" x2="4" y2="14"/>
            </svg>
          ) : (
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="2" x2="17" y2="2"/><line x1="3" y1="7" x2="17" y2="7"/><line x1="3" y1="12" x2="17" y2="12"/>
            </svg>
          )}
        </button>

        {/* Home — always visible above FAB when not on home */}
        {view !== "home" && (
          <button onClick={() => { setView("home"); setNavOpen(false); }} title="Home" style={{
            pointerEvents: "auto",
            width: fabSmall, height: fabSmall, borderRadius: "50%",
            background: fabBg, color: fg, border: `1.5px solid ${border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: fabShadow,
            WebkitTapHighlightColor: "transparent",
          }}>
            <svg width="18" height="13" viewBox="0 0 20 14" fill="none" stroke={fg} strokeWidth="1.5">
              <ellipse cx="10" cy="7" rx="9" ry="6" />
              <circle cx="10" cy="7" r="3" />
              <circle cx="10" cy="7" r="1" fill={fg} />
            </svg>
          </button>
        )}

        {/* Expanded nav items — stack above home */}
        {navOpen && (
          <>
            <button onClick={() => { setView("notebook"); setNavOpen(false); }} title="Notes" style={{
              pointerEvents: "auto",
              width: fabSmall, height: fabSmall, borderRadius: "50%",
              background: view === "notebook" ? fabBgActive : fabBg,
              color: view === "notebook" ? bg : fg,
              border: `1.5px solid ${border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", boxShadow: fabShadow,
              WebkitTapHighlightColor: "transparent",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </button>
            <button onClick={() => { setView("position"); setNavOpen(false); }} title="Position" style={{
              pointerEvents: "auto",
              width: fabSmall, height: fabSmall, borderRadius: "50%",
              background: view === "position" ? fabBgActive : fabBg,
              color: view === "position" ? bg : fg,
              border: `1.5px solid ${border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", boxShadow: fabShadow,
              WebkitTapHighlightColor: "transparent",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </button>
            <button onClick={() => { setDark(d => !d); setNavOpen(false); }} title={dark ? "Light mode" : "Dark mode"} style={{
              pointerEvents: "auto",
              width: fabSmall, height: fabSmall, borderRadius: "50%",
              background: fabBg, color: fg, border: `1.5px solid ${border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", boxShadow: fabShadow,
              fontSize: 16, lineHeight: 1,
              WebkitTapHighlightColor: "transparent",
            }}>
              {dark ? "☀" : "●"}
            </button>
          </>
        )}
      </div>
    );
  }

  // ══════════════════════════════════════
  // HOME
  // ══════════════════════════════════════
  if (view === "home") return (
    <div style={W}>
      <header style={{ padding: "2.5rem 0 1.25rem", borderBottom: `3px solid ${border}` }}>
        <h1 style={{ ...heading, fontSize: 36, lineHeight: 1.0, margin: 0 }}>
          SUPPLY CHAIN<br />AESTHETICS
        </h1>
        <div style={{ ...meta, marginTop: 10, fontSize: 13 }}>READING LAB</div>
      </header>

      <div style={{ display: "flex", gap: 24, padding: "14px 0", borderBottom: `1px solid ${borderLight}`, ...meta, fontSize: 12 }}>
        <span>{s.readPieces.length} PIECES READ</span>
        <span>{s.notes.length} NOTES</span>
      </div>

      {THINKERS.map(t => {
        const p = prog(t);
        const nCount = tNotes(t.id).length;
        return (
          <div key={t.id} onClick={() => goRead(t)} style={{
            borderBottom: `1px solid ${borderLight}`, padding: "20px 0", cursor: "pointer",
            WebkitTapHighlightColor: "transparent",
          }}>
            <div style={{ ...meta, fontSize: 11, marginBottom: 8 }}>
              {t.tag}
              {nCount > 0 && ` · ${nCount} NOTE${nCount !== 1 ? "S" : ""}`}
            </div>
            <div style={{ ...heading, fontSize: 24, lineHeight: 1.15, color: fg }}>
              {t.name}
              {t.nameCn && <span style={{ fontWeight: 400, fontSize: 16, marginLeft: 10, opacity: 0.4 }}>{t.nameCn}</span>}
            </div>
            <div style={{ ...meta, marginTop: 6, fontStyle: "italic", fontSize: 13 }}>{t.tagline}</div>

            {/* Per-piece progress */}
            <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
              {t.pieces.map(pc => {
                const done = isRead(pc.id);
                return (
                  <div key={pc.id} style={{
                    display: "flex", alignItems: "center", gap: 5,
                    padding: "4px 10px",
                    border: `1px solid ${done ? border : borderLight}`,
                    background: done ? (dark ? "#1a1a1a" : "#f0f0f0") : "transparent",
                    opacity: done ? 1 : 0.5,
                  }}>
                    <span style={{
                      width: 8, height: 8,
                      background: done ? fg : "transparent",
                      border: done ? "none" : `1.5px solid ${fg2}`,
                      display: "inline-block", flexShrink: 0,
                    }} />
                    <span style={{ ...meta, fontSize: 10, color: done ? fg : fg2 }}>
                      {pc.format}
                    </span>
                  </div>
                );
              })}
              {p.done > 0 && (
                <span style={{ ...meta, fontSize: 10, alignSelf: "center", marginLeft: 4 }}>
                  {p.done}/{p.total}
                </span>
              )}
            </div>
          </div>
        );
      })}

      {FloatingNav()}
    </div>
  );

  // ══════════════════════════════════════
  // NOTEBOOK
  // ══════════════════════════════════════
  if (view === "notebook") {
    const sorted = [...s.notes].sort((a, b) => new Date(b.date) - new Date(a.date));
    return (
      <div style={W}>
        <header style={{ padding: "2.5rem 0 1.25rem", borderBottom: `3px solid ${border}`, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <h1 style={{ ...heading, fontSize: 28, margin: 0 }}>NOTEBOOK</h1>
          <div style={meta}>{sorted.length} ENTR{sorted.length !== 1 ? "IES" : "Y"}</div>
        </header>

        {sorted.length === 0 && (
          <div style={{ ...bodyText, padding: "2.5rem 0", color: fg2 }}>
            No notes yet. Start reading and jot down ideas as you go.
          </div>
        )}

        {sorted.map(n => {
          const th = THINKERS.find(t => t.id === n.tid);
          const pc = th?.pieces.find(p => p.id === n.pid);
          const pieceTitle = n.pTitle || pc?.title || "";
          return (
            <div key={n.id} style={{ borderBottom: `1px solid ${borderLight}`, padding: "18px 0" }}>
              <div style={{ ...meta, fontSize: 11, marginBottom: 4 }}>
                {fmtDate(new Date(n.date))} · {th?.name || ""} · {pc?.format || ""}
              </div>
              {pieceTitle && (
                <div style={{ ...meta, fontSize: 11, marginBottom: 8, color: fg, fontWeight: 600 }}>
                  {pieceTitle}
                </div>
              )}
              <div style={{ ...bodyText, whiteSpace: "pre-wrap" }}>{n.text}</div>
              <button style={{ ...ghostBtn, fontSize: 11, color: fg2, marginTop: 8 }} onClick={() => delNote(n.id)}>DELETE</button>
            </div>
          );
        })}

        {FloatingNav()}
      </div>
    );
  }

  // ══════════════════════════════════════
  // POSITION
  // ══════════════════════════════════════
  if (view === "position") return (
    <div style={W}>
      <header style={{ padding: "2.5rem 0 1.25rem", borderBottom: `3px solid ${border}`, marginBottom: 24 }}>
        <h1 style={{ ...heading, fontSize: 28, margin: 0 }}>MY POSITION</h1>
        <div style={{ ...meta, marginTop: 8, fontStyle: "italic", fontSize: 13 }}>
          A living draft — your evolving statement on supply chain aesthetics.
        </div>
      </header>

      <textarea value={pos} onChange={e => setPos(e.target.value)}
        placeholder="What interests you about supply chain as artistic material? What is different about your approach?"
        style={{
          width: "100%", minHeight: 360, border: `1.5px solid ${border}`, padding: 20,
          fontSize: 16, fontFamily: "'Source Serif 4', Georgia, serif", lineHeight: 1.8,
          resize: "vertical", outline: "none", boxSizing: "border-box",
          background: inputBg, color: fg, WebkitAppearance: "none",
          WebkitUserSelect: "text", userSelect: "text",
          transform: "translateZ(0)",
        }}
      />
      <div style={{ marginTop: 18 }}>
        <button style={solidBtn} onClick={savePos}>SAVE</button>
      </div>

      {FloatingNav()}
    </div>
  );

  // ══════════════════════════════════════
  // READING VIEW
  // ══════════════════════════════════════
  if (view === "read" && thinker && piece) {
    const idx = thinker.pieces.indexOf(piece);
    const next = thinker.pieces[idx + 1];
    const prev = thinker.pieces[idx - 1];
    const pNotes = s.notes.filter(n => n.tid === thinker.id);

    return (
      <div style={W}>
        {/* Header */}
        <header style={{ padding: "2rem 0 1rem", borderBottom: `3px solid ${border}` }}>
          <div style={{ ...meta, fontSize: 11, marginBottom: 8 }}>
            {thinker.tag} · {idx + 1} OF {thinker.pieces.length}
          </div>
          <h1 style={{ ...heading, fontSize: 26, color: fg, margin: 0 }}>
            {thinker.name}
            {thinker.nameCn && <span style={{ fontWeight: 400, fontSize: 15, marginLeft: 10, opacity: 0.4 }}>{thinker.nameCn}</span>}
          </h1>
        </header>

        {/* Piece tabs — horizontal scrollable on narrow screens */}
        <div style={{
          display: "flex", borderBottom: `1px solid ${border}`,
          overflowX: "auto", WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none", scrollbarWidth: "none",
        }}>
          {thinker.pieces.map((p, i) => {
            const active = p.id === piece.id;
            return (
              <button key={p.id} onClick={() => { setPiece(p); setNote(""); setExpandedNote(null); }} style={{
                ...btnBase, fontSize: 12, whiteSpace: "nowrap",
                padding: "14px 18px", border: "none",
                background: active ? fg : "transparent",
                color: active ? bg : fg2,
                transition: "background 0.15s, color 0.15s",
                minHeight: 48, flexShrink: 0,
              }}>
                {i + 1}. {p.format}{isRead(p.id) ? " ✓" : ""}
              </button>
            );
          })}
        </div>

        {/* Main content area */}
        <div style={{ display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap", paddingTop: 24 }}>

          {/* Content column */}
          <div style={{ flex: "2 1 440px", minWidth: 0 }}>
            {/* Piece meta */}
            <div style={{ ...meta, fontSize: 11, marginBottom: 8 }}>
              {piece.format} · {piece.time}{piece.source ? ` · VIA ${piece.source.toUpperCase()}` : ""}
            </div>

            {/* Title */}
            <h2 style={{ ...heading, fontSize: 28, lineHeight: 1.1, color: fg, margin: "0 0 6px" }}>{piece.title}</h2>
            <div style={{ ...meta, marginBottom: 24, fontSize: 13 }}>{piece.subtitle}</div>

            {/* Curator note */}
            <div style={{
              borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`,
              padding: "18px 0", marginBottom: 28,
            }}>
              <div style={{ ...meta, fontSize: 11, marginBottom: 8 }}>CURATOR'S NOTE</div>
              <div style={{ ...bodyText, fontStyle: "italic", fontSize: 15 }}>{piece.curatorNote}</div>
            </div>

            {/* YouTube embed */}
            {piece.type === "youtube" && piece.youtubeId && (
              <div style={{ marginBottom: 28, border: `1.5px solid ${border}` }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${piece.youtubeId}`}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                    allowFullScreen title={piece.title}
                  />
                </div>
              </div>
            )}

            {/* Iframe embed */}
            {piece.type === "iframe" && !iframeErr[piece.id] && (
              <div style={{ marginBottom: 28 }}>
                <div style={{ border: `1.5px solid ${border}`, height: 520, overflow: "hidden" }}>
                  <iframe
                    src={piece.iframeUrl}
                    style={{ width: "100%", height: "100%", border: "none" }}
                    title={piece.title}
                    sandbox="allow-same-origin allow-scripts allow-popups"
                    onError={() => setIframeErr(p => ({ ...p, [piece.id]: true }))}
                  />
                </div>
                <div style={{ ...meta, marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>READING IN-APP</span>
                  <a href={piece.fallbackUrl} target="_blank" rel="noopener noreferrer"
                    style={{ ...ghostBtn, fontSize: 11, color: fg2, textDecoration: "none" }}>
                    OPEN IN BROWSER →
                  </a>
                </div>
              </div>
            )}

            {/* Link / Fallback card */}
            {(piece.type === "link" || (piece.type === "iframe" && iframeErr[piece.id])) && (
              <div style={{
                border: `1.5px solid ${border}`, padding: "36px 28px", marginBottom: 28,
                textAlign: "center", background: dark ? "#0a0a0a" : "#fafafa",
              }}>
                {piece.type === "iframe" && iframeErr[piece.id] && (
                  <div style={{ ...meta, fontSize: 11, marginBottom: 12 }}>SOURCE DOESN'T ALLOW IN-APP READING</div>
                )}
                <div style={{ ...heading, fontSize: 20, marginBottom: 8, color: fg }}>{piece.title}</div>
                <div style={{ ...meta, fontSize: 12, marginBottom: 20 }}>OPENS IN YOUR BROWSER</div>
                <a href={piece.url || piece.fallbackUrl} target="_blank" rel="noopener noreferrer"
                  style={{ ...solidBtn, textDecoration: "none", display: "inline-block", padding: "16px 32px", fontSize: 13 }}>
                  OPEN →
                </a>
                {piece.altLinks && (
                  <div style={{ ...meta, marginTop: 20 }}>
                    ALSO: {piece.altLinks.map((l, i) => (
                      <span key={i}>{i > 0 ? " · " : ""}
                        <a href={l.url} target="_blank" rel="noopener noreferrer"
                          style={{ color: fg2, textDecoration: "none", borderBottom: `1px solid ${borderLight}` }}>
                          {l.label.toUpperCase()}
                        </a>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Bottom actions */}
            <div style={{
              borderTop: `1px solid ${border}`, paddingTop: 18,
              display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
            }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                {prev && <button style={outlineBtn} onClick={() => { setPiece(prev); setNote(""); setExpandedNote(null); }}>← PREV</button>}
                <button
                  style={isRead(piece.id) ? { ...outlineBtn, opacity: 0.4, cursor: "default" } : solidBtn}
                  onClick={() => markRead(piece.id)}
                >
                  {isRead(piece.id) ? "✓ READ" : "MARK READ"}
                </button>
              </div>
              {next && <button style={outlineBtn} onClick={() => { setPiece(next); setNote(""); setExpandedNote(null); }}>NEXT →</button>}
            </div>
          </div>

          {/* Notes sidebar */}
          <aside style={{ flex: "1 1 280px", minWidth: 240, paddingBottom: 80, position: "relative", zIndex: 1 }}>
            <div style={{ borderTop: `3px solid ${border}`, paddingTop: 18 }}>
              <div style={{ ...meta, fontSize: 11, marginBottom: 12 }}>NOTES</div>
              <textarea value={note} onChange={e => setNote(e.target.value)}
                placeholder="Jot ideas, fragments, questions..."
                style={{
                  width: "100%", minHeight: 150, border: `1.5px solid ${border}`,
                  padding: 16, fontSize: 15, fontFamily: "'Source Serif 4', Georgia, serif",
                  lineHeight: 1.7, resize: "vertical", outline: "none",
                  boxSizing: "border-box", background: inputBg, color: fg,
                  marginBottom: 12, WebkitAppearance: "none",
                  WebkitUserSelect: "text", userSelect: "text",
                  transform: "translateZ(0)",
                }}
              />
              <button
                style={note.trim() ? solidBtn : { ...solidBtn, opacity: 0.25, cursor: "default" }}
                onClick={addNote} disabled={!note.trim()}
              >
                SAVE NOTE
              </button>

              {pNotes.length > 0 && (
                <div style={{ marginTop: 28, borderTop: `1px solid ${border}`, paddingTop: 16 }}>
                  <div style={{ ...meta, fontSize: 11, marginBottom: 12 }}>ON {thinker.name}:</div>
                  {pNotes.slice(-5).reverse().map(n => {
                    const pc = thinker.pieces.find(p => p.id === n.pid);
                    const pieceTitle = n.pTitle || pc?.title || "";
                    const expanded = expandedNote === n.id;
                    const text = n.text.length > 120 && !expanded ? n.text.slice(0, 120) + "…" : n.text;
                    return (
                      <div key={n.id} style={{ borderBottom: `1px solid ${borderLight}`, paddingBottom: 12, marginBottom: 12 }}>
                        <div style={{ ...meta, fontSize: 11, marginBottom: 3 }}>
                          {fmtDate(new Date(n.date))}{pc ? ` · ${pc.format}` : ""}
                        </div>
                        {pieceTitle && (
                          <div style={{ ...meta, fontSize: 10, marginBottom: 5, color: fg, fontWeight: 600 }}>{pieceTitle}</div>
                        )}
                        <div style={{ ...bodyText, fontSize: 14 }}>{text}</div>
                        {n.text.length > 120 && (
                          <button style={{ ...ghostBtn, fontSize: 11, color: fg2, marginTop: 4 }}
                            onClick={() => setExpandedNote(expanded ? null : n.id)}>
                            {expanded ? "LESS" : "MORE"}
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </aside>
        </div>

        {FloatingNav()}
      </div>
    );
  }

  return null;
}
