import CurrencySelect from "@/components/CurrencySelect";

const MEGA_MENUS = [
  {
    name: "GCSE / IGCSE",
    boards: ["Edexcel GCSE", "Edexcel IGCSE", "AQA GCSE", "Oxford AQA", "OCR"],
  },
  {
    name: "A-Level",
    boards: ["AQA", "Edexcel", "International A-Level", "CAIE"],
  },
  {
    name: "IB",
    boards: ["MYP", "DP"],
  },
];

export default function Header() {
  return (
    <header className="site-header fade-up-fast" style={{ animationDelay: "0.05s" }}>
      <img
        src="/assets/fullmarks-logo-cropped.png"
        alt="Fullmarks"
        className="site-header__logo"
      />

      <nav className="mega-nav">
        {MEGA_MENUS.map((menu) => (
          <div className="mega-menu" key={menu.name} tabIndex={0}>
            <a href="#" className="mega-menu__trigger">
              {menu.name}
            </a>
            <div className="mega-menu__panel">
              {menu.boards.map((board) => (
                <div className="mega-menu__board" key={board} tabIndex={0}>
                  <div className="mega-menu__board-name">{board}</div>
                  <div className="mega-menu__popover">
                    <a href="#" className="is-notes">
                      Notes
                    </a>
                    <a href="#" className="is-papers">
                      Past Papers
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="header-search">
        <div className="header-search__bar">
          <span aria-hidden="true">🔍</span>
          <span>Search subjects, boards, topics…</span>
        </div>
      </div>

      <div className="header-actions">
        <CurrencySelect />
        <a href="#">Sign in</a>
        <div className="cart-pill">
          <span aria-hidden="true">🛒</span>
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
}
