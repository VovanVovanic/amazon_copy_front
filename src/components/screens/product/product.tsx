import classes from './product.module.scss';
import ProductGallery from './productGallery';
import ProductInfo from './productInfo';
import ProductReviews from './productReviews';
import RatingProduct from './ratingProduct';
import SimilarProducts from './similarProducts';
import { IProductPage } from './types';
import Products from '@/services/products/products.service';
import { useQuery } from '@tanstack/react-query';
import { FC, useEffect } from 'react';

import Heading from '@/ui/heading/heading';
import Spinner from '@/ui/spinner/spinner';

import { ByFeature } from '@/store/category/types';

const Product: FC<IProductPage> = ({ product, similar, isInfo, isSimilar, productId }) => {

	const { data, isFetching, refetch } = useQuery(
		['get product'],
		() => Products.getProductByFeature(ByFeature.Id, productId || ''),
		{
			initialData: product,
			enabled: !!productId
		}
	);

	useEffect(() => {
		refetch()

	},[productId, refetch])

	return (
		<>
			{(isFetching || !data.data) ? (
				<Spinner />
			) : (
				<>
					<Heading className='mb-1'>{data.data?.name}</Heading>
					<RatingProduct product={data.data} />
					<div className={classes.blck}>
						<ProductGallery images={data.data?.images} />
						<div className={classes.description}>
							<div>Description:</div>
							{data.data?.description}
						</div>
						{isInfo && <ProductInfo product={data?.data} />}
					</div>
					{isSimilar && <SimilarProducts similar={similar} /> }
						<ProductReviews
							reviews={data.data?.reviews}
							productId={product.id}
							isAdmin={isInfo}
						/>
				</>
			)}
		</>
	);
};
export default Product;
