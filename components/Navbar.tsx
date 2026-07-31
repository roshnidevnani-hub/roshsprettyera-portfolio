"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <nav className="glass border-b border-white/30 shadow-lg backdrop-blur-xl">
        <div className="container-width flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="roshsprettyera"
              width={52}
              height={52}
              priority
              className="rounded-full"
            />

            <span className="hidden text-2xl font-script text-deeprose sm:block">
              roshsprettyera
            </span>
          </Link>

          <ul className="hidden items-center gap-8 font-body md:flex">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative transition-all duration-300 ${
                      active
                        ? "font-semibold text-deeprose"
                        : "text-mauve hover:text-deeprose"
                    }`}
                  >
                    {link.name}

                    {active && (
                      <motion.span
                        layoutId="navbar"
                        className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-pink-400"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 transition hover:bg-white/40 md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="glass border-t border-white/30 md:hidden"
            >
              <ul className="container-width flex flex-col gap-5 py-6">
                {links.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-2 py-2 text-lg transition ${
                          active
                            ? "font-semibold text-deeprose"
                            : "text-mauve hover:text-deeprose"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}