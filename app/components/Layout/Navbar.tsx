"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLoading } from "../../context/LoadingContext";

type NavItem = {
  label: string;
  href: string;
  scrollTo?: string;
};

const navItems: NavItem[] = [
  { label: "// A propos", href: "/#about", scrollTo: "about" },
  { label: "// Services", href: "/#services", scrollTo: "services" },
  { label: "// Projets", href: "/Work" },
];

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const { loading } = useLoading();
  if (loading) return null;

const handleNavClick = (e: React.MouseEvent, scrollTo?: string) => {
  const isSamePageScroll = pathname === "/" && !!scrollTo;

  if (!isSamePageScroll) return;

  e.preventDefault();
  const target = document.getElementById(scrollTo || "");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  }
};

  const isActive = (href: string) => pathname === href;

  return (
    <motion.header
      className="fixed top-0 w-screen z-50 bg-background/80 backdrop-blur border-b border-border border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <Link href="/#hero">
          <motion.div
            className="font-heading text-2xl glitch-text"
            data-text="JD"
            whileHover={{ scale: 1.1 }}
          >
            ED
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 font-heading text-lg">

          {navItems.map(({ label, href, scrollTo }) => {
            const isScrollLink = !!scrollTo && href.startsWith("/#");

            return (
              <Link
                key={href}
                href={href}
                onClick={
                  isScrollLink ? (e) => handleNavClick(e, scrollTo) : undefined
                }
                className={`transition-colors hover:text-red-500 ${
                  isActive(href) ? "text-red-500" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>

        {/* Drawer */}
        {drawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-background/90 backdrop-blur z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-heading">Menu</span>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 text-lg font-heading">
              {navItems.map(({ label, href, scrollTo }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, scrollTo)}
                  className={`transition-colors hover:text-red-400 ${
                    isActive(href) ? "text-red-400" : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
