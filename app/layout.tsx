import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';
import Github from '../public/Github.svg';

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Blog about JP'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={openSans.className}>
				<div className={styles.header}>
					.my_blog
					<a href="https://github.com" target="_blank">
						<Github />
					</a>
				</div>
				{children}
			</body>
		</html>
	);
}
