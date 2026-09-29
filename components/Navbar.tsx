'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const shopUrl = 'https://buymeacoffee.com/paulamadeus'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const links = [
        { href: '/collections', label: 'Brushes' },
        { href: '/about', label: 'About Paul' },
        { href: '/license', label: 'Brush license' },
        { href: '/contact', label: 'Contact' },
    ]

    return <nav className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
            <Link href="/" aria-label="Verwork home" className="flex flex-col leading-tight">
                <span className="font-display text-xl font-bold text-[var(--ink)]">verwork<span className="text-[var(--coral)]">.</span></span>
                <span className="text-[10px] font-semibold uppercase text-[var(--muted-text)]">Paul Amadeus · Procreate brushes</span>
            </Link>
            <div className="hidden items-center gap-7 md:flex">
                {links.map(link => <Link key={link.href} href={link.href} className="text-sm font-semibold text-[var(--muted-text)] transition-colors hover:text-[var(--ink)]">{link.label}</Link>)}
                <a href={shopUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[var(--ink)] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[var(--cobalt)]">Shop brush sets <ArrowUpRight size={15} /></a>
            </div>
            <button className="p-2 text-[var(--ink)] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
        {menuOpen && <div className="border-t border-[var(--line)] bg-[var(--paper-bright)] px-4 py-4 md:hidden"><div className="flex flex-col gap-4">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-[var(--ink)]">{link.label}</Link>)}<a href={shopUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-[var(--cobalt)]">Shop brush sets <ArrowUpRight size={15} /></a></div></div>}
    </nav>
}
