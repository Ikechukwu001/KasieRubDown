
"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const categories = ["All", "Atmosphere", "Setup", "Details"];

const galleryImages = [
  { id: 1, src: "/rubone.jpeg", alt: "A warm, softly lit wellness atmosphere", tag: "Atmosphere", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/rubtwo.jpeg", alt: "A thoughtfully prepared private space", tag: "Setup", span: "" },
  { id: 3, src: "/rubthree.jpeg", alt: "Carefully arranged wellness essentials", tag: "Details", span: "" },
  { id: 4, src: "/rubfour.jpeg", alt: "Warm textures and refined lounge styling", tag: "Atmosphere", span: "md:row-span-2" },
  { id: 5, src: "/rubfive.jpeg", alt: "Fresh linens and a welcoming environment", tag: "Setup", span: "" },
  { id: 6, src: "/rubsix.jpeg", alt: "A calm setting prepared with care", tag: "Setup", span: "md:col-span-2" },
  { id: 7, src: "/rubseven.jpeg", alt: "A quiet corner designed for comfort", tag: "Atmosphere", span: "" },
  { id: 8, src: "/rubeight.jpeg", alt: "Thoughtful finishing touches throughout the space", tag: "Details", span: "" },
  { id: 9, src: "/rubnine.jpeg", alt: "Soft lighting and a peaceful setting", tag: "Atmosphere", span: "" },
  { id: 10, src: "/rubten.jpeg", alt: "A refined lounge setting with warm tones", tag: "Atmosphere", span: "md:col-span-2 md:row-span-2" },
  { id: 11, src: "/rubeleven.jpeg", alt: "Small details selected with intention", tag: "Details", span: "" },
  { id: 12, src: "/rubtwelve.jpeg", alt: "Soft tones and a clean, private setting", tag: "Atmosphere", span: "" },
  { id: 13, src: "/rubthirteen.jpeg", alt: "A welcoming setup for a relaxing session", tag: "Setup", span: "md:col-span-2" },
  { id: 14, src: "/rubfourteen.jpeg", alt: "Carefully arranged details and textures", tag: "Details", span: "md:row-span-2" },
  { id: 15, src: "/rubfifteen.jpeg", alt: "A peaceful space for a moment of calm", tag: "Atmosphere", span: "" },
  { id: 16, src: "/rubsixteen.jpeg", alt: "A considered finishing touch in the lounge", tag: "Details", span: "" },
  { id: 17, src: "/rubseventeen.jpeg", alt: "Another view of the wellness environment", tag: "Atmosphere", span: "" },
  { id: 18, src: "/rubeighteen.jpeg", alt: "A detail from the wellness space", tag: "Details", span: "md:col-span-2" },
  { id: 19, src: "/rubtwentythree.jpeg", alt: "A carefully prepared wellness setting", tag: "Setup", span: "" },
  { id: 20, src: "/rubtwenty.jpeg", alt: "A final glimpse of the lounge atmosphere", tag: "Atmosphere", span: "" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const images = useMemo(() => {
    if (activeCategory === "All") return galleryImages;
    return galleryImages.filter((image) => image.tag === activeCategory);
  }, [activeCategory]);

  const selectedImage =
    selectedIndex === null ? null : images[selectedIndex];

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const prev = useCallback(() => {
    setSelectedIndex((index) =>
      index === null ? null : (index - 1 + images.length) % images.length
    );
  }, [images.length]);

  const next = useCallback(() => {
    setSelectedIndex((index) =>
      index === null ? null : (index + 1) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, closeLightbox, prev, next]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F3ED] text-[#4A342B]">
      {/* Hero */}
      <section className="relative px-5 pb-14 pt-20 sm:px-8 md:pb-20 md:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#E9DED2]/70 blur-3xl"
        />

        <div className="site-container relative">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B98F83]" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#987064]">
                  The gallery
                </p>
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                A closer look at
                <span className="block italic text-[#B98F83]">
                  your moment of calm.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#75645A] sm:text-base sm:leading-8">
                Explore the atmosphere, thoughtful details, and welcoming
                spaces that shape the Kasie Rub Down experience.
              </p>
            </div>

            <div className="lg:col-span-4 lg:justify-self-end">
              <div className="border-l border-[#D8C8BA] pl-5">
                <p className="font-serif text-5xl text-[#4A342B]">20</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#987064]">
                  Moments in the gallery
                </p>
                <a
                  href="#gallery-grid"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium transition hover:text-[#987064]"
                >
                  Explore the collection
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery-grid"
        className="site-container scroll-mt-24 px-5 pb-20 sm:px-8 md:pb-28"
      >
        <div className="mb-8 flex flex-col gap-5 border-b border-[#E3D7CB] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#987064]">
              A visual collection
            </p>
            <h2 className="mt-2 font-serif text-3xl font-normal sm:text-4xl">
              The little details
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#75645A]">
            Select any image to view it in more detail.
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2.5 text-xs transition duration-300 ${
                  isActive
                    ? "border-[#4A342B] bg-[#4A342B] text-[#FFFDF9]"
                    : "border-[#D8C8BA] bg-[#FFFDF9] text-[#75645A] hover:border-[#B98F83] hover:text-[#4A342B]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p className="mb-5 text-xs text-[#987064]">
          Showing {images.length} {images.length === 1 ? "image" : "images"}
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[190px] md:gap-5">
          {images.map((image, index) => (
            <button
              type="button"
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              aria-label={`View image ${index + 1}: ${image.alt}`}
              className={`group relative min-h-[280px] overflow-hidden rounded-[1.5rem] border border-[#E3D7CB] bg-[#E9DED2] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#987064] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F3ED] md:min-h-0 ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 50vw, 33vw"
                priority={image.id <= 2}
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#241913]/75 via-[#241913]/5 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-3 p-5 opacity-100 transition duration-300 group-hover:translate-y-0 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                <div>
                  <span className="inline-flex rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {image.tag}
                  </span>
                  <p className="mt-3 max-w-xs text-sm leading-5 text-white">
                    {image.alt}
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition group-hover:bg-[#FFFDF9] group-hover:text-[#4A342B]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Closing statement */}
      <section className="border-t border-[#E3D7CB] bg-[#E9DED2]/60 px-5 py-16 sm:px-8 md:py-20">
        <div className="site-container text-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#987064]">
            Kasie Rub Down
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-normal leading-tight sm:text-5xl">
            Thoughtfully prepared.
            <span className="block italic text-[#B98F83]">
              Always personal.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#75645A]">
            When you are ready for a little time to yourself, we would be
            delighted to welcome you.
          </p>

          <a
            href="/prices"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#4A342B] px-7 py-3.5 text-sm font-medium text-[#FFFDF9] transition hover:bg-[#62483C]"
          >
            Explore our rates
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1D1714]/95 p-4 backdrop-blur-md sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-7 sm:top-7"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:left-7 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-7 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            className="relative flex w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[65vh] max-h-[780px] w-full sm:h-[75vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                quality={95}
                priority
                className="object-contain"
              />
            </div>

            <div className="mt-5 flex w-full max-w-2xl flex-col items-center gap-2 text-center">
              <span className="rounded-full border border-white/20 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-[#D8B8A9]">
                {selectedImage.tag}
              </span>

              <p className="text-sm leading-6 text-white/90">
                {selectedImage.alt}
              </p>

              <p className="text-xs text-white/50">
                {selectedIndex + 1} of {images.length}
                {" · "}Use your arrow keys to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
