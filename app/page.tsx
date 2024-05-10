'use client';
import { useEffect, useState } from 'react';
import { PostCard } from '../components';
import styles from './page.module.css';
import { LikeButton } from '../components';

interface Post {
	id: number;
	title: string;
	body: string;
}

async function getPosts(): Promise<Post[]> {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	if (!res.ok) {
		throw new Error('Failed to fetch posts');
	}
	return res.json();
}

export default function Home() {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		getPosts()
			.then((data) => setPosts(data))
			.catch((error) => console.error('Error fetching posts:', error));
	}, []);

	const postCards = posts
		.slice(0, 3)
		.map((post) => (
			<PostCard key={post.id} title={post.title} body={post.body} />
		));

	return (
		<main className={styles.main}>
			{postCards}
			<LikeButton />
		</main>
	);
}
