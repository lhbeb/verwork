import Link from 'next/link'
import { ArrowUpRight, Mail, MessageCircle, Phone, ShoppingBag } from 'lucide-react'

export const metadata = {
    title: 'Contact Verwork | Paul Amadeus',
    description: 'Contact digital artist Paul Amadeus about Verwork Procreate brushes, downloads, or your order.',
}

const creatorUrl = 'https://buymeacoffee.com/paulamadeus'

export default function ContactPage() {
    return <main className="min-h-screen">
        <section className="border-b border-[var(--line)] bg-[var(--paper-bright)]"><div className="mx-auto max-w-5xl px-6 py-16 sm:py-20"><h1 className="max-w-3xl font-display text-3xl font-semibold leading-snug sm:text-4xl">Contact Paul Amadeus</h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted-text)]">For product questions, download help, or a note about your work, contact Paul directly by email or phone, or send a message through Buy Me a Coffee.</p></div></section>
        <section className="mx-auto grid max-w-5xl gap-5 px-6 py-14 sm:grid-cols-2 sm:py-20">
            <a href="mailto:paul@verwork.shop" className="group border-t-2 border-[var(--line)] py-6 transition-colors hover:border-[var(--cobalt)]"><Mail size={22} className="mb-5 text-[var(--cobalt)]" /><h2 className="break-all font-display text-xl font-semibold group-hover:text-[var(--cobalt)]">paul@verwork.shop</h2><p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">For questions about brush sets, downloads, or orders.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Send an email <ArrowUpRight size={15} /></span></a>
            <a href="tel:+15044355388" className="group border-t-2 border-[var(--line)] py-6 transition-colors hover:border-[var(--cobalt)]"><Phone size={22} className="mb-5 text-[var(--cobalt)]" /><h2 className="font-display text-xl font-semibold group-hover:text-[var(--cobalt)]">+1 (504) 435-5388</h2><p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">Call or text about your order or creative work.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Call or text <ArrowUpRight size={15} /></span></a>
            <a href={creatorUrl} target="_blank" rel="noopener noreferrer" className="group border-t-2 border-[var(--line)] py-6 transition-colors hover:border-[var(--cobalt)]"><MessageCircle size={22} className="mb-5 text-[var(--cobalt)]" /><h2 className="font-display text-xl font-semibold group-hover:text-[var(--cobalt)]">Buy Me a Coffee</h2><p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">Visit the creator page to get in touch or support the studio.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Open creator page <ArrowUpRight size={15} /></span></a>
            <a href={`${creatorUrl}/extras`} target="_blank" rel="noopener noreferrer" className="group border-t-2 border-[var(--line)] py-6 transition-colors hover:border-[var(--coral)]"><ShoppingBag size={22} className="mb-5 text-[var(--coral)]" /><h2 className="font-display text-xl font-semibold group-hover:text-[var(--coral)]">Visit the shop</h2><p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">See current brush packs, product previews, and purchase details.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Browse brush sets <ArrowUpRight size={15} /></span></a>
        </section>
        <div className="mx-auto max-w-5xl px-6 pb-16"><Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cobalt)] hover:underline">Meet Paul <ArrowUpRight size={15} /></Link></div>
    </main>
}
