import styles from './RelativeCreationDate.module.css';
import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface RelativeCreationDateProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	isReading: boolean;
}

export const RelativeCreationDate = ({
	isReading,
	...props
}: RelativeCreationDateProps): JSX.Element => {
	return (
		<div tabIndex={isReading ? 0 : -1} className={styles.relativeCreationDate}>
			<span className={styles.visualyHidden}>Пост опубликован</span>1 месяц
			назад
		</div>
	);
};
