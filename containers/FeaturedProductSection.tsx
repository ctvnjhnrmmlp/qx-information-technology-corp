import { Container, Text, Card, Spacer } from '@nextui-org/react';
import { Section } from './Section';
import ProductCard from '@/components/ProductCard';

export default function FeaturedProductSection() {
	return (
		<Section>
			<Container
				css={{
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
					gap: '4rem',
				}}
			>
				<Text
					h1
					css={{
						fontSize: 'clamp(3.05rem, calc(6.55vw + -1.39rem), 14.66rem)',
						textAlign: 'center',
						lineHeight: '1',
					}}
				>
					Featured Products
				</Text>
				<ProductCard
					header='Featured Project'
					content='Crew Master'
					imageSrc='/crewmaster.png'
					imageAlt='Crew master home page'
					link='https://www.crewmaster.work'
				/>
				<ProductCard
					header='Featured Project'
					content='Myra Work'
					imageSrc='/maya.png'
					imageAlt='Maya home page'
					link='https://www.maya.work'
				/>
			</Container>
		</Section>
	);
}
