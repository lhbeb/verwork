import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const creatorUrl = 'https://buymeacoffee.com/paulamadeus'

export default function Footer() {
    return <footer className="bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-8 md:flex-row md:items-end">
                <div><Link href="/" aria-label="Verwork home" className="inline-block"><Image src="/verwork-logo.png" alt="Verwork" width={241} height={104} className="h-12 w-auto object-contain brightness-0 invert" /></Link><p className="mt-2 text-sm text-white/65">Procreate brushes by Paul Amadeus.</p></div>
                <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75"><Link href="/collections" className="hover:text-white">Brush shop</Link><Link href="/about" className="hover:text-white">About</Link><Link href="/license" className="hover:text-white">License</Link><Link href="/contact" className="hover:text-white">Contact</Link><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link></nav>
            </div>
            <div className="flex flex-col gap-3 pt-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Verwork · Paul Amadeus</p><a href={creatorUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">Find Verwork on Buy Me a Coffee <ArrowUpRight size={13} /></a></div>
        </div>
    </footer>
}
