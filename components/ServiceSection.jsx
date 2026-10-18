
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  Heart,
  Feather,
  ArrowRight,
  Check,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Nuru Ritual",
      description:
        "A silky full-body session designed for deep relaxation, warmth, and a slow reset.",
      image: "/rubone.jpeg",
      icon: Sparkles,
      tag: "Signature",
      number: "01",
    },
    {
      id: 2,
      title: "Deep Release",
      description:
        "Focused pressure and pacing to ease tension, soften knots, and restore comfort.",
      image: "/rubseven.jpeg",
      icon: Zap,
      tag: "Restorative",
      number: "02",
    },
    {
      id: 3,
      title: "Full Body Serenity",
      description:
        "A head-to-toe flow to encourage relaxation and help you fully unwind.",
      image: "/rubeight.jpeg",
      icon: Heart,
      tag: "Classic",
      number: "03",
    },
    {
      id: 4,
      title: "Erotic Massage",
      description:
        "A private experience centred on communication, personal boundaries, and comfort.",
      image: "/rubnine.jpeg",
      icon: Feather,
      tag: "Private",
      number: "04",
    },
  ];

  const promises = [
    "A clean, comfortable environment",
    "Attention to your preferences",
    "Respect for personal boundaries",
    "Time to relax without feeling rushed",
  ];

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#F8F3ED] py-20 text-[#4A342B] sm:py-24 md:py-28 lg:py-32"
    >
      {/* Subtle background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#B98F83]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#E9DED2]/80 blur-[100px]"
      />

      <div className="site-container relative">
        {/* Section introduction */}
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#B98F83]" />

              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#987064] sm:text-xs">
                Discover your moment
              </p>
            </div>

            <h2 className="mt-6 font-serif text-[clamp(2.8rem,5vw,4.7rem)] font-normal leading-[1.05] tracking-[-0.04em] text-[#4A342B]">
              Wellness, with
              <span className="mt-1 block pl-3 italic text-[#987064] sm:pl-6">
                intention.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl font-sans text-[15px] leading-8 text-[#75645A] sm:text-base sm:leading-8">
              Explore thoughtfully presented experiences designed to
              help you slow down, release tension, and reconnect with
              your sense of wellbeing.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex min-h-[50px] shrink-0 items-center gap-3 self-start rounded-full border border-[#D8C6B9] px-6 py-3 font-sans text-sm font-medium text-[#4A342B] transition duration-300 hover:border-[#4A342B] hover:bg-[#4A342B] hover:text-[#FFFDF9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987064] md:self-auto"
          >
            Explore all services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Editorial service cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4">
          {services.map((service) => {
            const ServiceIcon = service.icon;

            return (
              <article
                key={service.id}
                className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#E3D7CB] bg-[#FFFDF9] transition duration-500 hover:-translate-y-1 hover:border-[#B98F83]/70 hover:shadow-[0_18px_45px_rgba(74,52,43,0.08)]"
              >
                {/* Service photography */}
                <div className="relative h-[320px] overflow-hidden bg-[#E9DED2] sm:h-[300px] lg:h-[290px]">
                  <Image
                    src={service.image}
                    alt={`${service.title} wellness experience`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#33221C]/55 via-transparent to-[#33221C]/10" />

                  {/* Image details */}
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between sm:left-5 sm:right-5 sm:top-5">
                    <span className="rounded-full border border-white/35 bg-[#33221C]/35 px-3 py-1.5 font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md sm:text-[10px]">
                      {service.tag}
                    </span>

                    <span className="font-sans text-[10px] tracking-[0.16em] text-white/90">
                      {service.number}
                    </span>
                  </div>

                  {/* Service icon */}
                  <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[#FFFDF9]/90 text-[#4A342B] backdrop-blur-md transition duration-300 group-hover:bg-[#4A342B] group-hover:text-[#FFFDF9] sm:bottom-5 sm:left-5">
                    <ServiceIcon
                      className="h-[18px] w-[18px]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-serif text-[26px] font-normal leading-tight text-[#4A342B]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 font-sans text-sm leading-7 text-[#75645A]">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-[#E3D7CB] pt-4">
                    <Link
                      href="/services"
                      aria-label={`Explore ${service.title}`}
                      className="group/link inline-flex min-h-8 items-center gap-2 font-sans text-xs font-semibold tracking-wide text-[#987064] transition-colors duration-300 hover:text-[#4A342B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987064] sm:text-sm"
                    >
                      Discover experience
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Reservation feature panel */}
        <div className="relative mt-16 overflow-hidden rounded-[24px] border border-[#DCCBBE] bg-[#E9DED2] sm:mt-20 md:mt-24">
          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#B98F83]/25"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-[#B98F83]/25"
          />

          <div className="relative grid grid-cols-1 gap-10 p-6 sm:p-9 md:grid-cols-12 md:items-center md:gap-10 md:p-11 lg:gap-14 lg:p-14">
            {/* Reservation copy */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B98F83]" />

                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#987064] sm:text-xs">
                  Your time, your way
                </p>
              </div>

              <h3 className="mt-5 max-w-xl font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-normal leading-[1.08] tracking-[-0.035em] text-[#4A342B]">
                Make time for
                <span className="mt-1 block pl-2 italic text-[#987064] sm:pl-4">
                  yourself.
                </span>
              </h3>

              <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-[#75645A] sm:text-base sm:leading-8">
                Your time to unwind deserves thoughtful attention.
                Explore our rates, find an experience that suits you,
                and get in touch if you have questions before booking.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/prices"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#4A342B] px-7 py-3 font-sans text-sm font-medium text-[#FFFDF9] transition duration-300 hover:-translate-y-0.5 hover:bg-[#62483C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987064]"
                >
                  View our rates
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#C7B3A4] px-7 py-3 font-sans text-sm font-medium text-[#4A342B] transition duration-300 hover:border-[#4A342B] hover:bg-[#FFFDF9]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987064]"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            {/* What to expect */}
            <div className="md:col-span-5">
              <div className="rounded-[18px] border border-[#E3D7CB] bg-[#FFFDF9] p-6 sm:p-7">
                <p className="font-serif text-2xl text-[#4A342B] sm:text-3xl">
                  Your wellbeing matters.
                </p>

                <p className="mt-2 font-sans text-sm leading-6 text-[#75645A]">
                  Every experience begins with care and consideration.
                </p>

                <ul className="mt-6 space-y-4">
                  {promises.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-sans text-sm leading-6 text-[#5E4A40]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F0E5DC] text-[#987064]">
                        <Check className="h-3 w-3" strokeWidth={2} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Closing brand signature */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[#E3D7CB] pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl italic text-[#75645A] sm:text-2xl">
            Pause. Breathe. Restore.
          </p>

          <p className="font-sans text-[9px] font-medium uppercase tracking-[0.22em] text-[#987064] sm:text-[10px]">
            @KasieRubDown
          </p>
        </div>
      </div>
    </section>
  );
}
