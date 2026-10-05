// Portrait of a State Education Agency — interactive graphic (native)
const { useState, useEffect, useRef, useLayoutEffect } = React;
// v2 — "Flip the System" synthesis animation: the level stack rotates 180°,
// labels counter-rotate to stay upright, copy cross-fades Today ↔ The Future.

const FLIP_CX = 985.7, FLIP_CY = 593.5;
const ART = (typeof window !== 'undefined' && window.SEA_FLIP_ART) || {};

function KeepUp({ ox, oy, children, className }) {
  // stays upright; slides to its mirrored height (same end state as a 180° rotation of the stack)
  const dy = 2 * (FLIP_CY - oy);
  return (
    <g className={'fa-keep ' + (className || '')} style={{ '--fdy': dy + 'px' }}>{children}</g>);

}

// Band bounding boxes (center y, width, height) for band0/1/2
const BANDS = [{ c: 249, w: 958, h: 202.8 }, { c: 467.45, w: 898.2, h: 233.5 }, { c: 680.25, w: 840.2, h: 192.7 }];
const BAND_CLS = ['fa-band-a', 'fa-band-b', 'fa-band-c'];
const bandD = (i) => i === 2 ? (ART.band2 || '') : (ART['band' + i] || '') + 'Z';
const tf = (ty, sx, sy) => 'translate(0px,' + ty + 'px) scale(' + sx + ',' + sy + ')';

// Each slot stays put: its tile flips on a horizontal axis and resizes into the tile that ends there.
function FlipSlot({ k }) {
  const f = BANDS[k], j = 2 - k, b = BANDS[j];
  const target = 2 * FLIP_CY - b.c;
  const vars = {
    '--d': k * 0.08 + 's',
    '--f0': tf(0, 1, 1), '--f1': tf(target - f.c, b.w / f.w, -b.h / f.h),
    '--b0': tf(f.c - b.c, f.w / b.w, f.h / b.h), '--b1': tf(target - b.c, 1, -1)
  };
  return (
    <g style={vars}>
      <path className={'fa-band fa-tile fa-front ' + BAND_CLS[k]} d={bandD(k)}></path>
      <path className={'fa-band fa-tile fa-back ' + BAND_CLS[j]} d={bandD(j)}></path>
    </g>);

}

function FlipArrow({ y }) {
  const a = y + 22.1;
  return <path className="fa-arrow fa-tile fa-arw" style={{ '--f0': tf(0, 1, 1), '--f1': tf(2 * FLIP_CY - 2 * a, 1, -1) }} d={'M985.7,' + y + 'v44.2M985.7,' + (y + 44.2) + 'l10.2-10.2M985.7,' + (y + 44.2) + 'l-10.2-10.2'}></path>;
}

function LevelText({ cy, today, future }) {
  return (
    <KeepUp ox={1080} oy={cy}>
      <g transform={'translate(800 ' + cy + ')'}>
        <g className="fa-s1">
          <text className="fa-lvl" y={today.sub.length > 1 ? -34 : -8}>{today.title}</text>
          {today.sub.map(function (t, i) { return <text className="fa-sub" key={i} y={(today.sub.length > 1 ? 14 : 40) + i * 46}>{t}</text>; })}
        </g>
        <g className="fa-s2">
          <text className="fa-lvl" y={future.sub.length > 1 ? -34 : -8}>{future.title}</text>
          {future.sub.map(function (t, i) { return <text className="fa-sub" key={i} y={(future.sub.length > 1 ? 14 : 40) + i * 46}>{t}</text>; })}
        </g>
      </g>
    </KeepUp>);

}

function CapitolIcon() {
  return (
    <g>
      <path className="fa-st1" d="M683.6,683.3c0-.2,0-.4,0-.7,0-21.6,14.2-39.2,31.7-39.2s31.7,17.5,31.7,39.2"></path>
      <path className="fa-st1" d="M704.2,655.6c-5.7,4.3-10,11.7-11.4,20.5"></path>
      <path className="fa-st1" d="M726.3,655.6c5.7,4.3,10,11.7,11.4,20.5"></path>
      <path className="fa-st1" d="M711.1,657.9s-3.7,7.7-3.7,18.2"></path>
      <path className="fa-st1" d="M719.5,657.9s3.7,7.7,3.7,18.2"></path>
      <path className="fa-st1" d="M710.9,643.2v-11.5c0-2.4,1.9-8.7,4.3-8.7h0c2.4,0,4.3,6.3,4.3,8.7v11.5"></path>
      <line className="fa-st1" x1="684.5" y1="676.6" x2="700" y2="676.6"></line>
      <line className="fa-st1" x1="731" y1="676.6" x2="746.5" y2="676.6"></line>
      <path className="fa-st5" d="M756.8,685.8v4.4h-83.1v-4.4h83.1ZM757.5,683.3h-84.4c-1,0-1.8.8-1.8,1.8v5.8c0,1,.8,1.8,1.8,1.8h84.4c1,0,1.8-.8,1.8-1.8v-5.8c0-1-.8-1.8-1.8-1.8h0Z"></path>
      <path className="fa-st5" d="M762.4,728v4.4h-94.2v-4.4h94.2ZM763.1,725.5h-95.6c-1,0-1.8.8-1.8,1.8v5.8c0,1,.8,1.8,1.8,1.8h95.6c1,0,1.8-.8,1.8-1.8v-5.8c0-1-.8-1.8-1.8-1.8h0Z"></path>
      <line className="fa-st1" x1="679.5" y1="692.3" x2="679.5" y2="725.8"></line>
      <line className="fa-st1" x1="693.8" y1="692.3" x2="693.8" y2="725.8"></line>
      <line className="fa-st1" x1="708.1" y1="692.3" x2="708.1" y2="725.8"></line>
      <line className="fa-st1" x1="722.4" y1="692.3" x2="722.4" y2="725.8"></line>
      <line className="fa-st1" x1="736.7" y1="692.3" x2="736.7" y2="725.8"></line>
      <line className="fa-st1" x1="751" y1="692.3" x2="751" y2="725.8"></line>
    </g>);

}

