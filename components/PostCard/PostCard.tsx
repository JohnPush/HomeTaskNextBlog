import { PostCardProps } from './PostCard.props';
import styles from './PostCard.module.css';
import { LikeCount } from '../LikeCount/LikeCount';
import Image from 'next/image';
import Arrow from './Arrow.svg';

export const PostCard = ({
	title,
	body,
	children
}: PostCardProps): JSX.Element => {
	return (
		<div className={styles.postCard}>
			<div className={styles.poster}>
				<Image src="/Poster.svg" alt="poster" width={330} height={200}></Image>
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
			<div className={styles.bottom}>
				<div className={styles.readingTime}>3 минуты</div>
				<button className={styles.button}>
					Читать
					<span className={styles.arrow}>
						<Arrow />
					</span>
				</button>
			</div>
		</div>
	);
};
