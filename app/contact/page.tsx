'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      // 🔁 REPLACE with YOUR Formspree endpoint 👇
      const res = await fetch('https://formspree.io/f/mqergqay', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
     if (res.ok) {
  setStatus('success');
  form.reset();
} else {
  const result = await res.json().catch(() => null);
  console.error("Formspree error:", result);
  setStatus('error');
}
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h1 className="font-script text-5xl text-deeprose text-center mb-4">let's connect</h1>
        <p className="text-center text-mauve mb-12">Ready to create some magic together? 🩷</p>

        {/* CONTACT FORM */}
        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 shadow-soft space-y-5 mb-10">
          <div>
            <label className="block text-mauve font-semibold mb-1">Name</label>
            <input
              name="name" type="text" required
              className="w-full rounded-2xl px-4 py-3 bg-white/70 text-deeprose outline-none focus:ring-2 focus:ring-rose"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-mauve font-semibold mb-1">Email</label>
            <input
              name="email" type="email" required
              className="w-full rounded-2xl px-4 py-3 bg-white/70 text-deeprose outline-none focus:ring-2 focus:ring-rose"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block text-mauve font-semibold mb-1">Brand / Company</label>
            <input
              name="brand" type="text"
              className="w-full rounded-2xl px-4 py-3 bg-white/70 text-deeprose outline-none focus:ring-2 focus:ring-rose"
              placeholder="Optional"
            />
          </div>
          <div>
            <label className="block text-mauve font-semibold mb-1">Message</label>
            <textarea
              name="message" required rows={4}
              className="w-full rounded-2xl px-4 py-3 bg-white/70 text-deeprose outline-none focus:ring-2 focus:ring-rose resize-none"
              placeholder="Tell me about your project ✨"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-rose text-white py-3 rounded-full shadow-soft hover:bg-deeprose transition-all disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending... 💌' : 'Send Message 🩷'}
          </button>

          {status === 'success' && (
            <p className="text-center text-green-600 font-semibold">Thank you! I'll get back to you soon 🩷</p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-500 font-semibold">Oops! Something went wrong. Please email me directly 💗</p>
          )}
        </form>

        {/* QUICK CONTACT CARDS */}
        <div className="space-y-4">
          <a
            href="https://wa.me/918788115615?text=Hi%20roshsprettyera!%20I'd%20love%20to%20collaborate%20✨"
            target="_blank" rel="noopener noreferrer"
            className="glass rounded-3xl p-5 flex items-center gap-4 shadow-soft hover:scale-[1.02] transition-transform"
          >
            <span className="text-3xl">💬</span>
            <div>
              <p className="font-heading text-lg text-mauve">WhatsApp</p>
              <p className="text-deeprose">+91 87881 15615</p>
            </div>
          </a>
          <a
            href="mailto:glamprincess9905@gmail.com?subject=Collaboration%20Inquiry"
            className="glass rounded-3xl p-5 flex items-center gap-4 shadow-soft hover:scale-[1.02] transition-transform"
          >
            <span className="text-3xl">📧</span>
            <div>
              <p className="font-heading text-lg text-mauve">Email</p>
              <p className="text-deeprose">glamprincess9905@gmail.com</p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/roshsprettyera"
            target="_blank" rel="noopener noreferrer"
            className="glass rounded-3xl p-5 flex items-center gap-4 shadow-soft hover:scale-[1.02] transition-transform"
          >
            <span className="text-3xl">📷</span>
            <div>
              <p className="font-heading text-lg text-mauve">Instagram</p>
              <p className="text-deeprose">@roshsprettyera</p>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}