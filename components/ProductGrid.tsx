import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { brushProducts } from '@/lib/brushes'

const shopUrl = 'https://buymeacoffee.com/paulamadeus'

export default function ProductGrid() {
    return <section id="brushes" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="mb-3 text-xs font-bold uppercase text-[var(--coral)]">The brush library</p><h2 className="section-title max-w-2xl">Brushes for making your mark.</h2><p className="mt-3 max-w-2xl leading-relaxed text-[var(--muted-text)]">Explore brush packs by Paul Amadeus, made for expressive digital painting and illustration.</p></div>
            <a href={shopUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit shrink-0 items-center gap-2 border-b-2 border-[var(--coral)] pb-1 font-bold text-[var(--ink)] hover:text-[var(--cobalt)]">Browse all brushes <ArrowUpRight size={16} /></a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brushProducts.map(product => <Link key={product.id} href={`/product/${product.id}`} className="group overflow-hidden rounded-md border border-[var(--line)] bg-[var(--paper-bright)] transition-colors hover:border-[var(--cobalt)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cobalt)]">
                <div className="relative aspect-square overflow-hidden bg-[var(--paper-muted)]">
                    <Image src={product.image} alt={product.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className={`object-cover transition-transform duration-300 ${product.imageCropRight ? 'object-left origin-left scale-[1.35]' : 'group-hover:scale-[1.02]'}`} />
                </div>
                <div className="flex min-h-56 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-xl font-semibold leading-snug text-[var(--ink)]">{product.name}</h3>
                        <span className="shrink-0 rounded-sm bg-[var(--paper-muted)] px-2 py-1 text-[11px] font-semibold text-[var(--ink-soft)]">{product.priceLabel}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{product.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--muted-text)]">
                        {product.brushCount && <span className="rounded-sm border border-[var(--line)] px-2 py-1">{product.brushCount} brushes</span>}
                        {product.formats.map(format => <span key={format} className="rounded-sm border border-[var(--line)] px-2 py-1">{format}</span>)}
                    </div>
                    <span className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-bold text-[var(--cobalt)] group-hover:text-[var(--coral)]">View product <ArrowRight size={15} /></span>
                </div>
            </Link>)}
        </div>
        <div className="mt-16 grid items-center gap-8 border-y border-[var(--line)] py-8 sm:grid-cols-[minmax(220px,.8fr)_minmax(0,1.2fr)] sm:gap-12 sm:py-10">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--paper-muted)]">
                <Image src="/Verwork%20Paul%20Amadeus.jpg" alt="Paul Amadeus drawing digitally on a tablet in his studio" fill sizes="(min-width: 640px) 35vw, 100vw" className="object-cover object-center" />
            </div>
            <div className="max-w-xl">
                <p className="mb-3 text-xs font-bold uppercase text-[var(--coral)]">In the studio</p>
                <h3 className="font-display text-3xl font-semibold leading-tight text-[var(--ink)] sm:text-4xl">Every brush starts with a mark.</h3>
                <p className="mt-4 leading-relaxed text-[var(--muted-text)]">I’m Paul Amadeus. I draw, test, and refine each set on a tablet, then share the tools that make my own process more expressive.</p>
                <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--cobalt)] transition-colors hover:text-[var(--coral)]">Meet Paul <ArrowUpRight size={15} /></Link>
            </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center">
            <p className="text-sm text-[var(--muted-text)]">Free brush packs download directly. Paid sets are available in the shop.</p>
            <Link href="/license" className="text-sm font-semibold text-[var(--cobalt)] hover:underline">Read the brush license</Link>
        </div>
    </section>
}
