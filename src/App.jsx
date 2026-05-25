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
        curatorNote: "A longer conversation where Wang gets into supply chains specifically — how technology connects rural producers to global markets, but doesn't distribute power equally. The concept of 'technocracy' they introduce is sharp. Think about who holds technical knowledge in your own material chains.",
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
        curatorNote: "Steyerl argues images are not representations but things that circulate — they get compressed, degraded, weaponized as they move through systems. The 'poor image' is a logistics story. Think about your lanterns: objects that resist this kind of circulation. What does it mean to make something that can't become a poor image?",
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
        curatorNote: "Tsing's method: follow a single organism (matsutake mushroom) through every hand it passes and discover that each person in the chain lives in a different economy. That's 'patchiness' — supply chains aren't smooth, they're stitched together from incommensurable worlds. Could you do this with bamboo?",
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
        curatorNote: "Tsing extends her supply chain thinking to ecological damage — how human infrastructure creates 'feral' effects that escape control. Listen for the word 'entanglement' — she means it literally. Every infrastructure produces unintended ecologies.",
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
        curatorNote: "Easterling's core move: the most powerful design isn't objects, it's protocols — the rules that govern how things combine. Infrastructure has a 'disposition,' it actively shapes behavior without being visible. Think about Shenzhen, where the JD museum sits, as one of her 'zones.'",
        type: "youtube",
        youtubeId: "x7RhIK9OIAE",
      },
      {
        id: "easterling-convo",
        title: "IN CONVERSATION",
        subtitle: "2025 — on Medium Design",
        format: "VIDEO",
        time: "40 MIN",
        curatorNote: "Easterling says 'solutions are mistakes' — the interesting design space is in relationships, not fixes. How does this apply to supply chain art? Maybe the point isn't to critique the system but to work within its entanglements.",
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
        curatorNote: "Nguyen argues that humanitarian aid is itself a supply chain — with its own logistics of debt and gratitude. The 'gift of freedom' is not free; it creates permanent indebtedness. Think about informal supply chains of care in diaspora communities. Your lantern practice exists within these too.",
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
        curatorNote: "Start here for the visual argument. Sekula spent seven years documenting harbors and port cities. His key claim: the ocean isn't nature, it's one of the most industrialized spaces on earth. Where he works at the macro scale of container ships, you work at the micro scale of a single bamboo.",
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
  const [linkOpened, setLinkOpened] = useState(false);

  useEffect(() => { const d = load(); setS(d); setPos(d.position || ""); }, []);
  useEffect(() => { if (s) save(s); }, [s]);
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem(DK, dark ? "1" : "0");
  }, [dark]);

  if (!s) return <div style={{ padding: "3rem", fontSize: 12, letterSpacing: "0.1em" }}>LOADING...</div>;

  const fg = dark ? "#eee" : "#000";
  const bg = dark ? "#111" : "#fff";
  const fg2 = dark ? "#888" : "#666";
  const border = dark ? "#444" : "#000";
  const borderLight = dark ? "#333" : "#ddd";
  const inputBg = dark ? "#1a1a1a" : "#fff";

  const isRead = id => s.readPieces.includes(id);
  const prog = t => { const d = t.pieces.filter(p => isRead(p.id)).length; return { done: d, total: t.pieces.length }; };
  const tNotes = id => s.notes.filter(n => n.tid === id);

  function markRead(id) { if (!isRead(id)) setS(p => ({ ...p, readPieces: [...p.readPieces, id] })); }
  function addNote() {
    if (!note.trim()) return;
    setS(p => ({ ...p, notes: [...p.notes, { id: Date.now().toString(), tid: thinker.id, pid: piece.id, text: note.trim(), date: new Date().toISOString() }] }));
    setNote("");
  }
  function delNote(id) { setS(p => ({ ...p, notes: p.notes.filter(n => n.id !== id) })); }
  function savePos() { setS(p => ({ ...p, position: pos })); }
  function goRead(t) { setThinker(t); setPiece(t.pieces[0]); setNote(""); setIframeErr({}); setExpandedNote(null); setLinkOpened(false); setView("read"); }

  const meta = { fontSize: 11, letterSpacing: "0.08em", color: fg2 };
  const title = { fontFamily: "'Space Grotesk', 'Helvetica Neue', sans-serif", fontWeight: 700, letterSpacing: "-0.01em", textTransform: "uppercase" };
  const bodyText = { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 14, lineHeight: 1.7, color: dark ? "#ccc" : "#333" };

  const linkBtn = { fontSize: 12, letterSpacing: "0.06em", background: "transparent", border: "none", cursor: "pointer", padding: 0, color: fg, textTransform: "uppercase" };
  const solidBtn = { fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", background: fg, color: bg, border: "none", padding: "10px 20px", cursor: "pointer", fontFamily: "'Space Mono', monospace" };
  const outlineBtn = { ...solidBtn, background: "transparent", color: fg, border: `1px solid ${border}` };

  const W = { maxWidth: 860, margin: "0 auto", padding: "0 1.25rem", paddingBottom: 80 };

  // ── BOTTOM BAR ──
  function BottomBar() {
    return (
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        background: bg, borderTop: `2px solid ${border}`,
        padding: "12px 0", paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
        zIndex: 100,
        transition: "background 0.2s, border-color 0.2s",
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => setView("home")} style={{ ...linkBtn, fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke={fg} strokeWidth="1.5">
              <ellipse cx="10" cy="7" rx="9" ry="6" />
              <circle cx="10" cy="7" r="3" />
              <circle cx="10" cy="7" r="1" fill={fg} />
            </svg>
            HOME
          </button>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <button onClick={() => setView("notebook")} style={linkBtn}>NOTES</button>
            <button onClick={() => setView("position")} style={linkBtn}>POSITION</button>
            <button onClick={() => setDark(d => !d)} style={{ ...linkBtn, fontSize: 16, padding: "2px 6px", border: `1px solid ${border}`, lineHeight: 1 }} title={dark ? "Light mode" : "Dark mode"}>
              {dark ? "☀" : "●"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── HOME ──
  if (view === "home") return (
    <div style={W}>
      <div style={{ padding: "2rem 0 1rem", borderBottom: `3px solid ${border}`, marginBottom: 0 }}>
        <div style={{ ...title, fontSize: 32, lineHeight: 1.05 }}>
          SUPPLY CHAIN<br />AESTHETICS
        </div>
        <div style={{ ...meta, marginTop: 8, fontSize: 12 }}>READING LAB</div>
      </div>

      <div style={{ display: "flex", gap: 20, padding: "10px 0", borderBottom: `1px solid ${border}`, ...meta }}>
        <span>{s.readPieces.length} PIECES READ</span>
        <span>{s.notes.length} NOTES</span>
      </div>

      {THINKERS.map(t => {
        const p = prog(t);
        const nCount = tNotes(t.id).length;
        return (
          <div key={t.id} onClick={() => goRead(t)} style={{ borderBottom: `1px solid ${border}`, padding: "16px 0", cursor: "pointer" }}>
            <div style={{ ...meta, fontSize: 10, marginBottom: 6 }}>
              {t.tag}{p.done > 0 ? ` · ${p.done}/${p.total}` : ` · ${p.total} PIECES`}
              {nCount > 0 && ` · ${nCount} NOTE${nCount !== 1 ? "S" : ""}`}
            </div>
            <div style={{ ...title, fontSize: 22, lineHeight: 1.15, color: fg }}>
              {t.name}
              {t.nameCn && <span style={{ fontWeight: 400, fontSize: 16, marginLeft: 8, opacity: 0.5 }}>{t.nameCn}</span>}
            </div>
            <div style={{ ...meta, marginTop: 4, fontStyle: "italic", fontSize: 12 }}>{t.tagline}</div>
          </div>
        );
      })}

      <BottomBar />
    </div>
  );

  // ── NOTEBOOK ──
  if (view === "notebook") {
    const sorted = [...s.notes].sort((a, b) => new Date(b.date) - new Date(a.date));
    return (
      <div style={W}>
        <div style={{ padding: "2rem 0 1rem", borderBottom: `3px solid ${border}`, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ ...title, fontSize: 26 }}>NOTEBOOK</div>
          <div style={meta}>{sorted.length} ENTR{sorted.length !== 1 ? "IES" : "Y"}</div>
        </div>

        {sorted.length === 0 && <div style={{ ...bodyText, padding: "2rem 0", color: fg2 }}>No notes yet. Start reading and jot down ideas as you go.</div>}

        {sorted.map(n => {
          const th = THINKERS.find(t => t.id === n.tid);
          const pc = th?.pieces.find(p => p.id === n.pid);
          return (
            <div key={n.id} style={{ borderBottom: `1px solid ${border}`, padding: "14px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", ...meta, fontSize: 10, marginBottom: 6 }}>
                <span>{fmtDate(new Date(n.date))} · {th?.name || ""}</span>
                <span>{pc?.format || ""}</span>
              </div>
              <div style={{ ...bodyText, whiteSpace: "pre-wrap" }}>{n.text}</div>
              <button style={{ ...linkBtn, fontSize: 10, color: fg2, marginTop: 6 }} onClick={() => delNote(n.id)}>DELETE</button>
            </div>
          );
        })}

        <BottomBar />
      </div>
    );
  }

  // ── POSITION ──
  if (view === "position") return (
    <div style={W}>
      <div style={{ padding: "2rem 0 1rem", borderBottom: `3px solid ${border}`, marginBottom: 20 }}>
        <div style={{ ...title, fontSize: 26 }}>MY POSITION</div>
        <div style={{ ...meta, marginTop: 6, fontStyle: "italic" }}>A living draft — your evolving statement on supply chain aesthetics.</div>
      </div>

      <textarea value={pos} onChange={e => setPos(e.target.value)}
        placeholder="What interests you about supply chain as artistic material? What is different about your approach?"
        style={{
          width: "100%", minHeight: 320, border: `1px solid ${border}`, padding: 16,
          fontSize: 15, fontFamily: "'Source Serif 4', Georgia, serif", lineHeight: 1.75,
          resize: "vertical", outline: "none", boxSizing: "border-box",
          background: inputBg, color: fg,
        }}
      />
      <div style={{ marginTop: 14 }}>
        <button style={solidBtn} onClick={savePos}>SAVE</button>
      </div>

      <BottomBar />
    </div>
  );

  // ── READING ──
  if (view === "read" && thinker && piece) {
    const idx = thinker.pieces.indexOf(piece);
    const next = thinker.pieces[idx + 1];
    const prev = thinker.pieces[idx - 1];
    const pNotes = s.notes.filter(n => n.tid === thinker.id);

    return (
      <div style={W}>
        {/* Header */}
        <div style={{ padding: "2rem 0 1rem", borderBottom: `3px solid ${border}`, marginBottom: 0 }}>
          <div style={{ ...meta, fontSize: 10, marginBottom: 8 }}>
            {thinker.tag} · {idx + 1} OF {thinker.pieces.length}
          </div>
          <div style={{ ...title, fontSize: 24, color: fg }}>
            {thinker.name}
            {thinker.nameCn && <span style={{ fontWeight: 400, fontSize: 14, marginLeft: 8, opacity: 0.5 }}>{thinker.nameCn}</span>}
          </div>
        </div>

        {/* Piece tabs */}
        <div style={{ display: "flex", borderBottom: `1px solid ${border}` }}>
          {thinker.pieces.map((p, i) => {
            const active = p.id === piece.id;
            return (
              <button key={p.id} onClick={() => { setPiece(p); setNote(""); setExpandedNote(null); setLinkOpened(false); }} style={{
                fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.05em",
                padding: "10px 16px", border: "none",
                background: active ? fg : "transparent",
                color: active ? bg : fg2,
                cursor: "pointer", textTransform: "uppercase",
                transition: "background 0.15s, color 0.15s",
              }}>
                {i + 1}. {p.format}{isRead(p.id) ? " ✓" : ""}
              </button>
            );
          })}
        </div>

        {/* Two-column layout */}
        <div style={{ display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap", paddingTop: 20 }}>
          {/* Content column */}
          <div style={{ flex: "2 1 420px", minWidth: 0 }}>
            {/* Meta */}
            <div style={{ ...meta, fontSize: 10, marginBottom: 6 }}>
              {piece.format} · {piece.time}{piece.source ? ` · VIA ${piece.source.toUpperCase()}` : ""}
            </div>

            {/* Title block */}
            <div style={{ ...title, fontSize: 26, lineHeight: 1.1, color: fg, marginBottom: 4 }}>{piece.title}</div>
            <div style={{ ...meta, marginBottom: 20 }}>{piece.subtitle}</div>

            {/* Curator note */}
            <div style={{
              borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`,
              padding: "14px 0", marginBottom: 24,
            }}>
              <div style={{ ...meta, fontSize: 10, marginBottom: 6 }}>CURATOR'S NOTE</div>
              <div style={{ ...bodyText, fontStyle: "italic" }}>{piece.curatorNote}</div>
            </div>

            {/* YouTube */}
            {piece.type === "youtube" && piece.youtubeId && (
              <div style={{ marginBottom: 24, border: `1px solid ${border}` }}>
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

            {/* Iframe */}
            {piece.type === "iframe" && !iframeErr[piece.id] && (
              <div style={{ marginBottom: 24 }}>
                <div style={{ border: `1px solid ${border}`, height: 500, overflow: "hidden" }}>
                  <iframe
                    src={piece.iframeUrl}
                    style={{ width: "100%", height: "100%", border: "none" }}
                    title={piece.title}
                    sandbox="allow-same-origin allow-scripts allow-popups"
                    onError={() => setIframeErr(p => ({ ...p, [piece.id]: true }))}
                  />
                </div>
                <div style={{ ...meta, marginTop: 8, display: "flex", justifyContent: "space-between" }}>
                  <span>READING IN-APP</span>
                  <a href={piece.fallbackUrl} target="_blank" rel="noopener noreferrer" style={{ color: fg2, fontSize: 11, letterSpacing: "0.05em" }}>
                    OPEN IN NEW TAB →
                  </a>
                </div>
              </div>
            )}

            {/* Link / Fallback */}
            {(piece.type === "link" || (piece.type === "iframe" && iframeErr[piece.id])) && (
              <div style={{ border: `1px solid ${border}`, padding: 28, marginBottom: 24, textAlign: "center" }}>
                {piece.type === "iframe" && iframeErr[piece.id] && (
                  <div style={{ ...meta, fontSize: 10, marginBottom: 10 }}>SOURCE DOESN'T ALLOW IN-APP READING</div>
                )}
                <div style={{ ...title, fontSize: 20, marginBottom: 16, color: fg }}>{piece.title}</div>

                {linkOpened && piece.type === "link" ? (
                  <div>
                    <div style={{ ...meta, fontSize: 11, marginBottom: 10 }}>READING EXTERNALLY</div>
                    <a href={piece.url || piece.fallbackUrl} target="_blank" rel="noopener noreferrer" style={outlineBtn}>
                      RE-OPEN ↗
                    </a>
                  </div>
                ) : (
                  <a
                    href={piece.type === "link" ? piece.url : piece.fallbackUrl}
                    target="_blank" rel="noopener noreferrer"
                    style={solidBtn}
                    onClick={() => { if (piece.type === "link") setLinkOpened(true); }}
                  >
                    OPEN →
                  </a>
                )}

                {piece.altLinks && (
                  <div style={{ ...meta, marginTop: 14 }}>
                    ALSO: {piece.altLinks.map((l, i) => (
                      <span key={i}>{i > 0 ? " · " : ""}
                        <a href={l.url} target="_blank" rel="noopener noreferrer" style={{ color: fg2 }}>{l.label.toUpperCase()}</a>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Bottom actions */}
            <div style={{
              borderTop: `1px solid ${border}`, paddingTop: 14,
              display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10,
            }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                {prev && <button style={outlineBtn} onClick={() => { setPiece(prev); setNote(""); setExpandedNote(null); setLinkOpened(false); }}>← PREV</button>}
                <button
                  style={isRead(piece.id) ? { ...outlineBtn, opacity: 0.5 } : solidBtn}
                  onClick={() => markRead(piece.id)}
                >
                  {isRead(piece.id) ? "✓ READ" : "MARK READ"}
                </button>
              </div>
              {next && <button style={outlineBtn} onClick={() => { setPiece(next); setNote(""); setExpandedNote(null); setLinkOpened(false); }}>NEXT →</button>}
            </div>
          </div>

          {/* Notes sidebar */}
          <div style={{ flex: "1 1 240px", minWidth: 200 }}>
            <div style={{ borderTop: `3px solid ${border}`, paddingTop: 14 }}>
              <div style={{ ...meta, fontSize: 10, marginBottom: 10 }}>NOTES</div>
              <textarea value={note} onChange={e => setNote(e.target.value)}
                placeholder="Jot ideas, fragments, questions..."
                style={{
                  width: "100%", minHeight: 120, border: `1px solid ${border}`,
                  padding: 12, fontSize: 14, fontFamily: "'Source Serif 4', Georgia, serif",
                  lineHeight: 1.6, resize: "vertical", outline: "none",
                  boxSizing: "border-box", background: inputBg, color: fg,
                  marginBottom: 10,
                }}
              />
              <button
                style={note.trim() ? solidBtn : { ...solidBtn, opacity: 0.3, cursor: "default" }}
                onClick={addNote} disabled={!note.trim()}
              >
                SAVE NOTE
              </button>

              {pNotes.length > 0 && (
                <div style={{ marginTop: 24, borderTop: `1px solid ${border}`, paddingTop: 14 }}>
                  <div style={{ ...meta, fontSize: 10, marginBottom: 10 }}>ON {thinker.name}:</div>
                  {pNotes.slice(-5).reverse().map(n => {
                    const pc = thinker.pieces.find(p => p.id === n.pid);
                    const expanded = expandedNote === n.id;
                    const text = n.text.length > 120 && !expanded ? n.text.slice(0, 120) + "…" : n.text;
                    return (
                      <div key={n.id} style={{ borderBottom: `1px solid ${borderLight}`, paddingBottom: 10, marginBottom: 10 }}>
                        <div style={{ ...meta, fontSize: 10, marginBottom: 4 }}>
                          {fmtDate(new Date(n.date))}{pc ? ` · ${pc.format}` : ""}
                        </div>
                        <div style={{ ...bodyText, fontSize: 13 }}>{text}</div>
                        {n.text.length > 120 && (
                          <button style={{ ...linkBtn, fontSize: 10, color: fg2, marginTop: 4 }}
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
          </div>
        </div>

        <BottomBar />
      </div>
    );
  }
  return null;
}
