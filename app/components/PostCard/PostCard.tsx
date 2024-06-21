'use client';
import styles from './PostCard.module.css';
import { LikeCount } from '../LikeCount/LikeCount';
import { Button } from '../Button/Button';
import { PostTopic } from '../PostTopic/PostTopic';
import { RelativeCreationDate } from '../RelativeCreationDate/RelativeCreationDate';
import { ReadingTime } from '../ReadingTime/ReadingTime';

import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

export interface PostCardProps {
	id: number;
	title: string;
	body: string;
	children?: ReactNode;
}

export const PostCard = ({ title, body, id }: PostCardProps): JSX.Element => {
	const [isReading, setIsReading] = useState(false);

	const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			setIsReading(true);
		}
	};

	return (
		<motion.div
			tabIndex={0}
			initial={{ opacity: 0.5, x: 100, y: 100 }}
			animate={{ opacity: 1, x: 0, y: 0 }}
			transition={{ duration: 1 }}
			className={styles.postCard}
			onKeyDown={handleKeyPress}
			aria-label={`Пост: ${title}`}
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
					<PostTopic isReading={isReading} />
					<div className={styles.dot}>·</div>
					<RelativeCreationDate isReading={isReading} />
					<div className={styles.likeCount}>
						<LikeCount isReading={isReading} />
					</div>
				</div>
				<div className={styles.title}>{title}</div>
				<div className={styles.paragraph}>{body}</div>
			</div>
			<div className={styles.bottom}>
				<ReadingTime isReading={isReading} />
				<Button postId={id} title={title} isReading={isReading} />
			</div>
		</motion.div>
	);
};
