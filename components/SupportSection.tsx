import { ArrowUpRight, Heart, Paintbrush2 } from 'lucide-react'

const creatorUrl = 'https://buymeacoffee.com/paulamadeus'

export default function SupportSection() {
    return <section id="support" className="border-y border-[var(--line)] bg-[var(--paper-muted)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="max-w-2xl"><p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase text-[var(--cobalt)]"><Heart size={14} /> Independent art, made with care</p><h2 className="font-display text-3xl font-semibold text-[var(--ink)]">Help me make the next set.</h2><p className="mt-3 leading-relaxed text-[var(--muted-text)]">Every brush set and kind bit of support helps me spend more time making useful, expressive tools for digital artists.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row"><a href={creatorUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--ink)] px-5 py-3 font-bold text-white transition-colors hover:bg-[var(--cobalt)]">Support Paul <ArrowUpRight size={16} /></a><a href={`${creatorUrl}/extras`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--line)] bg-white px-5 py-3 font-bold text-[var(--ink)] transition-colors hover:border-[var(--cobalt)]"><Paintbrush2 size={16} /> Visit the brush shop <ArrowUpRight size={15} /></a></div>
        </div>
    </section>
}
