'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  { icon: '🎬', title: 'UGC Videos', desc: 'Authentic short-form videos — GRWM, reviews, tutorials & unboxings tailored to your brand.' },
  { icon: '📸', title: 'Product Photography', desc: 'Dreamy, aesthetic flatlays and lifestyle shots that showcase your products beautifully.' },
  { icon: '💄', title: 'Beauty & Skincare Content', desc: 'Relatable skincare routines and beauty content that builds trust and drives sales.' },
  { icon: '✨', title: 'Brand Collaborations', desc: 'Long-term partnerships to create a consistent, on-brand content library.' },
];

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="font-script text-5xl text-deeprose text-center mb-4">services</h1>
      <p className="text-center text-mauve mb-12">Here's how we can work together 🩷</p>
      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-3xl p-8 shadow-soft"
          >
            <div className="text-4xl mb-3">{s.icon}</div>
            <h3 className="font-heading text-2xl text-mauve mb-2">{s.title}</h3>
            <p className="text-deeprose">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/contact" className="bg-rose text-white px-8 py-3 rounded-full shadow-soft hover:bg-deeprose transition-all">
          Get a Custom Quote ✨
        </Link>
      </div>
    </section>
  );
}