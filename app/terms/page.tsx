import Link from 'next/link'
import { ArrowLeftCircle } from 'lucide-react'

export default function TermsOfServicePage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#2563eb] transition-colors mb-8">
                <ArrowLeftCircle size={16} /> Back to Home
            </Link>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-400 mb-12">Last updated: March 2026</p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                    <p>By accessing and using Reina Torress ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using the website.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Creative Assets</h2>
                    <p>The core purpose of Reina Torress is to share free web tools, simple utilities, and community projects that anyone can use. Unless a project states otherwise, tools are provided for personal and commercial use as available, without a promise of uninterrupted service.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Professional Services</h2>
                    <p>Some projects may link to third-party services such as GitHub or Buy Me a Coffee. Those services are governed by their own terms. Any support payment is voluntary and subject to the provider&apos;s rules.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Site Availability and Integrity</h2>
                    <p>We strive to maintain the availability of our website and its content but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of the service at any time without prior notice.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
                    <p>In no event shall Reina Torress be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the website or its tools. Projects are provided "as is" without warranty of any kind.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to Terms</h2>
                    <p>We reserve the right to modify these Terms of Service at any time. Significant changes will be posted on this page, and your continued use of the website constitutes acceptance of the modified terms.</p>
                </section>
            </div>
        </div>
    )
}
