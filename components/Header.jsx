"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, MoreHorizontal, ChevronDown } from "lucide-react";
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openBoard, setOpenBoard] = useState(null);

  function toggleMenu(name) {
    setOpenMenu((current) => (current === name ? null : name));
    setOpenBoard(null);
  }

  function toggleBoard(name) {
    setOpenBoard((current) => (current === name ? null : name));
  }

  return (
    <header className="site-header fade-up-fast" style={{ animationDelay: "0.05s" }}>
      <Link href="/" className="site-header__brand">
        <img src="/assets/fullmarks-mark.png" alt="" className="site-header__logo" />
        <span className="site-header__wordmark">
          <span className="site-header__wordmark-full">Full</span>
          <span className="site-header__wordmark-marks">marks</span>
        </span>
      </Link>

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

      <button
        type="button"
        className="mobile-nav-toggle"
        aria-expanded={mobileNavOpen}
        aria-label="Toggle qualifications menu"
        onClick={() => setMobileNavOpen((open) => !open)}
      >
        <MoreHorizontal size={20} aria-hidden="true" />
      </button>

      {mobileNavOpen && (
        <div className="mobile-nav-panel">
          {MEGA_MENUS.map((menu) => (
            <div className="mobile-nav-menu" key={menu.name}>
              <button
                type="button"
                className="mobile-nav-menu__trigger"
                aria-expanded={openMenu === menu.name}
                onClick={() => toggleMenu(menu.name)}
              >
                {menu.name}
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className={openMenu === menu.name ? "is-open" : ""}
                />
              </button>

              {openMenu === menu.name && (
                <div className="mobile-nav-boards">
                  {menu.boards.map((board) => (
                    <div className="mobile-nav-board" key={board}>
                      <button
                        type="button"
                        className="mobile-nav-board__trigger"
                        aria-expanded={openBoard === board}
                        onClick={() => toggleBoard(board)}
                      >
                        {board}
                        <ChevronDown
                          size={14}
                          aria-hidden="true"
                          className={openBoard === board ? "is-open" : ""}
                        />
                      </button>

                      {openBoard === board && (
                        <div className="mobile-nav-branches">
                          <a href="#" className="is-notes">
                            Notes
                          </a>
                          <a href="#" className="is-papers">
                            Past Papers
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="header-search">
        <div className="header-search__bar">
          <Search size={17} aria-hidden="true" />
          <span>Search subjects, boards, topics…</span>
        </div>
      </div>

      <div className="header-actions">
        <CurrencySelect />
        <Link href="/sign-in">Sign in</Link>
        <Link href="/sign-up" className="signup-btn">
          Sign up
        </Link>
        <div className="cart-pill">
          <ShoppingCart size={17} aria-hidden="true" />
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
}
