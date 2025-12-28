import "./Community.scss";

const BASE = import.meta.env.BASE_URL;

export default function Community() {
  return (
    <section className="community">
      <div className="community__image">
        <img src={`${BASE}images/community.png`} alt="Community" />
      </div>
      <div className="community__box">
        <h2 className="community__title">Community</h2>
        <p className="community__desc">
          Helping others feel at home is at the heart of our mission. We work with foundations and community organizations to give back and support those in need, focusing on ending homelessness, helping at-risk youth, and supporting veterans.
        </p>
        <a href="#" className="community__btn">View More</a>
      </div>
    </section>
  );
}
