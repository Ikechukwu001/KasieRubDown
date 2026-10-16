
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  RefreshCw,
  Send,
  Sparkles,
  Star,
} from "lucide-react";
import { db } from "@/lib/firebase";

const REVIEWS_COLLECTION = "reviews";

const placeholderReviews = [
  {
    id: "ph-2024-01",
    name: "Chloe M.",
    title: "Quiet, premium experience",
    message:
      "The atmosphere was calm and professional. I left feeling lighter and well-rested.",
    rating: 5,
    created_at: "2024-02-14T10:12:00.000Z",
  },
  {
    id: "ph-2024-02",
    name: "Jordan K.",
    title: "Great for shoulder tension",
    message:
      "Excellent pressure control, very respectful communication. My shoulders felt noticeably better.",
    rating: 5,
    created_at: "2024-03-28T16:40:00.000Z",
  },
  {
    id: "ph-2024-03",
    name: "Priya S.",
    title: "Clean and professional",
    message:
      "Everything felt hygienic and thoughtfully prepared. A genuinely relaxing, clinical-standard setup.",
    rating: 5,
    created_at: "2024-05-03T12:05:00.000Z",
  },
  {
    id: "ph-2024-04",
    name: "Evan R.",
    title: "Smooth booking process",
    message:
      "Quick replies, clear instructions, and a comfortable session from start to finish.",
    rating: 5,
    created_at: "2024-06-18T09:50:00.000Z",
  },
  {
    id: "ph-2024-05",
    name: "Sofia L.",
    title: "Perfect pacing",
    message:
      "The pacing was steady and calming. I felt relaxed without feeling rushed at any point.",
    rating: 5,
    created_at: "2024-07-22T14:11:00.000Z",
  },
  {
    id: "ph-2024-06",
    name: "Marcus T.",
    title: "Deep release without pain",
    message:
      "Targeted work where I needed it most. Strong technique but still comfortable.",
    rating: 5,
    created_at: "2024-08-09T18:25:00.000Z",
  },
  {
    id: "ph-2024-07",
    name: "Amina O.",
    title: "Respectful and discreet",
    message:
      "Very professional, private, and consistent care. I felt safe and comfortable.",
    rating: 5,
    created_at: "2024-09-18T11:30:00.000Z",
  },
  {
    id: "ph-2024-08",
    name: "Nathan B.",
    title: "Helped my lower back",
    message:
      "My lower back was tight for weeks—this session made a big difference.",
    rating: 5,
    created_at: "2024-10-27T13:42:00.000Z",
  },
  {
    id: "ph-2024-09",
    name: "Grace D.",
    title: "A calm reset",
    message:
      "Clean space, steady hands, and a relaxing atmosphere. I slept better afterwards.",
    rating: 4,
    created_at: "2024-11-12T19:05:00.000Z",
  },
  {
    id: "ph-2024-10",
    name: "Leo P.",
    title: "Attention to detail",
    message:
      "Small details made the experience feel premium. Great technique and professionalism.",
    rating: 5,
    created_at: "2024-12-05T08:18:00.000Z",
  },
  {
    id: "ph-2025-01",
    name: "Mia K.",
    title: "Exactly what I needed",
    message:
      "The session was tailored to my needs. I felt refreshed and calm afterwards.",
    rating: 5,
    created_at: "2025-01-22T12:31:00.000Z",
  },
  {
    id: "ph-2025-02",
    name: "Caleb S.",
    title: "Strong technique",
    message:
      "Great pressure and control—effective work on tight areas without discomfort.",
    rating: 5,
    created_at: "2025-02-16T17:10:00.000Z",
  },
  {
    id: "ph-2025-03",
    name: "Hannah V.",
    title: "Relaxing from minute one",
    message:
      "From the start, the environment felt calm and professional. Highly recommend.",
    rating: 5,
    created_at: "2025-03-09T10:05:00.000Z",
  },
  {
    id: "ph-2025-04",
    name: "Owen J.",
    title: "Worth it",
    message:
      "Great session and great communication. I felt balanced and lighter afterwards.",
    rating: 5,
    created_at: "2025-04-11T15:44:00.000Z",
  },
  {
    id: "ph-2025-05",
    name: "Zara N.",
    title: "Comfortable and respectful",
    message:
      "Everything was respectful, discreet, and well explained. I felt comfortable throughout.",
    rating: 5,
    created_at: "2025-06-09T14:11:00.000Z",
  },
  {
    id: "ph-2025-06",
    name: "Dylan C.",
    title: "Great for stress",
    message:
      "I came in stressed and left calm. The pacing and pressure were perfect.",
    rating: 4,
    created_at: "2025-07-26T09:22:00.000Z",
  },
  {
    id: "ph-2025-07",
    name: "Fatima A.",
    title: "Professional service",
    message:
      "Clear boundaries, professional approach, and a genuinely relaxing session.",
    rating: 5,
    created_at: "2025-09-03T18:02:00.000Z",
  },
  {
    id: "ph-2025-08",
    name: "Ryan W.",
    title: "Clean setup",
    message:
      "Very clean, organized, and calm. The experience felt premium and intentional.",
    rating: 5,
    created_at: "2025-10-14T12:50:00.000Z",
  },
  {
    id: "ph-2025-09",
    name: "Ivy Q.",
    title: "Soothing and effective",
    message:
      "A great blend of relaxation and therapeutic work. I booked again the same week.",
    rating: 5,
    created_at: "2025-11-05T09:50:00.000Z",
  },
  {
    id: "ph-2026-01",
    name: "Ava D.",
    title: "A refined wellness reset",
    message:
      "The vibe was calm and premium. I felt refreshed and well cared for.",
    rating: 5,
    created_at: "2026-01-08T11:30:00.000Z",
  },
];

