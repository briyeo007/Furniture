import { useRef, useState } from "react";
import "./Hero.scss";

export default function Hero() {
  const trackRef = useRef(null);

  const drag = useRef({
    down: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const [active, setActive] = useState(0);

  const deals = [
    { title: "WINTER DEALS", desc: "Savings That Sleigh" },
    { title: "Extendable Dining Table", desc: "More Guests, More Table" },
    { title: "New Arrivals", desc: "See Our Latest Designs" },
  ];

  const getGap = () => {
    const t = trackRef.current;
    if (!t) return 0;
    const g = getComputedStyle(t).gap;
    const n = parseFloat(g);
    return Number.isFinite(n) ? n : 0;
  };

  const onScroll = () => {
    const t = trackRef.current;
    if (!t || !t.children?.length) return;

    const gap = getGap();
    const slideW = t.children[0].getBoundingClientRect().width + gap;
    const idx = Math.round(t.scrollLeft / slideW);
    setActive(Math.max(0, Math.min(deals.length - 1, idx)));
  };

  const onMouseDown = (e) => {
    const t = trackRef.current;
    if (!t) return;

    drag.current.down = true;
    drag.current.moved = false;
    drag.current.startX = e.pageX;
    drag.current.scrollLeft = t.scrollLeft;

    t.classList.add("is-dragging");
  };

  const onMouseMove = (e) => {
    const t = trackRef.current;
    if (!t || !drag.current.down) return;

    e.preventDefault();
    const dx = e.pageX - drag.current.startX;
    if (Math.abs(dx) > 6) drag.current.moved = true;

    t.scrollLeft = drag.current.scrollLeft - dx;
  };

  const endDrag = () => {
    const t = trackRef.current;
    if (!t) return;

    drag.current.down = false;
    t.classList.remove("is-dragging");
  };

  const onClickCapture = (e) => {
    // 드래그로 움직였으면 링크 클릭 방지
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-text">
        <h2 className="hero-title">Christmas Sales</h2>
        <p className="hero-sub">~WEEKEND DEALS~</p>
        <a className="hero-cta" href="#">
          Start Saving
        </a>
      <div className="hero-deals">
        <div
          className="deals-track"
          ref={trackRef}
          onScroll={onScroll}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onClickCapture={onClickCapture}
          role="region"
          aria-label="Deals slider"
        >
          {deals.map((d, i) => (
            <a className="deal" href="#" key={i}>
              <span className="deal-title">{d.title}</span>
              <span className="deal-desc">{d.desc}</span>
              <span className="deal-icon" aria-hidden="true">
                ⓘ
              </span>

              {/* ✅ dot: 카드(박스) 안 */}
              <div className={`deal-dots ${active === i ? "active" : ""}`} aria-hidden="true">
                {deals.map((_, di) => (
                  <span key={di} className={`dot ${active === di ? "active" : ""}`} />
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
