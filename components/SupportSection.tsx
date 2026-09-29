import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const creatorUrl = 'https://buymeacoffee.com/paulamadeus'

export default function SupportSection() {
    return <section id="support" className="border-y border-[var(--line)] bg-[var(--paper-muted)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="max-w-2xl"><h2 className="font-display text-2xl font-semibold text-[var(--ink)]">Support the studio</h2><p className="mt-3 leading-relaxed text-[var(--muted-text)]">Your support helps me spend more time making useful, expressive tools for digital artists.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row">
                <a href={creatorUrl} target="_blank" rel="noopener noreferrer" aria-label="Support Paul on Buy Me a Coffee" className="inline-flex min-h-14 items-center justify-center rounded-md bg-[#ffdd00] px-4 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cobalt)]">
                    <Image src="/buymeacoffeelogo2.png" alt="Buy Me a Coffee" width={190} height={54} className="h-9 w-auto" />
                </a>
                <a href={`${creatorUrl}/extras`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-[var(--line)] bg-white px-5 font-bold text-[var(--ink)] transition-colors hover:border-[var(--cobalt)]">
                    <Image src="/BMC1.png" alt="" width={28} height={28} className="h-7 w-7" /> Visit the brush shop <ArrowUpRight size={15} />
                </a>
            </div>
        </div>
    </section>
}
