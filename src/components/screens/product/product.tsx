import classes from './product.module.scss';
import { IProductPage } from './types';
import Products from '@/services/products/products.service';
import { useQuery } from '@tanstack/react-query';
import cn from 'classnames';
import { FC } from 'react';

import Heading from '@/ui/heading/heading';

import { ByFeature } from '@/store/category/types';
import RatingProduct from './ratingProduct';
import ProductGallery from './productGallery';
import ProductInfo from './productInfo';
import SimilarProducts from './similarProducts';

const Product: FC<IProductPage> = ({ product, similar, slug }) => {
	console.log(similar, "sim sim")
	const { data, isFetching } = useQuery(
		['get product'],
		() => Products.getProductByFeature(ByFeature.Slug, slug || ''),
		{
			initialData: product,
			enabled: !!slug
		}
	);
	return (
		<>
			<Heading className='mb-1'>{product.name}</Heading>
            <RatingProduct product={product}/>
			<div className={classes.blck}>
			<ProductGallery images={product.images} />
			<div className={classes.description}>
				<div>Description:</div>
				{product.description}</div>
			<ProductInfo product={product}/>
			</div>
			<SimilarProducts similar={similar}/>

		</>
	);
};
export default Product;
