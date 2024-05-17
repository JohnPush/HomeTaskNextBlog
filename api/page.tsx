import { API } from '@/app/api';
import { Post } from '@/interfaces/post.interface';

export async function getPage(alias: string): Promise<Post | null> {
	const res = await fetch(API.data.postId + alias);
	if (!res.ok) {
		return null;
	}
	return res.json();
}
