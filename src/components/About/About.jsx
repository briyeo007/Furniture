import "./About.scss";

const BASE = import.meta.env.BASE_URL;

export default function About() {
  return (
    <section className="about">
      <div className="about__image">
        <img src={`${BASE}images/about.png`} alt="Living Spaces Store" />
      </div>
      <div className="about__box">
        <h2 className="about__title">About Us</h2>
        <p className="about__desc">
          Living Spaces is expanding nationwide to offer guests an easier, more convenient shopping experience with a huge selection and guaranteed low prices. Plus, enjoy same-day delivery—shop online or visit a showroom and get your new furniture fast.
        </p>
        <a href="#" className="about__btn">View More</a>
      </div>
    </section>
  );
}
