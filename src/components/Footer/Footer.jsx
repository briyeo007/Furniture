import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <h2 className="footer__logo">
          <a href="/">
            <span className="blind">LIVING SPACES</span>
          </a>
        </h2>
        <p className="footer__connect">Connect With Us</p>
        <ul className="footer__social">
          <li><a href="#" aria-label="Instagram" target="_blank" title="new tab">IG</a></li>
          <li><a href="#" aria-label="Facebook" target="_blank" title="new tab">FB</a></li>
          <li><a href="#" aria-label="TikTok" target="_blank" title="new tab">TT</a></li>
          <li><a href="#" aria-label="YouTube" target="_blank" title="new tab">YT</a></li>
          <li><a href="#" aria-label="RSS" target="_blank" title="new tab">RSS</a></li>
          <li><a href="#" aria-label="Pinterest" target="_blank" title="new tab">P</a></li>
        </ul>
        <p className="footer__copy">
          © 2025 Living Spaces, All rights reserved.
        </p>
        <p className="footer__session">Session ID: 339 139 651</p>
      </div>
    </footer>
  );
}
