"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-cover bg-center px-6"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      >
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-white/35 backdrop-blur-[2px]" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass relative z-10 w-full max-w-3xl rounded-[32px] p-8 text-center shadow-soft md:p-14"
        >
          <p className="mb-3 font-script text-3xl text-deeprose">
            Hi, I'm Roshni ✨
          </p>

          <h2 className="font-body text-lg tracking-[0.25em] uppercase text-mauve">
            UGC Creator
          </h2>

          <p className="mt-2 text-deeprose">
            Beauty • Fashion • Lifestyle
          </p>

          <h1 className="mt-8 font-heading text-5xl font-bold leading-tight text-deeprose md:text-7xl">
            Authentic Content.
            <br />
            Beautiful Results.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-deeprose">
            I create aesthetic, relatable content that helps brands build trust,
            connect with their audience and turn viewers into customers through
            beautiful photo and video content.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/portfolio"
              className="rounded-full bg-rose px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-deeprose"
            >
              View Portfolio
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/60 bg-white/40 px-8 py-4 font-semibold text-deeprose backdrop-blur-md transition duration-300 hover:bg-white"
            >
              Work With Me
            </Link>
          </div>

          {/* Trust Badges */}

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="rounded-full bg-white/60 px-5 py-2 text-sm font-medium text-deeprose">
              ✨ 20+ Brand Collaborations
            </div>

            <div className="rounded-full bg-white/60 px-5 py-2 text-sm font-medium text-deeprose">
              📷 Photo + Video Content
            </div>

            <div className="rounded-full bg-white/60 px-5 py-2 text-sm font-medium text-deeprose">
              ⚡ Fast Deliverables
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= STATS ================= */}

      <Stats />

      {/* Continue in Part 2 */}
            {/* ================= INTRO ================= */}

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-script text-3xl text-deeprose">
            Creating Content That Connects
          </p>

          <h2 className="mt-4 font-heading text-4xl text-mauve md:text-5xl">
            Content Your Audience Will Love.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-deeprose">
            Every brand has a unique story, and I love bringing it to life
            through aesthetic visuals, relatable storytelling and authentic
            content that feels natural—not like an advertisement.
          </p>
        </motion.div>
      </section>

      {/* ================= FEATURED WORK ================= */}

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-12 text-center">
            <p className="font-script text-3xl text-deeprose">
              Featured Work
            </p>

            <h2 className="mt-3 font-heading text-4xl text-mauve">
              A Few Favourite Creations
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="glass card-hover rounded-3xl p-6 text-center shadow-soft">
              <div className="mb-5 overflow-hidden rounded-2xl">
                <img
                  src="/photos/p7.jpg"
                  alt="Beauty UGC"
                  className="h-72 w-full object-cover"
                />
              </div>

              <h3 className="font-heading text-2xl text-deeprose">
                Beauty
              </h3>

              <p className="mt-3 text-mauve">
                Elegant beauty content with a soft and premium aesthetic.
              </p>
            </div>

            <div className="glass card-hover rounded-3xl p-6 text-center shadow-soft">
              <div className="mb-5 overflow-hidden rounded-2xl">
                <img
                  src="/photos/p6.jpg"
                  alt="Lifestyle UGC"
                  className="h-72 w-full object-cover"
                />
              </div>

              <h3 className="font-heading text-2xl text-deeprose">
                skincare & Lifestyle
              </h3>

              <p className="mt-3 text-mauve">
                Authentic moments that feel relatable and engaging.
              </p>
            </div>

            <div className="glass card-hover rounded-3xl p-6 text-center shadow-soft">
              <div className="mb-5 overflow-hidden rounded-2xl">
                <img
                  src="/photos/p3.jpg"
                  alt="Fashion UGC"
              className="h-72 w-full object-cover object-[center_35%]"
                />
              </div>

              <h3 className="font-heading text-2xl text-deeprose">
                makeup
              </h3>

              <p className="mt-3 text-mauve">
                Modern visuals designed to inspire and convert.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/portfolio"
              className="rounded-full bg-rose px-8 py-4 font-semibold text-white shadow-soft transition duration-300 hover:bg-deeprose"
            >
              Explore Full Portfolio
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Continue in Part 3 */}
            {/* ================= WHY WORK WITH ME ================= */}

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center">
            <p className="font-script text-3xl text-deeprose">
              Why Brands Love Working With Me
            </p>

            <h2 className="mt-3 font-heading text-4xl text-mauve">
              More Than Just Content
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="glass card-hover rounded-3xl p-8 text-center shadow-soft">
              <div className="mb-4 text-4xl">🤍</div>

              <h3 className="font-heading text-2xl text-deeprose">
                Authentic Storytelling
              </h3>

              <p className="mt-4 text-mauve leading-7">
                Content that feels genuine, relatable and builds trust with your
                audience naturally.
              </p>
            </div>

            <div className="glass card-hover rounded-3xl p-8 text-center shadow-soft">
              <div className="mb-4 text-4xl">✨</div>

              <h3 className="font-heading text-2xl text-deeprose">
                Premium Visuals
              </h3>

              <p className="mt-4 text-mauve leading-7">
                Soft, aesthetic and high-quality visuals designed to match your
                brand identity.
              </p>
            </div>

            <div className="glass card-hover rounded-3xl p-8 text-center shadow-soft">
              <div className="mb-4 text-4xl">⚡</div>

              <h3 className="font-heading text-2xl text-deeprose">
                Fast Deliverables
              </h3>

              <p className="mt-4 text-mauve leading-7">
                Reliable communication and quick turnaround so your campaigns
                stay on schedule.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass mx-auto max-w-4xl rounded-[32px] p-10 text-center shadow-soft md:p-16"
        >
          <p className="font-script text-3xl text-deeprose">
            Let's Create Something Beautiful
          </p>

          <h2 className="mt-4 font-heading text-4xl text-mauve md:text-5xl">
            Ready to Elevate Your Brand?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-deeprose">
            Whether you're launching a new product or growing your online
            presence, I'd love to create content that connects with your
            audience.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-rose px-10 py-4 font-semibold text-white shadow-soft transition duration-300 hover:scale-105 hover:bg-deeprose"
          >
            Work With Me
          </Link>
        </motion.div>
      </section>
    </>
  );
}