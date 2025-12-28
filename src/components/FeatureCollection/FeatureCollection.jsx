import "./FeatureCollection.scss";

const BASE = import.meta.env.BASE_URL;

export default function FeatureCollection() {
  return (
    <section
      className="fc"
      style={{ backgroundImage: `url(${BASE}images/feature.png)` }}
    >
      <div className="fc__content">
        <h2 className="fc__title">
          NATE +<br />JEREMIAH
        </h2>
        <p className="fc__sub">FOR LIVING</p>
        <a href="#" className="fc__btn">Start Saving</a>
      </div>
    </section>
  );
}
