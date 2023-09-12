import Products from '@/services/products/products.service';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Product from '@/components/screens/product/product';

import Layout from '@/ui/layout/layout';
import Meta from '@/ui/meta/meta';

import { ByFeature } from '@/store/category/types';
import { IProduct } from '@/store/product/types';

const ProductPage: NextPage<{ product: IProduct; similar: IProduct[] }> = ({
	product,
	similar
}) => {
	return (
		<Meta
			title={product.name}
			description={product.description}
			image={product.images[0] || ''}
		>
			<Layout>
				<Product 
				product={product}
				 similar={similar}
					 productId={product.id.toString()}
					isInfo={true}
					isSimilar={true}
						 />
			</Layout>
		</Meta>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await Products.getAll();
	const paths = products.products.map(el => {
		return { params: { slug: el.slug } };
	});
	return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: product } = await Products.getProductByFeature(
		ByFeature.Slug,
		params?.slug as string
	);
	const { data: similar } = await Products.getSimilarProducts(
		product.id.toString()
	);
	return {
		props: {
			product,
			similar
		}
	};
};

export default ProductPage;
