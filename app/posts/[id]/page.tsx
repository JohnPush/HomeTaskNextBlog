import { Post, getPostById, getPosts } from '@/api/posts';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { LikeButton } from '../components/LikeButton/LikeButton';

interface PostPageProps {
	params: {
		id: string;
	};
}

export default function PostPage({ params }: PostPageProps) {
	const postId = parseInt(params.id, 5);
	const post = use(getPostById(postId));

	if (!post) {
		notFound();
	}

	return (
		<div>
			<div>пост с id {post.id}</div>
			<LikeButton />
		</div>
	);
}

export async function generateStaticParams() {
	const posts: Post[] = await getPosts();

	const paths = posts.slice(0, 5).map((post) => ({
		id: post.id.toString()
	}));

	return paths;
}
