import "./Header.scss";

export default function Header() {
  return (
    <header className="ls-header">
      <div className="inner">

        {/* LOGO */}
        <a href="#" className="logo-link">
          <img src="/images/logo.png" alt="Living Spaces Logo" />
        </a>

        {/* RIGHT ICONS (둘 다 이미지 링크) */}
        <div className="right">

          {/* 로그인 이미지 */}
          <a href="#" className="icon-link">
            <img src="/images/icon-user.png" alt="login" />
          </a>

          {/* 햄버거 이미지 */}
          <a href="#" className="icon-link">
            <img src="/images/icon-menu.png" alt="menu" />
          </a>

        </div>

      </div>
    </header>
  );
}
