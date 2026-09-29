import Link from 'next/link'
import { ArrowUpRight, Layers3, Paintbrush, Pencil, Sparkles } from 'lucide-react'

const shopUrl = 'https://buymeacoffee.com/paulamadeus'

const brushUses = [
    { icon: Paintbrush, title: 'Painterly texture', description: 'Bring the feel of traditional media into a digital canvas.' },
    { icon: Pencil, title: 'Expressive drawing', description: 'Give sketches, linework, and details a mark-making voice of their own.' },
    { icon: Layers3, title: 'A flexible toolkit', description: 'Find brushes to experiment, build, and make your process feel personal.' },
]

export default function ProductGrid() {
    return <section id="brushes" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="mb-3 text-xs font-bold uppercase text-[var(--coral)]">The brush library</p><h2 className="section-title max-w-2xl">A little more feeling in every stroke.</h2><p className="mt-3 max-w-2xl leading-relaxed text-[var(--muted-text)]">Explore Paul’s current Procreate brush sets in the Verwork shop. Each listing includes its own previews, details, and download information.</p></div>
            <a href={shopUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit shrink-0 items-center gap-2 border-b-2 border-[var(--coral)] pb-1 font-bold text-[var(--ink)] hover:text-[var(--cobalt)]">Browse all brushes <ArrowUpRight size={16} /></a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
            {brushUses.map(({ icon: Icon, title, description }, index) => <article key={title} className="border-t-2 border-[var(--line)] py-5 transition-colors hover:border-[var(--coral)]">
                <div className="mb-5 flex items-center justify-between"><Icon size={20} strokeWidth={1.7} className="text-[var(--cobalt)]" /><span className="font-display text-sm italic text-[var(--muted-text)]">0{index + 1}</span></div>
                <h3 className="font-display text-xl font-semibold text-[var(--ink)]">{title}</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--muted-text)]">{description}</p>
            </article>)}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center">
            <p className="flex items-center gap-2 text-sm text-[var(--muted-text)]"><Sparkles size={16} className="text-[var(--coral)]" /> Brush previews and current releases live in the shop.</p>
            <Link href="/license" className="text-sm font-semibold text-[var(--cobalt)] hover:underline">Read the brush license</Link>
        </div>
    </section>
}
