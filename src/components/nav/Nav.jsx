// Nav.jsx
import { useEffect, useState } from "react";

function Nav() {
  const [theme, setTheme] = useState("light");

  // Optional: read system or saved preference on mount
  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      document.body.setAttribute("data-theme", saved);
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="top-nav">
      <div className="logo">Shivangi Malik</div>

      <div className="nav-links">
        {/* <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
          Projects
        </button>
        <button onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>
          Skills
        </button>
        <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          Contact
        </button> */}
      </div>

      <div className="right-side">
        <button
          onClick={toggleTheme}
          style={{
            borderRadius: "999px",
            border: "1px solid var(--border-subtle)",
            padding: "0.25rem 0.6rem",
            fontSize: "0.75rem",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        <button className="book-btn">
          <a href="mailto:someone@example.com">Book a Call</a>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
