
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Leaf, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Sessions" },
    { href: "/prices", label: "Rates" },
    { href: "/gallery", label: "Gallery" },
    { href: "/review", label: "Reviews" },
    { href: "/contact", label: "Contact" },
    { href: "/termsandconditions", label: "Policies" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const desktopLinks = navLinks.slice(0, 6);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Slim editorial announcement */}
      <div className="hidden border-b border-[#E3D7CB] bg-[#E9DED2]/70 backdrop-blur-md md:block">
        <div className="site-container flex h-9 items-center justify-between gap-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-[#75645A]">
            A considered approach to rest and wellbeing
          </p>

          <p className="font-sans text-[10px] tracking-[0.08em] text-[#75645A]">
            By appointment · Your time, your pace
          </p>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-[#E3D7CB]/80 bg-[#F8F3ED]/95 backdrop-blur-xl">
        <div className="site-container">
          <div className="flex h-[76px] items-center justify-between gap-4 sm:h-[84px]">
            {/* Brand */}
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Kasie Rub Down Wellness home"
              className="group flex min-w-0 items-center gap-3"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B98F83]/50 bg-[#E9DED2]/60 text-[#4A342B] transition duration-300 group-hover:border-[#4A342B] group-hover:bg-[#4A342B] group-hover:text-[#FFFDF9] sm:h-12 sm:w-12">
                <Leaf className="h-5 w-5" strokeWidth={1.25} />
              </span>

              <span className="flex min-w-0 flex-col">
                <span className="font-serif text-xl leading-none tracking-[-0.04em] text-[#4A342B] sm:text-2xl">
                  Kasie Rub Down
                </span>

                <span className="mt-1.5 font-sans text-[9px] uppercase tracking-[0.2em] text-[#8B6B60] sm:text-[10px] sm:tracking-[0.24em]">
                  Wellness & Massage
                </span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-4 lg:flex xl:gap-6"
            >
              {desktopLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative whitespace-nowrap py-2 font-sans text-[12px] transition-colors duration-200 xl:text-[13px] ${
                      active
                        ? "font-semibold text-[#8B6B60]"
                        : "text-[#4A342B]/80 hover:text-[#4A342B]"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-[#B98F83] transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}

              <Link
                href="/prices"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#4A342B] bg-[#4A342B] px-5 py-3 font-sans text-xs font-medium text-[#FFFDF9] transition duration-300 hover:-translate-y-0.5 hover:border-[#62483C] hover:bg-[#62483C]"
              >
                Book a session

                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </nav>

            {/* Mobile menu control */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex min-h-11 items-center gap-3 rounded-full border border-[#E3D7CB] px-4 text-[#4A342B] transition hover:border-[#B98F83] hover:bg-[#E9DED2]/60 lg:hidden"
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#75645A]">
                {isMenuOpen ? "Close" : "Menu"}
              </span>

              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <span className="flex w-4 flex-col gap-[5px]" aria-hidden="true">
                  <span className="h-px w-4 bg-[#4A342B]" />
                  <span className="h-px w-3 bg-[#B98F83]" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-[76px] z-50 overflow-y-auto bg-[#F8F3ED] lg:hidden sm:top-[84px]"
        >
          <div className="mx-auto flex min-h-full max-w-xl flex-col px-5 pb-10 pt-7 sm:px-8">
            {/* Intro */}
            <div className="mb-7 border-b border-[#E3D7CB] pb-6">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6B60]">
                Welcome to your pause
              </p>

              <h2 className="mt-3 font-serif text-4xl font-normal leading-tight tracking-[-0.04em] text-[#4A342B]">
                Make room for
                <span className="block italic text-[#987064]">
                  feeling better.
                </span>
              </h2>

              <p className="mt-3 max-w-sm font-sans text-sm leading-6 text-[#75645A]">
                Explore our sessions, discover your options, and take a
                little time for yourself.
              </p>
            </div>

            {/* Navigation links */}
            <nav
              aria-label="Mobile navigation"
              className="grid grid-cols-2 gap-3"
            >
              {navLinks.map((link, index) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-[58px] items-center justify-between gap-2 rounded-xl border px-4 py-3 font-sans text-sm transition-colors ${
                      active
                        ? "border-[#B98F83]/60 bg-[#E9DED2] text-[#4A342B]"
                        : "border-[#E3D7CB] bg-[#FFFDF9]/60 text-[#4A342B] hover:border-[#B98F83] hover:bg-[#E9DED2]/50"
                    }`}
                  >
                    <span>{link.label}</span>

                    <span className="text-[10px] text-[#8B6B60]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Primary actions */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/prices"
                onClick={closeMenu}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#4A342B] px-5 py-3 font-sans text-sm font-medium text-[#FFFDF9] transition hover:bg-[#62483C]"
              >
                Explore rates & book

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#E3D7CB] px-5 py-3 font-sans text-sm text-[#4A342B] transition hover:border-[#B98F83] hover:bg-[#E9DED2]/50"
              >
                Get in touch
              </Link>
            </div>

            {/* Brand footer */}
            <div className="mt-auto flex items-center justify-between gap-4 pt-10">
              <div>
                <p className="font-serif text-xl italic text-[#4A342B]">
                  Pause. Breathe. Restore.
                </p>

                <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.16em] text-[#75645A]">
                  @KasieRubDown
                </p>
              </div>

              <Leaf
                className="h-6 w-6 shrink-0 text-[#B98F83]"
                strokeWidth={1.2}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
