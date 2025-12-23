// src/components/ShopByCollection.jsx
import "./ShopByCollection.scss";

const BASE = import.meta.env.BASE_URL;

export default function ShopByCollection() {
  return (
    <section className="sbc">
      <div className="sbc__inner">
        <h2 className="sbc__title">Shop By Collection</h2>

        <div className="sbc__grid">
          {/* LEFT (big) */}
          <a className="sbc-card sbc-card--left" href="#" aria-label="Alton collection">
            <img
              className="sbc-card__img"
              src={`${BASE}images/alton.png`}
              alt="Alton collection"
            />
            <div className="sbc-card__overlay">
              <p className="sbc-card__name">Alton</p>
              <p className="sbc-card__sub">for living spaces</p>
            </div>
          </a>

          {/* RIGHT TOP LEFT */}
          <a className="sbc-card" href="#" aria-label="Dean collection">
            <img
              className="sbc-card__img"
              src={`${BASE}images/dean.png`}
              alt="Dean collection"
            />
            <div className="sbc-card__overlay">
              <p className="sbc-card__name">Dean</p>
              <p className="sbc-card__sub">living spaces</p>
            </div>
          </a>

          {/* RIGHT TOP RIGHT */}
          <a className="sbc-card" href="#" aria-label="Jolene collection">
            <img
              className="sbc-card__img"
              src={`${BASE}images/jolene.png`}
              alt="Jolene collection"
            />
            <div className="sbc-card__overlay">
              <p className="sbc-card__name">Jolene</p>
              <p className="sbc-card__sub">Collection</p>
            </div>
          </a>

          {/* RIGHT BOTTOM (wide) */}
          <a className="sbc-card sbc-card--wide" href="#" aria-label="Crypton Home Fabric">
            <img
              className="sbc-card__img"
              src={`${BASE}images/crypton.png`}
              alt="Crypton Home Fabric"
            />
            <div className="sbc-card__overlay">
              <p className="sbc-card__name">CRYPTON</p>
              <p className="sbc-card__sub">Home Fabric</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
