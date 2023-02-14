import Head from 'next/head';
import { ReactNode } from 'react';
import NavigationBar from './NavigationBar';
import { Container } from '@nextui-org/react';

type LayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>
					Web Designer, Web and Mobile App Developer, eCommerce | QX Information
					Technology Corp.
				</title>
			</Head>
			<NavigationBar />
			<Container lg>{children}</Container>
		</>
	);
}
