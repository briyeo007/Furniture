import { useRef, useState } from "react";
import "./Hero.scss";

export default function Hero() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <h2 className="hero__title">Christmas Sales</h2>
        <p className="hero__sub">~WEEKEND DEALS~</p>
        <a href="#" className="hero__btn">Start Saving</a>
      </div>

      <div className="hero__slider">
        <div
          className="hero__track"
          ref={trackRef}
          onScroll={onScroll}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {deals.map((d, i) => (
            <div className="hero__card" key={i}>
              <p className="hero__card-title">{d.title}</p>
              <p className="hero__card-desc">{d.desc}</p>
              <span className="hero__card-icon">→</span>
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
