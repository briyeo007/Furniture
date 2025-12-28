import { useRef, useState } from "react";
import "./Hero.scss";

export default function Hero() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const deals = [
    { title: "Extendable Dining Table", desc: "More Guests, More Table" },
    { title: "WINTER DEALS", desc: "Savings That Sleigh" },
    { title: "New Arrivals", desc: "See Our Latest Designs" },
  ];

  const onScroll = () => {
    const t = trackRef.current;
    if (!t || !t.children?.length) return;
    const gap = parseFloat(getComputedStyle(t).gap) || 0;
    const slideW = t.children[0].getBoundingClientRect().width + gap;
    const idx = Math.round(t.scrollLeft / slideW);
    setActive(Math.max(0, Math.min(deals.length - 1, idx)));
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <h2 className="hero__title">Christmas Sales</h2>
        <p className="hero__sub">~WEEKEND DEALS~</p>
        <a href="#" className="hero__btn">Start Saving</a>
      </div>

      <div className="hero__slider">
        <div className="hero__track" ref={trackRef} onScroll={onScroll}>
          {deals.map((d, i) => (
            <div className="hero__card" key={i}>
              <p className="hero__card-title">{d.title}</p>
              <p className="hero__card-desc">{d.desc}</p>
              <span className="hero__card-icon">i</span>
            </div>
          ))}
        </div>
        <div className="hero__dots">
          {deals.map((_, i) => (
            <span key={i} className={`hero__dot ${active === i ? "active" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
