import HeroSection from '@/components/HeroSection'
import ProductGrid from '@/components/ProductGrid'
import SupportSection from '@/components/SupportSection'
import SocialLinks from '@/components/SocialLinks'
import ArticlesSection from '@/components/ArticlesSection'

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <ProductGrid filterType="all" />
            <ArticlesSection />
            <SupportSection />
            <SocialLinks />
        </div>
    )
}
