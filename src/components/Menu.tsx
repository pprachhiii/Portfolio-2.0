"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Activities", href: "/#activities" },
  { label: "Contact", href: "/#contact-section" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className={`menu-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <line
            className="m-h"
            x1="4"
            y1="12"
            x2="20"
            y2="12"
          />

          <line
            className="m-v"
            x1="12"
            y1="4"
            x2="12"
            y2="20"
          />
        </svg>
      </button>

      <div className={`menu-panel ${open ? "open" : ""}`}>
        <div className="menu-inner">
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={closeMenu}
                  style={
                    {
                      "--item-index": index,
                    } as React.CSSProperties
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="menu-foot">
            India - GMT+5:30
          </div>
        </div>
      </div>
    </>
  );
}