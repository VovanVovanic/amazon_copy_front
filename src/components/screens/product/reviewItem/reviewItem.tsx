import classes from './reviewItem.module.scss';
import { FC } from 'react';
import Image from 'next/image'
import { IReview } from '@/store/reviews/types';
import { Rating } from 'react-simple-star-rating';

const ReviewItem: FC<{ review: IReview }> = ({ review }) => {
	return <li 
    className={classes.item}
    >
     <div className={classes.content}>
        <Image 
        alt={review.user.name}
        src={review.user.avatarPath}
        width={40}
        height={40}
        className='mr-3 block rounded-full'
        />
        <span>{review.user.name}</span>
        </div>  
        <Rating 
        readonly
        initialValue={+review.rating}
        SVGstyle={{
            display:'inline-block'
        }}
        size={20}
        allowFraction
        transition
        /> 
        <div className='text-sm mt-4 leading-relaxed'>{review.text}</div>
    </li>;
};

export default ReviewItem;
