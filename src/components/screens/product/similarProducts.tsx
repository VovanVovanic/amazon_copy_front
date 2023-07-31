import classes from './product.module.scss';
import cn from 'classnames';
import { FC, useMemo } from 'react';

import CatalogItem from '@/components/catatalog/catalogItem/catalogItem';

import Heading from '@/ui/heading/heading';

import { IProduct } from '@/store/product/types';

const SimilarProducts: FC<{ similar: IProduct[] }> = ({ similar }) => {
	const list = useMemo(() => {
		return similar.map(el => {
			return <CatalogItem product={el} key={el.id} />;
		});
	}, [similar]);
	return (
		<div className='mt-20'>
			<Heading className='mb-7'>Similar Products</Heading>
			<ul className='grid grid-cols-4 gap-10'>
                {list.length  ? list: <div>There are no products</div>}
                </ul>
		</div>
	);
};
export default SimilarProducts;
