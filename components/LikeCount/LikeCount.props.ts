import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface LikeCountProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	likeCount: number;
}
