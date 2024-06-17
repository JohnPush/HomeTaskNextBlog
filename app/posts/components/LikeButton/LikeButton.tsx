'use client';
import styles from './LikeButton.module.css';
import LikeIconBig from '../../../../public/likeIconBig.svg';
import cn from 'classnames';
import { useState } from 'react';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
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

	const handleClick = () => {
		setIsActive((prevState) => !prevState);
	};

	return (
		<button
			className={cn(styles.likeButton, className, {
				[styles.likeButtonActive]: isActive
			})}
			onClick={handleClick}
			aria-label={
				isActive
					? 'Лайк поставлен. Нажмите чтобы снять лайк'
					: 'Лайк не поставлен. Нажмите чтобы поставить лайк'
			}
			{...props}
		>
			<LikeIconBig />
		</button>
	);
};
