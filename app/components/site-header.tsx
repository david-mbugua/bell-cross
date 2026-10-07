"use client";

import { List, Moon, Sun, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryLinks } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("bell-cross-theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      document.documentElement.dataset.theme = storedTheme;
    }
  }, []);

  function toggleTheme() {
    const explicitTheme = document.documentElement.dataset.theme;
    const isDark =
      explicitTheme === "dark" ||
      (explicitTheme !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("bell-cross-theme", nextTheme);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link
          aria-label="Bell & Cross home"
          className="brand-lockup"
          href="/#header"
          onClick={closeMenu}
        >
          <Image
            alt=""
            aria-hidden="true"
            className="brand-symbol"
            height={52}
            priority
            src="/bell-cross-mark.png"
            width={52}
          />
          <span className="brand-name">Bell &amp; Cross</span>
        </Link>

        <nav aria-label="Main navigation" className="desktop-navigation">
          {primaryLinks.map((link) => (
            <Link className="navigation-link" href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
          <button
            aria-label="Toggle light and dark theme"
            className="theme-toggle"
            onClick={toggleTheme}
            type="button"
          >
            <Sun aria-hidden="true" className="theme-icon-light" size={19} weight="regular" />
            <Moon aria-hidden="true" className="theme-icon-dark" size={19} weight="regular" />
          </button>
        </nav>

        <div className="mobile-navigation-controls">
          <button
            aria-label="Toggle light and dark theme"
            className="theme-toggle"
            onClick={toggleTheme}
            type="button"
          >
            <Sun aria-hidden="true" className="theme-icon-light" size={19} weight="regular" />
            <Moon aria-hidden="true" className="theme-icon-dark" size={19} weight="regular" />
          </button>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="theme-toggle menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? (
              <X aria-hidden="true" size={20} weight="regular" />
            ) : (
              <List aria-hidden="true" size={20} weight="regular" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Mobile navigation"
            className="mobile-navigation"
            exit={{ opacity: 0, y: -8 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {primaryLinks.map((link) => (
              <Link
                className="mobile-navigation-link"
                href={link.href}
                key={link.label}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="mobile-social-links">
              <a href="https://www.instagram.com/bell.and.cross/" rel="noreferrer" target="_blank">
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/bell-and-cross-investments/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
