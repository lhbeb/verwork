import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    metadataBase: new URL('https://verwork.shop'),
    title: 'Verwork | Procreate Brushes by Paul Amadeus',
    description: 'Discover expressive Procreate brushes made by digital artist Paul Amadeus.',
    keywords: 'Verwork, Paul Amadeus, Procreate brushes, digital art brushes, illustration brushes',
    alternates: { canonical: '/' },
    icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/favicon.svg' },
    openGraph: {
        title: 'Verwork | Procreate Brushes by Paul Amadeus',
        description: 'Expressive Procreate brushes for digital artists, made by Paul Amadeus.',
        url: '/', siteName: 'Verwork', type: 'website',
    },
    twitter: { card: 'summary', title: 'Verwork | Procreate Brushes by Paul Amadeus', description: 'Expressive Procreate brushes for digital artists, made by Paul Amadeus.' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang="en"><body className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased"><Navbar /><main className="min-h-screen">{children}</main><Footer /></body></html>
}
