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
import { PostTopic } from '../../components/PostTopic/PostTopic';
import { RelativeCreationDate } from '../../components/RelativeCreationDate/RelativeCreationDate';
import { ReadingTime } from '../../components/ReadingTime/ReadingTime';

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
		<main className={styles.main} role="main">
			<h1
				tabIndex={0}
				className={styles.title}
				dangerouslySetInnerHTML={{ __html: post.title }}
			/>
			<div className={styles.top}>
				<PostTopic isReading={true} />
				<div className={styles.dot}>·</div>
				<RelativeCreationDate isReading={true} />
				<div className={styles.dot}>·</div>
				<ReadingTime isReading={true} />
				<div className={styles.dot}>·</div>
				<LikeCount isReading={true} />
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
				tabIndex={0}
				className={styles.paragraph}
				dangerouslySetInnerHTML={{ __html: post.body.replace(/\n/g, '<br>') }}
			/>
			<div className={styles.like}>
				<span>Понравилось? Жми</span>
				<LikeButton postId={post.id} />
			</div>
			<h2 tabIndex={0} className={styles.h2}>
				Комментарии
			</h2>
			<div className={styles.comments}>{commentElements}</div>
			<CommentForm />
		</main>
	);
}
