
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";

const reviews = [
  { name: "Amanda R.", text: "Absolutely amazing session. I felt relaxed and refreshed immediately." },
  { name: "James K.", text: "Very professional and calming experience. Highly recommend." },
  { name: "Sophia M.", text: "The best session I’ve had in years." },
  { name: "Daniel T.", text: "Clean environment, great technique, and very respectful." },
  { name: "Lauren P.", text: "Helped relieve my back tension after just one visit." },
  { name: "Michael B.", text: "Comfortable, discreet, and worth every minute." },
  { name: "Rachel S.", text: "Felt at ease from start to finish." },
  { name: "Chris W.", text: "Attentive, skilled, and genuinely professional." },
  { name: "Emily D.", text: "A perfect balance of calm and deeper pressure." },
  { name: "Joshua L.", text: "Exceeded my expectations. Booking again soon." },
  { name: "Nicole A.", text: "Warm atmosphere and great communication." },
  { name: "Brian H.", text: "Helped me unwind after a stressful week." },
  { name: "Vanessa O.", text: "Excellent service and clear boundaries." },
  { name: "Kevin N.", text: "One of the best private experiences I’ve had." },
  { name: "Melissa J.", text: "Very intuitive and respectful throughout." },
  { name: "Andrew C.", text: "Felt like a reset for my body and mood." },
  { name: "Tina E.", text: "Gentle, calming, and extremely professional." },
  { name: "Robert F.", text: "Great pressure and attention to detail." },
  { name: "Hannah V.", text: "Relaxing from the first minute." },
  { name: "Eric Z.", text: "I left feeling lighter and more at ease." },
];

