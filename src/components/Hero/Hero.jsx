import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      {/* 배경 이미지 */}
      <img className="hero-bg" src="/images/hero.png" alt="" aria-hidden="true" />

      {/* 어두운 오버레이 */}
      <div className="hero-overlay" />

      {/* 중앙 카피 */}
      <div className="hero-content">
        <h2 className="hero-title">Christmas Sales</h2>
        <p className="hero-sub">~WEEKEND DEALS~</p>
        <a className="hero-cta" href="#">
          Start Saving
        </a>
      </div>

      {/* 하단 딜 바 */}
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
