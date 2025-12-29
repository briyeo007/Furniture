import { useRef, useState } from "react";
import "./ShopByStyle.scss";

const slides = [
  {
    id: "modern-traditional",
    label: "Modern Traditional",
    desc: "Austen offers a clean, timeless blend of modern and traditional style for a comfortable, beautiful home.",
  },
  {
    id: "midcentury",
    label: "Mid-Century",
    desc: "Mid-century style mixes clean lines, warm woods, and simple geometric forms.",
  },
  {
    id: "japandi",
    label: "Japandi",
    desc: "A blend of Japanese and Scandinavian aesthetics featuring minimalism and natural materials.",
  },
];

export default function ShopByStyle() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onScroll = () => {
    const t = trackRef.current;
    if (!t || !t.children?.length) return;
    const slideW = t.children[0].getBoundingClientRect().width;
    const idx = Math.round(t.scrollLeft / slideW);
    setActive(Math.max(0, Math.min(slides.length - 1, idx)));
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
    <section className="sbs">
      <h2 className="sbs__title">Shop By Style</h2>

      <div
        className="sbs__slider"
        ref={trackRef}
        onScroll={onScroll}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="sbs__track">
          {slides.map((slide, i) => (
            <div className="sbs__slide" key={i}>
              <span className="sbs__label">{slide.label}</span>
              <div className="sbs__main">
                <div className={`sbs__image sbs__image--${slide.id}`} />
                <div className="sbs__content">
                  <p className="sbs__desc">{slide.desc}</p>
                  <a href="#" className="sbs__link">Shop Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sbs__dots">
        {slides.map((_, i) => (
          <span key={i} className={`sbs__dot ${active === i ? "sbs__dot--active" : ""}`} />
        ))}
      </div>
    </section>
  );
}
