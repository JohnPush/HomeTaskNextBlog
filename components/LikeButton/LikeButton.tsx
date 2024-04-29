import styles from './LikeButton.module.css';
import { LikeButtonProps } from './LikeButton.props';
import LikeIconBig from './LikeIconBig.svg';
import cn from 'classnames';

export const LikeButton = ({ className, ...props }: LikeButtonProps): JSX.Element => {


	return (
		<button
			className={cn(styles.likeButton, className, {
			})}
			{...props}>
			<LikeIconBig />
		</button>
	);
};