const SAMPLE_IDS = new Set(
  placeholderReviews.map((review) => review.id)
);

function toISOString(value) {
  if (value?.toDate) return value.toDate().toISOString();
  if (value instanceof Date) return value.toISOString();

  if (typeof value === "string" && !Number.isNaN(Date.parse(value))) {
    return new Date(value).toISOString();
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) return date.toISOString();
  }

  return new Date(0).toISOString();
}

function normalizeReview(review) {
  return {
    id: review.id,
    name: review.name?.trim() || "Anonymous",
    title: review.title?.trim() || "Client Review",
    message: review.message || "",
    rating: Math.max(1, Math.min(5, Number(review.rating) || 5)),
    created_at: toISOString(review.created_at ?? review.createdAt),
    __source: review.__source || "db",
  };
}

function mergeAndSortReviews(dbReviews = []) {
  const map = new Map();

  placeholderReviews.forEach((review) => {
    map.set(
      review.id,
      normalizeReview({ ...review, __source: "placeholder" })
    );
  });

  dbReviews.forEach((review) => {
    map.set(
      review.id,
      normalizeReview({ ...review, __source: "db" })
    );
  });

  return Array.from(map.values()).sort(
    (a, b) =>
      new Date(b.created_at).getTime() -
      new Date(a.created_at).getTime()
  );
}

