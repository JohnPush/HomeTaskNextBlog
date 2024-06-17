import styles from './PostTopic.module.css';
import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface PostTopicProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	isReading: boolean;
}

export const PostTopic = ({
	isReading,
	...props
}: PostTopicProps): JSX.Element => {
	return (
		<div tabIndex={isReading ? 0 : -1} className={styles.postTopic}>
			<span className={styles.visualyHidden}>Тема поста</span>
			Front-end
		</div>
	);
};
