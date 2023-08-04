import classes from './product.module.scss';
import ProductGallery from './productGallery';
import ProductInfo from './productInfo';
import ProductReviews from './productReviews';
import RatingProduct from './ratingProduct';
import SimilarProducts from './similarProducts';
import { IProductPage } from './types';
import Products from '@/services/products/products.service';
import { useQuery } from '@tanstack/react-query';
import cn from 'classnames';
import { FC } from 'react';

import Heading from '@/ui/heading/heading';
import Spinner from '@/ui/spinner/spinner';

import { ByFeature } from '@/store/category/types';

const Product: FC<IProductPage> = ({ product, similar, productId }) => {
	const { data, isFetching } = useQuery(
		['get product'],
		() => Products.getProductByFeature(ByFeature.Id, productId || ''),
		{
			initialData: product,
			enabled: true
		}
	);
	return (
		<>
			{isFetching ? (
				<Spinner />
			) : (
				<>
					<Heading className='mb-1'>{data.data.name}</Heading>
					<RatingProduct product={data.data} />
					<div className={classes.blck}>
						<ProductGallery images={data.data.images} />
						<div className={classes.description}>
							<div>Description:</div>
							{data.data.description}
						</div>
						<ProductInfo product={data.data} />
					</div>
					<SimilarProducts similar={similar} />
					<ProductReviews reviews={data.data.reviews} productId={product.id} />
				</>
			)}
		</>
	);
};
export default Product;
