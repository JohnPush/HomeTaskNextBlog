'use client';
import styles from './Header.module.css';
import {
	HTMLAttributes,
	DetailedHTMLProps,
	ReactNode,
	KeyboardEvent
} from 'react';
import Github from '../../../public/github.svg';
import Link from 'next/link';

export interface HeaderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
}

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	const link = (event: KeyboardEvent<HTMLAnchorElement>) => {
		if (event.key === ' ' || event.key === 'Enter') {
			event.preventDefault();
			event.currentTarget.click();
		}
	};

	return (
		<header className={styles.header} role="banner">
			<Link
				className={styles.logo}
				href="/"
				aria-label="Переход на главную страницу"
				onKeyDown={link}
			>
				.my_blog
			</Link>
			<Link
				href="https://github.com"
				target="_blank"
				aria-label="Переход на Github"
				onKeyDown={link}
				rel="noopener noreferrer"
			>
				<Github role="img" aria-label="Логотип Github" />
			</Link>
		</header>
	);
};
