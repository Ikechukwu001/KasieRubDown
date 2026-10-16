
"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  Shield,
  AtSign,
  ExternalLink,
  Clock3,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "Kasierubdown@gmail.com",
    href: "mailto:Kasierubdown@gmail.com",
    badge: "Email us",
    description: "For questions and appointments enquiries.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (213) 461-9463",
    href: "tel:+12134619463",
    badge: "Call / Text",
    description: "Reach out directly about your visit.",
  },
  {
    icon: MessageCircle,
    label: "iMessage",
    value: "+1 (213) 461-9463",
    href: "sms:+12134619463",
    badge: "Message",
    description: "Send a text at a time that suits you.",
  },
  {
    icon: Shield,
    label: "Signal",
    value: "+1 (213) 461-9463",
    href: "https://signal.me/#p/+12134619463",
    badge: "Private",
    description: "Connect through Signal messaging.",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@sweetlove2222",
    href: "https://t.me/@sweetlove2222",
    badge: "Chat",
    description: "Message us on Telegram.",
  },
  {
    icon: AtSign,
    label: "Discord",
    value: "@angel_perry1",
    href: "https://discord.com/app",
    badge: "Community",
    description: "Open Discord and search for this handle.",
  },
];

const inputClass =
  "w-full rounded-xl border border-[#E3D7CB] bg-[#FFFDF9] px-4 py-3.5 text-sm text-[#4A342B] outline-none transition placeholder:text-[#9B8B80] focus:border-[#B98F83] focus:ring-2 focus:ring-[#B98F83]/15";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setStatusType("");

    const form = e.currentTarget;

    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      zipcode: form.zipcode.value.trim(),
      service: form.service.value,
      preferred: form.preferred.value.trim(),
      message: form.message.value.trim(),
      website: form.website.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("Your request has been sent successfully. We look forward to hearing from you.");
      setStatusType("success");
      form.reset();
    } catch (err) {
      setStatus(err?.message || "Unable to send your request. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F3ED] text-[#4A342B]">
      {/* Editorial hero */}
      <section className="relative px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#B98F83]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#E9DED2]/80 blur-3xl" />

        <div className="site-container relative mx-auto max-w-6xl">
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B98F83]" />
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#987064] sm:text-xs">
                  We’re here for you
                </p>
              </div>

              <h1 className="max-w-3xl font-serif text-5xl font-normal leading-[1.05] tracking-tight text-[#4A342B] sm:text-6xl md:text-7xl">
                Your moment of
                <span className="block italic text-[#B98F83]">
                  calm begins here.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#75645A] sm:text-base sm:leading-8">
                Have a question or ready to arrange your next session? Get in
                touch or send an appointment request. We’ll help you take the
                next step toward a more restful experience.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#75645A]">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#B98F83]" />
                  Thoughtful, personal service
                </span>
                <span className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#B98F83]" />
                  Your enquiry handled with care
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="absolute -inset-3 rounded-[2rem] border border-[#E3D7CB]" />
              <div className="relative overflow-hidden rounded-[1.7rem] bg-[#E9DED2] p-7 sm:p-9">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFDF9] text-[#987064]">
                  <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
                </div>

                <p className="text-[10px] uppercase tracking-[0.25em] text-[#987064]">
                  A little note
                </p>

                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#4A342B] sm:text-4xl">
                  Let’s make time for you.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#75645A]">
                  Tell us what you’re looking for, share your preferred
                  appointment time, and we’ll get back to you to discuss
                  availability.
                </p>

                <div className="mt-7 border-t border-[#D7C5B7] pt-5">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#987064]" />
                    <p className="text-xs leading-6 text-[#75645A]">
                      Appointment times are confirmed individually. Please
                      wait for confirmation before making plans around your
                      requested time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="px-5 pb-16 sm:px-8 md:pb-24">
        <div className="site-container mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#987064] sm:text-xs">
              Get in touch
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[#4A342B] sm:text-4xl">
              Choose how to connect
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#75645A]">
              Pick the contact method that feels most convenient for you.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const isExternal = method.href.startsWith("https://");

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex min-h-[190px] flex-col rounded-2xl border border-[#E3D7CB] bg-[#FFFDF9] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#B98F83]/70 hover:shadow-[0_14px_35px_rgba(74,52,43,0.06)] sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F3ED] text-[#987064] transition group-hover:bg-[#E9DED2]">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>

                    <span className="rounded-full border border-[#E3D7CB] px-3 py-1 text-[9px] uppercase tracking-[0.15em] text-[#987064]">
                      {method.badge}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <h3 className="font-serif text-xl text-[#4A342B]">
                      {method.label}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#B98F83] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>

                  <p className="mt-1 break-words text-sm font-medium text-[#75645A]">
                    {method.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#8A786D]">
                    {method.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="site-container mx-auto max-w-6xl">
          <div className="grid overflow-hidden rounded-[2rem] border border-[#E3D7CB] bg-[#FFFDF9] shadow-[0_20px_60px_rgba(74,52,43,0.04)] lg:grid-cols-[0.75fr_1.25fr]">
            <div className="relative flex flex-col justify-between overflow-hidden bg-[#4A342B] p-7 text-[#FFFDF9] sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-10 -top-6 h-44 w-44 rounded-full border border-white/10" />

              <div className="relative">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#E9C9BC]">
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                </div>

                <p className="text-[10px] uppercase tracking-[0.28em] text-[#D6B1A4]">
                  Appointment enquiry
                </p>

                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                  Request your
                  <span className="block italic text-[#D6B1A4]">
                    appointment.
                  </span>
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
                  Complete the form with your preferred session and timing.
                  We’ll review your request and respond with the next steps.
                </p>
              </div>

              <div className="relative mt-12 border-t border-white/15 pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#D6B1A4]" />
                  <p className="text-xs leading-6 text-white/65">
                    Include accurate contact details so we can follow up about
                    your request.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-9 lg:p-12">
              <div className="mb-8">
                <h3 className="font-serif text-2xl text-[#4A342B] sm:text-3xl">
                  Tell us a little about your visit
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#75645A]">
                  Fields marked as required must be completed.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-5">
                {/* Honeypot: keep this field hidden from real visitors. */}
                <div
                  aria-hidden="true"
                  className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
                >
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs font-medium text-[#4A342B]"
                    >
                      Full name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      required
                      maxLength={100}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs font-medium text-[#4A342B]"
                    >
                      Email address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      maxLength={254}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-xs font-medium text-[#4A342B]"
                    >
                      Phone number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Your phone number"
                      required
                      maxLength={40}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-zipcode"
                      className="mb-2 block text-xs font-medium text-[#4A342B]"
                    >
                      ZIP / postal code *
                    </label>
                    <input
                      id="contact-zipcode"
                      name="zipcode"
                      type="text"
                      autoComplete="postal-code"
                      placeholder="ZIP or postal code"
                      required
                      maxLength={20}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="mb-2 block text-xs font-medium text-[#4A342B]"
                    >
                      Preferred session *
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Choose a session
                      </option>
                      <option value="Nuru Ritual">Nuru Ritual</option>
                      <option value="Deep Tissue Renewal">
                        Deep Tissue Renewal
                      </option>
                      <option value="Full Body Serenity">
                        Full Body Serenity
                      </option>
                      <option value="Private Sensory Ritual">
                        Private Sensory Ritual
                      </option>
                      <option value="Other / Ask">Other / Ask</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-preferred"
                      className="mb-2 block text-xs font-medium text-[#4A342B]"
                    >
                      Preferred date & time *
                    </label>
                    <input
                      id="contact-preferred"
                      name="preferred"
                      type="text"
                      placeholder="e.g. Feb 20, around 6 pm"
                      required
                      maxLength={120}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-medium text-[#4A342B]"
                  >
                    Additional details *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Share any questions or details that will help us respond to your request."
                    required
                    maxLength={3000}
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <div className="flex flex-col gap-4 border-t border-[#E3D7CB] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-xs leading-5 text-[#8A786D]">
                    Please keep messages respectful. Sending a request does not
                    guarantee an appointment until it is confirmed.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#4A342B] px-7 py-3 text-sm font-medium text-[#FFFDF9] transition hover:bg-[#62483C] focus:outline-none focus:ring-2 focus:ring-[#B98F83] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending request...
                      </>
                    ) : (
                      <>
                        Send booking request
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                {status && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`rounded-xl border px-4 py-3 ${
                      statusType === "success"
                        ? "border-[#C9D9C6] bg-[#F1F6EF] text-[#38533A]"
                        : "border-[#E5C5BE] bg-[#FBF0ED] text-[#8C4035]"
                    }`}
                  >
                    <p className="text-sm leading-6">{status}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Closing note */}
      <section className="border-t border-[#E3D7CB] bg-[#E9DED2]/55 px-5 py-14 text-center sm:px-8 md:py-20">
        <div className="mx-auto max-w-2xl">
          <Sparkles className="mx-auto h-5 w-5 text-[#B98F83]" />
          <h2 className="mt-4 font-serif text-3xl text-[#4A342B] sm:text-4xl">
            We look forward to hearing from you.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#75645A]">
            Thank you for considering Kasie Rub Down. Every enquiry is
            an opportunity to help you plan a more considered experience.
          </p>
        </div>
      </section>
    </main>
  );
}
