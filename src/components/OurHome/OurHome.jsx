import { useRef, useState } from "react";
import "./OurHome.scss";

const BASE = import.meta.env.BASE_URL;

const DATA = [
  {
    title: "Shop Online",
    desc: "Shop our selection of modern furniture online safely and securely from the comfort of your home. We offer pickup, local delivery and Nationwide shipping.",
    img: `${BASE}images/collection-01.png`,
  },
  {
    title: "Services",
    desc: "The Livingspace team works directly with clients and design professionals to offer the very best in design. Our expertise and our broad range of products provide a comprehensive resource for residential and commercial projects.",
    img: `${BASE}images/collection-02.png`,
  },
  {
    title: "Projects",
    desc: "Our in-house design team will take you from concept through to final installation. Our designers can work with you to provide floor plans and furniture specification including fabric and material proposals.",
    img: `${BASE}images/collection-03.png`,
  },
];

export default function OurHome() {
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
    setActive(Math.max(0, Math.min(DATA.length - 1, idx)));
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
    <section className="ourhome">
      <div className="ourhome__inner">
        <h2 className="ourhome__title">Our home <br className="mobile-br" />with Living spaces</h2>

        <div className="ourhome__track">
          <div
            className="ourhome__slider"
            ref={trackRef}
            onScroll={onScroll}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {DATA.map((item, i) => (
              <div className="ourhome__card" key={i}>
                <div className={`ourhome__img ourhome__img--${i + 1}`} />
                <div className="ourhome__body">
                  <h3 className="ourhome__card-title">{item.title}</h3>
                  <p className="ourhome__card-desc">{item.desc}</p>
                  <a href="#" className="ourhome__arrow">
                    <span className="blind">바로가기</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ourhome__dots">
          {DATA.map((_, i) => (
            <span key={i} className={`ourhome__dot ${active === i ? "ourhome__dot--active" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
