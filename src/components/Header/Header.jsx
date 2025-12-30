import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__logo">
          <a href="#">
            <span className="blind">LIVING SPACES</span>
          </a>
        </h1>
        <div className="header__icons">
          <a href="#" className="header__user" aria-label="User">
            <span className="blind">login</span>
          </a>
          <button className="header__menu" aria-label="Menu">
            <span className="blind">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
