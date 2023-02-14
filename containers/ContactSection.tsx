import { Section } from './Section';
import { Container, Card, Grid, Text, Avatar } from '@nextui-org/react';
import { FaPaperPlane, FaPhone, FaClock } from 'react-icons/fa';

export default function ContactSection() {
  return (
		<Section id='contact'>
			<Container
				css={{
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
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
					Discuss A Project.
				</Text>
				<Container
					css={{
						display: 'flex',
						justifyContent: 'center',
						alignContent: 'center',
						gap: '1rem',
					}}
				>
					<Card css={{ p: '$6', mw: '400px' }}>
						<Card.Header>
							<Avatar squared icon={<FaPaperPlane />} />
							<Grid.Container css={{ pl: '$8' }}>
								<Text h4 css={{ lineHeight: '$xs' }}>
									Email Address
								</Text>
								<Grid xs={12}>
									<Text css={{ color: '$accents8' }}>Support</Text>
								</Grid>
							</Grid.Container>
						</Card.Header>
						<Card.Body css={{ py: '$2' }}>
							<Text size='$lg'>sales@quantumx.com</Text>
							<Text size='$lg'>iris@quantumx.com</Text>
						</Card.Body>
					</Card>
					<Card css={{ p: '$6', mw: '400px' }}>
						<Card.Header>
							<Avatar squared icon={<FaPhone />} />
							<Grid.Container css={{ pl: '$8' }}>
								<Text h4 css={{ lineHeight: '$xs' }}>
									Lines
								</Text>
								<Grid xs={12}>
									<Text css={{ color: '$accents8' }}>Support</Text>
								</Grid>
							</Grid.Container>
						</Card.Header>
						<Card.Body css={{ py: '$2' }}>
							<Text size='$lg'>0908 812 8657 - Sales</Text>
							<Text size='$lg'>0917 701 2258 - Admin and Billing</Text>
							<Text size='$lg'>0917 634 2651 - Technical</Text>
						</Card.Body>
					</Card>
					<Card css={{ p: '$6', mw: '400px' }}>
						<Card.Header>
							<Avatar squared icon={<FaClock />} />
							<Grid.Container css={{ pl: '$8' }}>
								<Text h4 css={{ lineHeight: '$xs' }}>
									Office Hours
								</Text>
								<Grid xs={12}>
									<Text css={{ color: '$accents8' }}>Support</Text>
								</Grid>
							</Grid.Container>
						</Card.Header>
						<Card.Body css={{ py: '$2' }}>
							<Text size='$lg'>
								Office hours is from Monday to Friday, 8:00 am to 5:00 pm
								(except Holidays).
							</Text>
						</Card.Body>
					</Card>
				</Container>
			</Container>
		</Section>
	);
}
