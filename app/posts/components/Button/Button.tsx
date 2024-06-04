import styles from './Button.module.css';
import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {}

export const Button = ({ className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button className={cn(styles.button, className, {})} {...props}>
			Отправить
		</button>
	);
};
