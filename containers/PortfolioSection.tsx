import { Container, Text, Card, Button } from '@nextui-org/react';
import { Section } from './Section';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export default function PortfolioSection() {
	return (
		<Section id='portfolio'>
			<Container
				css={{
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
					flexDirection: 'column',
					gap: '5rem',
				}}
			>
				<Text
					h1
					css={{
						fontSize: 'clamp(5.05rem, calc(8.55vw + -1.39rem), 16.66rem)',
						textAlign: 'center',
						lineHeight: '1',
					}}
				>
					Portfolio
				</Text>
				<Container
					css={{
						display: 'flex',
						justifyContent: 'center',
						alignContent: 'center',
						gap: '3rem',
					}}
				>
					<ProductCard
						header='Web Application Project'
						content='Work Abroad PH'
						imageSrc='/workabroadph.png'
						imageAlt='Work abroad ph home page'
						link='https://www.workabroad.ph/'
					/>
					<ProductCard
						header='Mobile Application Project'
						content='IPAMS'
						imageSrc='/ipams.png'
						imageAlt='IPAMS home page'
						link='https://www.ipams.com/'
					/>
					<Button
						auto
						as={Link}
						href='https://www.quantumx.com/index.php'
						target='_blank'
						color='error'
					>
						MORE PROJECTS
					</Button>
				</Container>
			</Container>
		</Section>
	);
}
