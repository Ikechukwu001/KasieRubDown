
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  MessageCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Check,
} from "lucide-react";

const rates = [
  { duration: "40 minutes", price: "$200" },
  { duration: "60–90 minutes", price: "$260" },
  { duration: "2 hours", price: "$360" },
  { duration: "3 hours", price: "$460" },
  { duration: "4 hours", price: "$560" },
  { duration: "Full night", price: "$1,000" },
];

const extraServices = [
  { name: "BJ & HJ", price: "$100" },
  { name: "FaceTime & sexting", price: "$100" },
  { name: "Custom video", price: "$100" },
];

const services = [
  "Full Body",
  "Deep Tissue Massage",
  "Nuru Massage",
  "Hot Stone Massage",
  "Milking Table",
  "Swedish Massage",
  "Full Service",
  "Aromatherapy Massage",
];


const paymentOptions = [
  {
    key: "zelle",
    title: "Zelle",
    symbol: "Z",
    description: "Digital bank-to-bank payments.",
  },
  {
    key: "venmo",
    title: "Venmo",
    symbol: "V",
    description: "Convenient payments through Venmo.",
  },
  {
    key: "cashapp",
    title: "Cash App",
    symbol: "$",
    description: "Send payment using Cash App.",
  },
  {
    key: "applepay",
    title: "Apple Pay",
    symbol: "A",
    description: "Pay using Apple Pay.",
  },
  {
    key: "giftcards",
    title: "Gift Cards",
    symbol: "G",
    description: "Contact us to ask about accepted gift cards.",
  },
  {
    key: "chime",
    title: "Chime",
    symbol: "C",
    description: "Ask us about Chime payment options.",
  },
  {
    key: "crypto",
    title: "Cryptocurrency",
    symbol: "₿",
    description: "Ask which cryptocurrencies and networks are accepted.",
  },
];


