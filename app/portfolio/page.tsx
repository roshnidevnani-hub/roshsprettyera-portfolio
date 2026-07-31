"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { videos, photos } from "@/data/media";

export default function Portfolio() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="font-script text-3xl text-deeprose">
            My Portfolio
          </p>

          <h1 className="mt-4 font-heading text-5xl font-bold text-mauve md:text-6xl">
            Selected Work
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-deeprose">
            A curated collection of aesthetic photo and video content created
            for beauty, skincare, fashion and lifestyle brands.
          </p>
        </motion.div>

        {/* Videos */}

        <div className="mb-24">
          <h2 className="mb-10 font-heading text-4xl text-mauve">
            Featured Videos
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <motion.div
                key={video.src}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="glass overflow-hidden rounded-3xl p-4 shadow-soft"
              >
                <video
  controls
  playsInline
  preload="metadata"
  className="aspect-[9/16] w-full rounded-2xl object-cover"

                >
                  <source src={video.src} type="video/mp4" />
                </video>

                <h3 className="mt-4 text-center font-semibold text-deeprose">
                  {video.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photos */}

        <div className="mb-24">
          <h2 className="mb-10 font-heading text-4xl text-mauve">
            Photography
          </h2>

          <div className="columns-2 gap-5 md:columns-3">
            {photos.map((photo, index) => (
              <motion.img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                className="mb-5 w-full rounded-3xl shadow-soft break-inside-avoid"
              />
            ))}
          </div>
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[32px] p-10 text-center shadow-soft md:p-14"
        >
          <h2 className="font-heading text-4xl text-mauve">
            Like What You See?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-deeprose">
            Let's create authentic content that reflects your brand and connects
            with your audience.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-rose px-8 py-4 font-semibold text-white transition hover:bg-deeprose"
          >
            Work With Me
          </Link>
        </motion.div>

      </div>
    </section>
  );
}