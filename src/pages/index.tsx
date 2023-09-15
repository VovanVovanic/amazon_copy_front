import { Inter } from "next/font/google";
import { NextPageAuth } from "@/providers/authProviders/types";
import Meta from "@/ui/meta/meta";
import HomePage from "../components/screens/home/home";
import { GetStaticProps } from "next";
import { TypePaginationProducts } from "@/store/product/types";
import Products from "@/services/products/products.service";
import Layout from "@/ui/layout/layout";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const Home: NextPageAuth<{ data: TypePaginationProducts }> = ({ data }) => {
  const pathname = usePathname()
  return (
    <Meta title="Main Page">
      <Layout>
        <HomePage 
        initialData={data} />
      </Layout>
    </Meta>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await Products.getAll({
    page: 1,
    perPage: 8,
    ratings: "",
  });
  return {
    props: { data },
  };
};

export default Home;