export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F3ED] text-[#4A342B]">
      {/* Hero */}
      <section className="relative px-5 pb-14 pt-20 sm:px-8 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute -right-28 -top-20 h-96 w-96 rounded-full bg-[#B98F83]/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-[#E9DED2] blur-3xl" />

        <div className="site-container relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B98F83]" />
                <p className="text-xs uppercase tracking-[0.28em] text-[#987064]">
                  Kasie Rub Down
                </p>
              </div>

              <h1 className="font-serif text-5xl font-normal leading-[1.08] sm:text-6xl md:text-7xl">
                Unwind, restore,
                <span className="block italic text-[#B98F83]">
                  reconnect.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#75645A] sm:text-base sm:leading-8">
                Unwind, revitalize, and restore your body and mind with
                personalized rub-down and massage treatments.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4A342B] px-7 py-3.5 text-sm font-medium text-[#FFFDF9] transition hover:bg-[#62483C]"
                >
                  Book an appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#rates"
                  className="inline-flex items-center justify-center rounded-full border border-[#D7C5B7] px-7 py-3.5 text-sm font-medium text-[#4A342B] transition hover:bg-[#E9DED2]"
                >
                  View rates
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#75645A]">
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#B98F83]" />
                  Personalized sessions
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#B98F83]" />
                  Booking by confirmation
                </span>
              </div>
            </div>

            {/* Uploaded price-list image */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] border border-[#D7C5B7]" />

              <div className="relative overflow-hidden rounded-[1.7rem] border border-[#E3D7CB] bg-[#FFFDF9] p-2 shadow-xl shadow-[#4A342B]/10 sm:p-3">
                <Image
                  src="/rubrates.jpeg"
                  alt="Kasie Rub Down and Massage original promotional price list"
                  width={765}
                  height={1365}
                  priority
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="h-auto w-full rounded-2xl object-contain"
                />
              </div>

              <p className="mt-4 text-center text-xs text-[#8A786D]">
                Kasie Rub Down & Massage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rates */}
      <section
        id="rates"
        className="border-y border-[#E3D7CB] bg-[#FFFDF9] px-5 py-16 sm:px-8 md:py-24"
      >
        <div className="site-container mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-[#987064]">
              Session pricing
            </p>

            <h2 className="mt-4 font-serif text-4xl font-normal sm:text-5xl">
              Rates &amp; durations
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#75645A]">
              Choose the session duration that works best for you. Contact us
              to confirm availability before making arrangements.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-[#E3D7CB] bg-[#F8F3ED] p-5 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E9DED2] text-[#987064]">
                  <Clock className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="font-serif text-2xl">Session rates</h3>
                  <p className="mt-1 text-xs text-[#75645A]">
                    Prices as shown on the supplied artwork
                  </p>
                </div>
              </div>

              <div className="divide-y divide-[#E3D7CB]">
                {rates.map((rate) => (
                  <div
                    key={rate.duration}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="text-sm text-[#75645A] sm:text-base">
                      {rate.duration}
                    </span>

                    <span className="font-serif text-2xl text-[#4A342B] sm:text-3xl">
                      {rate.price}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#4A342B] px-6 py-3.5 text-sm font-medium text-[#FFFDF9] transition hover:bg-[#62483C]"
              >
                Request a booking
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Additional services */}
            <div className="rounded-3xl border border-[#E3D7CB] bg-[#E9DED2]/55 p-5 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#987064]">
                Additional offerings
              </p>

              <h3 className="mt-3 font-serif text-3xl">
                Extra services
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#75645A]">
                The following additional offerings and prices are listed on
                the supplied promotional image.
              </p>

              <div className="mt-6 space-y-3">
                {extraServices.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-[#D7C5B7] bg-[#FFFDF9]/80 p-4"
                  >
                    <span className="text-sm text-[#4A342B]">
                      {service.name}
                    </span>
                    <span className="shrink-0 font-medium text-[#987064]">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#D7C5B7] bg-[#FFFDF9]/60 p-4">
                <p className="text-xs leading-6 text-[#75645A]">
                  Please contact us directly to clarify the availability and
                  details of any additional offering before booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services offered */}
      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="site-container mx-auto max-w-6xl">
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#987064]">
                Explore the menu
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Services
                <span className="block italic text-[#B98F83]">
                  offered.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#75645A]">
                The promotional artwork lists the following massage and
                wellness services. Contact us to ask which options are
                currently available.
              </p>

              <Link
                href="/services"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#D7C5B7] px-6 py-3 text-sm font-medium transition hover:bg-[#E9DED2]"
              >
                Explore sessions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-2xl border border-[#E3D7CB] bg-[#FFFDF9] p-4 transition hover:border-[#B98F83]/70"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E9DED2] text-[#987064]">
                    <Check className="h-4 w-4" />
                  </span>

                  <span className="text-sm text-[#4A342B]">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment methods */}
<section
  id="payment"
  aria-labelledby="payment-methods-heading"
  className="border-t border-[#E3D7CB] bg-[#FFFDF9] px-5 py-16 sm:px-8 md:py-24"
>
  <div className="site-container mx-auto max-w-6xl">
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-xs uppercase tracking-[0.28em] text-[#987064]">
        Convenient payment options
      </p>

      <h2
        id="payment-methods-heading"
        className="mt-4 font-serif text-4xl font-normal sm:text-5xl"
      >
        Ways to pay
      </h2>

      <div className="mx-auto mt-5 h-px w-20 bg-[#B98F83]" />

      <p className="mt-5 text-sm leading-7 text-[#75645A] sm:text-base">
        Choose a payment method below and contact us to confirm availability
        and receive the correct payment instructions before sending money.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {paymentOptions.map((method) => (
        <Link
          key={method.key}
          href={`/contact?payment=${encodeURIComponent(method.title)}`}
          className="group flex flex-col rounded-3xl border border-[#E3D7CB] bg-[#F8F3ED] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B98F83] hover:shadow-lg hover:shadow-[#4A342B]/5 sm:p-7"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D7C5B7] bg-[#FFFDF9] font-serif text-2xl text-[#987064]">
              {method.symbol}
            </span>

            <ArrowRight className="h-5 w-5 text-[#B98F83] transition-transform group-hover:translate-x-1" />
          </div>

          <h3 className="mt-5 font-serif text-2xl text-[#4A342B]">
            {method.title}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-6 text-[#75645A]">
            {method.description}
          </p>

          <span className="mt-5 border-t border-[#E3D7CB] pt-4 text-xs font-semibold tracking-wide text-[#987064]">
            Contact for payment details
          </span>
        </Link>
      ))}
    </div>

    <div className="mt-8 rounded-2xl border border-[#E3D7CB] bg-[#F8F3ED] p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#987064]" />

        <div>
          <h3 className="text-sm font-semibold text-[#4A342B]">
            Payment and booking confirmation
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#75645A]">
            Not every payment method may be available for every booking.
            Confirm the accepted method, amount, and payment details directly
            before paying. Your appointment is confirmed only after the
            booking has been verified.
          </p>
        </div>
      </div>
    </div>

    <div className="mt-8 text-center">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4A342B] px-7 py-3.5 text-sm font-medium text-[#FFFDF9] transition hover:bg-[#62483C]"
      >
        Contact us
        <MessageCircle className="h-4 w-4" />
      </Link>
    </div>
  </div>
</section>

      {/* Booking CTA */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="site-container mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#4A342B] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-28 -right-12 h-80 w-80 rounded-full border border-white/10" />

            <div className="relative mx-auto max-w-2xl">
              <MessageCircle className="mx-auto h-7 w-7 text-[#D6B1A4]" />

              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-[#D6B1A4]">
                Your next step
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#FFFDF9] sm:text-5xl">
                Ready to arrange your session?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
                Get in touch to discuss your preferred duration, ask questions,
                and confirm availability.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#E9DED2] px-8 py-4 text-sm font-semibold text-[#4A342B] transition hover:bg-[#FFFDF9]"
              >
                Book now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
