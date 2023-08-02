import { IHome } from './types';
import Products from '@/services/products/products.service';
import { useQuery } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';

import Catalog from '@/components/catatalog/catalog';

import Carousel from '@/ui/carousel/carousel';
import { carouselItems } from '@/ui/carousel/constants';
import Spinner from '@/ui/spinner/spinner';

import { useFilters } from '@/hooks/useFilters';

const HomePage: FC<PropsWithChildren<IHome>> = ({
	initialData,
	className,
	children,
	...rest
}) => {
	const { isFilterUpdated, queryParams } = useFilters();

	const { data, isFetching } = useQuery(
		['search products', queryParams],
		() => Products.getAll(queryParams),
		{
			initialData: initialData,
			enabled: isFilterUpdated
		}
	);
	return (
		<>
			<Carousel items={carouselItems} />
			{isFetching ? (
				<Spinner />
			) : (
				<section {...rest}>
					<Catalog
						products={data.products}
						paginationLength={data.length}
						title={'Popular Products'}
					/>
				</section>
			)}
		</>
	);
};

export default HomePage;
