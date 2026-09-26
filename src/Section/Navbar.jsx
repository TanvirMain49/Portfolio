/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { href: "#home", label: "Home"},
  { href: "#about", label: "About"},
  { href: "#experience", label: "Experience"},
  { href: "#work", label: "Work"},
  { href: "#contact", label: "Contact"},
];

function Navigation({ showIcons = false }) {
  return (
    <ul className="nav-ul">
      {navigationItems.map(({ href, label, Icon }) => (
        <li key={href} className="nav-li">
          <a href={href} className="nav-link">
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 backdrop-blur-lg bg-primary/40">
      <div className="px-5 sm:px-10 lg:px-15 mx-auto max-w-full">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <a
            href="/"
            className="text-lg sm:text-xl font-bold transition-colors text-neutral-200 hover:text-white"
          >
            Mahin
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex size-11 cursor-pointer items-center justify-center rounded-lg border border-aqua/20 bg-primary/70 text-aqua transition-colors hover:border-aqua/50 hover:bg-aqua/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua/70 sm:hidden"
          >
            <span className="relative flex size-5 items-center justify-center">
              <Menu
                aria-hidden="true"
                className={`absolute size-5 transition-all duration-200 ${open ? "rotate-45 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
              />
              <X
                aria-hidden="true"
                className={`absolute size-5 transition-all duration-200 ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-45 scale-75 opacity-0"}`}
              />
            </span>
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {open && (
        <motion.div
          id="mobile-navigation"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
          className="block overflow-hidden text-center sm:hidden bg-gradient-to-b from-primary/50 to-primary/20"
        >
          <nav className="pb-4 sm:pb-5" aria-label="Mobile navigation">
            <Navigation showIcons />
          </nav>
        </motion.div>
      )}
    </div>
  );
}
