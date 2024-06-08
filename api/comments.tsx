import { API } from '@/app/api';
import { Comments } from '../interfaces/comment.interface';

export async function getCommentsByPostId(postId: number): Promise<Comments> {
	const response = await fetch(API.comment + `${postId}`);
	if (!response.ok) {
		throw new Error('Ошибка: комментарии не получены');
	}
	return response.json();
}
