import { PostCardProps } from './PostCard.props';
import styles from './PostCard.module.css';
import { LikeCount } from '../LikeCount/LikeCount';
import Image from 'next/image';
import Arrow from './Arrow.svg';

export const PostCard = ({ children }: PostCardProps): JSX.Element => {
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
				<div className={styles.title}>Как работать с CSS Grid</div>
				<div className={styles.paragraph}>
					<a href="#">Грид-раскладка (CSS Grid Layout)</a> представляет собой
					двумерную систему сеток в CSS. Гриды подойдут и для верстки основных
					областей страницы..
				</div>
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
