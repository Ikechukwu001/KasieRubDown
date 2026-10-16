
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  const exploreLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Sessions" },
    { href: "/prices", label: "Rates & Booking" },
    { href: "/gallery", label: "Gallery" },
    { href: "/review", label: "Guest Reviews" },
    { href: "/contact", label: "Contact" },
    { href: "/termsandconditions", label: "Policies & Terms" },
  ];

  return (
    <footer className="border-t border-[#E3D7CB] bg-[#F8F3ED] text-[#4A342B]">
      {/* Booking callout */}
      <section className="relative overflow-hidden border-b border-[#E3D7CB] bg-[#E9DED2]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#B98F83]/30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-8 h-44 w-44 rounded-full border border-[#B98F83]/25"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-[38%] h-48 w-48 rounded-full border border-[#B98F83]/20"
        />

        <div className="site-container relative py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#987064]" />
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-[#987064]">
                  Your time to unwind
                </p>
              </div>

              <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-tight text-[#4A342B] sm:text-5xl lg:text-6xl">
                Make room for
                <span className="mt-1 block italic text-[#987064]">
                  a little more peace.
                </span>
              </h2>

              <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-[#75645A] sm:text-base">
                Discover a more considered approach to relaxation, personal
                comfort, and wellbeing. Your next moment of calm begins with
                making time for yourself.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-[10px] uppercase tracking-[0.14em] text-[#75645A]">
                <span>Thoughtful care</span>
                <span aria-hidden="true" className="text-[#B98F83]">
                  ✳
                </span>
                <span>Your comfort matters</span>
                <span aria-hidden="true" className="text-[#B98F83]">
                  ✳
                </span>
                <span>By appointment</span>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[230px]">
              <Link
                href="/prices"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#4A342B] px-7 py-4 font-sans text-xs font-semibold tracking-wide text-[#FFFDF9] transition duration-300 hover:bg-[#62483C]"
              >
                Explore rates & booking
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#B98F83]/60 bg-[#F8F3ED]/40 px-7 py-4 font-sans text-xs font-semibold tracking-wide text-[#4A342B] transition duration-300 hover:border-[#4A342B] hover:bg-[#FFFDF9]"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <div className="site-container py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand and philosophy */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link
              href="/"
              aria-label="Kasie Rub Down Wellness home"
              className="group inline-flex items-center gap-4"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B98F83]/50 bg-[#E9DED2] text-[#987064] transition duration-300 group-hover:border-[#987064] group-hover:bg-[#E3D2C4]">
                <Leaf className="h-5 w-5" strokeWidth={1.4} />
              </span>

              <span>
                <span className="block font-serif text-2xl tracking-tight text-[#4A342B] sm:text-3xl">
                  Kasie Rub Down
                </span>
                <span className="mt-1 block font-sans text-[9px] uppercase tracking-[0.28em] text-[#987064]">
                  Wellness & Massage
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md font-sans text-sm leading-7 text-[#75645A]">
              A welcoming wellness experience centred on relaxation,
              thoughtful care, and personal comfort. Every session begins
              with clear communication, consideration, and respect for
              individual boundaries.
            </p>

            <p className="mt-5 font-serif text-xl italic text-[#62483C]">
              Pause. Breathe. Restore.
            </p>

            <p className="mt-2 font-sans text-xs tracking-wide text-[#987064]">
              @KasieRubDown
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Thoughtful care",
                "Personal comfort",
                "Respectful service",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#E3D7CB] bg-[#FFFDF9] px-3 py-2 font-sans text-[10px] tracking-wide text-[#75645A]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Explore links */}
          <div className="lg:col-span-3">
            <h3 className="flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#987064]">
              <span className="h-px w-5 bg-[#B98F83]" />
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-sans text-sm text-[#75645A] transition-colors duration-200 hover:text-[#4A342B]"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-4">
            <h3 className="flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#987064]">
              <span className="h-px w-5 bg-[#B98F83]" />
              Get in touch
            </h3>

            <p className="mt-6 max-w-sm font-sans text-sm leading-7 text-[#75645A]">
              Have a question or need help choosing a session? We would be
              happy to hear from you. Reach out directly or send an enquiry
              through our contact page.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="tel:+12134619463"
                className="group flex items-center gap-4 rounded-2xl border border-[#E3D7CB] bg-[#FFFDF9] p-4 transition duration-300 hover:border-[#B98F83]/70 hover:bg-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9DED2] text-[#987064] transition-colors group-hover:bg-[#E3D2C4]">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </span>

                <span className="min-w-0">
                  <span className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#987064]">
                    Call us
                  </span>
                  <span className="mt-1 block font-sans text-sm text-[#4A342B] transition-colors group-hover:text-[#987064]">
                    +1 (213) 461-9463
                  </span>
                </span>
              </a>

              <a
                href="mailto:Kasierubdown@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-[#E3D7CB] bg-[#FFFDF9] p-4 transition duration-300 hover:border-[#B98F83]/70 hover:bg-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9DED2] text-[#987064] transition-colors group-hover:bg-[#E3D2C4]">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </span>

                <span className="min-w-0">
                  <span className="block font-sans text-[9px] uppercase tracking-[0.2em] text-[#987064]">
                    Email us
                  </span>
                  <span className="mt-1 block break-all font-sans text-sm text-[#4A342B] transition-colors group-hover:text-[#987064]">
                    Kasierubdown@gmail.com
                  </span>
                </span>
              </a>
            </div>

            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-wide text-[#987064] transition-colors hover:text-[#4A342B]"
            >
              Send an enquiry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-[#E3D7CB] pt-6 sm:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-xs leading-5 text-[#75645A]">
            © {currentYear} Kasie Rub Down Wellness. All rights reserved.
          </p>

          <Link
            href="/termsandconditions"
            className="font-sans text-xs text-[#75645A] transition-colors hover:text-[#987064]"
          >
            Policies & Terms
          </Link>

          <p className="flex items-center gap-2 font-serif text-sm italic text-[#987064]">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.4} />
            A gentler way to make time for yourself.
          </p>
        </div>
      </div>
    </footer>
  );
}
