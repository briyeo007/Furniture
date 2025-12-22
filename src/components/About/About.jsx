import "./About.scss";

const BASE = import.meta.env.BASE_URL;

export default function About() {
  return (
    <section className="about">
      <div className="about-inner">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img
            src={`${BASE}images/about.png`}
            alt="Living Spaces Store"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h3>About Us</h3>
          <p>
            Living Spaces is expanding nationwide to offer guests an easier,
            more convenient shopping experience with a huge selection and
            guaranteed low prices.
            Plus, enjoy same-day delivery—shop online or visit a showroom and
            get your new furniture fast.
          </p>

          <a href="#" className="about-btn">View More</a>
        </div>

      </div>
    </section>
  );
}
