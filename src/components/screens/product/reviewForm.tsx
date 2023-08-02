import classes from './product.module.scss';
import { Reviews } from '@/services/reviews/reviews.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import cn from 'classnames';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';

import Button from '@/ui/buttons/button';
import Heading from '@/ui/heading/heading';

import { IReview, IReviewField } from '@/store/reviews/types';

const ProductReviewsForm: FC<{ productId: number }> = ({ productId }) => {
	const {
		register: FormRegister,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm<IReviewField>({ mode: 'onChange' });

	const queryClient = useQueryClient();

	const { mutate, isSuccess, isLoading } = useMutation(
		['leave review'],
		(data: IReviewField) => Reviews.create(data, productId.toString()),
		{
			onSuccess(data) {
				queryClient.refetchQueries(['get product', productId]);
			}
		}
	);

	const onSubmit: SubmitHandler<IReviewField> = data => {
		mutate(data);
		reset();
	};
	if (isSuccess) return <div>Review successfully published</div>;
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Heading className='text-center mb-4'>Leave a review</Heading>
				{isLoading ? (
					<div>sasfsdfsdf</div>
				) : (
					<div>
						<Controller
							control={control}
							name='rating'
							render={({ field: { onChange, value } }) => (
								<Rating
									onClick={onChange}
									initialValue={value}
									SVGstyle={{
										display: 'inline-block'
									}}
									size={20}
									transition
								/>
							)}
							rules={{
								required: 'Rating is required'
							}}
						/>

						<textarea
							{...FormRegister('text', {
								required: 'Text is required'
							})}
							placeholder='Your review here...'
							className={classes.textArea}
						/>
						<div className='text-center mb-2 mt-8'>
							<Button type='submit' variant='dark'>
								Leave
							</Button>
						</div>
						{Object.entries(errors) && (
							<ul className={classes.errors}>
								{Object.entries(errors).map(([_, error]) => (
									<li key={error.message}>{error.message}</li>
								))}
							</ul>
						)}
					</div>
				)}

			</form>
		</div>
	);
};

export default ProductReviewsForm;
