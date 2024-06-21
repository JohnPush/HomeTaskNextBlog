'use client';
import Arrow from '../../../public/arrow.svg';
import styles from './Button.module.css';
import { useRouter } from 'next/navigation';
import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	ReactNode,
	KeyboardEvent
} from 'react';

export interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children?: ReactNode;
	postId: number;
	title: string;
	isReading: boolean;
}

export const Button = ({
	postId,
	title,
	isReading,
	...props
}: ButtonProps): JSX.Element => {
	const router = useRouter();

	const openPost = (key: KeyboardEvent<HTMLButtonElement>) => {
		if (key.code == 'Space' || key.code == 'Enter') {
			key.preventDefault();
			router.push(`/posts/${postId}`);
		}
	};

	const handleClick = () => {
		router.push(`/posts/${postId}`);
	};

	return (
		<button
			className={styles.button}
			tabIndex={isReading ? 0 : -1}
			onClick={handleClick}
			onKeyDown={openPost}
			aria-label={`Читать пост ${title}`}
			{...props}
		>
			Читать
			<Arrow />
		</button>
	);
};
