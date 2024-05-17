import React from 'react';
import { LikeButton } from '../components';
import { Metadata } from 'next';
import { getPage } from '@/api/page';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Post'
};

export default async function Post({ params }: { params: { alias: string } }) {
	const page = await getPage(params.alias);
	if (!page) {
		notFound();
	}
	return (
		<div>
			<LikeButton />
			{/* <div>{post.length}</div> */}
			<div>Страница поста c alias {params.alias}</div>
		</div>
	);
}
