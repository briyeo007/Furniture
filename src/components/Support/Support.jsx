import useScrollAnimation from "../../hooks/useScrollAnimation";
import "./Support.scss";

export default function Support() {
  const [animRef, isVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="support" ref={animRef}>
      <div className="support__inner">
        <div className="support__overlay">
          <h2 className={`support__title anim-text ${isVisible ? "visible" : ""}`}>WE SUPPORT LA</h2>
          <p className={`support__desc anim-text delay-1 ${isVisible ? "visible" : ""}`}>
            Over 4,000 mattresses donated to<br className="mobile-br" /> fire victims and counting
          </p>
          <a href="#" className={`support__btn anim-text delay-2 ${isVisible ? "visible" : ""}`}>Learn More</a>
        </div>
      </div>
    </section>
  );
}
