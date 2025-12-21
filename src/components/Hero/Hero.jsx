import "./Hero.scss";

const BASE = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <section className="hero">
      {/* 배경 이미지 */}
      <img
        className="hero-bg"
        src={`${BASE}images/hero.png`}
        alt=""
        aria-hidden="true"
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <h2 className="hero-title">Christmas Sales</h2>
        <p className="hero-sub">~WEEKEND DEALS~</p>
        <a className="hero-cta" href="#">
          Start Saving
        </a>
      </div>

      <div className="hero-deals">
        <a className="deal" href="#">
          <span className="deal-title">WINTER DEALS</span>
          <span className="deal-desc">Savings That Sleigh</span>
          <span className="deal-icon" aria-hidden="true">ⓘ</span>
        </a>

        <span className="deal-divider" aria-hidden="true" />

        <a className="deal" href="#">
          <span className="deal-title">Extendable Dining Table</span>
          <span className="deal-desc">More Guests, More Table</span>
          <span className="deal-icon" aria-hidden="true">ⓘ</span>
        </a>

        <span className="deal-divider" aria-hidden="true" />

        <a className="deal" href="#">
          <span className="deal-title">New Arrivals</span>
          <span className="deal-desc">See Our Latest Designs</span>
          <span className="deal-icon" aria-hidden="true">ⓘ</span>
        </a>
      </div>
    </section>
  );
}
