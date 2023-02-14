import { Container, Text } from '@nextui-org/react';
import { Section } from './Section';

export default function WelcomeSection() {
	return (
		<Section id='home'>
			<Container
				css={{
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
					minHeight: '100vh',
				}}
			>
				<Text
					h1
					css={{
						fontSize: 'clamp(5.05rem, calc(8.55vw + -1.39rem), 16.66rem)',
						textAlign: 'center',
						lineHeight: '1.2',
					}}
				>
					We make IT happen.
				</Text>
			</Container>
		</Section>
	);
}
