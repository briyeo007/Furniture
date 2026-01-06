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
          <li><a href="#" className="footer__social-icon footer__social-icon--ig" aria-label="Instagram" target="_blank" title="new tab"><span className="blind">Instagram</span></a></li>
          <li><a href="#" className="footer__social-icon footer__social-icon--fb" aria-label="Facebook" target="_blank" title="new tab"><span className="blind">Facebook</span></a></li>
          <li><a href="#" className="footer__social-icon footer__social-icon--tiktok" aria-label="TikTok" target="_blank" title="new tab"><span className="blind">TikTok</span></a></li>
          <li><a href="#" className="footer__social-icon footer__social-icon--yt" aria-label="YouTube" target="_blank" title="new tab"><span className="blind">YouTube</span></a></li>
          <li><a href="#" className="footer__social-icon footer__social-icon--rss" aria-label="RSS" target="_blank" title="new tab"><span className="blind">RSS</span></a></li>
          <li><a href="#" className="footer__social-icon footer__social-icon--pine" aria-label="Pinterest" target="_blank" title="new tab"><span className="blind">Pinterest</span></a></li>
        </ul>
        <p className="footer__copy">
          © 2025 Living Spaces, All rights reserved.
        </p>
        <p className="footer__session">Session ID: 339 139 651</p>
      </div>
    </footer>
  );
}
