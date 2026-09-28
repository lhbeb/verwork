'use client'

import { useState } from 'react'
import { CheckCircle, Mail, ArrowUpRight } from 'lucide-react'

export default function EmailSection() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    function handleSubmit(e: React.FormEvent) { e.preventDefault(); if (!email) return; setSubmitted(true); setTimeout(() => { setSubmitted(false); setEmail('') }, 3000) }
    return <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"><div className="bg-[var(--paper-bright)] border border-[var(--line)] rounded-[2rem] p-8 sm:p-12 text-center"><div className="w-14 h-14 rounded-2xl bg-[var(--ink)] flex items-center justify-center mx-auto mb-5"><Mail size={24} className="text-[var(--signal-lime)]" /></div><p className="mono text-xs uppercase text-[var(--muted-text)] mb-3">Build notes</p><h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--ink)] mb-2">Follow the next useful thing.</h2><p className="text-sm text-[var(--muted-text)] mb-7 max-w-md mx-auto leading-relaxed">Occasional notes about new tools, experiments, and improvements. No filler; unsubscribe anytime.</p>{submitted ? <div className="flex items-center justify-center gap-2 text-[#087f5b] font-semibold"><CheckCircle size={20} /> You&apos;re subscribed.</div> : <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"><div className="relative flex-1"><Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted-text)]" /><input id="email-section-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full bg-[var(--paper)] border border-[var(--line)] focus:border-[var(--ink)] rounded-xl pl-10 pr-4 py-3 text-[var(--ink)] placeholder:text-[var(--muted-text)] outline-none text-sm" /></div><button id="email-section-submit" type="submit" className="inline-flex items-center justify-center gap-2 bg-[var(--ink)] text-white font-bold px-5 py-3 rounded-xl transition-all text-sm whitespace-nowrap hover:bg-[var(--cobalt)]">Get the updates <ArrowUpRight size={15} /></button></form>}</div></section>
}
