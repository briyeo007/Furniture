import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__logo">LIVINGSPACE</h2>
      <p className="footer__connect">Connect With Us</p>
      <ul className="footer__social">
        <li><a href="#" aria-label="Instagram">IG</a></li>
        <li><a href="#" aria-label="Facebook">FB</a></li>
        <li><a href="#" aria-label="TikTok">TT</a></li>
        <li><a href="#" aria-label="YouTube">YT</a></li>
        <li><a href="#" aria-label="RSS">RSS</a></li>
        <li><a href="#" aria-label="Pinterest">P</a></li>
      </ul>
      <p className="footer__copy">
        © 2025 Living Spaces, All rights reserved.
      </p>
      <p className="footer__session">Session ID: 339 139 651</p>
    </footer>
  );
}
