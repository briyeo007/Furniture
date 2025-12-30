import { useRef, useState } from "react";
import "./Hero.scss";

export default function Hero() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const deals = [
    { title: "Extendable Dining Table", desc: "More Guests, More Table", link: "#" },
    { title: "WINTER DEALS", desc: "Savings That Sleigh", link: "#" },
    { title: "New Arrivals", desc: "See Our Latest Designs", link: "#" },
  ];

  const goToSlide = (index) => {
    const t = trackRef.current;
    if (!t || !t.children?.length) return;
    const gap = parseFloat(getComputedStyle(t).gap) || 0;
    const slideW = t.children[0].getBoundingClientRect().width + gap;
    t.scrollTo({ left: slideW * index, behavior: "smooth" });
    setActive(index);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      goToSlide(Math.min(active + 1, deals.length - 1));
    } else {
      goToSlide(Math.max(active - 1, 0));
    }
  };

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__text">
            <h2 className="hero__title">Christmas Sales</h2>
            <p className="hero__sub">~WEEKEND DEALS~</p>
            <a href="#" className="hero__btn">Start Saving</a>
          </div>
        </div>

        <div className="hero__slider" onWheel={handleWheel}>
          <div className="hero__track" ref={trackRef}>
            {deals.map((d, i) => (
              <div className="hero__card" key={i}>
                <h3 className="hero__card-title">{d.title}</h3>
                <strong className="hero__card-desc">{d.desc}</strong>
                <a className="hero__card-icon" href={d.link}>→<span className="blind">바로가기</span></a>
              </div>
            ))}
          </div>
          <div className="hero__dots">
            {deals.map((_, i) => (
              <button
                key={i}
                className={`hero__dot ${active === i ? "active" : ""}`}
                onMouseEnter={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
