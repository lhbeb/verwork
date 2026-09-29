import { ArrowUpRight, Paintbrush2 } from 'lucide-react'

export const metadata = {
    title: 'Procreate Brush Shop | Verwork',
    description: 'Browse Procreate brushes by digital artist Paul Amadeus.',
}

export default function CollectionsPage() {
    return <main className="mx-auto flex min-h-[65vh] max-w-4xl flex-col justify-center px-6 py-16 text-center sm:py-24">
        <Paintbrush2 size={30} strokeWidth={1.5} className="mx-auto mb-6 text-[var(--coral)]" />
        <h1 className="font-display text-3xl font-semibold leading-snug sm:text-4xl">Brush sets for digital artists.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted-text)]">Paul’s current Procreate brush sets are listed on Buy Me a Coffee, with previews, compatibility details, and download information on each product page.</p>
        <a href="https://buymeacoffee.com/paulamadeus/extras" target="_blank" rel="noopener noreferrer" className="mx-auto mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--ink)] px-6 py-3 font-bold text-white transition-colors hover:bg-[var(--cobalt)]">Browse brush sets <ArrowUpRight size={16} /></a>
    </main>
}
