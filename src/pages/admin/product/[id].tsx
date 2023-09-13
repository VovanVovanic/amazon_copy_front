import { NextPageAuth } from "@/providers/authProviders/types";
import Products from "@/services/products/products.service";
import Layout from "@/ui/layout/layout";
import Meta from "@/ui/meta/meta";
import { GetStaticPaths, GetStaticProps } from "next";
import { ByFeature, ICategory } from "@/store/category/types";
import { IProduct } from "@/store/product/types";
import Category from "@/services/caterory/category.service";
import { ICategorySelect } from "@/components/screens/editProduct/types";
import Product from "@/components/screens/product/product";

const AdminProduct: NextPageAuth<{
  product: IProduct;
  categories: ICategorySelect[];
}> = ({ product, categories }) => {
  return (
    <Meta title="Product Admin">
      <Layout>
        <Product
          product={product}
          similar={[]}
          productId={product.id.toString()}
          isInfo={false}
          isSimilar={false}
        />
      </Layout>
    </Meta>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await Products.getAll();
  const paths = products.products.map((el) => {
    return { params: { id: String(el.id) } };
  });
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: product } = await Products.getProductByFeature(
    ByFeature.Id,
    params?.id as string
  );

  return {
    props: {
      product,
    },
  };
};
AdminProduct.isAdmin = true;
export default AdminProduct;
