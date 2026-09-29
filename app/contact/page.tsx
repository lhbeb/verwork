import Link from 'next/link'
import { ArrowUpRight, MessageCircle, ShoppingBag } from 'lucide-react'

export const metadata = {
    title: 'Contact Verwork | Paul Amadeus',
    description: 'Questions about Verwork Procreate brushes? Contact Paul Amadeus through Buy Me a Coffee.',
}

const creatorUrl = 'https://buymeacoffee.com/paulamadeus'

export default function ContactPage() {
    return <main className="min-h-screen">
        <section className="border-b border-[var(--line)] bg-[var(--paper-bright)]"><div className="mx-auto max-w-5xl px-6 py-16 sm:py-24"><p className="mb-5 text-xs font-bold uppercase text-[var(--cobalt)]">Contact</p><h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">Let’s talk brushes, art, or your order.</h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--muted-text)]">For product questions, download help, or a note about your work, send Paul a message through Buy Me a Coffee.</p></div></section>
        <section className="mx-auto grid max-w-5xl gap-5 px-6 py-14 sm:grid-cols-2 sm:py-20">
            <a href={creatorUrl} target="_blank" rel="noopener noreferrer" className="group border-t-2 border-[var(--line)] py-6 transition-colors hover:border-[var(--cobalt)]"><MessageCircle size={22} className="mb-7 text-[var(--cobalt)]" /><p className="text-xs font-bold uppercase text-[var(--muted-text)]">Message Paul</p><h2 className="mt-2 font-display text-2xl font-semibold group-hover:text-[var(--cobalt)]">Buy Me a Coffee</h2><p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">Visit the creator page to get in touch or support the studio.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Open creator page <ArrowUpRight size={15} /></span></a>
            <a href={`${creatorUrl}/extras`} target="_blank" rel="noopener noreferrer" className="group border-t-2 border-[var(--line)] py-6 transition-colors hover:border-[var(--coral)]"><ShoppingBag size={22} className="mb-7 text-[var(--coral)]" /><p className="text-xs font-bold uppercase text-[var(--muted-text)]">Looking for brushes?</p><h2 className="mt-2 font-display text-2xl font-semibold group-hover:text-[var(--coral)]">Visit the shop</h2><p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">See current brush packs, product previews, and purchase details.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Browse brush sets <ArrowUpRight size={15} /></span></a>
        </section>
        <div className="mx-auto max-w-5xl px-6 pb-16"><Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cobalt)] hover:underline">Meet Paul <ArrowUpRight size={15} /></Link></div>
    </main>
}
