import styles from './LikeCount.module.css';
import LikeIconSmall from '../../../public/likeIconSmall.svg';
import cn from 'classnames';
import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface LikeCountProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	isReading: boolean;
}

export const LikeCount = ({
	isReading,
	...props
}: LikeCountProps): JSX.Element => {
	return (
		<div tabIndex={isReading ? 0 : -1} className={styles.likeCount}>
			<span className={styles.visualyHidden}>Количество лайков</span>4
			<LikeIconSmall />
		</div>
	);
};
