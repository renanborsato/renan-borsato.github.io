"use client";
import { useEffect, useRef, useState } from "react";

const sections = [
  ["home", "Home"],
  ["about", "About & résumé"],
  ["projects", "Projects"],
  ["faith", "Faith & technology"],
  ["ethics", "Ethics"],
  ["reflection", "Reflection"],
  ["references", "References"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    let savedTheme;
    try {
      savedTheme = localStorage.getItem("theme");
    } catch {
      /* Storage is optional. */
    }
    const dark = savedTheme === "dark";
    document.documentElement.classList.toggle("dark", dark);
    setDarkMode(dark);
    const updateHeight = () =>
      document.documentElement.style.setProperty(
        "--nav-height",
        `${headerRef.current.offsetHeight}px`,
      );
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(headerRef.current);
    const updateSection = () => {
      const offset = headerRef.current.offsetHeight + 40;
      let current = "home";
      for (const [id] of sections) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= offset)
          current = id;
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4
      )
        current = "contact";
      setActiveSection(current);
    };
    window.addEventListener("scroll", updateSection, { passive: true });
    window.addEventListener("hashchange", updateSection);
    updateSection();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateSection);
      window.removeEventListener("hashchange", updateSection);
    };
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* Keep working without storage. */
    }
  };
  const closeMenu = (event) => {
    setMenuOpen(false);
    setActiveSection(event.currentTarget.hash.slice(1));
    // Native anchors preserve fragments, history, and reduced-motion behavior.
    document
      .querySelector(event.currentTarget.hash)
      ?.focus({ preventScroll: true });
  };

  return (
    <header
      className="site-header"
      ref={headerRef}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className="nav-shell">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          RENAN BORSATO
        </a>
        <nav
          aria-label="Main navigation"
          className={menuOpen ? "primary-nav is-open" : "primary-nav"}
          id="primary-navigation"
        >
          <ul>
            {sections.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={activeSection === id ? "location" : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-controls">
          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-pressed={darkMode}
            aria-label="Dark mode"
          >
            <span aria-hidden="true">{darkMode ? "☾" : "☀"}</span>
          </button>
          <button
            ref={menuButtonRef}
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
            <span aria-hidden="true">{menuOpen ? " ×" : " +"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
