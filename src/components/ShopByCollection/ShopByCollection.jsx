import "./ShopByCollection.scss";

const BASE = import.meta.env.BASE_URL;

const collections = [
  { name: "Dean", sub: "living spaces", img: `${BASE}images/dean.png` },
  { name: "Jolene", sub: "Collection", img: `${BASE}images/jolene.png` },
  { name: "CRYPTON", sub: "Home Fabric", img: `${BASE}images/crypton.png` },
  { name: "Alton", sub: "for living spaces", img: `${BASE}images/alton.png` },
];

export default function ShopByCollection() {
  return (
    <section className="sbc">
      <h2 className="sbc__title">Shop By Collection</h2>
      <div className="sbc__list">
        {collections.map((item, i) => (
          <a className="sbc__card" href="#" key={i}>
            <img src={item.img} alt={item.name} />
            <div className="sbc__overlay">
              <p className="sbc__name">{item.name}</p>
              <p className="sbc__sub">{item.sub}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
