import { Section } from './Section';
import {
	Container,
	Card,
	Grid,
	Link,
	Text,
	Avatar,
	Button,
} from '@nextui-org/react';
import { FaPaperPlane, FaPhone, FaClock } from 'react-icons/fa';

export default function BlogSection() {
	return (
		<Section id='blogs'>
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
					Blogs
				</Text>
				<Text
					size='$2xl'
					css={{
						textAlign: 'center',
					}}
				>
					Read tips, guides, and the latest trends in web and mobile app
					development.
				</Text>
				<Container
					css={{
						display: 'flex',
						justifyContent: 'center',
						alignContent: 'center',
						gap: '3rem',
					}}
				>
					<Card css={{ p: '$6', mw: '550px' }}>
						<Card.Header>
							<Grid.Container css={{ pl: '$1' }}>
								<Text h4 css={{ lineHeight: '$xs' }}>
									What is in trend for web development this 2019
								</Text>
								<Grid xs={12}>
									<Text css={{ color: '$accents8' }}>
										Apr 12, 2019 @ 03:20 PM
									</Text>
								</Grid>
							</Grid.Container>
						</Card.Header>
						<Card.Body css={{ py: '$2' }}>
							<Text size='$lg'>
								{`Know more about what's up and coming for web development this
								2019.`}
							</Text>
						</Card.Body>
						<Card.Footer>
							<Button
								auto
								as={Link}
								href='https://www.blog.quantumx.com/category-blog/whats-in-trend-for-web-development-this-2019'
								target='_blank'
								color='error'
							>
								Read blog
							</Button>
						</Card.Footer>
					</Card>
					<Card css={{ p: '$6', mw: '550px' }}>
						<Card.Header>
							<Grid.Container css={{ pl: '$1' }}>
								<Text h4 css={{ lineHeight: '$xs' }}>
									Why developers are switching from web to mobile development
								</Text>
								<Grid xs={12}>
									<Text css={{ color: '$accents8' }}>
										Apr 12, 2019 @ 03:14 PM
									</Text>
								</Grid>
							</Grid.Container>
						</Card.Header>
						<Card.Body css={{ py: '$2' }}>
							<Text size='$lg'>
								Web developers should consider making a switch to mobile
								development. Though mobile development can be intimidating at
								first, it is all worth the time and investment.
							</Text>
						</Card.Body>
						<Card.Footer>
							<Button
								auto
								as={Link}
								href='https://www.blog.quantumx.com/category-blog/why-developers-are-switching-from-web-to-mobile-development'
								target='_blank'
								color='error'
							>
								Read blog
							</Button>
						</Card.Footer>
					</Card>
				</Container>
			</Container>
		</Section>
	);
}
