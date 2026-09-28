import Link from 'next/link'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'

export const metadata = {
    title: 'Contact Reina Torress',
    description: 'Contact Reina Torress about free tools, technology coaching, project ideas, and collaboration.',
}

export default function ContactPage() {
    return <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
        <section className="border-b border-[var(--line)] bg-[var(--paper-bright)]">
            <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
                <p className="mono mb-5 text-xs uppercase text-[var(--cobalt)]">Contact Reina</p>
                <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-6xl">Have a question, idea, or project to talk through?</h1>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--muted-text)]">Reach out about the free tools, a technology question, a collaboration, or a private consultation session.</p>
            </div>
        </section>
        <section className="mx-auto grid max-w-5xl gap-6 px-6 py-16 sm:grid-cols-2 sm:py-20">
            <a href="mailto:contact@reinatorress.shop" className="group rounded-2xl border border-[var(--line)] bg-[var(--paper-bright)] p-7 transition-colors hover:border-[var(--cobalt)]"><Mail size={22} className="mb-8 text-[var(--cobalt)]" /><p className="mono text-xs uppercase text-[var(--muted-text)]">Email</p><h2 className="mt-2 font-display text-2xl font-bold group-hover:text-[var(--cobalt)]">contact@reinatorress.shop</h2><p className="mt-3 text-sm text-[var(--muted-text)]">For questions, ideas, and project conversations.</p></a>
            <a href="tel:+15109416432" className="group rounded-2xl border border-[var(--line)] bg-[var(--paper-bright)] p-7 transition-colors hover:border-[var(--cobalt)]"><Phone size={22} className="mb-8 text-[var(--cobalt)]" /><p className="mono text-xs uppercase text-[var(--muted-text)]">Phone</p><h2 className="mt-2 font-display text-2xl font-bold group-hover:text-[var(--cobalt)]">+1 (510) 941-6432</h2><p className="mt-3 text-sm text-[var(--muted-text)]">For direct business and consultation inquiries.</p></a>
        </section>
        <section className="mx-auto max-w-5xl px-6 pb-20"><div className="rounded-3xl bg-[var(--ink)] p-8 text-white sm:p-10"><p className="mono text-xs uppercase text-[var(--signal-lime)]">Private consultation</p><h2 className="mt-3 font-display text-3xl font-bold">Book a Zoom session through Buy Me a Coffee.</h2><p className="mt-4 max-w-2xl leading-relaxed text-white/65">Get focused help with brainstorming, coding, technology decisions, or turning an idea into a practical next step.</p><a href="https://buymeacoffee.com/reinatorress" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#ffdd00] px-5 py-3 font-bold text-[var(--ink)]"><img src="/BMC1.png" alt="" className="h-5 w-5 object-contain" /> Book via Buy Me a Coffee <ArrowUpRight size={16} /></a></div><Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--cobalt)]">Learn more about Reina <ArrowUpRight size={16} /></Link></section>
    </main>
}
