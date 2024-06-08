import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';
import Github from '../public/github.svg';
import Link from 'next/link';
import React, { ReactNode } from 'react';

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
				<div className={styles.header}>
					<Link className={styles.logo} href={'/'}>
						.my_blog
					</Link>
					<Link href="https://github.com" target="_blank">
						<Github />
					</Link>
				</div>
				{children}
			</body>
		</html>
	);
}
