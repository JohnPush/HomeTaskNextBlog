// comments.tsx
export interface Comment {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

export type Comments = Comment[];

export async function getCommentsByPostId(postId: number): Promise<Comments> {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
	);
	if (!response.ok) {
		throw new Error('Ошибка: комментарии не получены');
	}
	return response.json();
}
