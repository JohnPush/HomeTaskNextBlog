import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';
import Github from '../public/Github.svg';
import Link from 'next/link';
import { GitHubProvider, GitHubContext } from '@/context/GitHubContext';
import React, { useContext, ReactNode } from 'react';

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
	const { gitHubUrl } = useContext(GitHubContext)!;

	return (
		<html lang="ru">
			<GitHubProvider>
				<body className={openSans.className}>
					<div className={styles.header}>
						<Link className={styles.logo} href={'/'}>
							.my_blog
						</Link>
						<Link href={gitHubUrl} target="_blank">
							<Github />
						</Link>
					</div>
					{children}
				</body>
			</GitHubProvider>
		</html>
	);
}
