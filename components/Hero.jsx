
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Leaf } from "lucide-react";

const images = ["/rubtwentysix.jpeg", "/rubtwo.jpeg", "/rubten.jpeg"];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((index) => (index + 1) % images.length);
    }, 5600);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative overflow-hidden bg-[#F8F3ED] text-[#4A342B]">
      {/* Subtle editorial background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#B98F83]/10 blur-[100px]"
      />

      <div className="site-container relative">
        <div className="grid min-h-[680px] items-center gap-12 py-12 md:min-h-[740px] md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-20 xl:gap-20">
          {/* LEFT: Editorial content */}
          <div className="relative z-10 flex flex-col items-start">
            {/* Brand label */}
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B98F83]/50 bg-[#E9DED2]/60">
                <Leaf
                  className="h-4 w-4 text-[#8B6B60]"
                  strokeWidth={1.3}
                />
              </span>

              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6B60] sm:text-xs">
                @KasieRubDown
              </span>
            </div>

            {/* Main headline */}
            <h1 className="max-w-[650px] font-serif text-[clamp(3.25rem,7vw,6.25rem)] font-normal leading-[0.98] tracking-[-0.055em] text-[#4A342B]">
              Come back to
              <span className="mt-2 block pl-5 font-normal italic text-[#987064] sm:pl-10">
                yourself.
              </span>
            </h1>

            {/* Decorative line */}
            <div className="mt-8 h-px w-16 bg-[#B98F83]" />

            {/* Supporting copy */}
            <p className="mt-7 max-w-[460px] font-sans text-[15px] leading-8 text-[#75645A] sm:text-base sm:leading-8">
              Slow down, release the tension, and make room for a little more
              peace. Discover a thoughtful wellness experience created to help
              your body relax and your mind feel renewed.
            </p>

            {/* Brand values */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 font-sans text-xs tracking-wide text-[#75645A] sm:text-sm">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B98F83]" />
                Personalised care
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-[#B98F83]/60 sm:block" />

              <span>Peaceful surroundings</span>

              <span className="hidden h-1 w-1 rounded-full bg-[#B98F83]/60 sm:block" />

              <span>Time for yourself</span>
            </div>

            {/* Actions */}
            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/prices"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-[#4A342B] bg-[#4A342B] px-7 py-4 font-sans text-sm font-medium text-[#FFFDF9] transition duration-300 hover:-translate-y-0.5 hover:border-[#62483C] hover:bg-[#62483C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987064]"
              >
                Book Your Session

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-[#D8C8BA] bg-transparent px-7 py-4 font-sans text-sm font-medium text-[#4A342B] transition duration-300 hover:border-[#B98F83] hover:bg-[#E9DED2]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987064]"
              >
                Explore Treatments

                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Small editorial note */}
            <p className="mt-8 font-serif text-lg italic text-[#8B6B60]">
              Pause. Breathe. Restore.
            </p>
          </div>

          {/* RIGHT: Image carousel */}
          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto lg:mr-0">
            {/* Decorative background frame */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 left-8 top-8 rounded-[180px_180px_16px_16px] border border-[#B98F83]/50 sm:-bottom-5 sm:-right-5 sm:left-10 sm:top-10"
            />

            {/* Main image */}
            <div
              className="group relative aspect-[4/4.8] w-full overflow-hidden rounded-[180px_180px_12px_12px] bg-[#E9DED2] sm:aspect-[4/4.4] lg:aspect-[4/4.9]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsPaused(false);
                }
              }}
            >
              {images.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                    index === currentImageIndex
                      ? "z-10 opacity-100"
                      : "z-0 opacity-0"
                  }`}
                  aria-hidden={index !== currentImageIndex}
                >
                  <Image
                    src={src}
                    alt={
                      index === 0
                        ? "Kasie Rub Down Wellness massage and relaxation experience"
                        : index === 1
                          ? "A peaceful moment at Kasie Rub Down Wellness"
                          : "Discover the wellness experience at Kasie Rub Down"
                    }
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
                    quality={90}
                    className="object-cover object-center transition-transform duration-[6000ms] ease-out"
                  />
                </div>
              ))}

              {/* Soft photographic overlay */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#33221C]/45 via-transparent to-[#33221C]/5" />

              {/* Image caption */}
              <div className="absolute bottom-6 left-5 right-5 z-30 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-[10px]">
                    Your time, your pace
                  </p>

                  <p className="mt-1 font-serif text-2xl italic text-white sm:text-3xl">
                    A moment just for you.
                  </p>
                </div>

                {/* Carousel indicators */}
                <div
                  className="flex shrink-0 items-center gap-2 pb-1"
                  aria-label="Hero image navigation"
                >
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Show hero image ${index + 1}`}
                      aria-pressed={index === currentImageIndex}
                      className={`h-1 rounded-full transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                        index === currentImageIndex
                          ? "w-8 bg-white"
                          : "w-4 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating experience label */}
            <div className="absolute -left-2 top-8 z-30 max-w-[160px] rounded-2xl border border-[#E3D7CB] bg-[#FFFDF9]/95 p-4 shadow-[0_12px_40px_rgba(74,52,43,0.08)] backdrop-blur-sm sm:-left-8 sm:top-16 sm:max-w-[190px] sm:p-5">
              <Leaf
                className="mb-3 h-5 w-5 text-[#987064]"
                strokeWidth={1.3}
              />

              <p className="font-serif text-lg leading-tight text-[#4A342B] sm:text-xl">
                Your wellbeing, thoughtfully considered.
              </p>

              <p className="mt-2 font-sans text-[10px] leading-5 text-[#75645A] sm:text-xs">
                Discover your moment of calm.
              </p>
            </div>

            {/* Image number */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#8B6B60]">
                Kasie Rub Down · Wellness & Massage
              </p>

              <p
                className="shrink-0 font-sans text-xs tabular-nums tracking-[0.15em] text-[#75645A]"
                aria-live="polite"
                aria-atomic="true"
              >
                0{currentImageIndex + 1} <span className="text-[#B98F83]">/</span>{" "}
                0{images.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section transition */}
      <div className="border-t border-[#E3D7CB]/70">
        <div className="site-container flex min-h-[62px] items-center justify-between gap-4">
          <p className="font-sans text-[9px] uppercase tracking-[0.18em] text-[#75645A] sm:text-[10px] sm:tracking-[0.22em]">
            An invitation to slow down
          </p>

          <a
            href="#know-me"
            className="group inline-flex items-center gap-2 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[#4A342B] transition-colors hover:text-[#987064] sm:text-xs"
          >
            Discover our story

            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