function StatehouseIcon() {
  return (
    <g>
      <path className="fa-st5" d="M751.2,446.4v4.4h-83.1v-4.4h83.1ZM751.9,443.9h-84.4c-1,0-1.8.8-1.8,1.8v5.8c0,1,.8,1.8,1.8,1.8h84.4c1,0,1.8-.8,1.8-1.8v-5.8c0-1-.8-1.8-1.8-1.8h0Z"></path>
      <path className="fa-st5" d="M751.2,500.3v4.4h-83.1v-4.4h83.1ZM751.9,497.8h-84.4c-1,0-1.8.8-1.8,1.8v5.8c0,1,.8,1.8,1.8,1.8h84.4c1,0,1.8-.8,1.8-1.8v-5.8c0-1-.8-1.8-1.8-1.8h0Z"></path>
      <line className="fa-st1" x1="677.2" y1="452.7" x2="677.2" y2="498.2"></line>
      <line className="fa-st1" x1="742.2" y1="452.7" x2="742.2" y2="498.2"></line>
      <line className="fa-st1" x1="729.3" y1="461.2" x2="729.3" y2="498.2"></line>
      <line className="fa-st1" x1="690.1" y1="461.2" x2="690.1" y2="498.2"></line>
      <path className="fa-st1" d="M702.9,497.6v-29.1c0-3.7,3-6.8,6.8-6.8h0c3.7,0,6.8,3,6.8,6.8v29.1"></path>
      <polyline className="fa-st1" points="741.9 445.1 709.7 424.7 677.5 445.1"></polyline>
      <circle className="fa-st1" cx="709.7" cy="437.2" r="3.4"></circle>
    </g>);

}

function SchoolIcon() {
  return (
    <g>
      <rect className="fa-st1" x="668.6" y="230.6" width="88.1" height="9.4" rx="1.8" ry="1.8"></rect>
      <line className="fa-st1" x1="673.8" y1="240.1" x2="673.8" y2="279.9"></line>
      <line className="fa-st1" x1="751.5" y1="240.1" x2="751.5" y2="280"></line>
      <path className="fa-st1" d="M705.9,280.4v-21.5c0-3.7,3-6.8,6.8-6.8h0c3.7,0,6.8,3,6.8,6.8v21.5"></path>
      <line className="fa-st1" x1="665.7" y1="280.4" x2="759.7" y2="280.4"></line>
      <rect className="fa-st1" x="683" y="250.2" width="13" height="21.7"></rect>
      <line className="fa-st1" x1="683.5" y1="259.5" x2="695.4" y2="259.5"></line>
      <rect className="fa-st1" x="729.6" y="250.2" width="13" height="21.7"></rect>
      <line className="fa-st1" x1="730.8" y1="259.5" x2="742" y2="259.5"></line>
      <polyline className="fa-st1" points="701.9 229.8 701.9 216.8 712.7 207.8 723.4 216.8 723.4 229.8"></polyline>
    </g>);

}

