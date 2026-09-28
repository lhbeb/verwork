'use client'

import { ArrowUpRight, Code2, Github } from 'lucide-react'

export default function ProfileHero() {
    return (
        <>
        <section className="bg-[var(--paper)] text-[var(--ink)] overflow-hidden border-b border-[var(--line)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20">
                    <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 tag mb-6 bg-[var(--ink)]/5 text-[var(--cobalt)] border-[var(--line)]"><Code2 size={13} /> Free tools for the community</div>
                            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-.04em] leading-[1.02] max-w-3xl">
                                Free tools. Useful work. Open to everyone.
                            </h1>
                            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[var(--muted-text)] max-w-2xl">
                                I make free web tools and simple utilities for anyone who needs them. Buy Me a Coffee support helps keep the tools online, maintained, and free for the community.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                                <a href="#tools" className="btn-primary"><span>Explore my tools</span><ArrowUpRight size={16} /></a>
                                <a href="https://github.com/ReinaToress" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold border border-[var(--line)] text-[var(--ink)] hover:bg-[var(--ink)]/5 transition-colors"><Github size={17} /><span>View GitHub</span><ArrowUpRight size={16} /></a>
                            </div>
                            <div className="flex flex-wrap gap-x-7 gap-y-3 mt-10 pt-6 border-t border-[var(--line)] text-sm text-[var(--muted-text)]">
                                <span><strong className="text-[var(--ink)]">Web tools</strong></span><span><strong className="text-[var(--ink)]">Productivity</strong></span><span><strong className="text-[var(--ink)]">Automation</strong></span><span><strong className="text-[var(--ink)]">Developer utilities</strong></span>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-5 rounded-[2rem] bg-[var(--cobalt)]/20 blur-2xl" />
                            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[var(--ink-soft)] shadow-2xl">
                                <img src="/reina.png" alt="Reina Torress building free tools for the community" className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/4]" />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/85 to-transparent px-5 pb-5 pt-20 sm:px-7 sm:pb-7">
                                    <p className="mono text-xs uppercase text-[var(--signal-lime)]">Built by Reina</p>
                                    <p className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">Useful, quietly.</p>
                                    <p className="mt-1 text-sm text-white/65">Tools shaped by real work, one small improvement at a time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

        </>
    )
}
