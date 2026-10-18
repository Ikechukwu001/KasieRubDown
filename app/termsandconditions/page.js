
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Handshake,
  Scale,
  Wallet,
  CalendarClock,
  LockKeyhole,
  ClipboardCheck,
  ArrowRight,
  Info,
} from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Kasie Rub Down",
  description:
    "Appointment booking rules, session policies, deposits, cancellations, consent, and professional standards for Kasie Rub Down.",
};

const LAST_UPDATED = "October 16, 2026";

const policies = [
  {
    number: "01",
    title: "Age Requirement",
    icon: Users,
    description:
      "All clients must be 18 years of age or older. By booking a session, you confirm that you meet this requirement and agree to provide valid identification if requested.",
    points: [
      "Bookings are available to adults aged 18 and over only.",
      "Valid identification may be requested to verify age.",
    ],
  },
  {
    number: "02",
    title: "Professional Conduct",
    icon: Handshake,
    description:
      "Clients must behave respectfully at all times. Aggressive, inappropriate, threatening, or disrespectful behavior may result in immediate termination of the session without a refund.",
    points: [
      "Respectful communication is required before, during, and after appointments.",
      "Harassment, intimidation, or abusive behavior will not be tolerated.",
      "The session may be ended if professional standards are violated.",
    ],
  },
  {
    number: "03",
    title: "Consent & Personal Boundaries",
    icon: ShieldCheck,
    description:
      "Mutual respect, clear communication, and personal boundaries are essential throughout every session. Consent must be freely given and can be withdrawn at any time.",
    points: [
      "All activities must remain within mutually agreed boundaries.",
      "Either party may pause or end a session when necessary.",
      "Any violation of consent or personal boundaries may result in immediate termination without a refund.",
    ],
  },
  {
    number: "04",
    title: "Law Enforcement Statement",
    icon: Scale,
    description:
      "The supplied booking agreement states that clients confirm they are not affiliated with a law-enforcement agency and are not involved in investigative or undercover activity.",
    points: [
      "This statement is included as written in the supplied booking rules.",
      "It does not replace applicable laws or legal obligations.",
    ],
  },
  {
    number: "05",
    title: "Deposit & Cancellation Policy",
    icon: Wallet,
    description:
      "A 50% non-refundable deposit is required for first-time clients and is applied toward the total session price.",
    points: [
      "First-time clients must pay a 50% deposit to secure a booking.",
      "The supplied poster states that cancellations must be made at least 6/12 hours in advance. Confirm the applicable notice period when booking.",
      "Late cancellations and no-shows may result in forfeiture of the deposit.",
      "Appointment changes are subject to availability and confirmation.",
    ],
  },
  {
    number: "06",
    title: "Payment & Booking Confirmation",
    icon: CalendarClock,
    description:
      "A booking request is not a confirmed appointment. Availability and payment arrangements must be confirmed directly before making final plans.",
    points: [
      "Confirm the session duration, total price, and deposit amount before paying.",
      "Use only payment details confirmed directly by the business.",
      "Keep your payment receipt or transaction confirmation.",
      "The deposit is applied toward the total session price as described in the supplied policy.",
    ],
  },
  {
    number: "07",
    title: "Privacy & Appointment Details",
    icon: LockKeyhole,
    description:
      "The supplied booking agreement states that personal address and meeting details will not be shared until the deposit is received.",
    points: [
      "Personal information should be used for appointment coordination and communication.",
      "Please do not share private contact or appointment information without permission.",
      "Contact the business directly if you have questions about how your information is handled.",
    ],
  },
  {
    number: "08",
    title: "Client Responsibilities",
    icon: ClipboardCheck,
    description:
      "Clients are responsible for providing accurate booking details, communicating respectfully, and understanding the terms before confirming an appointment.",
    points: [
      "Provide accurate contact information and your preferred appointment time.",
      "Discuss relevant allergies, injuries, or health concerns before a massage session.",
      "Ask questions about the service or policy before paying a deposit.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F3ED] text-[#4A342B]">
      {/* Editorial hero */}
      <section className="relative px-5 pb-14 pt-20 sm:px-8 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#B98F83]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-24 h-80 w-80 rounded-full bg-[#E9DED2] blur-3xl" />

        <div className="site-container relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-[#B98F83]" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#987064] sm:text-xs">
                Your booking guide
              </p>
              <span className="h-px w-9 bg-[#B98F83]" />
            </div>

            <h1 className="font-serif text-5xl font-normal leading-[1.08] sm:text-6xl md:text-7xl">
              Terms &amp;
              <span className="block italic text-[#B98F83]">
                Conditions.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#75645A] sm:text-base sm:leading-8">
              Appointment bookings, session rules, and booking agreement.
              Please read these policies carefully before requesting or
              confirming a session.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#4A342B] px-7 py-3.5 text-sm font-medium text-[#FFFDF9] transition hover:bg-[#62483C]"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/prices"
                className="inline-flex items-center rounded-full border border-[#D7C5B7] px-7 py-3.5 text-sm font-medium transition hover:bg-[#E9DED2]"
              >
                View rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Important notice */}
      <section className="px-5 pb-12 sm:px-8 md:pb-16">
        <div className="site-container mx-auto max-w-5xl">
          <div className="flex flex-col gap-5 rounded-3xl border border-[#D7C5B7] bg-[#E9DED2]/65 p-6 sm:flex-row sm:items-start sm:p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFFDF9] text-[#987064]">
              <Info className="h-5 w-5" />
            </span>

            <div>
              <h2 className="font-serif text-2xl">
                Before you make a booking
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#75645A]">
                By requesting or confirming an appointment, you acknowledge
                these booking rules. All clients must be 18 or older.
                Respectful conduct, clear consent, and adherence to agreed
                boundaries are required. Please confirm the applicable
                cancellation notice period and payment arrangements directly
                before sending a deposit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy cards */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="site-container mx-auto max-w-5xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.28em] text-[#987064]">
              Please read carefully
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Booking policies
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#75645A]">
              The following sections organize the rules from your supplied
              agreement into an easy-to-read format.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {policies.map((policy) => {
              const Icon = policy.icon;

              return (
                <article
                  key={policy.number}
                  className="group rounded-3xl border border-[#E3D7CB] bg-[#FFFDF9] p-6 transition duration-300 hover:border-[#B98F83]/70 hover:shadow-lg hover:shadow-[#4A342B]/5 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F8F3ED] text-[#987064] transition group-hover:bg-[#E9DED2]">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>

                    <span className="font-serif text-2xl text-[#C8B2A3]">
                      {policy.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl text-[#4A342B]">
                    {policy.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#75645A]">
                    {policy.description}
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-[#E3D7CB] pt-5">
                    {policy.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-[#75645A]"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E9DED2] text-[#987064]">
                          <CheckIcon />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deposit notice */}
      <section className="border-y border-[#E3D7CB] bg-[#FFFDF9] px-5 py-14 sm:px-8 md:py-20">
        <div className="site-container mx-auto max-w-5xl">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#987064]">
                Deposit &amp; cancellations
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                Know the terms before you confirm.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#75645A]">
                The supplied agreement specifies a 50% non-refundable deposit
                for first-time clients. It also refers to a 6/12-hour
                cancellation notice period. Please confirm the exact required
                notice period for your appointment before paying.
              </p>
            </div>

            <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border border-[#D7C5B7] bg-[#F8F3ED] text-center">
              <span className="font-serif text-4xl text-[#987064]">50%</span>
              <span className="mt-1 max-w-[90px] text-[10px] uppercase leading-4 tracking-[0.15em] text-[#75645A]">
                First-time client deposit
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="site-container mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#4A342B] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-24 -right-12 h-72 w-72 rounded-full border border-white/10" />

            <div className="relative mx-auto max-w-2xl">
              <ShieldCheck className="mx-auto h-7 w-7 text-[#D6B1A4]" />

              <h2 className="mt-5 font-serif text-3xl leading-tight text-[#FFFDF9] sm:text-5xl">
                Questions before you book?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70">
                Contact us to clarify the booking rules, deposit requirements,
                cancellation period, or session availability before making
                arrangements.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E9DED2] px-7 py-3.5 text-sm font-semibold text-[#4A342B] transition hover:bg-[#FFFDF9]"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-[#8A786D]">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>
    </main>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-3 w-3"
    >
      <path
        d="m4 10 4 4 8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
