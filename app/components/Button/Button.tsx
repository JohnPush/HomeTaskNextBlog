import Arrow from './Arrow.svg';
import styles from './Button.module.css';
import Link from 'next/link';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children?: ReactNode;
	postId: number;
}

export const Button = ({ postId, ...props }: ButtonProps): JSX.Element => {
	return (
		<Link className={styles.link} href={`/posts/${postId}`}>
			<button className={styles.button}>
				Читать
				<span className={styles.arrow}>
					<Arrow />
				</span>
			</button>
		</Link>
	);
};
