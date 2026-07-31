"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Brand Collaborations",
  },
  {
    value: 4,
    suffix: "+",
    label: "Content Niches",
  },
  {
    value: 100,
    suffix: "%",
    label: "Authentic Creativity",
  },
];

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const inView = useInView(ref, {
    once: true,
  });

  const count = useMotionValue(0);

  const rounded = useTransform(
    count,
    (latest) => `${Math.round(latest)}${suffix}`
  );

  useEffect(() => {
    if (!inView) return;

    const controls = animate(count, value, {
      duration: 1.5,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, value, inView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -6,
              }}
              className="glass rounded-3xl p-8 text-center shadow-soft"
            >
              <h2 className="font-heading text-5xl font-bold text-deeprose">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </h2>

              <p className="mt-3 font-body text-lg font-medium text-mauve">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}