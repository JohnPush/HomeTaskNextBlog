import { Comment } from '../../../../interfaces/comment.interface';
import styles from './Comments.module.css';

export const Comments = ({ name, email, body }: Comment): JSX.Element => {
	return (
		<div>
			<div className={styles.top}>
				<div
					tabIndex={0}
					className={styles.name}
					aria-label={`Автор комментария: ${name}`}
				>
					{name}
				</div>
				<div className={styles.dot}>·</div>
				<div
					tabIndex={0}
					className={styles.email}
					aria-label={`Электронная почта автора: ${name}`}
				>
					{email}
				</div>
			</div>
			<div
				tabIndex={0}
				className={styles.body}
				dangerouslySetInnerHTML={{ __html: body.replace(/\n/g, '<br>') }}
			/>
		</div>
	);
};
