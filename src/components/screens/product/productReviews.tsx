import classes from './product.module.scss';
import cn from 'classnames';
import { FC, useMemo, useState } from 'react';
import Heading from '@/ui/heading/heading';
import { IReview } from '@/store/reviews/types';
import { useAuth } from '@/hooks/useAuth';
import ReviewItem from './reviewItem/reviewItem';
import Modal from '@/ui/modal/modal';
import ReviewForm from './reviewForm';
import { Element } from 'react-scroll'

const ProductReviews: FC<{ reviews: IReview[]; productId: number }> = ({
	reviews,
	productId
}) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const { user } = useAuth();
	const list = useMemo(() => {
		return reviews.map(el => {
			return <ReviewItem key={el.id} review={el} />;
		});
	}, [reviews]);

	if (!reviews.length) return null;
	return (
		<Element name="reviews">
			<section id='reviews' className='mt-20'>
				<div className='mb-9'>
					<Heading className='mb-3'>Reviews:</Heading>
					{!!reviews.length && <ul className='grid grid-colls-4 gap-10'>{list}</ul>}
					{!!user && <>
						<button className={classes.reviewBtn} onClick={() => {
							setIsModalOpen(true)
						}}>Leave a review</button>
						<Modal
							isOpen={isModalOpen}
							onClose={() => setIsModalOpen(false)}
						>
							<ReviewForm
								productId={productId}
							/>
						</Modal>
					</>
					}

				</div>
			</section>
		</Element>
	);
};
export default ProductReviews;
