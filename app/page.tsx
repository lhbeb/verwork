import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import ProductGrid from '@/components/ProductGrid'
import SupportSection from '@/components/SupportSection'

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <ProductGrid />
            <section className="border-y border-[var(--line)] bg-[var(--paper-muted)]">
                <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[minmax(200px,300px)_minmax(0,1fr)] lg:gap-14 lg:px-8">
                    <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px] overflow-hidden bg-white">
                        <Image src="/paul-portrait.jpeg" alt="Digital artist Paul Amadeus" fill sizes="(min-width: 768px) 300px, 80vw" className="object-cover object-top" />
                    </div>
                    <div className="max-w-2xl">
                        <h2 className="font-display text-2xl font-semibold leading-snug text-[var(--ink)] sm:text-3xl">A little about Paul</h2>
                        <p className="mt-4 text-lg leading-relaxed text-[var(--muted-text)]">I’m Paul Amadeus, the artist behind Verwork. I make brush sets and digital art resources to help artists explore new techniques and enjoy the process of making.</p>
                        <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--cobalt)] hover:text-[var(--coral)]">More about Paul <span aria-hidden="true">→</span></Link>
                    </div>
                </div>
            </section>
            <SupportSection />
        </div>
    )
}
