import Layout from '@/layouts/Layout';
import WelcomeSection from '@/containers/WelcomeSection';
import FeaturedProductSection from '@/containers/FeaturedProductSection';
import ProductSection from '@/containers/ProductSection';
import AboutSection from '@/containers/AboutSection';
import PortfolioSection from '@/containers/PortfolioSection';
import BlogSection from '@/containers/BlogSection';
import ContactSection from '@/containers/ContactSection';
import { Spacer } from '@nextui-org/react';

export default function Home() {
	return (
		<Layout>
			<main>
				<WelcomeSection />
				<FeaturedProductSection />
				<Spacer y={9} />
				<ProductSection />
				<Spacer y={9} />
				<AboutSection />
				<Spacer y={12} />
				<PortfolioSection />
				<Spacer y={9} />
				<BlogSection />
				<Spacer y={9} />
				<ContactSection />
				<Spacer y={9} />
			</main>
		</Layout>
	);
}
