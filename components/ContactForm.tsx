'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // 🔗 Replace with YOUR Formspree endpoint
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-8 shadow-soft space-y-5"
    >
      <div>
        <label className="block text-mauve font-semibold mb-1">Name</label>
        <input
          name="name"
          type="text"
          required
          className="w-full rounded-2xl border border-rose/40 bg-white/60 px-4 py-3 text-deeprose focus:outline-none focus:ring-2 focus:ring-rose"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-mauve font-semibold mb-1">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-rose/40 bg-white/60 px-4 py-3 text-deeprose focus:outline-none focus:ring-2 focus:ring-rose"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label className="block text-mauve font-semibold mb-1">Brand / Company</label>
        <input
          name="brand"
          type="text"
          className="w-full rounded-2xl border border-rose/40 bg-white/60 px-4 py-3 text-deeprose focus:outline-none focus:ring-2 focus:ring-rose"
          placeholder="Your brand (optional)"
        />
      </div>

      <div>
        <label className="block text-mauve font-semibold mb-1">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full rounded-2xl border border-rose/40 bg-white/60 px-4 py-3 text-deeprose focus:outline-none focus:ring-2 focus:ring-rose resize-none"
          placeholder="Tell me about your project! ✨"
        />
      </div>

      {/* Anti-spam honeypot (hidden from humans) */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-rose text-white py-3 rounded-full shadow-soft hover:bg-deeprose transition-all disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending... 💌' : 'Send Message 🩷'}
      </button>

      {status === 'success' && (
        <p className="text-center text-green-600 font-semibold">Thank you! I'll get back to you soon ✨</p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-500 font-semibold">Oops! Something went wrong. Please email me directly 🩷</p>
      )}
    </motion.form>
  );
}