import Link from 'next/link'
import { ArrowLeftCircle } from 'lucide-react'

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#2563eb] transition-colors mb-8">
                <ArrowLeftCircle size={16} /> Back to Home
            </Link>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-400 mb-12">Last updated: March 2026</p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                    <p>At Reina Torress, we respect your privacy. This website provides practical web tools and developer utilities without requiring an account to browse the available projects.</p>
                    <p className="mt-4">If you contact Reina or subscribe to updates, we collect the information you provide solely to respond or send relevant build notes.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cookies and Analytics</h2>
                    <p>We use minimal cookies strictly necessary for the functioning of the website, such as managing the admin session for the site owner. We do not use third-party tracking cookies or sell your browsing data to advertisers.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Third-Party Services</h2>
                    <p>Our website may contain links to third-party services, such as GitHub or Buy Me a Coffee. When you use those links, your interactions are governed by the third party&apos;s privacy policy and terms of service.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                    <p>We implement standard security measures to protect the integrity of our website. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy, contact <a href="mailto:hello@reinatorress.shop" className="text-[#2563eb] hover:underline">hello@reinatorress.shop</a>.</p>
                </section>
            </div>
        </div>
    )
}
