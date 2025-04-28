// src/components/Footer.tsx

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-teal-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6 text-sm">

        <div className="text-center md:text-left space-y-2">
          <p>
            © 2025 <span className="font-semibold">Crypto Dashboard</span> by Sana Khuram.
          </p>
          <p>
            Powered by{' '}
            <a
              href="https://coingecko.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-300"
            >
              CoinGecko API
            </a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-teal-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/top-coins" className="hover:text-teal-300 transition">
                Top Coins
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal-300 transition">
                About
              </Link>
            </li>
          </ul>

          <a
            href="https://github.com/sanakhuram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-300 transition"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
