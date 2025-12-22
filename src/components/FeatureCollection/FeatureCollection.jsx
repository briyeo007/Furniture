import "./FeatureColletion.scss";

const BASE = import.meta.env.BASE_URL;

export default function FeatureCollection() {
  return (
    <section className="feature-collection">
      {/* 배경 이미지 */}
      <img
        className="feature-collection__bg"
        src={`${BASE}images/feature.png`} 
        alt="Nate + Jeremiah for Living"
      />

      {/* 반투명 박스 */}
      <div className="feature-collection__overlay" aria-hidden="true" />

      {/* 텍스트 영역 */}
      <div className="feature-collection__content">
        <h2 className="feature-collection__title">
          NATE <span className="plus">+</span>
          <br />
          JEREMIAH
        </h2>

        <p className="feature-collection__sub">FOR LIVING</p>

        <a href="#" className="feature-collection__btn">
          Start Saving
        </a>
      </div>
    </section>
  );
}
