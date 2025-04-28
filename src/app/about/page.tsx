// src/app/about/page.tsx

import { FaGithub } from 'react-icons/fa';

export default function AboutPage() {
    return (
        <main className="max-w-4xl mx-auto p-8 space-y-10">
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold p-6">About Crypto Dashboard</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    A modern and powerful live cryptocurrency tracker built using the latest frontend
                    technologies, designed to provide real-time market data at your fingertips.
                </p>
            </section>

            <section className="p-8 rounded-2xl border-2 border-teal-600 space-y-6">
                <h2 className="text-2xl font-bold">Project Overview 🚀</h2>
                <p className="leading-relaxed">
                    Crypto Dashboard is a real-time price tracker powered by the CoinGecko API. Built to
                    demonstrate mastery in React, Next.js 15 App Router, dynamic API fetching, responsive
                    design with TailwindCSS, and clean, scalable project architecture.
                </p>

                <ul className="list-disc list-inside space-y-2">
                    <li>🔗 Dynamic coin pages with charts</li>
                    <li>📈 Top coins view with sorting & searching</li>
                    <li>🌙 Fully responsive dark/light mode (coming soon!)</li>
                    <li>💬 Clean UI/UX design and professional structure</li>
                </ul>
            </section>

            <section className="p-8 rounded-2xl border-2 border-teal-600 space-y-6">
                <h2 className="text-2xl font-bold">About The Developer 👨‍💻</h2>
                <p className="leading-relaxed">
                    Hi! I am <span className="font-semibold">Sana Khuram</span>, a passionate frontend
                    developer focused on building beautiful, responsive, and dynamic web applications. I love
                    solving real-world problems through code and crafting elegant user experiences.
                </p>

                <p className="leading-relaxed">
                    This project was an opportunity to deepen my skills with modern frameworks and push myself
                    to deliver a polished, full-featured product ready for production.
                </p>

                <div className="flex justify-center">
                    <a
                        href="https://github.com/sanakhuram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-teal-700 hover:text-teal-900 font-semibold text-lg"
                    >
                        <FaGithub size={24} />
                        Follow my work on GitHub
                    </a>
                </div>
            </section>
        </main>
    );
}
