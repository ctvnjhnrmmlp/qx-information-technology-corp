import { Section } from './Section';
import {
	Container,
	Card,
	Text,
	Avatar,
  Spacer,
} from '@nextui-org/react';
import {
	FaStar,
	FaLaugh,
	FaShieldAlt,
	FaBriefcase,
} from 'react-icons/fa';

export default function AboutSection() {
	return (
		<Section id='about'>
			<Container
				css={{
					display: 'flex',
					justifyContent: 'space-evenly',
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
					QX Information Technology Corp.
				</Text>
				<Text
					size='$2xl'
					css={{
						textAlign: 'center',
					}}
				>
					The best is our commitment when it comes to web applications, mobile
					applications, and online marketing strategies
				</Text>
				<Container
					css={{
						display: 'flex',
						alignContent: 'center',
						justifyContent: 'center',
						gap: '2rem',
					}}
				>
					<Card css={{ p: '$6', mw: '550px' }}>
						<Card.Body>
							<Text size='$xl'>
								<Text b>Trusted web development,</Text> mobile app development
								and internet marketing company in the Philippines, Quantum X
								provides web solutions and online marketing strategies for
								businesses that wants to utilize the advancement of Information
								Technology (IT) and the ever growing power of online media.
							</Text>
						</Card.Body>
					</Card>
					<Card css={{ p: '$6', mw: '550px' }}>
						<Card.Body>
							<Text size='$xl'>
								<Text b>QX Information Technology Corp.’s</Text> continuing
								success is rooted in our ability to provide the best services in
								information technology - web applications development, web
								design, mobile applications development and online marketing
								strategy.
							</Text>
						</Card.Body>
					</Card>
					<Card css={{ p: '$6', mw: '550px' }}>
						<Card.Body>
							<Text size='$xl'>
								<Text b>
									We are expert on web and mobile application development.
								</Text>{' '}
								For 15 years, we’ve been building projects that is completed on
								time, within budget and beyond expectation.
							</Text>
							<Spacer x={1} />
							<Spacer x={1} />
							<Avatar squared icon={<FaStar />} />
						</Card.Body>
					</Card>
					<Card css={{ p: '$6', mw: '550px' }}>
						<Card.Body>
							<Text size='$xl'>
								<Text b>You are our priority.</Text> We understand your needs
								and wants. That’s where we start to work collaboratively giving
								an excellent product in the end.
							</Text>
							<Spacer y={3} />
							<Avatar squared icon={<FaLaugh />} />
						</Card.Body>
					</Card>
					<Card css={{ p: '$6', mw: '550px' }}>
						<Card.Body>
							<Text size='$xl'>
								<Text b>We’ll never leave you.</Text> From the start of
								discussing about your ideas up to the launching, whenever you
								have questions, ideas or feedbacks, we will be with you.
							</Text>
							<Spacer x={1} />
							<Avatar squared icon={<FaShieldAlt />} />
						</Card.Body>
					</Card>
					<Card css={{ p: '$6', mw: '550px' }}>
						<Card.Body>
							<Text size='$xl'>
								<Text b>The quality of our work speaks for itself.</Text> View
								our portfolio in Software Applications, Mobile Development and
								Website Design and you’ll see why.
							</Text>
							<Spacer x={1} />
							<Spacer x={1} />
							<Avatar squared icon={<FaBriefcase />} />
						</Card.Body>
					</Card>
				</Container>
			</Container>
		</Section>
	);
}
