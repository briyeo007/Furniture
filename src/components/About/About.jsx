import useScrollAnimation from "../../hooks/useScrollAnimation";
import "./About.scss";

export default function About() {
  const [ref1, isVisible1] = useScrollAnimation({ threshold: 0.2 });
  const [ref2, isVisible2] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="about">
      <h2 className="blind">About</h2>
      <div className="about__inner">
        <div className="about__wrapper">
        <div className="about__item" ref={ref1}>
          <div className={`about__image about__image--about anim-scale ${isVisible1 ? "visible" : ""}`} />
          <div className={`about__box about__box--right anim-slide-right ${isVisible1 ? "visible" : ""}`}>
            <h3 className={`about__title anim-text ${isVisible1 ? "visible" : ""}`}>About Us</h3>
            <p className={`about__desc anim-text delay-1 ${isVisible1 ? "visible" : ""}`}>
              Living Spaces is expanding nationwide to offer guests an easier, more convenient shopping experience with a huge selection and guaranteed low prices. Plus, enjoy same-day delivery—shop online or visit a showroom and get your new furniture fast.
            </p>
            <a href="#" className={`about__btn anim-text delay-2 ${isVisible1 ? "visible" : ""}`}>View More</a>
          </div>
        </div>

        <div className="about__item" ref={ref2}>
          <div className={`about__image about__image--community anim-scale ${isVisible2 ? "visible" : ""}`} />
          <div className={`about__box about__box--left anim-slide-left ${isVisible2 ? "visible" : ""}`}>
            <h3 className={`about__title anim-text ${isVisible2 ? "visible" : ""}`}>Community</h3>
            <p className={`about__desc anim-text delay-1 ${isVisible2 ? "visible" : ""}`}>
              Helping others feel at home is at the heart of our mission. We work with foundations and community organizations to give back and support those in need, focusing on ending homelessness, helping at-risk youth, and supporting veterans.
            </p>
            <a href="#" className={`about__btn anim-text delay-2 ${isVisible2 ? "visible" : ""}`}>View More</a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
