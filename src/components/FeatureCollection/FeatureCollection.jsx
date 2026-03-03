import useScrollAnimation from "../../hooks/useScrollAnimation";
import "./FeatureCollection.scss";

export default function FeatureCollection() {
  const [animRef, isVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="fc" ref={animRef}>
      <div className="fc__inner">
        <div className="fc__content">
          <h2 className={`fc__title anim-text ${isVisible ? "visible" : ""}`}>
            NATE +<br />JEREMIAH
          </h2>
          <p className={`fc__sub anim-text delay-2 ${isVisible ? "visible" : ""}`}>FOR LIVING</p>
          <a href="#" className={`fc__btn anim-text delay-3 ${isVisible ? "visible" : ""}`}>Start Saving</a>
        </div>
      </div>
    </section>
  );
}
