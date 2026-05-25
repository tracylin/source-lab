import { useState, useEffect, useRef } from "react";

const THINKERS = [
  {
    id: "wang",
    name: "Xiaowei Wang",
    nameCn: "王小伟",
    tagline: "Tech entanglement, rural China, diaspora",
    tag: "writing",
    tagColor: "#712B13",
    tagBg: "#FAECE7",
    pieces: [
      {
        id: "wang-slate",
        title: "Made in China",
        subtitle: "Blockchain Chicken Farm excerpt",
        format: "essay",
        source: "Slate",
        time: "12 min read",
        curatorNote: "Wang opens with a toy bird marked 'Made in China' found on a windowsill in California. Watch how the personal and systemic keep collapsing into each other \u2014 a family import-export business becomes a lens on global manufacturing, shame, innovation, and who gets to define value. That collapse is the move you might learn from.",
        type: "iframe",
        iframeUrl: "https://slate.com/technology/2020/10/innovation-immitation-made-in-china-xiaowei-wang.html",
        fallbackUrl: "https://slate.com/technology/2020/10/innovation-immitation-made-in-china-xiaowei-wang.html",
      },
      {
        id: "wang-ted",
        title: "Why entrepreneurship flourishes in the countryside",
        subtitle: "TED Talk",
        format: "video",
        time: "14 min",
        curatorNote: "Wang argues that the most careful, thoughtful innovation happens in rural communities \u2014 not Silicon Valley. Listen for how they dissolve the urban/rural binary. Think about how your own practice sits between LA and the Chinese countryside where bamboo originates.",
        type: "youtube",
        youtubeId: "jsFAFsx9otw",
      },
      {
        id: "wang-podcast",
        title: "What Rural China Teaches Us About the Future of Tech",
        subtitle: "Tech Won\u2019t Save Us podcast with Paris Marx",
        format: "podcast",
        time: "45 min",
        curatorNote: "A longer conversation where Wang gets into supply chains specifically \u2014 how technology connects rural producers to global markets, but doesn\u2019t distribute power equally. The concept of \u2018technocracy\u2019 they introduce is sharp. Think about who holds technical knowledge in your own material chains.",
        type: "link",
        url: "https://podcasts.apple.com/podcast/what-rural-china-teaches-us-about-future-tech-w-xiaowei/id1507621076?i=1000495651660",
      },
    ],
  },
  {
    id: "steyerl",
    name: "Hito Steyerl",
    tagline: "Image circulation, digital labor, objects in systems",
    tag: "art + text",
    tagColor: "#085041",
    tagBg: "#E1F5EE",
    pieces: [
      {
        id: "steyerl-poor",
        title: "In Defense of the Poor Image",
        subtitle: "e-flux journal #10, 2009",
        format: "essay",
        time: "20 min read",
        curatorNote: "Steyerl argues images are not representations but things that circulate \u2014 they get compressed, degraded, weaponized as they move through systems. The \u2018poor image\u2019 is a logistics story. Think about your lanterns: objects that resist this kind of circulation. What does it mean to make something that can\u2019t become a poor image?",
        type: "iframe",
        iframeUrl: "https://www.e-flux.com/journal/10/61362/in-defense-of-the-poor-image/",
        fallbackUrl: "https://www.e-flux.com/journal/10/61362/in-defense-of-the-poor-image/",
      },
      {
        id: "steyerl-freeport",
        title: "Duty Free Art (on Freeports)",
        subtitle: "Book chapter \u2014 Duty Free Art, 2017",
        format: "book",
        time: "25 min read",
        curatorNote: "Freeports are literal supply chain art spaces \u2014 tax-free storage facilities where art exists in permanent transit, never arriving, never being seen. Steyerl asks: what kind of art is made for a world of permanent circulation? The JD museum is almost the inverse \u2014 a logistics company building a place for art to land.",
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
    name: "Anna Tsing",
    tagline: "Following materials through patchy supply chains",
    tag: "theory",
    tagColor: "#3C3489",
    tagBg: "#EEEDFE",
    pieces: [
      {
        id: "tsing-mushroom",
        title: "The Mushroom at the End of the World",
        subtitle: "Chapters 1\u20133: Arts of Noticing",
        format: "book",
        time: "35 min read",
        curatorNote: "Tsing\u2019s method: follow a single organism (matsutake mushroom) through every hand it passes and discover that each person in the chain lives in a different economy. That\u2019s \u2018patchiness\u2019 \u2014 supply chains aren\u2019t smooth, they\u2019re stitched together from incommensurable worlds. Could you do this with bamboo?",
        type: "link",
        url: "https://press.princeton.edu/books/paperback/9780691178325/the-mushroom-at-the-end-of-the-world",
        altLinks: [
          { label: "LA Public Library", url: "https://www.lapl.org" },
          { label: "Buy", url: "https://bookshop.org/p/books/the-mushroom-at-the-end-of-the-world-on-the-possibility-of-life-in-capitalist-ruins-anna-lowenhaupt-tsing/6692810" },
        ],
      },
      {
        id: "tsing-talk",
        title: "Feral Atlas: Book Talk with Anna Tsing",
        subtitle: "Lecture \u2014 2022",
        format: "video",
        time: "50 min",
        curatorNote: "Tsing extends her supply chain thinking to ecological damage \u2014 how human infrastructure creates \u2018feral\u2019 effects that escape control. Listen for the word \u2018entanglement\u2019 \u2014 she means it literally. Every infrastructure produces unintended ecologies.",
        type: "youtube",
        youtubeId: "UyI5dbx2G2o",
      },
    ],
  },
  {
    id: "easterling",
    name: "Keller Easterling",
    tagline: "Infrastructure space, zones, spatial software",
    tag: "theory",
    tagColor: "#3C3489",
    tagBg: "#EEEDFE",
    pieces: [
      {
        id: "easterling-lecture",
        title: "Medium Design",
        subtitle: "Lecture at Strelka Institute, 2017",
        format: "video",
        time: "45 min",
        curatorNote: "Easterling\u2019s core move: the most powerful design isn\u2019t objects, it\u2019s protocols \u2014 the rules that govern how things combine. Infrastructure has a \u2018disposition,\u2019 it actively shapes behavior without being visible. Think about Shenzhen, where the JD museum sits, as one of her \u2018zones.\u2019 The museum itself is infrastructure.",
        type: "youtube",
        youtubeId: "x7RhIK9OIAE",
      },
      {
        id: "easterling-convo",
        title: "In Conversation with Keller Easterling",
        subtitle: "2025 \u2014 on Medium Design book",
        format: "video",
        time: "40 min",
        curatorNote: "A more recent and accessible conversation. Easterling says \u2018solutions are mistakes\u2019 \u2014 meaning the interesting design space is in relationships, not fixes. How does this apply to supply chain art? Maybe the point isn\u2019t to critique the system but to work within its entanglements.",
        type: "youtube",
        youtubeId: "G0DNyuWvmjU",
      },
    ],
  },
  {
    id: "nguyen",
    name: "Mimi Thi Nguyen",
    nameCn: "\u962E",
    tagline: "Gift economies, refugee logistics, diaspora debt",
    tag: "theory",
    tagColor: "#3C3489",
    tagBg: "#EEEDFE",
    pieces: [
      {
        id: "nguyen-gift",
        title: "The Gift of Freedom: Introduction",
        subtitle: "Duke University Press, 2012",
        format: "book",
        time: "30 min read",
        curatorNote: "Nguyen argues that humanitarian aid is itself a supply chain \u2014 with its own logistics of debt and gratitude. The \u2018gift of freedom\u2019 is not free; it creates permanent indebtedness. Think about informal supply chains of care in diaspora communities. Your lantern practice exists within these too: knowledge passed through WeChat, materials sourced through personal networks.",
        type: "link",
        url: "https://read.dukeupress.edu/books/book/1364/The-Gift-of-FreedomWar-Debt-and-Other-Refugee",
        altLinks: [
          { label: "Buy", url: "https://www.dukeupress.edu/the-gift-of-freedom" },
        ],
      },
    ],
  },
  {
    id: "sekula",
    name: "Allan Sekula",
    tagline: "Maritime labor, container shipping, the hidden sea",
    tag: "art + text",
    tagColor: "#085041",
    tagBg: "#E1F5EE",
    pieces: [
      {
        id: "sekula-walker",
        title: "Fish Story \u2014 Exhibition Overview",
        subtitle: "Walker Art Center documentation",
        format: "essay",
        time: "10 min read",
        curatorNote: "Start here for the visual argument. Sekula spent seven years documenting harbors and port cities. His key claim: the ocean isn\u2019t nature, it\u2019s one of the most industrialized spaces on earth. We aestheticize the sea to forget the labor that moves 90% of global goods. Where he works at the macro scale of container ships, you work at the micro scale of a single bamboo.",
        type: "iframe",
        iframeUrl: "https://www.walkerart.org/whats-on/allan-sekula-fish-story/",
        fallbackUrl: "https://www.walkerart.org/whats-on/allan-sekula-fish-story/",
      },
      {
        id: "sekula-forgotten",
        title: "The Forgotten Space \u2014 trailer",
        subtitle: "Documentary film with No\u00ebl Burch, 2010",
        format: "video",
        time: "5 min trailer",
        curatorNote: "The documentary version of Fish Story. Even the trailer gives you the visual vocabulary: containers, ports, labor, the sea as industrial space. If you watch the first 30 minutes of the full film you\u2019ll have the core argument.",
        type: "youtube",
        youtubeId: "SMWGJ2GhBqk",
      },
    ],
  },
];

const SK = "scrl-v3";

function getDefault() {
  return { readPieces: [], notes: [], position: "" };
}

function load() {
  try {
    const raw = localStorage.getItem(SK);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return getDefault();
}

function save(s) {
  try { localStorage.setItem(SK, JSON.stringify(s)); } catch (e) {}
}

function fmtDate(d) {
  const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${m[d.getMonth()]} ${d.getDate()}`;
}

export default function App() {
  const [s, setS] = useState(null);
  const [view, setView] = useState("home");
  const [thinker, setThinker] = useState(null);
  const [piece, setPiece] = useState(null);
  const [note, setNote] = useState("");
  const [pos, setPos] = useState("");
  const [iframeErr, setIframeErr] = useState({});

  useEffect(() => {
    const d = load(); setS(d); setPos(d.position || "");
  }, []);

  useEffect(() => { if (s) save(s); }, [s]);

  if (!s) return <div style={{padding:"2rem",fontFamily:"Georgia,serif",color:"#aaa"}}>Loading\u2026</div>;

  const isRead = id => s.readPieces.includes(id);
  const prog = t => { const d = t.pieces.filter(p => isRead(p.id)).length; return t.pieces.length > 0 ? d / t.pieces.length : 0; };
  const tNotes = id => s.notes.filter(n => n.tid === id);
  const explored = THINKERS.filter(t => prog(t) > 0).length;

  function markRead(id) { if (!isRead(id)) setS(p => ({...p, readPieces: [...p.readPieces, id]})); }
  function addNote() {
    if (!note.trim()) return;
    setS(p => ({...p, notes: [...p.notes, { id: Date.now().toString(), tid: thinker.id, pid: piece.id, text: note.trim(), date: new Date().toISOString() }]}));
    setNote("");
  }
  function delNote(id) { setS(p => ({...p, notes: p.notes.filter(n => n.id !== id)})); }
  function savePos() { setS(p => ({...p, position: pos})); }

  function goRead(t) { setThinker(t); setPiece(t.pieces[0]); setNote(""); setIframeErr({}); setView("read"); }
  function goPiece(p) { setPiece(p); setNote(""); }

  const sf = "Georgia, 'Source Serif 4', serif";
  const ss = "'DM Sans', 'Helvetica Neue', Helvetica, sans-serif";

  const tag = (bg, c) => ({ fontSize:10, padding:"2px 8px", borderRadius:4, background:bg, color:c, display:"inline-block" });
  const btn = { border:"1px solid #d4d2cb", borderRadius:6, background:"transparent", padding:"6px 14px", fontSize:12, cursor:"pointer", color:"#666", fontFamily:ss };
  const btnA = {...btn, border:"1px solid #0F6E56", background:"#E1F5EE", color:"#085041"};

  // HOME
  if (view === "home") return (
    <div style={{maxWidth:800,margin:"0 auto",padding:"1.5rem 1rem",fontFamily:ss}}>
      
      <h1 style={{fontFamily:sf,fontSize:22,fontWeight:400,letterSpacing:"-0.02em",margin:0}}>Supply chain aesthetics</h1>
      <div style={{fontSize:13,color:"#999",marginTop:4,marginBottom:"1.5rem"}}>Reading lab</div>
      <div style={{display:"flex",gap:16,fontSize:12,color:"#aaa",padding:"8px 0",borderBottom:"1px solid #eae8e2",marginBottom:"1.25rem"}}>
        <span>{s.notes.length} note{s.notes.length!==1?"s":""}</span>
        <span>{explored}/{THINKERS.length} explored</span>
        <span>{s.readPieces.length} piece{s.readPieces.length!==1?"s":""} read</span>
      </div>
      {THINKERS.map(t => {
        const p = prog(t); const ex = p > 0;
        return (
          <div key={t.id} onClick={() => goRead(t)} style={{border:"1px solid #eae8e2",borderRadius:8,padding:"14px 16px",marginBottom:10,cursor:"pointer",opacity:ex?1:0.55,transition:"opacity 0.15s"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
              <div>
                <div style={{fontSize:14,fontWeight:500}}>{t.name}{t.nameCn?` / ${t.nameCn}`:""}</div>
                <div style={{fontSize:12,color:"#aaa",marginTop:2}}>{t.tagline}</div>
              </div>
              <span style={tag(t.tagBg,t.tagColor)}>{t.tag}</span>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"#ccc",marginTop:6}}>
              <span>{t.pieces.length} piece{t.pieces.length!==1?"s":""}</span>
              {tNotes(t.id).length>0&&<span>{tNotes(t.id).length} note{tNotes(t.id).length!==1?"s":""}</span>}
            </div>
            <div style={{height:3,borderRadius:2,background:"#eae8e2",marginTop:8,overflow:"hidden"}}>
              <div style={{height:"100%",width:`${Math.round(p*100)}%`,background:"#0F6E56",borderRadius:2,transition:"width 0.3s"}}/>
            </div>
          </div>
        );
      })}
      <div style={{display:"flex",gap:8,marginTop:"1.5rem"}}>
        <button style={btn} onClick={()=>setView("notebook")}>All notes</button>
        <button style={btn} onClick={()=>setView("position")}>My position</button>
      </div>
    </div>
  );

  // NOTEBOOK
  if (view === "notebook") {
    const sorted = [...s.notes].sort((a,b) => new Date(b.date)-new Date(a.date));
    return (
      <div style={{maxWidth:800,margin:"0 auto",padding:"1.5rem 1rem",fontFamily:ss}}>
        
        <div style={{cursor:"pointer",fontSize:13,color:"#aaa",marginBottom:"1.5rem"}} onClick={()=>setView("home")}>&larr; Home</div>
        <h2 style={{fontFamily:sf,fontSize:18,fontWeight:400,margin:"0 0 1rem"}}>Notebook</h2>
        {sorted.length===0&&<div style={{fontSize:13,color:"#aaa"}}>No notes yet. Start reading and jot down ideas as you go.</div>}
        {sorted.map(n => {
          const th = THINKERS.find(t=>t.id===n.tid);
          const pc = th?.pieces.find(p=>p.id===n.pid);
          return (
            <div key={n.id} style={{borderBottom:"1px solid #eae8e2",padding:"12px 0"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                <div style={{fontSize:11,color:"#aaa"}}>{fmtDate(new Date(n.date))}{th&&<> &middot; {th.name}</>}{pc&&<> &middot; <i>{pc.title}</i></>}</div>
                {th&&<span style={tag(th.tagBg,th.tagColor)}>{th.tag}</span>}
              </div>
              <div style={{fontSize:14,lineHeight:1.65,fontFamily:sf,whiteSpace:"pre-wrap"}}>{n.text}</div>
              <button style={{...btn,fontSize:10,padding:"3px 8px",marginTop:6,color:"#c99",border:"1px solid #e0d0d0"}} onClick={()=>delNote(n.id)}>delete</button>
            </div>
          );
        })}
        <div style={{marginTop:"1.5rem"}}><button style={btn} onClick={()=>setView("position")}>My position</button></div>
      </div>
    );
  }

  // POSITION
  if (view === "position") return (
    <div style={{maxWidth:800,margin:"0 auto",padding:"1.5rem 1rem",fontFamily:ss}}>
      
      <div style={{cursor:"pointer",fontSize:13,color:"#aaa",marginBottom:"1.5rem"}} onClick={()=>setView("home")}>&larr; Home</div>
      <h2 style={{fontFamily:sf,fontSize:18,fontWeight:400,margin:"0 0 4px"}}>My position</h2>
      <div style={{fontSize:12,color:"#aaa",marginBottom:"1.5rem",lineHeight:1.5}}>A living draft \u2014 your evolving statement on supply chain aesthetics. What\u2019s your territory? Edit anytime.</div>
      <textarea value={pos} onChange={e=>setPos(e.target.value)} placeholder="What interests you about supply chain as artistic material? What\u2019s different about your approach? This is a working document." style={{width:"100%",minHeight:280,border:"1px solid #eae8e2",borderRadius:8,padding:16,fontSize:15,fontFamily:sf,lineHeight:1.7,resize:"vertical",outline:"none",boxSizing:"border-box"}}/>
      <div style={{marginTop:12,display:"flex",gap:8}}>
        <button style={btnA} onClick={savePos}>Save</button>
        <button style={btn} onClick={()=>setView("notebook")}>View notebook</button>
      </div>
    </div>
  );

  // READING
  if (view === "read" && thinker && piece) {
    const idx = thinker.pieces.indexOf(piece);
    const next = thinker.pieces[idx+1];
    const prev = thinker.pieces[idx-1];
    const pNotes = s.notes.filter(n=>n.tid===thinker.id);
    const hasIframeError = iframeErr[piece.id];

    return (
      <div style={{maxWidth:1000,margin:"0 auto",padding:"1.5rem 1rem",fontFamily:ss}}>
        
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}}>
          <div style={{cursor:"pointer",fontSize:13,color:"#aaa"}} onClick={()=>setView("home")}>&larr; {thinker.name}{thinker.nameCn?` / ${thinker.nameCn}`:""}</div>
          <span style={{fontSize:11,color:"#ccc"}}>{idx+1} / {thinker.pieces.length}</span>
        </div>

        {/* Piece tabs */}
        <div style={{display:"flex",gap:0,borderBottom:"1px solid #eae8e2",marginBottom:"1.25rem",overflowX:"auto"}}>
          {thinker.pieces.map((p,i) => (
            <button key={p.id} onClick={()=>goPiece(p)} style={{padding:"8px 14px",fontSize:12,border:"none",background:"transparent",cursor:"pointer",color:p.id===piece.id?"#222":"#ccc",borderBottom:p.id===piece.id?"2px solid #222":"2px solid transparent",marginBottom:-1,fontFamily:ss,whiteSpace:"nowrap"}}>
              {i+1}. {p.title.length>28?p.title.slice(0,28)+"\u2026":p.title}{isRead(p.id)?" \u2713":""}
            </button>
          ))}
        </div>

        {/* Main layout */}
        <div style={{display:"flex",gap:24,alignItems:"flex-start",flexWrap:"wrap"}}>
          {/* Content column */}
          <div style={{flex:"2 1 420px",minWidth:0}}>
            {/* Curator note */}
            <div style={{borderLeft:"3px solid #D85A30",padding:"12px 16px",marginBottom:"1.25rem",background:"#faf8f5",borderRadius:"0 6px 6px 0"}}>
              <div style={{fontSize:10,color:"#b0a090",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4}}>Curator\u2019s note</div>
              <div style={{fontSize:13,lineHeight:1.6,color:"#665"}}>{piece.curatorNote}</div>
            </div>

            {/* Title */}
            <h3 style={{fontFamily:sf,fontSize:20,fontWeight:400,margin:"0 0 4px"}}>{piece.title}</h3>
            <div style={{fontSize:12,color:"#aaa",marginBottom:16}}>
              {piece.subtitle} &middot; {piece.time}{piece.source?<> &middot; via {piece.source}</>:""}
            </div>

            {/* YOUTUBE */}
            {piece.type==="youtube"&&piece.youtubeId&&(
              <div style={{position:"relative",paddingBottom:"56.25%",height:0,marginBottom:16,borderRadius:8,overflow:"hidden",background:"#f0ede6"}}>
                <iframe src={`https://www.youtube.com/embed/${piece.youtubeId}`} style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"}} allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowFullScreen title={piece.title}/>
              </div>
            )}

            {/* IFRAME (essay/article embedded) */}
            {piece.type==="iframe"&&!hasIframeError&&(
              <div style={{marginBottom:16}}>
                <div style={{border:"1px solid #eae8e2",borderRadius:8,overflow:"hidden",height:500,position:"relative"}}>
                  <iframe
                    src={piece.iframeUrl}
                    style={{width:"100%",height:"100%",border:"none"}}
                    title={piece.title}
                    sandbox="allow-same-origin allow-scripts allow-popups"
                    onError={()=>setIframeErr(p=>({...p,[piece.id]:true}))}
                  />
                </div>
                <div style={{fontSize:11,color:"#bbb",marginTop:6,display:"flex",justifyContent:"space-between"}}>
                  <span>Reading in-app</span>
                  <a href={piece.fallbackUrl} target="_blank" rel="noopener noreferrer" style={{color:"#999",fontSize:11}}>Open in new tab instead &rarr;</a>
                </div>
              </div>
            )}

            {/* IFRAME FALLBACK or LINK */}
            {(piece.type==="link"||(piece.type==="iframe"&&hasIframeError))&&(
              <div style={{border:"1px solid #eae8e2",borderRadius:8,padding:"24px",textAlign:"center",marginBottom:16}}>
                {piece.type==="iframe"&&hasIframeError&&<div style={{fontSize:11,color:"#c99",marginBottom:8}}>This source doesn\u2019t allow in-app reading.</div>}
                <div style={{fontSize:14,fontWeight:500,marginBottom:4,fontFamily:sf}}>{piece.title}</div>
                <div style={{fontSize:12,color:"#aaa",marginBottom:14}}>{piece.time}</div>
                <a href={piece.url||piece.fallbackUrl} target="_blank" rel="noopener noreferrer" style={{...btn,textDecoration:"none",display:"inline-block"}}>Open &rarr;</a>
                {piece.altLinks&&(
                  <div style={{fontSize:11,color:"#ccc",marginTop:10}}>
                    Also: {piece.altLinks.map((l,i) => <span key={i}>{i>0?" \u00b7 ":""}<a href={l.url} target="_blank" rel="noopener noreferrer" style={{color:"#aaa"}}>{l.label}</a></span>)}
                  </div>
                )}
              </div>
            )}

            {/* Bottom actions */}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:12,borderTop:"1px solid #eae8e2",flexWrap:"wrap",gap:8}}>
              <div style={{display:"flex",gap:8}}>
                {prev&&<button style={btn} onClick={()=>goPiece(prev)}>&larr; Prev</button>}
                <button style={isRead(piece.id)?btnA:btn} onClick={()=>markRead(piece.id)}>{isRead(piece.id)?"\u2713 Read":"Mark as read"}</button>
              </div>
              {next&&<button style={btn} onClick={()=>goPiece(next)}>Next: {next.title.length>20?next.title.slice(0,20)+"\u2026":next.title} &rarr;</button>}
            </div>
          </div>

          {/* Notes column */}
          <div style={{flex:"1 1 240px",minWidth:200}}>
            <div style={{border:"1px solid #eae8e2",borderRadius:8,padding:14,position:"sticky",top:16}}>
              <div style={{fontSize:12,fontWeight:500,color:"#999",marginBottom:8}}>Notes</div>
              <textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Jot ideas, fragments, questions\u2026" style={{width:"100%",minHeight:100,border:"1px solid #eae8e2",borderRadius:6,padding:10,fontSize:13,fontFamily:sf,lineHeight:1.6,resize:"vertical",outline:"none",boxSizing:"border-box",marginBottom:8}}/>
              <button style={note.trim()?btnA:btn} onClick={addNote} disabled={!note.trim()}>Save note</button>
              {pNotes.length>0&&(
                <div style={{marginTop:16,borderTop:"1px solid #eae8e2",paddingTop:12}}>
                  <div style={{fontSize:11,color:"#ccc",marginBottom:8}}>Notes on {thinker.name}:</div>
                  {pNotes.slice(-5).reverse().map(n => {
                    const pc = thinker.pieces.find(p=>p.id===n.pid);
                    return (
                      <div key={n.id} style={{background:"#f8f7f4",padding:"8px 10px",borderRadius:6,marginBottom:6,fontSize:12,lineHeight:1.5,color:"#777",fontFamily:sf,whiteSpace:"pre-wrap"}}>
                        <div style={{fontSize:10,color:"#ccc",marginBottom:3}}>{fmtDate(new Date(n.date))}{pc?` \u00b7 ${pc.title}`:""}</div>
                        {n.text.length>150?n.text.slice(0,150)+"\u2026":n.text}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
