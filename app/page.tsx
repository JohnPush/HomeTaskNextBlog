import Image from 'next/image';
import { PostCard } from '../components';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
		</main>
	);
}
