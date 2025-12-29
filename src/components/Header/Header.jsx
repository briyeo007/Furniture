import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">
        <a href="#">
          <span className="blind">LIVING SPACES</span>
        </a>
      </h1>
      <div className="header__icons">
        <button className="header__user" aria-label="User">
          <span className="blind">사용자</span>
        </button>
        <button className="header__menu" aria-label="Menu">
          <span className="blind">메뉴열기</span>
        </button>
      </div>
    </header>
  );
}
