import { Button, Card, Col, Row, Text, Spacer } from '@nextui-org/react';

type ProductCardProps = {
	header: string;
	content: string;
	imageSrc: string;
	imageAlt: string;
	link: string;
};

export default function ProductCard({
	header,
	content,
	imageSrc,
	imageAlt,
	link,
}: ProductCardProps) {
	return (
		<Card css={{ w: '100%' }}>
			<Card.Image
				src={imageSrc}
				objectFit='cover'
				width='100%'
				height={340}
				alt={imageAlt}
			></Card.Image>
			<Card.Footer
				isBlurred
				css={{
					position: 'absolute',
					bgBlur: '#0f111466',
					borderTop: '$borderWeights$light solid $gray800',
					bottom: 0,
					zIndex: 1,
				}}
			>
				<Row>
					<Col>
						<Row>
							<Spacer x={1} />
							<Col>
								<Text color='#d1d1d1' size={12}>
									{header}
								</Text>
								<Text color='#d1d1d1' size={12}>
									{content}
								</Text>
							</Col>
						</Row>
					</Col>
					<Col>
						<Row justify='flex-end'>
							<Button
								auto
								rounded
								as='a'
								target='_blank'
								href={link}
								css={{ color: '#ffffff', bg: '#F31260' }}
							>
								<Text
									css={{ color: 'inherit' }}
									size={12}
									weight='bold'
									transform='uppercase'
								>
									Get App
								</Text>
							</Button>
						</Row>
					</Col>
				</Row>
			</Card.Footer>
		</Card>
	);
}
