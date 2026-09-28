'use client'

import { Suspense, useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Loader2, Ticket, Zap, Box, ArrowUpRight, Wrench } from 'lucide-react'
import { HIDDEN_PUBLIC_PRODUCT_IDS, supabase, Product } from '@/lib/supabase'

function ProductCard({ product }: { product: Product }) {
    const isFree = !product.price || product.price === 0
    const actionLabel = product.title === 'JSON Toolkit' ? 'Launch JSON Toolkit' : 'Open tool'
    return (
        <Link href={`/product/${product.id}`} className="group card-surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
            <div className="relative w-full aspect-[4/3] bg-[var(--ink-soft)] overflow-hidden">
                {product.thumbnail_url ? <Image src={product.thumbnail_url} alt={product.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /> : <div className="absolute inset-0 grid-bg flex items-center justify-center"><div className="w-16 h-16 rounded-2xl bg-[var(--signal-lime)]/10 border border-[var(--signal-lime)]/25 flex items-center justify-center"><Wrench size={28} className="text-[var(--signal-lime)]" /></div></div>}
                <div className="absolute top-3 left-3"><span className={`tag ${isFree ? 'tag-free' : 'tag-premium'}`}>{isFree ? <><Zap size={10} /> Free</> : <><Ticket size={10} /> ${product.price}</>}</span></div>
            </div>
            <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2"><h3 className="font-display font-bold text-base text-[var(--ink)] group-hover:text-[var(--cobalt)] transition-colors line-clamp-2">{product.title}</h3>{!isFree && <span className="shrink-0 text-lg font-bold text-[var(--ink)]">${Number(product.price).toFixed(2)}</span>}</div>
                {product.description && <p className="text-sm text-[var(--muted-text)] line-clamp-2 leading-relaxed">{product.description}</p>}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-[var(--line)]"><span className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--cobalt)] transition-colors">{actionLabel} <ArrowUpRight size={13} className="inline ml-1" /></span><span className="inline-flex items-center gap-1.5 text-[10px] text-[var(--muted-text)] mono uppercase"><Wrench size={13} /> Practical utility</span></div>
            </div>
        </Link>
    )
}

function ProductGridContent({ limit, title = '', subtitle = '', filterType = 'all' }: { limit?: number; title?: string; subtitle?: string; filterType?: 'all' | 'free' | 'paid' }) {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const searchParams = useSearchParams()
    const query = searchParams.get('q')?.toLowerCase().trim() ?? ''
    useEffect(() => { async function fetchProducts() { setLoading(true); const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false }); if (data) setProducts(data.filter(product => !HIDDEN_PUBLIC_PRODUCT_IDS.has(product.id))); setLoading(false) } fetchProducts() }, [])
    let filtered = query ? products.filter(p => p.title.toLowerCase().includes(query) || (p.description && p.description.toLowerCase().includes(query))) : products
    if (limit && !query) filtered = filtered.slice(0, limit)
    if (filterType === 'free') filtered = filtered.filter(p => !p.price || p.price === 0)
    else if (filterType === 'paid') filtered = filtered.filter(p => p.price && p.price > 0)
    const freeProducts = filtered.filter(p => !p.price || p.price === 0)
    const paidProducts = filtered.filter(p => p.price && p.price > 0)
    const showFree = filterType === 'all' || filterType === 'free'
    const showPaid = filterType === 'all' || filterType === 'paid'
    return <section id="tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex justify-end mb-8">{query && <p className="mr-auto text-sm text-[var(--muted-text)]">{filtered.length} result{filtered.length !== 1 ? 's' : ''} for “{query}”</p>}<div className="tag tag-dark"><span className="w-1.5 h-1.5 rounded-full bg-[var(--signal-lime)]" /> {products.length} listed</div></div>
        {loading && <div className="text-center py-20 text-[var(--muted-text)] flex flex-col items-center"><Loader2 className="animate-spin mb-4 text-[var(--cobalt)]" size={28} /><p className="text-sm mono">Loading tools...</p></div>}
        {!loading && filtered.length === 0 && <div className="text-center py-20 border border-[var(--line)] border-dashed rounded-3xl bg-[var(--paper-bright)]"><Box size={40} className="mx-auto mb-4 text-[var(--muted-text)]" /><p className="text-lg font-bold mb-1">No tools found</p><p className="text-sm text-[var(--muted-text)]">Try another search or browse the full toolkit.</p></div>}
        {!loading && showFree && freeProducts.length > 0 && <div id="projects" className="mb-16 scroll-mt-24 rounded-[2rem] bg-[var(--ink)] p-6 sm:p-8"><div className="flex items-center gap-3 mb-5"><span className="w-8 h-8 rounded-full bg-[var(--signal-lime)]/25 flex items-center justify-center"><Zap size={15} className="text-[var(--signal-lime)]" /></span><div><h3 className="font-display text-xl font-bold text-white">Free tools</h3><p className="text-sm text-white/60">Small utilities that handle one useful job without getting in your way.</p></div><span className="tag tag-dark ml-auto">{freeProducts.length}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{freeProducts.map(p => <ProductCard key={p.id} product={p} />)}</div></div>}
        {!loading && showPaid && paidProducts.length > 0 && <div id="projects" className="mb-16 scroll-mt-24"><div className="flex items-center gap-3 mb-5"><span className="w-8 h-8 rounded-full bg-[var(--amber)]/20 flex items-center justify-center"><Ticket size={15} className="text-[var(--amber)]" /></span><div><h3 className="font-display text-xl font-bold">Featured utilities</h3><p className="text-sm text-[var(--muted-text)]">Tools for files, text, dates, developer workflows, and the small problems between tasks.</p></div><span className="tag tag-dark ml-auto">{paidProducts.length}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{paidProducts.map(p => <ProductCard key={p.id} product={p} />)}</div></div>}
    </section>
}

export default function ProductGrid(props: { limit?: number; title?: string; subtitle?: string; filterType?: 'all' | 'free' | 'paid' }) { return <Suspense fallback={<div className="text-center py-20 text-[var(--muted-text)]"><Loader2 className="animate-spin mx-auto mb-4 text-[var(--cobalt)]" size={28} /><p className="text-sm mono">Loading the toolkit...</p></div>}><ProductGridContent {...props} /></Suspense> }
