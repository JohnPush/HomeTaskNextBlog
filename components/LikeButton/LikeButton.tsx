import styles from './LikeButton.module.css';
import { LikeButtonProps } from './LikeButton.props';
import LikeIcon from './LikeIcon.svg';
import cn from 'classnames';

export const LikeButton = ({ className, ...props }: LikeButtonProps): JSX.Element => {
	return (
		<button className={styles.likeButton} {...props}>
			<LikeIcon />
		</button>
	);
};