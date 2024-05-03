import Image from 'next/image';
import { PostCard } from '../components';
import styles from './page.module.css';
import { LikeButton } from '../components';

export default function Home() {
	const postCards = new Array(4)
		.fill(<></>)
		.map((_, index) => <PostCard key={index} />);

	return (
		<main className={styles.main}>
			{postCards}
			<LikeButton />
		</main>
	);
}
