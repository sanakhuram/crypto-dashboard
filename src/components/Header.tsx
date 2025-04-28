'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Home, BarChart, Info, Github } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-teal-900 text-teal-100 shadow">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <div className="flex items-center space-x-3">
          <Link href="/" className="text-2xl font-extrabold tracking-wide">
            Crypto Dashboard
          </Link>
        </div>

        <ul className="hidden sm:flex gap-8 items-center">
          <li className="flex items-center gap-1">
            <Home size={20} />
            <Link href="/" className="hover:text-teal-300 transition">
              Home
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <BarChart size={20} />
            <Link href="/top-coins" className="hover:text-teal-300 transition">
              Top Coins
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <Info size={20} />
            <Link href="/about" className="hover:text-teal-300 transition">
              About
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <Github size={20} />
            <a
              href="https://github.com/sanakhuram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition"
            >
              GitHub
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="sm:hidden bg-teal-800">
          <ul className="flex flex-col gap-6 p-6">
            <li className="flex items-center gap-2">
              <Home size={20} />
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-teal-300 transition"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <BarChart size={20} />
              <Link
                href="/top-coins"
                onClick={() => setMenuOpen(false)}
                className="hover:text-teal-300 transition"
              >
                Top Coins
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Info size={20} />
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-teal-300 transition"
              >
                About
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Github size={20} />
              <a
                href="https://github.com/sanakhuram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
