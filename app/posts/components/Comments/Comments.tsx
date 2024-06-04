import { Comment } from '@/api/comments';
import styles from './Comments.module.css';

export const Comments = ({ name, email, body }: Comment): JSX.Element => {
	return (
		<div>
			<div className={styles.top}>
				<div className={styles.name}>{name}</div>
				<div className={styles.dot}>·</div>
				<div className={styles.email}>{email}</div>
			</div>
			<div
				className={styles.body}
				dangerouslySetInnerHTML={{ __html: body.replace(/\n/g, '<br>') }}
			/>
		</div>
	);
};
