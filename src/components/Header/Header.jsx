import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">LIVING SPACES</h1>
      <button className="header__menu" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