function FlipScene() {
  const [flipped, setFlipped] = useState(false);
  const students = ART.students || [];
  return (
    <div className={'flip-anim' + (flipped ? ' flipped' : '')}>
      <div className="flip-stage">
        <svg viewBox="0 0 1920 1080" className="flip-svg" role="img" aria-label={flipped ? 'The Future: local level on top, federal level at the base supporting it' : 'Today: federal level on top, mandates flowing down to students'}>
          <rect x="0" y="0" width="1920" height="1080" fill="#071730"></rect>
          <image href={(window.__resources && window.__resources.ribbonBg) || 'imgs/back.webp'} x="-120" y="240" width="1300" height="1280" opacity="0.5" preserveAspectRatio="xMidYMax slice"></image>

          <g className="fa-static">
            <g className="fa-s1">
              <text className="fa-eyebrow" x="123" y="145">THE LANDSCAPE</text>
              <text className="fa-title" x="120" y="256">Today</text>
            </g>
            <g className="fa-s2">
              <text className="fa-eyebrow" x="123" y="145">A VISION FOR</text>
              <text className="fa-title" x="120" y="256">The Future</text>
            </g>
            <g className="fa-s1 fa-problems">
              <text className="fa-plabel" x="1412" y="712">PROBLEMS</text>
              {['Remote Decision Makers', 'One Size Fits All', 'Inputs &amp; Process Focus', '“Firefly” examples', 'Deficit thinking dominates'].map(function (t, i) {
                const y = [761, 817, 873, 929, 985][i];
                return (
                  <g key={i}>
                    <circle className="fa-dot" cx="1431.8" cy={y - 8} r="4.2"></circle>
                    <text className="fa-pitem" x="1462" y={y}>{t.replace('&amp;', '&')}</text>
                  </g>);

              })}
            </g>
          </g>

          <g className="fa-rot">
            <FlipSlot k={0} /><FlipSlot k={1} /><FlipSlot k={2} />
            <FlipArrow y={330.3} /><FlipArrow y={564.7} /><FlipArrow y={757.2} />

            <KeepUp ox={712} oy={244}><g transform="translate(2 -435)"><CapitolIcon /></g></KeepUp>
            <KeepUp ox={710} oy={466}><StatehouseIcon /></KeepUp>
            <KeepUp ox={713} oy={679}><g transform="translate(0 435)"><SchoolIcon /></g></KeepUp>

            <LevelText cy={244}
              today={{ title: 'FEDERAL LEVEL', sub: ['Policies & Mandates'] }}
              future={{ title: 'FEDERAL LEVEL', sub: ['Funding, Research & Incentives'] }} />
            <LevelText cy={466}
              today={{ title: 'STATE LEVEL', sub: ['Curriculum & Testing'] }}
              future={{ title: 'STATE LEVEL', sub: ['All About Outcomes: Identifying', 'Proven Options and Capacity Building'] }} />
            <LevelText cy={679}
              today={{ title: 'LOCAL LEVEL', sub: ['Regulatory Burden'] }}
              future={{ title: 'LOCAL LEVEL', sub: ['Coaching & Direct Support', 'Adopting proven approaches'] }} />

            <KeepUp ox={985} oy={935} className="fa-students">
              {students.map(function (d, i) { return <path className="fa-st5" key={i} d={d}></path>; })}
            </KeepUp>
          </g>
        </svg>
      </div>
      <div className="flip-controls">
        <button className="flip-btn" onClick={() => setFlipped(!flipped)} aria-pressed={flipped}>
          <span className="flip-ico" aria-hidden="true">⟲</span><span>Flip</span>
        </button>
        <span className="flip-state">{flipped ? 'The Future — local capacity on top, the system supporting it' : 'Today — mandates flow down from the federal level'}</span>
      </div>
    </div>);

}

Object.assign(window, { FlipScene });


// Shared UI parts: header, hero, intro trio, AI chip/modal, CTA band, footer

function AIChip({ onClick, label }) {
  return (
    <button className="ai-chip" onClick={onClick} aria-label={'AI details: ' + (label || '')}>
      <span className="spark">✦</span><span>AI</span>
    </button>);

}

