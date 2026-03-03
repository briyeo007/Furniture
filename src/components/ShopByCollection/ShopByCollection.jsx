import useScrollAnimation from "../../hooks/useScrollAnimation";
import "./ShopByCollection.scss";

const collections = [
  { id: "dean", name: "Dean", sub: "living spaces" },
  { id: "jolene", name: "Jolene", sub: "Collection" },
  { id: "crypton", name: "CRYPTON", sub: "Home Fabric" },
  { id: "alton", name: "Alton", sub: "for living spaces" },
];

export default function ShopByCollection() {
  const [animRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="sbc" ref={animRef}>
      <div className="sbc__inner">
        <h2 className={`sbc__title anim-text ${isVisible ? "visible" : ""}`}>Shop By Collection</h2>
        <div className="sbc__list">
          {collections.map((item, i) => (
            <a className={`sbc__card sbc__card--${item.id} anim-scale delay-${i + 1} ${isVisible ? "visible" : ""}`} href="#" key={i}>
              <div className="sbc__overlay">
                <strong className="sbc__name">{item.name}</strong>
                <p className="sbc__sub">{item.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
