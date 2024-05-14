import React from 'react';
import { LikeButton } from './components';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Post'
};

export default function Post() {
	return (
		<div>
			<LikeButton />
		</div>
	);
}
