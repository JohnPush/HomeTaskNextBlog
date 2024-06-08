import { API } from '@/app/api';
import { Post, Posts } from '../interfaces/post.interface';

export async function getPosts(): Promise<Posts> {
	const response = await fetch(API.posts);
	if (!response.ok) {
		throw new Error('Ошибка: посты не получены');
	}
	return response.json();
}

export async function getPostById(id: number): Promise<Post | null> {
	const response = await fetch(API.posts + `/${id}`);
	if (!response.ok) {
		return null;
	}
	return response.json();
}
