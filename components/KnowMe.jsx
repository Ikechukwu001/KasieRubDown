
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export default function KnowMe() {
  const pillars = [
    {
      number: "01",
      title: "Thoughtful care",
      description:
        "Every detail is considered to create a welcoming, comfortable experience.",
    },
    {
      number: "02",
      title: "Your comfort",
      description:
        "Your preferences, boundaries, and comfort guide every session.",
    },
    {
      number: "03",
      title: "Time to restore",
      description:
        "A chance to slow down, release tension, and reconnect with yourself.",
    },
  ];

  return (
    <section
      id="know-me"
      className="relative w-full overflow-hidden bg-[#FFFDF9] py-20 text-[#4A342B] sm:py-24 md:py-28 lg:py-32"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-[#B98F83]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#E9DED2]/70 blur-[100px]"
      />

      <div className="site-container relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 xl:gap-28">
          {/* LEFT: Editorial image composition */}
          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
            {/* Decorative frame */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 right-8 top-8 rounded-[180px_180px_12px_12px] border border-[#B98F83]/50 sm:-bottom-5 sm:-left-5 sm:right-10 sm:top-10"
            />

            {/* Main image */}
            <div className="relative aspect-[4/4.8] overflow-hidden rounded-[180px_180px_12px_12px] bg-[#E9DED2] sm:aspect-[4/4.6]">
              <Image
                src="/rubfour.jpeg"
                alt="A peaceful wellness environment at Kasie Rub Down Wellness"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#33221C]/40 via-transparent to-[#33221C]/5" />

              {/* Image caption */}
              <div className="absolute bottom-6 left-5 z-10 flex items-center gap-3 sm:bottom-8 sm:left-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-md">
                  <Leaf
                    className="h-4 w-4 text-white"
                    strokeWidth={1.4}
                  />
                </span>

                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white sm:text-xs">
                  A moment for yourself
                </p>
              </div>
            </div>

            {/* Floating secondary image */}
            <div className="absolute -bottom-8 -right-2 h-32 w-32 overflow-hidden rounded-2xl border-[5px] border-[#FFFDF9] bg-[#E9DED2] shadow-[0_15px_40px_rgba(74,52,43,0.12)] sm:-right-7 sm:h-44 sm:w-44 md:-bottom-10 md:h-52 md:w-52">
              <Image
                src="/rubseven.jpeg"
                alt="Thoughtful detail that create a calming wellness experience"
                fill
                sizes="(max-width: 640px) 128px, 208px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Small vertical detail */}
            <div
              aria-hidden="true"
              className="absolute -left-3 top-20 hidden h-20 w-px bg-[#B98F83] sm:block"
            />

            {/* Floating note */}
            <div className="absolute -left-1 top-10 max-w-[145px] rounded-xl border border-[#E3D7CB] bg-[#FFFDF9]/95 p-3 shadow-[0_10px_30px_rgba(74,52,43,0.07)] backdrop-blur-sm sm:-left-7 sm:top-14 sm:max-w-[165px] sm:p-4">
              <p className="font-serif text-lg italic leading-tight text-[#987064] sm:text-xl">
                Breathe a little deeper.
              </p>
            </div>
          </div>

          {/* RIGHT: Brand philosophy */}
          <div className="pt-3 lg:pt-0">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#B98F83]" />

              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#987064] sm:text-xs">
                The philosophy
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-xl font-serif text-[clamp(2.7rem,5vw,4.5rem)] font-normal leading-[1.06] tracking-[-0.045em] text-[#4A342B]">
              Make space for
              <span className="mt-2 block pl-3 italic text-[#987064] sm:pl-6">
                feeling better.
              </span>
            </h2>

            {/* Intro */}
            <p className="mt-7 max-w-xl font-sans text-[15px] leading-8 text-[#75645A] sm:text-base sm:leading-8">
              At @KasieRubDown, we believe that caring for yourself
              should feel natural, unhurried, and personal. Our approach
              centres on relaxation, thoughtful attention, and the simple
              comfort of taking time out.
            </p>

            <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-[#75645A]/90 sm:text-base">
              Whether you are looking to ease everyday tension or simply
              enjoy a quieter moment, your experience begins with listening
              to your needs and respecting your comfort throughout.
            </p>

            {/* Brand pillars */}
            <div className="mt-9 border-t border-[#E3D7CB]">
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="group grid grid-cols-[38px_1fr] gap-4 border-b border-[#E3D7CB] py-5 transition-colors duration-300 hover:bg-[#F8F3ED]/60 sm:grid-cols-[48px_1fr] sm:gap-5 sm:py-6"
                >
                  <span className="pt-1 font-sans text-[11px] font-medium tracking-[0.15em] text-[#987064]">
                    {pillar.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-xl font-normal text-[#4A342B] transition-colors duration-300 group-hover:text-[#987064] sm:text-2xl">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 max-w-md font-sans text-sm leading-6 text-[#75645A]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
              <Link
                href="/services"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#4A342B] px-6 py-3.5 font-sans text-sm font-medium text-[#FFFDF9] transition duration-300 hover:-translate-y-0.5 hover:bg-[#62483C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987064]"
              >
                Explore our services

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/termsandconditions"
                className="group inline-flex items-center gap-2 py-2 font-sans text-sm text-[#75645A] transition-colors duration-300 hover:text-[#987064] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987064]"
              >
                Our policies

                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Closing brand note */}
        <div className="mt-20 flex flex-col gap-3 border-t border-[#E3D7CB] pt-7 sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl italic text-[#75645A] sm:text-2xl">
            Rest is part of your wellbeing.
          </p>

          <p className="font-sans text-[9px] font-medium uppercase tracking-[0.22em] text-[#987064] sm:text-[10px]">
            @KasieRubDown
          </p>
        </div>
      </div>
    </section>
  );
}
