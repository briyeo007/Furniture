import "./Header.scss";

const BASE = import.meta.env.BASE_URL;

export default function Header() {
  return (
    <header className="ls-header">
      <div className="inner">

        {/* LOGO */}
        <a href="#" className="logo-link">
          <img src={`${BASE}images/logo.png`} alt="Living Spaces Logo" />
        </a>

        {/* RIGHT ICONS */}
        <div className="right">

          {/* 로그인 */}
          <a href="#" className="icon-link">
            <img src={`${BASE}images/icon-user.png`} alt="login" />
          </a>

          {/* 햄버거 */}
          <a href="#" className="icon-link">
            <img src={`${BASE}images/icon-menu.png`} alt="menu" />
          </a>

        </div>

      </div>
    </header>
  );
}
