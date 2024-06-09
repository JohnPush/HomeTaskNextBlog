'use client';
import styles from './PostCard.module.css';
import { LikeCount } from '../LikeCount/LikeCount';
import { Button } from '../Button/Button';
import Image from 'next/image';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface PostCardProps {
	id: number;
	title: string;
	body: string;
	children?: ReactNode;
}

export const PostCard = ({ title, body, id }: PostCardProps): JSX.Element => {
	return (
		<motion.div
			initial={{ opacity: 0.5, x: 100, y: 100 }}
			animate={{ opacity: 1, x: 0, y: 0 }}
			transition={{ duration: 1 }}
			className={styles.postCard}
		>
			<div className={styles.poster}>
				<Image
					src="/poster.svg"
					alt="poster"
					width={330}
					height={200}
					priority={true}
				/>
			</div>
			<div className={styles.description}>
				<div className={styles.top}>
					<div className={styles.postTopic}>Front-end</div>
					<div className={styles.dot}>·</div>
					<div className={styles.relativeCreationDate}>1 месяц назад</div>
					<div className={styles.likeCount}>
						<LikeCount likeCount={4} />
					</div>
				</div>
				<div className={styles.title}>{title}</div>
				<div className={styles.paragraph}>{body}</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.readingTime}>3 минуты</div>
				<Button postId={id} />
			</div>
		</motion.div>
	);
};
