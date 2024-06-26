'use client';
import styles from './CommentForm.module.css';
import CloseIcon from '../../../../public/close.svg';
import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { API } from '@/app/api';
import {
	ICommentForm,
	ICommentSentResponse
} from '../../../../interfaces/commentForm.interface';

export interface CommentFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export const CommentForm = ({
	className,
	...props
}: CommentFormProps): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors
	} = useForm<ICommentForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();

	const onSubmit = async (formData: ICommentForm) => {
		try {
			const { data } = await axios.post<ICommentSentResponse>(API.comments, {
				...formData
			});
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setError('Что-то пошло не так');
			}
		} catch (e: unknown) {
			if (e instanceof Error && e?.message) {
				setError(e.message);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} role="form" {...props}>
			<div className={cn(styles.commentForm)}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Заполните имя' }
					})}
					placeholder="Имя"
					error={errors.name}
					aria-invalid={errors.name ? true : false}
				/>

				<Textarea
					placeholder="Комментарий"
					{...register('description', {
						required: { value: true, message: 'Напишите комментарий' }
					})}
					aria-label="Текст комментария"
					error={errors.description}
					aria-invalid={errors.description ? true : false}
				/>
				<Button onClick={() => clearErrors()} />
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
