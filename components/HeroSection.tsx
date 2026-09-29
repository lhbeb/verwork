import Image from 'next/image'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const shopUrl = 'https://buymeacoffee.com/paulamadeus'

export default function HeroSection() {
    return <section className="border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-16">
            <div className="order-2 lg:order-1">
                <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">Free and premium brushes for your next digital art project.</h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--muted-text)]">Find brush sets for Procreate and Adobe Fresco, plus creative assets to explore new techniques and keep your art moving.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href={shopUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[var(--ink)] px-6 py-3 font-bold text-white transition-colors hover:bg-[var(--cobalt)]">Explore brush sets <ArrowUpRight size={16} /></a>
                    <a href="#brushes" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[var(--line)] px-6 py-3 font-semibold text-[var(--ink)] transition-colors hover:bg-white">See what I make <ArrowDown size={15} /></a>
                </div>
                <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--line)] pt-5 text-sm text-[var(--muted-text)]"><span><strong className="text-[var(--ink)]">Made for Procreate</strong></span><span>Created by an independent artist</span></div>
            </div>
            <div className="order-1 relative lg:order-2">
                <div className="overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-[0_18px_55px_rgba(31,39,34,.12)]">
                    <Image src="/verwork-brush-studies.png" alt="Paint, watercolor, and ink brush mark studies on textured paper" width={1448} height={1110} priority className="aspect-[4/3] w-full object-cover" />
                </div>
                <p className="mt-3 flex items-center justify-between text-xs font-medium text-[var(--muted-text)]"><span>Brush studies</span><span>Paul Amadeus</span></p>
            </div>
        </div>
    </section>
}
