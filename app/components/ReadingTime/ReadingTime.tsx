import styles from './ReadingTime.module.css';
import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ReadingTimeProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	isReading: boolean;
}

export const ReadingTime = ({
	isReading,
	...props
}: ReadingTimeProps): JSX.Element => {
	return (
		<div tabIndex={isReading ? 0 : -1} className={styles.readingTime}>
			<span className={styles.visualyHidden}>Длительность чтения</span>3 минуты
		</div>
	);
};
