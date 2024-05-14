import styles from './LikeCount.module.css';
import { LikeCountProps } from './LikeCount.props';
import LikeIconSmall from './LikeIconSmall.svg';
import cn from 'classnames';

export const LikeCount = ({ likeCount, className, ...props }: LikeCountProps): JSX.Element => {
	return (
		<div className={styles.likeCount} {...props}>
			{likeCount}
			<LikeIconSmall />
		</div>
	);
};