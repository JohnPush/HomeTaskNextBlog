import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Header } from './components/';

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Blog about JP'
};

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={openSans.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
