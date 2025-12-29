import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <div className="about__item">
          <div className="about__image about__image--about" />
          <div className="about__box about__box--right">
            <h2 className="about__title">About Us</h2>
            <p className="about__desc">
              Living Spaces is expanding nationwide to offer guests an easier, more convenient shopping experience with a huge selection and guaranteed low prices. Plus, enjoy same-day delivery—shop online or visit a showroom and get your new furniture fast.
            </p>
            <a href="#" className="about__btn">View More</a>
          </div>
        </div>

        <div className="about__item">
          <div className="about__image about__image--community" />
          <div className="about__box about__box--left">
            <h2 className="about__title">Community</h2>
            <p className="about__desc">
              Helping others feel at home is at the heart of our mission. We work with foundations and community organizations to give back and support those in need, focusing on ending homelessness, helping at-risk youth, and supporting veterans.
            </p>
            <a href="#" className="about__btn">View More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
