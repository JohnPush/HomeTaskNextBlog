import styles from './LikeCount.module.css';
import LikeIconSmall from './LikeIconSmall.svg';
import cn from 'classnames';
import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface LikeCountProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	likeCount: number;
}

export const LikeCount = ({
	likeCount,
	className,
	...props
}: LikeCountProps): JSX.Element => {
	return (
		<div className={styles.likeCount} {...props}>
			{likeCount}
			<LikeIconSmall />
		</div>
	);
};
