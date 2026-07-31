export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <img
            src="/assets/fullmarks-logo-cropped.png"
            alt="Fullmarks"
            className="footer-brand__logo"
          />
          <div className="footer-brand__tagline">
            Notes and past papers for GCSE, IGCSE, IB and A-Level students.
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-col__title">Curriculum</div>
          <a href="#">GCSE / IGCSE</a>
          <a href="#">A-Level</a>
          <a href="#">IB MYP &amp; DP</a>
        </div>

        <div className="footer-col">
          <div className="footer-col__title">Company</div>
          <a href="#">About</a>
          <a href="#">Sell your notes</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-col">
          <div className="footer-col__title">Support</div>
          <a href="#">Help centre</a>
          <a href="#">Refunds</a>
          <a href="#">Terms</a>
        </div>
      </div>

      <div className="footer-bottom">© 2026 Fullmarks. All rights reserved.</div>
    </footer>
  );
}
