import {
	Container,
	Text,
	Card,
	Row,
	Grid,
	Avatar,
	Button,
} from '@nextui-org/react';
import { Section } from './Section';
import { FaLaptopCode, FaMobile, FaLeaf } from 'react-icons/fa';
import Link from 'next/link';

export default function ProductSection() {
	return (
		<Section id='products'>
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
					Products
				</Text>
				<Container
					css={{
						display: 'flex',
						justifyContent: 'center',
						alignContent: 'center',
						gap: '3rem',
					}}
				>
					<Card css={{ p: '$6', mw: '400px' }}>
						<Card.Header>
							<Avatar squared icon={<FaLaptopCode />} />
							<Grid.Container css={{ pl: '$8' }}>
								<Text h4 css={{ lineHeight: '$xs' }}>
									Web Applications Development
								</Text>
								<Grid xs={12}>
									<Text css={{ color: '$accents8' }}>Product</Text>
								</Grid>
							</Grid.Container>
						</Card.Header>
						<Card.Body css={{ py: '$2' }}>
							<Text size='$lg'>
								We’ve been developing custom web applications and software
								products for over a decade. We turn ideas into actual products.
								We can convert your existing products to web applications.
							</Text>
						</Card.Body>
						<Card.Footer>
							<Button
								auto
								as={Link}
								href='https://www.quantumx.com/web-applications-development.php'
								target='_blank'
								color='error'
							>
								Avail product
							</Button>
						</Card.Footer>
					</Card>
					<Card css={{ p: '$6', mw: '400px' }}>
						<Card.Header>
							<Avatar squared icon={<FaMobile />} />
							<Grid.Container css={{ pl: '$8' }}>
								<Text h4 css={{ lineHeight: '$xs' }}>
									Mobile Applications Development
								</Text>
								<Grid xs={12}>
									<Text css={{ color: '$accents8' }}>Product</Text>
								</Grid>
							</Grid.Container>
						</Card.Header>
						<Card.Body css={{ py: '$2' }}>
							<Text size='$lg'>
								Working cooperatively, ideas will be combined with everything we
								know and tailor it to be a mobile app for your marketing
								strategy to be interactive on Android or IOS platforms.
							</Text>
						</Card.Body>
						<Card.Footer>
							<Button
								auto
								as={Link}
								href='https://www.quantumx.com/mobile-applications-development.php'
								target='_blank'
								color='error'
							>
								Avail product
							</Button>
						</Card.Footer>
					</Card>
					<Card css={{ p: '$6', mw: '400px' }}>
						<Card.Header>
							<Avatar squared icon={<FaLeaf />} />
							<Grid.Container css={{ pl: '$8' }}>
								<Text h4 css={{ lineHeight: '$xs' }}>
									Web Design
								</Text>
								<Grid xs={12}>
									<Text css={{ color: '$accents8' }}>Product</Text>
								</Grid>
							</Grid.Container>
						</Card.Header>
						<Card.Body css={{ py: '$2' }}>
							<Text size='$lg'>
								We merge strategic thinking to create high-quality,
								results-driven websites and uses the responsive web design
								approach that will look great on any device for your audience.
							</Text>
						</Card.Body>
						<Card.Footer>
							<Button
								auto
								as={Link}
								href='https://www.quantumx.com/web-designer-and-developer-philippines.php'
								target='_blank'
								color='error'
							>
								Avail product
							</Button>
						</Card.Footer>
					</Card>
				</Container>
			</Container>
		</Section>
	);
}
