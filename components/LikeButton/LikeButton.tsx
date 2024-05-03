'use client';
import styles from './LikeButton.module.css';
import { LikeButtonProps } from './LikeButton.props';
import LikeIconBig from './LikeIconBig.svg';
import cn from 'classnames';
import { useState } from 'react';

export const LikeButton = ({
	className,
	...props
}: LikeButtonProps): JSX.Element => {
	const [isActive, setIsActive] = useState(false);
	const handleClick = async () => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts/1'
			);
			if (response.ok) {
				setIsActive(true);
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
