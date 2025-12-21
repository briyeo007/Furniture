import "./Community.scss";

const BASE = import.meta.env.BASE_URL;

export default function Community() {
  return (
    <section className="community">
      <div className="community-inner">
        {/* LEFT CONTENT */}
        <div className="community-content">
          <h3>Community</h3>
          <p>
            Helping others feel at home is at the heart of our mission. We work
            with foundations and community organizations to give back and
            support those in need, focusing on ending homelessness, helping
            at-risk youth, and supporting veterans.
          </p>

          <a href="#" className="community-btn">
            View More
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="community-image">
          <img
            src={`${BASE}images/community.png`}
            alt="Community"
          />
        </div>
      </div>
    </section>
  );
}
