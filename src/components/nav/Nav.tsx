'use client';

import { navLinks } from "@/data/navItems";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

export function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      {/* Sidebar overlay (background) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 sm:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true">
        </div>
      )}

      {/* Main Navigation */}
      <nav className="bg-accent-lighter/95 accentShadow" aria-label="Main Navigation">
        <div className="contentMargins flex flex-row justify-between gap-2">
          <div className="content-center">
            <Link href="/" aria-label="Go to Home Page">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/PSiaProfileGraphic.png"
                alt="Main Graphic"
                width="56"
                height="56"
                className="rounded-2xl"
              />
            </Link>
          </div>

          <div className="content-center hidden sm:flex flex-row gap-4 p-4">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="hover:underline p-2"
                aria-label={item.arialabel ?? item.title}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="sm:hidden p-4 content-center hover:cursor-pointer"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={sidebarOpen}
            aria-controls="mobile-nav"
          >
            <ListIcon alt="Open Menu Icon" size={32} />
          </button>

        </div>
      </nav>

      {/* Sidebar navigation */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-56 bg-accent-lighter shadow-lg transform transition-transform duration-300 sm:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation"
        role="dialog"
        aria-modal="true"
        aria-hidden={!sidebarOpen}
        id="mobile-nav"
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="p-4 text-xl hover:cursor-pointer"
          aria-label="Close navigation menu"
          tabIndex={sidebarOpen ? 0 : -1}
        >
          <XIcon alt="Close Icon" size={24} />
        </button>
        <nav className="flex flex-col gap-2 p-4">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="hover:underline p-2"
              aria-label={item.arialabel ?? item.title}
              onClick={() => setSidebarOpen(false)}
              tabIndex={sidebarOpen ? 0 : -1}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}