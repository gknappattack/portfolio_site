"use client";

import { useState } from "react";

const navLinks = [
  { label: "Projects", href: "#" },
  { label: "Academic Works", href: "#" },
  { label: "About Me", href: "#" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-[#E9F1F7] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-3 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex min-h-16 items-center justify-between py-2">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-[#131b23] hover:text-white sm:text-lg"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#131b23] hover:bg-[#131b23] hover:text-white sm:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`${isOpen ? "block" : "hidden"} pb-3 sm:hidden`}
        >
          <div className="flex flex-col gap-2 px-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-[#131b23] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
