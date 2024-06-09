import { getPostById, getPosts } from '@/api/posts';
import { Post } from '../../../interfaces/post.interface';
import { getCommentsByPostId } from '@/api/comments';
import styles from './page.module.css';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { LikeButton } from '../components/LikeButton/LikeButton';
import { Comments } from '../components/Comments/Comments';
import { CommentForm } from '../components/CommentForm/CommentForm';
import { LikeCount } from '../../components/LikeCount/LikeCount';
import Image from 'next/image';

interface PostPageProps {
	params: {
		id: string;
	};
}

export default function PostPage({ params }: PostPageProps) {
	const postId = parseInt(params.id, 5);
	const post = use(getPostById(postId));
	const comments = use(getCommentsByPostId(postId));

	if (!post) {
		notFound();
	}

	const commentElements = comments.map((comment) => (
		<Comments
			key={comment.id}
			postId={comment.postId}
			id={comment.id}
			name={comment.name}
			email={comment.email}
			body={comment.body}
		/>
	));

	return (
		<div className={styles.main}>
			<h1
				className={styles.title}
				dangerouslySetInnerHTML={{ __html: post.title }}
			/>
			<div className={styles.top}>
				<div className={styles.postTopic}>Front-end</div>
				<div className={styles.dot}>·</div>
				<div className={styles.relativeCreationDate}>1 месяц назад</div>
				<div className={styles.dot}>·</div>
				<div className={styles.readingTime}>3 минуты</div>
				<div className={styles.dot}>·</div>
				<LikeCount likeCount={4} />
			</div>
			<div className={styles.poster}>
				<Image
					src="/poster.svg"
					alt="poster"
					width={687}
					height={440}
					priority={true}
				/>
			</div>
			<div
				className={styles.paragraph}
				dangerouslySetInnerHTML={{ __html: post.body.replace(/\n/g, '<br>') }}
			/>
			<div className={styles.like}>
				<span>Понравилось? Жми</span>
				<LikeButton postId={post.id} />
			</div>
			<h2 className={styles.h2}>Комментарии</h2>
			<div className={styles.comments}>{commentElements}</div>
			<CommentForm />
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
