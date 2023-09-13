import EditCategoryPage from "@/components/screens/editCategory/editCategory";
import { ICategorySelect } from "@/components/screens/editProduct/types";
import { NextPageAuth } from "@/providers/authProviders/types";
import Category from "@/services/caterory/category.service";
import { ByFeature, ICategory } from "@/store/category/types";
import Layout from "@/ui/layout/layout";
import Meta from "@/ui/meta/meta";
import { GetStaticPaths, GetStaticProps } from "next";

const EditCategory: NextPageAuth<{
  category: ICategory;
  categories: ICategorySelect[];
}> = ({ category }) => {
  return (
    <Meta title="Categories Admin Edit Page">
      <Layout>
        <EditCategoryPage category={category} />
      </Layout>
    </Meta>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await Category.getAllCategories();
  const paths = categories.data.map((el) => {
    return { params: { slug:el.slug} };
  });
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: category } = await Category.getCategoryByFeature(
    ByFeature.Slug,
    params?.slug as string,
    "newest"
  );
    
  return {
    props: {
      category,
    },
  };
};
EditCategory.isAdmin = true;
export default EditCategory;
