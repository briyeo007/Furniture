import "./ShopByCollection.scss";

const collections = [
  { id: "dean", name: "Dean", sub: "living spaces" },
  { id: "jolene", name: "Jolene", sub: "Collection" },
  { id: "crypton", name: "CRYPTON", sub: "Home Fabric" },
  { id: "alton", name: "Alton", sub: "for living spaces" },
];

export default function ShopByCollection() {
  return (
    <section className="sbc">
      <h2 className="sbc__title">Shop By Collection</h2>
      <div className="sbc__list">
        {collections.map((item, i) => (
          <a className={`sbc__card sbc__card--${item.id}`} href="#" key={i}>
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
