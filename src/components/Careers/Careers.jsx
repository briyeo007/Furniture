import useScrollAnimation from "../../hooks/useScrollAnimation";
import "./Careers.scss";

export default function Careers() {
  const [animRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="careers" ref={animRef}>
      <div className="careers__inner">
        <div className={`careers__image anim-scale ${isVisible ? "visible" : ""}`} />
        <div className={`careers__box anim-slide-right ${isVisible ? "visible" : ""}`}>
          <h2 className={`careers__title anim-text ${isVisible ? "visible" : ""}`}>Careers</h2>
          <p className={`careers__desc anim-text delay-1 ${isVisible ? "visible" : ""}`}>
            Discover a world of opportunity and find a career that suits you among various positions and departments. As a team member, we fully support you in all of your endeavors and offer perks and benefits along the way.
          </p>
          <a href="#" className={`careers__btn anim-text delay-2 ${isVisible ? "visible" : ""}`}>View More</a>
        </div>
      </div>
    </section>
  );
}