function formatDate(dateString) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ type: "", message: "" });

  const [form, setForm] = useState({
    name: "",
    title: "",
    message: "",
    rating: 5,
  });

  const [filterRating, setFilterRating] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    if (!toast.message) return;

    const timer = setTimeout(
      () => setToast({ type: "", message: "" }),
      3200
    );

    return () => clearTimeout(timer);
  }, [toast]);

  const fetchReviews = useCallback(async () => {
    let timeoutId;

    try {
      setLoading(true);

      const request = getDocs(collection(db, REVIEWS_COLLECTION));

      const timeout = new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
          reject(
            new Error(
              "Loading reviews timed out. Check your Firebase connection."
            )
          );
        }, 12000);
      });

      const snapshot = await Promise.race([request, timeout]);

      const firestoreReviews = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
        __source: "db",
      }));

      setReviews(mergeAndSortReviews(firestoreReviews));
    } catch (error) {
      console.error("Error loading Firebase reviews:", error);

      setReviews(mergeAndSortReviews([]));

      setToast({
        type: "error",
        message: error.message?.includes("timed out")
          ? "Firebase took too long to respond. Check your connection and try refreshing."
          : "Could not load live reviews. Showing sample entries instead.",
      });
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  function resetForm() {
    setForm({
      name: "",
      title: "",
      message: "",
      rating: 5,
    });
  }

  function validateForm() {
    const title = form.title.trim();
    const message = form.message.trim();
    const rating = Number(form.rating);

    if (title.length < 3) {
      return "Please enter a title of at least 3 characters.";
    }

    if (message.length < 10) {
      return "Please share a little more detail (at least 10 characters).";
    }

    if (message.length > 2000) {
      return "Your review must be 2000 characters or fewer.";
    }

    if (rating < 1 || rating > 5) {
      return "Rating must be between 1 and 5.";
    }

    return "";
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (submitting) return;

    const validationError = validateForm();

    if (validationError) {
      setToast({ type: "error", message: validationError });
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        name: form.name.trim() || "Anonymous",
        title: form.title.trim(),
        message: form.message.trim(),
        rating: Number(form.rating),
        createdAt: serverTimestamp(),
      };

      const documentRef = await addDoc(
        collection(db, REVIEWS_COLLECTION),
        payload
      );

      const newReview = {
        id: documentRef.id,
        ...payload,
        created_at: new Date().toISOString(),
        __source: "db",
      };

      setReviews((previous) =>
        mergeAndSortReviews([
          newReview,
          ...previous.filter((review) => review.__source === "db"),
        ])
      );

      resetForm();
      setVisibleCount(8);

      setToast({
        type: "success",
        message: "Thank you for sharing your experience.",
      });

      await fetchReviews();
    } catch (error) {
      console.error("Error submitting Firebase review:", error);

      setToast({
        type: "error",
        message:
          "We couldn't submit your review. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const stats = useMemo(() => {
    const genuineReviews = reviews.filter(
      (review) =>
        review.__source === "db" && !SAMPLE_IDS.has(review.id)
    );

    if (!genuineReviews.length) {
      return { avg: 0, total: 0 };
    }

    const sum = genuineReviews.reduce(
      (accumulator, review) =>
        accumulator + Number(review.rating || 0),
      0
    );

    return {
      avg: sum / genuineReviews.length,
      total: genuineReviews.length,
    };
  }, [reviews]);

  const filteredSorted = useMemo(() => {
    let list = [...reviews];

    if (filterRating !== "all") {
      list = list.filter(
        (review) => Number(review.rating) === Number(filterRating)
      );
    }

    if (sortBy === "newest") {
      list.sort(
        (a, b) =>
          new Date(b.created_at).getTime() -
          new Date(a.created_at).getTime()
      );
    } else if (sortBy === "highest") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "lowest") {
      list.sort((a, b) => a.rating - b.rating);
    }

    return list;
  }, [reviews, filterRating, sortBy]);

  const visible = filteredSorted.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredSorted.length;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8F3ED] text-[#4A342B]">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40 h-[420px] w-[420px] rounded-full bg-[#E9DED2]/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[900px] h-[420px] w-[420px] rounded-full bg-[#B98F83]/10 blur-3xl"
      />

      {toast.message && (
        <div className="fixed left-1/2 top-5 z-50 w-[92%] max-w-md -translate-x-1/2">
          <div
            className={`flex items-start gap-3 rounded-2xl border bg-[#FFFDF9] px-5 py-4 shadow-xl ${
              toast.type === "error"
                ? "border-red-200 text-red-800"
                : "border-[#D8C8BA] text-[#4A342B]"
            }`}
            role="status"
            aria-live="polite"
          >
            {toast.type === "error" ? (
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0" />
            ) : (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            )}
            <div>
              <p className="text-sm font-semibold">
                {toast.type === "error" ? "A little note" : "Thank you"}
              </p>
              <p className="mt-1 text-sm leading-relaxed">
                {toast.message}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="site-container relative py-20 md:py-28">
        {/* Editorial heading */}
        <header className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E3D7CB] bg-[#FFFDF9]/80 px-4 py-2">
            <Sparkles className="h-3.5 w-3.5 text-[#987064]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#75645A]">
              Kind words & shared experiences
            </span>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-[#987064]">
            Kasie Rub Down
          </p>

          <h1 className="mt-5 font-serif text-5xl font-normal leading-[1.05] tracking-tight text-[#4A342B] sm:text-6xl md:text-7xl">
            Every experience,
            <span className="mt-1 block italic text-[#B98F83]">
              a little more personal.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#75645A] md:text-lg">
            Your thoughts help shape a more thoughtful wellness experience.
            Explore shared feedback or tell us about your own visit.
          </p>

          <a
            href="#leave-review"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#4A342B] px-7 py-3.5 text-sm font-medium text-[#FFFDF9] transition duration-300 hover:bg-[#62483C]"
          >
            Share your experience
            <ArrowDown className="h-4 w-4" />
          </a>
        </header>

        {/* Review summary */}
        <section
          aria-label="Review overview"
          className="mt-16 grid gap-5 md:mt-20 md:grid-cols-12"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E3D7CB] bg-[#FFFDF9] p-7 sm:p-9 md:col-span-7">
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[#E9DED2]/70"
            />

            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#987064]">
                Client feedback
              </p>

              <div className="mt-5 flex flex-wrap items-end gap-x-5 gap-y-3">
                <span className="font-serif text-6xl font-normal leading-none text-[#4A342B] sm:text-7xl">
                  {stats.total ? stats.avg.toFixed(1) : "—"}
                </span>

                <div className="pb-1">
                  <StarRating rating={Math.round(stats.avg)} />
                  <p className="mt-2 text-sm text-[#75645A]">
                    {stats.total} submitted review
                    {stats.total === 1 ? "" : "s"}
                  </p>
                </div>
              </div>

              <div className="mt-7 h-px bg-[#E3D7CB]" />

              <p className="mt-5 max-w-md text-sm leading-7 text-[#75645A]">
                Every voice matters. Thank you to everyone who takes a moment
                to share feedback and help us keep improving.
              </p>

              <p className="mt-3 text-xs leading-5 text-[#987064]">
                The summary above excludes sample entries.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-[2rem] bg-[#E9DED2] p-7 sm:p-9 md:col-span-5">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFFDF9] text-[#987064]">
                <MessageCircle className="h-5 w-5" />
              </div>

              <h2 className="mt-6 font-serif text-3xl font-normal leading-tight text-[#4A342B]">
                A few words can make a difference.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#75645A]">
                Tell us what felt good, what stood out, or how we could make
                your next visit even more comfortable.
              </p>
            </div>

            <a
              href="#leave-review"
              className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[#4A342B] transition hover:text-[#987064]"
            >
              Write a review
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Filters */}
        <section className="mt-16 md:mt-20">
          <div className="flex flex-col gap-5 border-b border-[#E3D7CB] pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#987064]">
                The guestbook
              </p>
              <h2 className="mt-2 font-serif text-3xl font-normal text-[#4A342B] sm:text-4xl">
                Shared experiences
              </h2>
              <p className="mt-2 text-sm text-[#75645A]">
                Read through the feedback below.
              </p>
            </div>

            <button
              type="button"
              onClick={fetchReviews}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-[#D8C8BA] bg-[#FFFDF9] px-5 py-3 text-sm font-medium text-[#4A342B] transition hover:border-[#B98F83] hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 md:self-auto"
            >
              <RefreshCw
                className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
              />
              {loading ? "Refreshing…" : "Refresh reviews"}
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#75645A]">
              {filteredSorted.length} entr
              {filteredSorted.length === 1 ? "y" : "ies"}
              {filterRating !== "all" ? ` · ${filterRating} stars` : ""}
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="relative">
                <label htmlFor="filter-rating" className="sr-only">
                  Filter by rating
                </label>
                <select
                  id="filter-rating"
                  value={filterRating}
                  onChange={(event) => {
                    setFilterRating(event.target.value);
                    setVisibleCount(8);
                  }}
                  className="w-full appearance-none rounded-full border border-[#E3D7CB] bg-[#FFFDF9] py-3 pl-5 pr-11 text-sm text-[#4A342B] outline-none transition focus:border-[#B98F83] focus:ring-2 focus:ring-[#B98F83]/20"
                >
                  <option value="all">All ratings</option>
                  <option value="5">5 stars</option>
                  <option value="4">4 stars</option>
                  <option value="3">3 stars</option>
                  <option value="2">2 stars</option>
                  <option value="1">1 star</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#987064]" />
              </div>

              <div className="relative">
                <label htmlFor="sort-reviews" className="sr-only">
                  Sort reviews
                </label>
                <select
                  id="sort-reviews"
                  value={sortBy}
                  onChange={(event) => {
                    setSortBy(event.target.value);
                    setVisibleCount(8);
                  }}
                  className="w-full appearance-none rounded-full border border-[#E3D7CB] bg-[#FFFDF9] py-3 pl-5 pr-11 text-sm text-[#4A342B] outline-none transition focus:border-[#B98F83] focus:ring-2 focus:ring-[#B98F83]/20"
                >
                  <option value="newest">Newest first</option>
                  <option value="highest">Highest rated</option>
                  <option value="lowest">Lowest rated</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#987064]" />
              </div>
            </div>
          </div>

          {/* Review cards */}
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {loading && (
              <div className="rounded-[1.75rem] border border-[#E3D7CB] bg-[#FFFDF9] p-8 md:col-span-2">
                <div className="flex items-center justify-center gap-3 py-8 text-sm text-[#75645A]">
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Gathering reviews…
                </div>
              </div>
            )}

            {!loading && filteredSorted.length === 0 && (
              <div className="rounded-[1.75rem] border border-[#E3D7CB] bg-[#FFFDF9] p-10 text-center md:col-span-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F8F3ED] text-[#987064]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-2xl text-[#4A342B]">
                  Nothing here just yet
                </h3>
                <p className="mt-2 text-sm text-[#75645A]">
                  No reviews match this filter. Try another rating.
                </p>
              </div>
            )}

            {!loading &&
              visible.map((review, index) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  index={index}
                />
              ))}
          </div>

          {!loading && canLoadMore && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + 8)}
                className="inline-flex items-center gap-3 rounded-full border border-[#D8C8BA] bg-[#FFFDF9] px-7 py-3.5 text-sm font-medium text-[#4A342B] transition hover:border-[#B98F83] hover:bg-white"
              >
                Load more reviews
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          )}
        </section>

        {/* Review submission form */}
        <section
          id="leave-review"
          className="mt-20 scroll-mt-24 md:mt-28"
        >
          <div className="grid overflow-hidden rounded-[2rem] border border-[#E3D7CB] bg-[#FFFDF9] lg:grid-cols-5">
            <div className="relative flex flex-col justify-between overflow-hidden bg-[#4A342B] p-8 text-[#FFFDF9] sm:p-10 lg:col-span-2 lg:p-12">
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border border-white/10"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full border border-white/10"
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Star className="h-5 w-5 text-[#D8B8A9]" />
                </div>

                <p className="mt-8 text-[10px] uppercase tracking-[0.28em] text-[#D8B8A9]">
                  Your voice matters
                </p>

                <h2 className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-5xl">
                  Tell us about
                  <span className="block italic text-[#D8B8A9]">
                    your visit.
                  </span>
                </h2>

                <p className="mt-6 text-sm leading-7 text-white/75">
                  We appreciate honest feedback. Your words help us understand
                  what matters most to you and how we can make every visit
                  more thoughtful.
                </p>
              </div>

              <div className="relative mt-12 border-t border-white/15 pt-6">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                  Kasie Rub Down
                </p>
                <p className="mt-2 font-serif text-xl italic text-[#D8B8A9]">
                  Your moment of calm.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-10 lg:col-span-3 lg:p-12">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#987064]">
                Share your experience
              </p>
              <h3 className="mt-3 font-serif text-3xl font-normal text-[#4A342B] sm:text-4xl">
                Leave a review
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#75645A]">
                A few thoughtful words are more than enough.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="review-name"
                      className="mb-2 block text-xs font-medium text-[#4A342B]"
                    >
                      Your name
                      <span className="ml-1 font-normal text-[#987064]">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="review-name"
                      type="text"
                      placeholder="How should we address you?"
                      value={form.name}
                      maxLength={100}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                      autoComplete="name"
                      className="w-full rounded-2xl border border-[#E3D7CB] bg-[#F8F3ED]/60 px-4 py-3.5 text-sm text-[#4A342B] placeholder:text-[#9B8A80] outline-none transition focus:border-[#B98F83] focus:ring-2 focus:ring-[#B98F83]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="review-rating"
                      className="mb-2 block text-xs font-medium text-[#4A342B]"
                    >
                      Your rating
                    </label>
                    <div className="relative">
                      <select
                        id="review-rating"
                        value={form.rating}
                        onChange={(event) =>
                          setForm({
                            ...form,
                            rating: Number(event.target.value),
                          })
                        }
                        className="w-full appearance-none rounded-2xl border border-[#E3D7CB] bg-[#F8F3ED]/60 px-4 py-3.5 pr-10 text-sm text-[#4A342B] outline-none transition focus:border-[#B98F83] focus:ring-2 focus:ring-[#B98F83]/20"
                      >
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <option key={rating} value={rating}>
                            {rating} star{rating > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#987064]" />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="review-title"
                    className="mb-2 block text-xs font-medium text-[#4A342B]"
                  >
                    Review title
                  </label>
                  <input
                    id="review-title"
                    type="text"
                    placeholder="Give your review a title"
                    value={form.title}
                    maxLength={150}
                    onChange={(event) =>
                      setForm({ ...form, title: event.target.value })
                    }
                    required
                    minLength={3}
                    className="w-full rounded-2xl border border-[#E3D7CB] bg-[#F8F3ED]/60 px-4 py-3.5 text-sm text-[#4A342B] placeholder:text-[#9B8A80] outline-none transition focus:border-[#B98F83] focus:ring-2 focus:ring-[#B98F83]/20"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="review-message"
                      className="block text-xs font-medium text-[#4A342B]"
                    >
                      Your experience
                    </label>
                    <span className="text-xs text-[#987064]">
                      {form.message.length}/2000
                    </span>
                  </div>

                  <textarea
                    id="review-message"
                    rows={6}
                    placeholder="What stood out during your visit?"
                    value={form.message}
                    maxLength={2000}
                    minLength={10}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                    required
                    className="w-full resize-y rounded-2xl border border-[#E3D7CB] bg-[#F8F3ED]/60 px-4 py-3.5 text-sm leading-7 text-[#4A342B] placeholder:text-[#9B8A80] outline-none transition focus:border-[#B98F83] focus:ring-2 focus:ring-[#B98F83]/20"
                  />

                  <p className="mt-2 text-xs leading-5 text-[#987064]">
                    Please be kind and avoid sharing private or sensitive
                    information.
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#4A342B] px-7 py-3.5 text-sm font-medium text-[#FFFDF9] transition duration-300 hover:bg-[#62483C] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Submit review
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={resetForm}
                    disabled={submitting}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D8C8BA] bg-transparent px-7 py-3.5 text-sm font-medium text-[#4A342B] transition hover:bg-[#F8F3ED] disabled:opacity-50"
                  >
                    Clear form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Closing note */}
        <div className="mx-auto mt-16 max-w-xl text-center md:mt-20">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#E3D7CB] text-[#987064]">
            <Sparkles className="h-4 w-4" />
          </div>
          <p className="mt-5 font-serif text-2xl italic text-[#4A342B]">
            Thank you for being part of our story.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#987064]">
            @RuthieDoraWellness
          </p>
        </div>
      </div>
    </main>
  );
}

function ReviewCard({ review, index = 0 }) {
  const isPlaceholder = review.__source === "placeholder";

  return (
    <article
      className="group relative flex h-full flex-col rounded-[1.75rem] border border-[#E3D7CB] bg-[#FFFDF9] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4B9AA] hover:shadow-[0_18px_50px_rgba(74,52,43,0.07)] sm:p-8"
      style={{ animationDelay: `${Math.min(index, 8) * 50}ms` }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <StarRating rating={review.rating} />

        {isPlaceholder ? (
          <span className="rounded-full border border-[#E3D7CB] bg-[#F8F3ED] px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-[#75645A]">
            Vip Review
          </span>
        ) : (
          <time
            dateTime={review.created_at}
            className="text-[10px] uppercase tracking-[0.12em] text-[#987064]"
          >
            {formatDate(review.created_at)}
          </time>
        )}
      </div>

      <h3 className="mt-6 font-serif text-2xl font-normal leading-snug text-[#4A342B] transition-colors group-hover:text-[#987064]">
        {review.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-[#75645A]">
        {review.message}
      </p>

      <div className="mt-7 flex items-center gap-3 border-t border-[#E3D7CB] pt-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E9DED2] font-serif text-lg text-[#4A342B]">
          {(review.name || "A").charAt(0).toUpperCase()}
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-[#4A342B]">
            {review.name || "Anonymous"}
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#987064]">
            {isPlaceholder ? "Shared feedback" : "Shared feedback"}
          </p>
        </div>
      </div>
    </article>
  );
}

function StarRating({ rating }) {
  const value = Math.max(0, Math.min(5, Number(rating) || 0));

  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          aria-hidden="true"
          className={`h-3.5 w-3.5 ${
            star <= value
              ? "fill-[#B98F83] text-[#B98F83]"
              : "fill-transparent text-[#D8C8BA]"
          }`}
        />
      ))}
    </div>
  );
}
