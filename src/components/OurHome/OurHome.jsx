import "./OurHome.scss";

const BASE = import.meta.env.BASE_URL;

const DATA = [
  {
    title: "Shop Online",
    desc:
      "Shop our selection of modern furniture online safely and securely from the comfort of your home. We offer pickup, local delivery and Nationwide shipping.",
    img: "images/collection-01.png",
  },
  {
    title: "Services",
    desc:
      "The LivingSpace team works directly with clients and design professionals to offer the very best in design. Our expertise and our broad range of products provide a comprehensive resource for residential and commercial projects.",
    img: "images/collection-02.png",
  },
  {
    title: "Projects",
    desc:
      "Our in-house design team will take you from concept through to final installation. Our designers can work with you to provide floor plans and furniture specification including fabric and material proposals.",
    img: "images/collection-03.png",
  },
];

export default function OurHome() {
  return (
    <section className="ourhome">
      <div className="ourhome__inner">
        <h2 className="ourhome__title">Our home with Living spaces</h2>

        <div className="ourhome__grid">
          {DATA.map((item) => (
            <article className="ourhome-card" key={item.title}>
              <div className="ourhome-card__img">
                <img src={`${BASE}${item.img}`} alt={item.title} />
              </div>

              <div className="ourhome-card__body">
                <h3 className="ourhome-card__title">{item.title}</h3>
                <p className="ourhome-card__desc">{item.desc}</p>

                <a className="ourhome-card__arrow" href="#" aria-label={item.title}>
                  <span className="circle">
                    <span className="chev">›</span>
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
