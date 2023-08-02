import HomePage from '../components/screens/home/home';
import Products from '@/services/products/products.service';
import { GetStaticProps } from 'next';
import { Inter } from 'next/font/google';

import Layout from '@/ui/layout/layout';
import Meta from '@/ui/meta/meta';

import { NextPageAuth } from '@/providers/authProviders/types';

import { TypePaginationProducts } from '@/store/product/types';
import CheckoutPage from '@/components/screens/checkout/checkout';

const inter = Inter({ subsets: ['latin'] });
const Checkout: NextPageAuth<{ data: TypePaginationProducts }> = ({ data }) => {
	return <Meta title='Checkout Page'>
    <Layout>
      <CheckoutPage products={data.products} />
    </Layout>
  </Meta>;
};

export const getStaticProps: GetStaticProps = async () => {
	const data = await Products.getAll({
		page: 1,
		perPage: 15,
		ratings: ''
	});
	return {
		props: { data }
	};
};

export default Checkout;