function AIModal({ context, onClose }) {
  useEffect(() => {
    const onKey = (e) => {if (e.key === 'Escape') onClose();};
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (!context) return null;
  const AI = window.SEA_AI || { competency: {}, section: {} };
  const isComp = context.type === 'competency';
  const data = isComp ? AI.competency[context.num] : AI.section[context.num];
  const accent = context.area ? context.area.color : '#2fb2ff';
  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal-card ai-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-eyebrow">
          <span className="ai-chip" style={{ cursor: 'default' }}><span className="spark">✦</span><span>AI</span></span>
          <span className="modal-context">{isComp ? 'Competency ' + context.num + ' · AI opportunities' : (context.area ? context.area.title : '') + ' · AI overview'}</span>
        </div>
        {!data ? (
          <p className="modal-lead">AI-enablement content for this item is coming soon.</p>
        ) : isComp ? (
          <React.Fragment>
            <h3>{data.title}</h3>
            <div className="ai-cols">
              <div className="ai-col">
                <div className="ai-col-head" style={{ '--accent': accent }}>Near-term possibilities</div>
                <ul className="ai-list">{data.near.map(function (x, i) { return <li key={i}>{x}</li>; })}</ul>
                {data.nearEx && data.nearEx.length ? (
                  <div className="ai-prompt"><span className="ai-prompt-tag">Example prompt</span>{data.nearEx.map(function (x, i) { return <p key={i}>{x}</p>; })}</div>
                ) : null}
              </div>
              <div className="ai-col">
                <div className="ai-col-head" style={{ '--accent': accent }}>Emerging possibilities</div>
                <ul className="ai-list">{data.emerging.map(function (x, i) { return <li key={i}>{x}</li>; })}</ul>
                {data.emergEx && data.emergEx.length ? (
                  <div className="ai-prompt"><span className="ai-prompt-tag">Example prompt</span>{data.emergEx.map(function (x, i) { return <p key={i}>{x}</p>; })}</div>
                ) : null}
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3 style={{ fontSize: '16px', lineHeight: 1 }}>How this changes your work</h3>
            <p className="modal-lead">{data.how}</p>
            {data.examples && data.examples.length ? (
              <div className="ai-examples">
                {data.examples.map(function (x, i) {
                  return <div className="ai-example" key={i} style={{ '--accent': accent }}><span className="ai-example-n">Example {i + 1}</span><p>{x}</p></div>;
                })}
              </div>
            ) : null}
            {data.build && data.build.length ? (
              <div className="ai-build">
                {data.build.map(function (g, i) {
                  return (
                    <div className="ai-build-group" key={i}>
                      <div className="ai-build-label">{g.label}</div>
                      <ul className="ai-list">{g.items.map(function (it, k) { return <li key={k}>{it}</li>; })}</ul>
                    </div>);
                })}
              </div>
            ) : null}
          </React.Fragment>
        )}
      </div>
    </div>);

}

function ResourcesChip({ onClick, label, flagged }) {
  return (
    <button className={'res-chip' + (flagged ? ' flagged' : '')} onClick={onClick} aria-label={'Resources: ' + (label || '')}>
      <span className="plus">+</span><span>RESOURCES</span>
    </button>);

}

function SynthesisChip({ onClick, label }) {
  return (
    <button className="res-chip synth-chip" onClick={onClick} aria-label={'Synthesis: ' + (label || '')}>
      <svg className="venn" viewBox="0 0 24 16" aria-hidden="true"><path d="M12 3.2A6 6 0 0 1 12 12.8 6 6 0 0 1 12 3.2Z" fill="currentColor"></path><circle cx="9" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="2"></circle><circle cx="15" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="2"></circle></svg><span>SYNTHESIS</span>
    </button>);

}

function ImageModal({ data, onClose }) {
  useEffect(() => {
    const onKey = (e) => {if (e.key === 'Escape') onClose();};
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (!data) return null;
  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal-card image-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-eyebrow">
          <span className="res-chip synth-chip" style={{ cursor: 'default' }}><svg className="venn" viewBox="0 0 24 16" aria-hidden="true"><path d="M12 3.2A6 6 0 0 1 12 12.8 6 6 0 0 1 12 3.2Z" fill="currentColor"></path><circle cx="9" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="2"></circle><circle cx="15" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="2"></circle></svg><span>SYNTHESIS</span></span>
        </div>
        <h3>{data.title}</h3>
        {data.flip ? <FlipScene /> : null}
        <div className="image-modal-stack">
          {(data.images || []).map(function (im, i) {
            return (
              <figure className="image-modal-frame" key={i}>
                <img src={(im.key && window.__resources && window.__resources[im.key]) || im.src} alt={'Synthesis diagram — ' + data.title + (im.cap ? ' ' + im.cap : '')} />
                {im.cap ? <figcaption>{im.cap}</figcaption> : null}
              </figure>);

          })}
        </div>
      </div>
    </div>);

}

function InfoModal({ data, onClose }) {
  useEffect(() => {
    const onKey = (e) => {if (e.key === 'Escape') onClose();};
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (!data) return null;
  const items = data.items || [];
  const anyFlagged = items.some(function (it) { return it.flagged; });
  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal-card" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-eyebrow">
          <span className="res-chip" style={{ cursor: 'default' }}><span className="plus">+</span><span>RESOURCES</span></span>
          <span className="modal-context">Related materials</span>
        </div>
        <h3>{data.title}</h3>
        <ul className="res-list">
          {items.map(function (it, i) {
            return (
              <li key={i}>
                <a href={it.u} target="_blank" rel="noopener noreferrer" className={it.flagged ? 'res-flagged' : ''}>
                  <span className="res-title">{it.t}</span>
                  {it.flagged ? <span className="res-review">Needs review</span> : null}
                  <span className="res-arrow" aria-hidden="true">↗</span>
                </a>
              </li>);

          })}
        </ul>
        {anyFlagged ? (
          <p className="res-note">Links marked “Needs review” may be outdated or unavailable.</p>
        ) : null}
      </div>
    </div>);

}

function logoSrc() {
  return (window.__resources && window.__resources.hooverLogo) || 'uploads/logo-1781291739891.png';
}

function ConfidentialBanner() {
  return (
    <div className="confidential-banner" role="note">
      <p>
        <strong>CONFIDENTIAL PREVIEW — EMBARGOED</strong>
        <span>Welcome! This site is shared exclusively with participants of the July 2026 State Chiefs Meeting. The Portrait of an SEA has not yet been publicly released.</span>
      </p>
    </div>);

}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <img className="brand-logo" src={logoSrc()} alt="Hoover Institution" />
        <span className="brand-divider"></span>
        <span className="brand-council">The Education Futures Council</span>
      </div>
    </header>);

}

function Hero() {
  return (
    <div className="hero wrap">
      <p className="eyebrow">Presenting</p>
      <h1>Portrait of a<br />State Education Agency</h1>
      <a className="pill-btn" href="https://educationfuturescouncil.com/SEA/PortraitofanSEA_Overview.pdf" target="_blank" rel="noopener noreferrer">Download full summary</a>
    </div>);

}

function richText(parts) {
  return parts.map(function (p, i) {
    return typeof p === 'string' ? <span key={i}>{p}</span> : <strong key={i}>{p.b}</strong>;
  });
}

// Height-animated expanding panel; keeps last content mounted while collapsing.
function AnimatedPanel({ intro, open, onClose }) {
  const outerRef = useRef(null);
  const clipRef = useRef(null);
  const settleT = useRef(null);
  const lastRef = useRef(null);
  if (open && intro) lastRef.current = intro;
  const shown = open ? intro : lastRef.current;

  useEffect(function () {
    const outer = outerRef.current, clip = clipRef.current;
    if (!outer || !clip) return;
    clearTimeout(settleT.current);
    outer.style.height = outer.getBoundingClientRect().height + 'px';
    void outer.offsetHeight; // commit start value
    if (open) {
      outer.style.height = clip.scrollHeight + 'px';
      settleT.current = setTimeout(function () { outer.style.height = 'auto'; }, 500);
    } else {
      outer.style.height = '0px';
    }
  }, [open]);
  useEffect(function () { return function () { clearTimeout(settleT.current); }; }, []);

  return (
    <div ref={outerRef} className={'overview-panel-outer' + (open ? ' open' : '')}>
      <div ref={clipRef} className="overview-panel-clip">
        <div className="overview-panel">
          {shown ? <OverviewPanel intro={shown} /> : null}
          {shown ? (
            <div className="panel-close-row">
              <button className="panel-close-btn" onClick={onClose}>
                <span className="tri">▲</span><span>Close {shown.panelTitle || 'panel'}</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>);

}

function IntroSection() {
  const [open, setOpen] = useState(null); // intro id or null
  const [narrow, setNarrow] = useState(
    typeof window !== 'undefined' && window.matchMedia('(max-width: 920px)').matches);
  const intros = window.SEA_DATA.intros;
  const current = intros.find(function (x) {return x.id === open;});
  const colRefs = useRef({});

  function handleClose(id) {
    setOpen(null);
    requestAnimationFrame(function () {
      const el = colRefs.current[id];
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  }

  useEffect(function () {
    const mq = window.matchMedia('(max-width: 920px)');
    const fn = function () { setNarrow(mq.matches); };
    mq.addEventListener('change', fn);
    return function () { mq.removeEventListener('change', fn); };
  }, []);

  return (
    <section data-screen-label="Intro">
      <div className="intro-grid wrap">
        {intros.map(function (intro) {
          const isOpen = open === intro.id;
          return (
            <div key={intro.id} ref={(el) => { colRefs.current[intro.id] = el; }} className={'intro-col' + (open && !isOpen ? ' dimmed' : '')}>
              <h3>{intro.title}</h3>
              <p>{richText(intro.teaser)}</p>
              <button className="pill-btn" onClick={() => setOpen(isOpen ? null : intro.id)}>
                <span className="tri">{isOpen ? '▲' : '▼'}</span>
                <span>{isOpen ? 'Read less' : 'Read more'}</span>
              </button>
              {/* mobile: panel expands inline directly under this button */}
              {narrow ? <AnimatedPanel intro={intro} open={isOpen} onClose={() => handleClose(intro.id)} /> : null}
            </div>);

        })}
      </div>
      {/* desktop: single shared panel below the trio */}
      {!narrow ? <AnimatedPanel intro={current} open={!!current} onClose={() => handleClose(open)} /> : null}
    </section>);

}

function RichParas({ paras }) {
  return paras.map(function (p, i) {
    return <p key={i}>{Array.isArray(p) ? richText(p) : p}</p>;
  });
}

function OverviewPanel({ intro }) {
  if (intro.layout === 'howto') return <HowToPanel intro={intro} />;
  return (
    <div className={'overview-inner wrap layout-' + intro.layout + ((window.__resources && window.__resources[intro.thumbKey]) ? '' : ' no-thumb')} key={intro.id}>
      {window.__resources && window.__resources[intro.thumbKey] ?
      <div className="panel-thumb">
        <img src={window.__resources[intro.thumbKey]} alt="SEA Change" draggable="false" />
      </div> : null}
      <div className="overview-text">
        {intro.eyebrow ? <p className="eyebrow">{intro.eyebrow}</p> : null}
        <h2>{intro.panelTitle}</h2>
        <RichParas paras={intro.paras} />
        {intro.list ? <p className="list-label">{intro.listLabel}</p> : null}
        {intro.list ?
        <ul className="commitments">
            {intro.list.map(function (item, i) {
            return <li key={i}><span className="n">{i + 1}</span><span>{Array.isArray(item) ? richText(item) : item}</span></li>;
          })}
          </ul> :
        null}
      </div>
    </div>);

}

function HowToPanel({ intro }) {
  const L = intro.left, R = intro.right;
  return (
    <div className="overview-inner wrap layout-howto" key={intro.id}>
      <h2 className="howto-title">{intro.panelTitle}</h2>
      <div className="howto-cols">
        <div className="howto-left">
          <RichParas paras={L.paras} />
          <p className="howto-sublabel">{L.listLabel}</p>
          <ul className="howto-bullets">
            {L.list.map(function (item, i) {
              return <li key={i}>{Array.isArray(item) ? richText(item) : item}</li>;
            })}
          </ul>
          <p>{richText(L.closing)}</p>
        </div>
        <div className="howto-right">
          <p className="howto-rlabel">{R.label}</p>
          {R.cards.map(function (card, i) {
            return (
              <div className="howto-card" key={i}>
                {card.chip === 'ai' ?
                <span className="ai-chip" style={{ cursor: 'default' }}><span className="spark">✦</span><span>AI</span></span> :
                <span className="res-chip" style={{ cursor: 'default' }}><span className="plus">+</span><span>RESOURCES</span></span>}
                <p><strong>{card.title}</strong> {card.text}</p>
              </div>);

          })}
          <p>{richText(R.closing)}</p>
        </div>
      </div>
    </div>);

}

function CTABand() {
  const colors = window.SEA_DATA.areas.map(function (a) {return a.color;});
  return (
    <section className="cta-band" data-screen-label="CTA">
      <div className="wrap">
        <div className="cta-swatches">
          {colors.map(function (c, i) {return <span key={i} style={{ background: c }}></span>;})}
        </div>
        <p>Reach out to learn more. We'll be happy to answer questions, conduct workshops, or work with you to address any unique challenges you may have in your area.</p>
        <a className="cta-btn" href="mailto:mcotter@stanford.edu?subject=SEA%20Portrait%20Questions">Contact Us</a>
      </div>
    </section>);

}

function SiteFooter() {
  const links = ['Home', 'Bibliography', 'Download', 'Hoover Education', 'Accessibility', 'Contact'];
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="wrap">
        <div className="brand-row">
          <img className="brand-logo" src={logoSrc()} alt="Hoover Institution" />
          <span className="brand-divider"></span>
          <span className="brand-council">The Education Futures Council</span>
        </div>
        <nav className="footer-nav">
          {links.map(function (l) {
            return <a key={l} href="#" onClick={(e) => e.preventDefault()}>{l}</a>;
          })}
        </nav>
        <div className="footer-legal">
          <p className="disclaimer">
            The opinions expressed on this website are those of the authors and do not necessarily reflect the opinions of the Hoover Institution or Stanford University.
            <br />© 2025 by the Board of Trustees of Leland Stanford Junior University.
          </p>
          <span className="links">
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span>|</span>
            <a href="#" onClick={(e) => e.preventDefault()}>Sitemap (XML)</a>
          </span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { AIChip, AIModal, ResourcesChip, SynthesisChip, ImageModal, InfoModal, SiteHeader, ConfidentialBanner, Hero, IntroSection, CTABand, SiteFooter });

// Layered ribbon diagram (R8) — full-bleed background image + transparent center
// art (cables+building+icons) + per-cable spotlight overlays for clean dimming.

// Brighter neon variants for hotspot rings + mobile chips.
const NEON = {
  organize: '#3FA9F5', flip: '#FF5FA2', professionalism: '#FF8A3D',
  safe: '#FFD23F', operations: '#9B6DFF', vision: '#34D399',
};

// Icon-badge centres as % of the element frame (2161×2121).
const RIBBON_ICONS = {
  organize: { x: 8.7, y: 71.8 }, flip: { x: 24.5, y: 72.1 }, professionalism: { x: 40.9, y: 71.8 },
  safe: { x: 57.0, y: 71.8 }, operations: { x: 73.0, y: 71.9 }, vision: { x: 89.1, y: 71.8 },
};
// base paint order (approx original weave); selected cable is raised to the top.
const RIBBON_Z = { organize: 11, flip: 12, professionalism: 13, safe: 14, operations: 15, vision: 16 };

function res(key, fallback) {
  return (window.__resources && window.__resources[key]) || fallback;
}

// ---------- Primary: layered ribbon stage (per-element bright/fade pairs) ----------
function BraidStage({ selected, onSelect, compact }) {
  const areas = window.SEA_DATA.areas;
  const stageRef = useRef(null);
  // Lock the back edge of the disc under the building to the page background's horizon (horizon sits at 0.4334 × page width;
  // the disc's top edge is 0.283 of the art frame height). Art width is 69% of the stage.
  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const place = () => {
      const W = document.documentElement.clientWidth;
      const pageBg = el.closest('[data-screen-label="SEA Change Tool"]');
      if (W < 760) { el.style.removeProperty('--art-top'); el.style.removeProperty('height'); if (pageBg) { pageBg.style.background = ''; } return; }
      const stageTop = el.getBoundingClientRect().top + window.scrollY;
      const artW = Math.min(el.clientWidth * 0.69, 813);
      const artH = artW * 2121 / 2161;
      const horizon = W * 0.4334;
      const raw = horizon - artH * 0.283 - stageTop;
      const artTop = Math.max(raw, 24);
      // Content above the stage (intro trio) pushes the stage down; slide the page background down with it.
      if (pageBg) {
        const s = Math.round(artTop - raw);
        // gradient layer fades the image's top edge into the page navy so there is no seam
        pageBg.style.background = s > 0
          ? 'linear-gradient(#071932, rgba(7,25,50,0)) center ' + s + 'px / 100% 240px no-repeat, url(assets/sea-scene.webp) center ' + s + 'px / 100% auto no-repeat, #071932'
          : '';
      }
      el.style.setProperty('--art-top', artTop + 'px');
      el.style.height = Math.max(artTop + artH + 8, 200) + 'px';
    };
    place();
    const t = setTimeout(place, 300);
    window.addEventListener('resize', place);
    const ro = new ResizeObserver(place);
    if (el.previousElementSibling) ro.observe(el.previousElementSibling);
    const sec = el.closest('.diagram-section');
    if (sec && sec.previousElementSibling) ro.observe(sec.previousElementSibling);
    return () => { clearTimeout(t); ro.disconnect(); window.removeEventListener('resize', place); };
  }, []);
  return (
    <div ref={stageRef} className={'ribbon-stage' + (selected ? ' has-sel' : '') + (compact ? ' compact' : '')}>
      <div className="ribbon-bg" style={{ backgroundImage: 'url(' + res('ribbonBg', 'imgs/back.webp') + ')' }} aria-hidden="true"></div>
      <div className="ribbon-art">
        <img className="el-building" src={res('el_building', 'imgs/el-building.webp')} alt="State Education Agency" draggable="false" />
        {areas.map(function (a) {
          const isSel = selected === a.id;
          const showBright = !selected || isSel;
          const z = isSel ? 30 : RIBBON_Z[a.id];
          return (
            <React.Fragment key={a.id}>
              <img
                className={'el-cut el-bright' + (showBright ? ' on' : '')}
                style={{ zIndex: z }}
                src={res('el_' + a.id, 'imgs/el-' + a.id + '.webp')}
                alt="" aria-hidden="true" draggable="false"
              />
              <img
                className={'el-cut el-fade' + (!showBright ? ' on' : '')}
                style={{ zIndex: RIBBON_Z[a.id] }}
                src={res('elf_' + a.id, 'imgs/el-' + a.id + '-fade.webp')}
                alt="" aria-hidden="true" draggable="false"
              />
            </React.Fragment>);

        })}
        <div className="ribbon-hotspots">
          {areas.map(function (a) {
            const isSel = selected === a.id;
            return (
              <button
                key={a.id}
                className={'ribbon-hotspot' + (isSel ? ' selected' : '')}
                style={{ left: RIBBON_ICONS[a.id].x + '%', top: RIBBON_ICONS[a.id].y + '%', '--neon': NEON[a.id] }}
                onClick={() => onSelect(a.id)}
                aria-pressed={isSel}
                aria-label={a.title}
                title={a.title}
              ></button>);

          })}
        </div>
      </div>
    </div>);

}


function SelectCue() {
  return (
    <div className="select-cue">
      <p className="l1">Select an attribute below</p>
      <p className="l2">to explore competencies and functions</p>
      <span className="tri">▼</span>
    </div>
  );
}

function Diagram({ selected, onSelect, forceMobile }) {
  const [narrow, setNarrow] = useState(typeof window !== 'undefined' && window.innerWidth < 760);
  useEffect(() => {
    const onR = () => setNarrow(window.innerWidth < 760);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);
  const useMobile = narrow || forceMobile;

  const body = <BraidStage selected={selected} onSelect={onSelect} compact={useMobile} />;

  return (
    <section className="diagram-section" data-screen-label="Diagram">
      <SelectCue />
      {body}
    </section>
  );
}

Object.assign(window, { Diagram });


// Focus-area table: competencies ("the what") + functions ("the how")

function lighten(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.min(255, ((n >> 16) & 255) + amt);
  const g = Math.min(255, ((n >> 8) & 255) + amt);
  const b = Math.min(255, (n & 255) + amt);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function FunctionList({ comp }) {
  return (
    <React.Fragment>
      {comp.fns.map(function (fn, i) {
        return (
          <div className="fn-item" key={fn.num} style={{ animationDelay: (i * 0.05) + 's' }}>
            <span className="num">{fn.num}</span>
            <span>{fn.text}</span>
          </div>
        );
      })}
    </React.Fragment>
  );
}

function FocusTable({ area, onOpenAI, onOpenResources, onOpenImage }) {
  const [sel, setSel] = useState(0);
  const [narrow, setNarrow] = useState(window.innerWidth < 920);
  useEffect(() => { setSel(0); }, [area.id]);
  useEffect(() => {
    const onR = () => setNarrow(window.innerWidth < 920);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);
  const selComp = area.comps[sel];

  const rows = area.comps.map(function (comp, i) {
    const isSel = i === sel;
    return (
      <React.Fragment key={comp.num}>
        <div
          className={'comp-row' + (isSel ? ' selected' : '')}
          onClick={() => setSel(i)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSel(i); } }}
          aria-expanded={isSel}
        >
          <span className="num" style={isSel ? { background: area.color } : null}>{comp.num}</span>
          <span className="txt">{comp.text}</span>
          <span className="row-chips">
            {comp.ai ? (
              <AIChip
                label={'Competency ' + comp.num}
                onClick={(e) => { e.stopPropagation(); onOpenAI({ type: 'competency', num: comp.num, area: area }); }}
              />
            ) : null}
            {comp.res ? (() => {
              const items = window.SEA_DATA.competencyResources(comp.num);
              if (!items.length) return null;
              return (
                <ResourcesChip
                  label={'Competency ' + comp.num}
                  onClick={(e) => { e.stopPropagation(); onOpenResources({ title: comp.num + ' — ' + area.title, items: items }); }}
                />
              );
            })() : null}
          </span>
        </div>
        {narrow && isSel ? (
          <div className="fn-inline">
            <div className="fn-head-inline">FUNCTIONS — “THE HOW”</div>
            <FunctionList comp={comp} />
          </div>
        ) : null}
      </React.Fragment>
    );
  });

  return (
    <div className="focus-card" key={area.id} data-screen-label={'Focus: ' + area.title}>
      <div className="focus-head" style={{ background: lighten(area.color, 26) }}>
        <div>
          <h2>{area.title}</h2>
          <div className="head-chips">
            <AIChip label={area.title} onClick={() => onOpenAI({ type: 'section', num: String(area.num), area: area })} />
            {(() => {
              const items = window.SEA_DATA.sectionResources(area.num);
              if (!items.length) return null;
              return (
                <ResourcesChip
                  label={area.title}
                  onClick={() => onOpenResources({ title: area.title, items: items })}
                />
              );
            })()}
            {(() => {
              const syn = window.synthesisFor ? window.synthesisFor(area.num) : null;
              if (!syn) return null;
              return <SynthesisChip label={area.title} onClick={() => onOpenImage({ title: area.title, images: syn.images || [], flip: !!syn.flip })} />;
            })()}
          </div>
        </div>
        <p className="desc">{area.desc}</p>
      </div>
      <div className="focus-body">
        {narrow ? (
          <div>
            <div className="col-head">COMPETENCIES — “THE WHAT”</div>
            <div className="comp-list">{rows}</div>
          </div>
        ) : (
          <div className="focus-cols">
            <div className="col-head">COMPETENCIES — “THE WHAT”</div>
            <div className="col-head fn-head">FUNCTIONS — “THE HOW”</div>
            <div className="comp-list">{rows}</div>
            <div className="fn-col" key={selComp.num}>
              <FunctionList comp={selComp} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TableZone({ area, onOpenAI, onOpenResources, onOpenImage }) {
  return (
    <section className="table-zone wrap" data-screen-label="Table">
      {area ? (
        <FocusTable area={area} onOpenAI={onOpenAI} onOpenResources={onOpenResources} onOpenImage={onOpenImage} />
      ) : (
        <div className="select-banner">Select a focus area above</div>
      )}
    </section>
  );
}

Object.assign(window, { TableZone });

function SeaPortrait() {
  const [selectedArea, setSelectedArea] = useState(null);
  const [aiContext, setAiContext] = useState(null);
  const [resContext, setResContext] = useState(null);
  const [imgContext, setImgContext] = useState(null);
  const tableRef = useRef(null);
  const area = window.SEA_DATA.areas.find(function (a) { return a.id === selectedArea; }) || null;
  function handleSelect(id) {
    const next = id === selectedArea ? null : id;
    setSelectedArea(next);
    if (next) requestAnimationFrame(function () {
      if (tableRef.current) {
        const top = tableRef.current.getBoundingClientRect().top + window.scrollY - 24;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  }
  return (
    <div className="sea-portrait">
      <IntroSection />
      <Diagram selected={selectedArea} onSelect={handleSelect} />
      <div ref={tableRef}>
        <TableZone area={area} onOpenAI={setAiContext} onOpenResources={(d) => setResContext(d)} onOpenImage={(d) => setImgContext(d)} />
      </div>
      <AIModal context={aiContext} onClose={() => setAiContext(null)} />
      <InfoModal data={resContext} onClose={() => setResContext(null)} />
      <ImageModal data={imgContext} onClose={() => setImgContext(null)} />
    </div>
  );
}
window.SeaPortrait = SeaPortrait;
