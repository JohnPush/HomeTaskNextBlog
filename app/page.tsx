import { PostCard } from './components';
import styles from './page.module.css';
import { Metadata } from 'next';
import { getPosts } from '@/api/posts';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Home'
	};
}

export default async function Home() {
	const post = await getPosts();

	const postCards = post
		.slice(0, 5)
		.map((post) => (
			<PostCard key={post.id} title={post.title} body={post.body} />
		));

	return <main className={styles.main}>{postCards}</main>;
}
