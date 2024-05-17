import { API } from '@/app/api';
import { Post } from '@/interfaces/post.interface';

export async function getPosts(): Promise<Post[]> {
	const res = await fetch(API.data.posts);
	return res.json();
}
