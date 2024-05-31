import styles from './PostCard.module.css';
import { LikeCount } from '../LikeCount/LikeCount';
import { Button } from '../Button/Button';
import Image from 'next/image';
import { ReactNode } from 'react';

export interface PostCardProps {
	id: number;
	title: string;
	body: string;
	children?: ReactNode;
}

export const PostCard = ({ title, body, id }: PostCardProps): JSX.Element => {
	return (
		<div className={styles.postCard}>
			<div className={styles.poster}>
				<Image src="/Poster.svg" alt="poster" width={330} height={200} />
			</div>
			<div className={styles.description}>
				<div className={styles.top}>
					<div className={styles.postTopic}>Front-end</div>
					<div className={styles.dot}>·</div>
					<div className={styles.relativeCreationDate}>1 месяц назад</div>
					<LikeCount likeCount={4} />
				</div>
				<div className={styles.title}>{title}</div>
				<div className={styles.paragraph}>{body}</div>
			</div>
			<Button postId={id} />
		</div>
	);
};
