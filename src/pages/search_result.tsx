import Explorer from "@/components/screens/explorer/explorer";
import { NextPageAuth } from "@/providers/authProviders/types";
import Products from "@/services/products/products.service";
import {
  EnumProductsSort,
  TypePaginationProducts,
} from "@/store/product/types";
import Layout from "@/ui/layout/layout";
import Meta from "@/ui/meta/meta";
import { GetStaticProps } from "next";

const SearchResultPage: NextPageAuth<{ data: TypePaginationProducts }> = ({
  data,
}) => {
  
  return (
    <Meta title="Search Result">
      <Layout>
        <Explorer initialProducts={data} />
      </Layout>
    </Meta>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const data = await Products.getAll({
    sort: EnumProductsSort.NEWEST,
    searchTerm: "",
    page: 1,
    perPage: 8,
    ratings: "",
  });
  return {
    props: { data },
  };
};

export default SearchResultPage;
