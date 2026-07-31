"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const highlights = [
  "Beauty",
  "Skincare",
  "Fashion",
  "Lifestyle",
  "UGC Videos",
  "Product Photography",
];

const values = [
  {
    icon: "✨",
    title: "Authentic Storytelling",
    description:
      "Creating content that feels natural, relatable and builds trust with your audience.",
  },
  {
    icon: "📷",
    title: "Photo & Video Content",
    description:
      "High-quality visuals designed to showcase your products beautifully.",
  },
  {
    icon: "⚡",
    title: "Fast Deliverables",
    description:
      "Reliable communication and quick turnaround for every collaboration.",
  },
  {
    icon: "🤍",
    title: "Attention to Detail",
    description:
      "Every frame is thoughtfully created to reflect your brand's identity.",
  },
];

export default function About() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass rounded-[32px] p-8 shadow-soft md:p-14"
        >
          <p className="font-script text-center text-3xl text-deeprose">
            About Me
          </p>

          {/* Responsive About Heading */}
          <h1 className="mx-auto mt-4 max-w-full break-words px-2 text-center font-heading text-3xl font-bold leading-tight text-mauve sm:text-4xl md:text-6xl">
            Roshni | roshsprettyera
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-deeprose">
            Hi, I'm Roshni — the creator behind{" "}
            <span className="font-semibold text-mauve">
              roshsprettyera
            </span>
            . I create aesthetic photo and video content that helps beauty,
            skincare, fashion and lifestyle brands connect with their audience
            through authentic storytelling.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-deeprose">
            Every project is crafted with creativity, attention to detail and a
            passion for creating visuals that feel natural while showcasing your
            products beautifully.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-deeprose">
            I've had the opportunity to collaborate with{" "}
            <span className="font-semibold text-mauve">
              20+ brands
            </span>
            , creating engaging content that inspires trust and helps brands
            build meaningful connections with their audience.
          </p>
        </motion.div>

        {/* Highlights */}

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="glass rounded-2xl py-4 text-center font-semibold text-mauve shadow-soft transition duration-300 hover:-translate-y-1"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Why Work With Me */}

        <div className="mt-20">
          <div className="text-center">
            <p className="font-script text-3xl text-deeprose">
              Why Work With Me
            </p>

            <h2 className="mt-3 font-heading text-4xl text-mauve">
              Creating Content With Purpose
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <motion.div
                key={value.title}
                whileHover={{ y: -5 }}
                className="glass rounded-3xl p-8 shadow-soft"
              >
                <div className="mb-4 text-4xl">{value.icon}</div>

                <h3 className="font-heading text-2xl text-deeprose">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-mauve">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass mt-20 rounded-[32px] p-10 text-center shadow-soft md:p-14"
        >
          <h2 className="font-heading text-4xl text-mauve">
            Let's Create Something Beautiful
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-deeprose">
            I'd love to help bring your brand's story to life through
            authentic, aesthetic and engaging content.
          </p>

          <Link
            href="/portfolio"
            className="mt-8 inline-flex rounded-full bg-rose px-8 py-4 font-semibold text-white shadow-soft transition duration-300 hover:scale-105 hover:bg-deeprose"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}