const guestPriorities = [
  "A clean and comfortable environment",
  "Care tailored to your preferences",
  "Respect for personal boundaries",
  "Thoughtful attention throughout",
];

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const current = reviews[index];

  const prev = () => {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % reviews.length);
  };

  useEffect(() => {
    if (pause) return;

    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5200);

    return () => clearInterval(timer);
  }, [pause]);

  // Display a manageable window of navigation indicators.
  const visibleDots = 8;
  const pageStart = Math.floor(index / visibleDots) * visibleDots;
  const dotItems = reviews.slice(pageStart, pageStart + visibleDots);

  return (
    <section
      id="reviews"
      className="relative w-full overflow-hidden bg-[#FFFDF9] py-20 text-[#4A342B] sm:py-24 md:py-28 lg:py-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#B98F83]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#E9DED2]/70 blur-[100px]"
      />

      <div className="site-container relative">
        {/* Section heading */}
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#B98F83]" />

              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#987064] sm:text-xs">
                Words of appreciation
              </p>
            </div>

            <h2 className="mt-6 font-serif text-[clamp(2.8rem,5vw,4.7rem)] font-normal leading-[1.05] tracking-[-0.04em] text-[#4A342B]">
              A little more
              <span className="mt-1 block pl-3 italic text-[#987064] sm:pl-6">
                peace of mind.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl font-sans text-[15px] leading-8 text-[#75645A] sm:text-base sm:leading-8">
              Discover the experiences shared by our guests, from moments
              of relaxation to the comfort of thoughtful, attentive care.
            </p>
          </div>

          {/* Brand signature */}
          <div className="hidden items-center gap-3 pb-2 md:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DCCBBE] bg-[#F8F3ED] text-[#987064]">
              <Star className="h-4 w-4" strokeWidth={1.4} />
            </div>

            <div>
              <p className="font-serif text-xl text-[#4A342B]">
                Kasie Rub Down Wellness
              </p>
              <p className="mt-0.5 font-sans text-xs tracking-wide text-[#75645A]">
                Your time to restore
              </p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-7">
          {/* Featured testimonial */}
          <div
            className="relative flex min-h-[440px] flex-col overflow-hidden rounded-[24px] border border-[#DCCBBE] bg-[#E9DED2]/75 p-6 sm:p-9 md:p-11 lg:col-span-8 lg:p-12"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
            onFocus={() => setPause(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setPause(false);
              }
            }}
          >
            {/* Decorative quote mark */}
            <Quote
              className="pointer-events-none absolute right-5 top-20 h-24 w-24 text-[#987064]/10 sm:right-9 sm:top-16 sm:h-32 sm:w-32"
              strokeWidth={1}
              aria-hidden="true"
            />

            {/* Review label and controls */}
            <div className="relative flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D8C6B9] bg-[#FFFDF9]/65 px-3.5 py-2 sm:px-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#987064]" />

                <span className="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-[#75645A] sm:text-[10px] sm:tracking-[0.2em]">
                  Guest testimonial
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous review"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8C6B9] bg-[#FFFDF9]/50 text-[#4A342B] transition duration-300 hover:border-[#4A342B] hover:bg-[#4A342B] hover:text-[#FFFDF9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987064]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next review"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8C6B9] bg-[#FFFDF9]/50 text-[#4A342B] transition duration-300 hover:border-[#4A342B] hover:bg-[#4A342B] hover:text-[#FFFDF9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987064]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Featured quote */}
            <div
              key={index}
              className="relative mt-10 flex flex-1 flex-col justify-center animate-in fade-in duration-500 sm:mt-14"
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="max-w-3xl font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-normal leading-[1.3] tracking-[-0.025em] text-[#4A342B]">
                “{current.text}”
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CDB2A5] bg-[#FFFDF9] font-serif text-lg italic text-[#987064]">
                    {current.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-sans text-sm font-semibold text-[#4A342B]">
                      {current.name}
                    </p>

                    <p className="mt-1 font-sans text-xs text-[#75645A]">
                      Guest feedback
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-1 text-[#987064]"
                  aria-label="Decorative five-star display"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                      strokeWidth={1.3}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Carousel progress */}
            <div className="relative mt-9 border-t border-[#D8C6B9] pt-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {dotItems.map((_, i) => {
                    const absoluteIndex = pageStart + i;
                    const active = absoluteIndex === index;

                    return (
                      <button
                        key={absoluteIndex}
                        type="button"
                        onClick={() => setIndex(absoluteIndex)}
                        aria-label={`Go to review ${absoluteIndex + 1}`}
                        aria-current={active ? "true" : undefined}
                        className={`h-1 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987064] ${
                          active
                            ? "w-9 bg-[#987064]"
                            : "w-4 bg-[#4A342B]/20 hover:bg-[#4A342B]/50"
                        }`}
                      />
                    );
                  })}
                </div>

                <span className="shrink-0 font-sans text-[10px] tracking-[0.15em] text-[#75645A] sm:text-xs sm:tracking-widest">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(reviews.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* Supporting information */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            {/* Guest priorities */}
            <div className="flex-1 rounded-[24px] border border-[#E3D7CB] bg-[#F8F3ED] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#B98F83]" />

                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#987064]">
                  Our approach
                </p>
              </div>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#4A342B]">
                The little things matter.
              </h3>

              <p className="mt-3 font-sans text-sm leading-7 text-[#75645A]">
                A welcoming atmosphere and considerate service help make
                time for yourself feel that much more meaningful.
              </p>

              <ul className="mt-7 space-y-4">
                {guestPriorities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-sans text-sm leading-6 text-[#5E4A40]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B98F83]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reservation panel */}
            <div className="rounded-[24px] border border-[#E3D7CB] bg-[#FFFDF9] p-6 sm:p-8">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#987064]">
                Your next moment
              </p>

              <h3 className="mt-4 font-serif text-3xl leading-tight text-[#4A342B]">
                Ready to slow down?
              </h3>

              <p className="mt-3 font-sans text-sm leading-7 text-[#75645A]">
                Explore our services and rates to find an experience
                that feels right for you.
              </p>

              <Link
                href="/prices"
                className="group mt-6 inline-flex min-h-[48px] items-center gap-3 rounded-full bg-[#4A342B] px-5 py-3 font-sans text-sm font-medium text-[#FFFDF9] transition duration-300 hover:-translate-y-0.5 hover:bg-[#62483C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987064]"
              >
                Explore our rates
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Closing signature */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[#E3D7CB] pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl italic text-[#75645A] sm:text-2xl">
            Every moment of care begins with you.
          </p>

          <p className="font-sans text-[9px] font-medium uppercase tracking-[0.22em] text-[#987064] sm:text-[10px]">
            @KasieRubDown
          </p>
        </div>
      </div>
    </section>
  );
}
