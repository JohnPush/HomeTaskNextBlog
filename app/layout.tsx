"use client";
import { Open_Sans } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';
import Github from '../public/Github.svg';
import Link from 'next/link';
import {GitHubContext} from '@/app/context/GitHubContext';
import React, {useContext, ReactNode, ContextType} from 'react';

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'] });

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>) {

	const mycontext = useContext(GitHubContext);

	return (
		<html lang="ru">
				<body className={openSans.className}>
				<GitHubContext.Provider value={'https://github.com'}>
					<div className={styles.header}>
						<Link className={styles.logo} href={'/'}>
							.my_blog
						</Link>
						<Link href={mycontext} target="_blank">
							<Github />
						</Link>
					</div>
					{children}
				</GitHubContext.Provider>
				</body>

		</html>
	);
}
