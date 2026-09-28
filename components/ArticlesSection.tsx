import { ArrowUpRight, Check, Video } from 'lucide-react'

const bookingUrl = 'https://buymeacoffee.com/reinatorress'

export default function ArticlesSection() {
    return <section id="consultation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--paper-bright)]">
            <div className="grid lg:grid-cols-[.85fr_1.15fr]">
                <div className="flex min-h-[280px] items-center justify-center bg-[#eef5ff] p-10 sm:p-14">
                    <img src="/zoom.png" alt="Zoom consultation" className="w-full max-w-[280px] object-contain" />
                </div>
                <div className="p-8 sm:p-12">
                    <p className="mono text-xs uppercase text-[var(--cobalt)] mb-3">Premium consultation</p>
                    <h2 className="section-title max-w-xl">Bring the hard problem. Leave with a clearer plan.</h2>
                    <p className="mt-5 max-w-2xl text-[var(--muted-text)] leading-relaxed">Book a private Zoom session with Reina for focused help with brainstorming, coding, technology decisions, or turning an idea into a practical next step.</p>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {['Brainstorm a project or product idea', 'Learn coding and technology concepts', 'Work through a bug or implementation', 'Choose a practical path forward'].map(item => <div key={item} className="flex items-start gap-2 text-sm text-[var(--ink)]"><Check size={16} className="mt-0.5 shrink-0 text-[var(--cobalt)]" />{item}</div>)}
                    </div>
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 font-bold text-white transition-colors hover:bg-[var(--cobalt)]"><img src="/BMC1.png" alt="" className="h-5 w-5 object-contain" /> Book via Buy Me a Coffee <ArrowUpRight size={16} /></a>
                        <span className="inline-flex items-center gap-2 text-sm text-[var(--muted-text)]"><Video size={16} /> Private Zoom session</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
