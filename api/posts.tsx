export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export type Posts = Post[];

export async function getPosts(): Promise<Posts> {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	if (!response.ok) {
		throw new Error('Ошибка: посты не получены');
	}
	return response.json();
}

export async function getPostById(id: number): Promise<Post | null> {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	if (!response.ok) {
		return null;
	}
	return response.json();
}
