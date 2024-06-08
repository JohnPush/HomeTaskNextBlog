'use client';
import styles from './CommentForm.module.css';
import CloseIcon from './close.svg';
import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

export interface ICommentForm {
	name: string;
	description: string;
}

export interface ICommentSentResponse {
	message: string;
}

export interface CommentFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CommentForm = ({
	className,
	...props
}: CommentFormProps): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ICommentForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();

	const onSubmit = async (formData: ICommentForm) => {
		try {
			const { data } = await axios.post<ICommentSentResponse>(
				`https://jsonplaceholder.typicode.com/comments`,
				{ ...formData }
			);
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setError('Что-то пошло не так');
			}
		} catch (e) {
			setError(e.message);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.commentForm, className)} {...props}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Заполните имя' }
					})}
					placeholder="Имя"
					error={errors.name}
				/>

				<Textarea
					placeholder="Комментарий"
					{...register('description', {
						required: { value: true, message: 'Напишите комментарий' }
					})}
					error={errors.description}
				/>
				<Button />
			</div>
			{error && (
				<div className={cn(styles.error, styles.panel)}>
					Что-то пошло не так, попробуйте обновить страницу
					<CloseIcon
						className={styles.close}
						onClick={() => setError(undefined)}
					/>
				</div>
			)}
		</form>
	);
};
