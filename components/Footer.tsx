import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="glass mt-20 border-t border-white/30">
      <div className="mx-auto flex max-w-container flex-col items-center px-6 py-12 text-center">
        {/* Brand */}
        <h2 className="font-script text-4xl text-deeprose">
          roshsprettyera
        </h2>

        <p className="mt-3 max-w-xl font-body text-mauve leading-relaxed">
          Creating aesthetic, authentic and high-converting UGC content for
          beauty, skincare, fashion and lifestyle brands.
        </p>

        {/* Navigation */}
        <nav
          aria-label="Footer Navigation"
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-body"
        >
          <Link href="/" className="transition hover:text-deeprose">
            Home
          </Link>

          <Link href="/about" className="transition hover:text-deeprose">
            About
          </Link>

          <Link href="/portfolio" className="transition hover:text-deeprose">
            Portfolio
          </Link>

          <Link href="/services" className="transition hover:text-deeprose">
            Services
          </Link>

          <Link href="/contact" className="transition hover:text-deeprose">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="mt-8 flex items-center gap-5">
          <a
            href="https://www.instagram.com/roshsprettyera"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-full bg-white/40 p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-pink-500"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="mailto:glamprincess9905@gmail.com"
            aria-label="Email"
            className="rounded-full bg-white/40 p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-deeprose"
          >
            <MdEmail size={22} />
          </a>

          <a
            href="https://wa.me/918788115615"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded-full bg-white/40 p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-green-600"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>

        {/* Bottom */}
        <p className="mt-3 text-sm text-deeprose/70">
  Website crafted with ♡ by{" "}
  <a
    href="https://radiance-web-studio.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-mauve transition-colors hover:text-rose"
  >
    Radiance Web Studio
  </a>
</p>
        
        <div className="mt-10 w-full border-t border-white/30 pt-6">
          <p className="text-sm text-mauve">
            © {currentYear} <strong>roshsprettyera</strong>. All rights reserved.
          </p>
          
          <p className="mt-2 flex items-center justify-center gap-2 text-xs text-mauve/80">
            Made with <FaHeart className="text-pink-500" /> for beautiful brand
            collaborations.
          </p>
        </div>
      </div>
    </footer>
  );
}