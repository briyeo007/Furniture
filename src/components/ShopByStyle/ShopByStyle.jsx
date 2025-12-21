import "./ShopByStyle.scss";

const BASE = import.meta.env.BASE_URL;

export default function ShopByStyle() {
  return (
    <section className="shop-style">
      <div className="shop-style__inner">
        <h2 className="shop-style__title">Shop By Style</h2>

        <div className="shop-style__grid">
          {/* 1 */}
          <article className="style-card">
            <span className="style-card__label">Modern Traditional</span>

            <div className="style-card__img">
              <img
                src={`${BASE}images/style-modern-traditional.png`}
                alt="Modern Traditional"
              />
            </div>

            <p className="style-card__desc">
              Austen offers a clean, timeless blend of modern and traditional style
              for a comfortable, beautiful home.
            </p>

            <a className="style-card__link" href="#">
              Shop Now
            </a>
          </article>

          {/* 2 (센터) */}
          <div className="style-slider">
            <article className="style-card style-card--center">
              <span className="style-card__label">Japandi</span>

              <div className="style-card__img">
                <img
                  src={`${BASE}images/style-japandi.png`}
                  alt="Japandi"
                />
              </div>

              <p className="style-card__desc">
                Mariko blends Scandinavian and Japanese minimalism for a clean,
                natural, functional look.
              </p>

              <a className="style-card__link" href="#">
                Shop Now
              </a>
            </article>

            <div className="style-slider__dots" aria-hidden="true">
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          {/* 3 */}
          <article className="style-card">
            <span className="style-card__label">Mid-Century</span>

            <div className="style-card__img">
              <img
                src={`${BASE}images/style-midcentury.png`}
                alt="Mid-Century"
              />
            </div>

            <p className="style-card__desc">
              Mid-century style mixes clean lines, warm woods, and simple geometric
              forms to create a timeless, modern look that feels both retro and fresh.
            </p>

            <a className="style-card__link" href="#">
              Shop Now
            </a>
          </article>

          {/* 4 */}
          <article className="style-card">
            <span className="style-card__label">Community</span>

            <div className="style-card__img">
              <img
                src={`${BASE}images/style-crypton.png`}
                alt="Community"
              />
            </div>

            <p className="style-card__desc">
              Helping others establish a feeling of home is central to what we do.
            </p>

            <a className="style-card__link" href="#">
              Shop Now
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
