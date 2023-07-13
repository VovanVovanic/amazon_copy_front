import { Inter } from 'next/font/google'
import { NextPageAuth } from '@/providers/authProviders/types'
import Meta from '@/ui/meta/meta'
import HomePage from '../components/screens/home/home'
import { GetStaticProps } from 'next'
import { IProduct } from '@/store/product/types'
import Products from '@/services/products/products.service'
import Layout from '@/ui/layout/layout'

const inter = Inter({ subsets: ['latin'] })
const Home: NextPageAuth<{ products: IProduct[] }> = ({products}) => {
  return (
    <Meta title = "Main Page">
      <Layout >
        <HomePage products={products} />
      </Layout>
      </Meta>

  )
}


export const getStaticProps: GetStaticProps = async () => {
  const { data:products } = await Products.getAll({
    page: '1',
    perPage: '5'
  })
  return{
    props:products
  }
}

export default Home
