import "./Careers.scss";

const BASE = import.meta.env.BASE_URL;

export default function Careers() {
  return (
    <section className="careers">
      <div className="careers__image">
        <img src={`${BASE}images/career.png`} alt="Careers" />
      </div>
      <div className="careers__box">
        <h2 className="careers__title">Careers</h2>
        <p className="careers__desc">
          Discover a world of opportunity and find a career that suits you among various positions and departments. As a team member, we fully support you in all of your endeavors and offer perks and benefits along the way.
        </p>
        <a href="#" className="careers__btn">View More</a>
      </div>
    </section>
  );
}
