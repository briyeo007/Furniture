// Career.jsx
import "./Careers.scss";

const BASE = import.meta.env.BASE_URL;

export default function Career() {
  return (
    <section className="career">
      <img
        className="career__bg"
        src={`${BASE}images/career.png`} // 파일명만 너꺼로 맞춰
        alt="Living Spaces storefront"
      />

      <div className="career__card">
        <h3 className="career__title">Careers</h3>

        <p className="career__desc">
          Discover a world of opportunity and find a career that suits you among
          various positions and departments. As a team member, we fully support
          you in all of your endeavors and offer perks and benefits along the way.
        </p>

        <a className="career__btn" href="#">
          View More
        </a>
      </div>
    </section>
  );
}
