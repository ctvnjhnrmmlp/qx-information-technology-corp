import { Navbar } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavigationBar() {
	return (
		<Navbar
			isBordered
			variant='floating'
			disableShadow
			isCompact
			css={{
				position: 'fixed',
			}}
		>
			<Navbar.Brand>
				<Image
					src='/quantumx-logo.png'
					alt='QuantumX official logo'
					width={200}
					height={50}
				/>
			</Navbar.Brand>
			<Navbar.Content>
				<Navbar.Link href='#home' hideIn='sm'>
					Home
				</Navbar.Link>
				<Navbar.Link href='#products' hideIn='sm'>
					Products
				</Navbar.Link>
				<Navbar.Link href='#about' hideIn='sm'>
					About
				</Navbar.Link>
				<Navbar.Link href='#portfolio' hideIn='sm'>
					Portfolio
				</Navbar.Link>
				<Navbar.Link href='#blogs' hideIn='sm'>
					Blogs
				</Navbar.Link>
				<Navbar.Link href='#contact' hideIn='sm'>
					Contact
				</Navbar.Link>
			</Navbar.Content>
			<Navbar.Collapse disableAnimation>
				<Navbar.CollapseItem>
					<Link href='#home' color='inherit'>
						Home
					</Link>
				</Navbar.CollapseItem>
				<Navbar.CollapseItem>
					<Link href='#products' color='inherit'>
						Products
					</Link>
				</Navbar.CollapseItem>
				<Navbar.CollapseItem>
					<Link href='#about' color='inherit'>
						About
					</Link>
				</Navbar.CollapseItem>
				<Navbar.CollapseItem>
					<Link href='#portfolio' color='inherit'>
						Portfolio
					</Link>
				</Navbar.CollapseItem>
				<Navbar.CollapseItem>
					<Link href='#blogs' color='inherit'>
						Blogs
					</Link>
				</Navbar.CollapseItem>
				<Navbar.CollapseItem>
					<Link href='#contact' color='inherit'>
						Contact
					</Link>
				</Navbar.CollapseItem>
			</Navbar.Collapse>
			<Navbar.Toggle showIn='sm' />
		</Navbar>
	);
}
