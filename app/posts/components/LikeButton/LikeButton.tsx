'use client';
import styles from './LikeButton.module.css';
import LikeIconBig from '../../../../public/likeIconBig.svg';
import cn from 'classnames';
import { useState } from 'react';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { API } from '@/app/api';

export interface LikeButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	postId: number;
}

export const LikeButton = ({
	className,
	postId,
	...props
}: LikeButtonProps): JSX.Element => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = async () => {
		try {
			const response = await fetch(API.comment + `${postId}`);

			if (response.ok) {
				setIsActive((prevState) => !prevState);
			} else {
				console.log('Ошибка при выполнении запроса');
			}
		} catch (error) {
			console.error('Ошибка:', error);
		}
	};

	return (
		<button
			className={cn(styles.likeButton, className, {
				[styles.likeButtonActive]: isActive
			})}
			onClick={handleClick}
			{...props}
		>
			<LikeIconBig />
		</button>
	);
};
