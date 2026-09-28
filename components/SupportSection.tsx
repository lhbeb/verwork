import { ExternalLink, FileText, GitBranch, Heart, Wrench } from 'lucide-react'

export default function SupportSection() {
    const items = [
        { icon: Wrench, label: 'Small utilities' },
        { icon: FileText, label: 'Productivity helpers' },
        { icon: GitBranch, label: 'Open experiments' },
        { icon: Heart, label: 'Community requests' },
    ]
    return <section id="support" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24"><div className="bg-[var(--ink)] text-white rounded-[2rem] overflow-hidden p-8 sm:p-12 lg:p-16"><div className="max-w-3xl"><p className="mono text-xs uppercase text-[var(--signal-lime)] mb-4">Free tools, shared openly</p><h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight mb-6">Free tools for the community</h2><div className="space-y-4 text-white/65 leading-relaxed max-w-2xl mb-8"><p>Most of my tools are free for anyone to use. If one saved you time or made your work easier, you can support the next tool and help keep the current ones available.</p><p>Buy Me a Coffee support helps cover hosting, APIs, domains, and maintenance while the tools remain free for the community.</p></div><div className="flex flex-wrap gap-2 mb-9">{items.map(({ icon: Icon, label }) => <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/70"><Icon size={14} className="text-[var(--signal-lime)]" />{label}</span>)}</div><div className="flex flex-col sm:flex-row gap-3"><a href="https://buymeacoffee.com/reinatorress" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--signal-lime)] text-[var(--ink)] font-bold px-6 py-3 hover:brightness-105 transition-all">Buy Me a Coffee <img src="/BMC1.png" alt="" className="h-5 w-5 object-contain" /></a><a href="https://github.com/ReinaToress" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white font-semibold px-6 py-3 hover:bg-white/10 transition-colors"><ExternalLink size={16} /> Open projects</a></div></div></div></section>
}
