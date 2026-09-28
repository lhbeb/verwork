import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VisitorNotifier from '@/components/VisitorNotifier'

export const metadata: Metadata = {
    metadataBase: new URL('https://reinatorress.shop'),
    title: 'Reina Torress | Free tools for the community.',
    description: 'Free web tools, simple utilities, community software, Reina Torress',
    keywords: 'Reina Torress, web tools, productivity utilities, automation, developer utilities, community projects',
    alternates: { canonical: '/' },
    icons: { icon: '/favicon.png', shortcut: '/favicon.png', apple: '/favicon.png' },
    openGraph: {
        title: 'Reina Torress | Free tools for the community.',
        description: 'Free web tools and simple utilities made for the community by Reina Torress.',
        url: '/', siteName: 'Reina Torress', type: 'website',
    },
    twitter: { card: 'summary', title: 'Reina Torress | Free tools for the community.', description: 'Free web tools and simple utilities made for the community by Reina Torress.' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang="en"><body className="min-h-screen bg-[#f5f7fb] text-[#0b1220] antialiased"><VisitorNotifier /><Navbar /><main className="min-h-screen">{children}</main><Footer /></body></html>
}
