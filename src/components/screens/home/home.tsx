import { IHome } from "./types";
import Products from "@/services/products/products.service";
import { useQuery } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";

import Catalog from "@/components/catatalog/catalog";

import Carousel from "@/ui/carousel/carousel";
import { carouselItems } from "@/ui/carousel/constants";
import Spinner from "@/ui/spinner/spinner";

import { useFilters } from "@/hooks/useFilters";
import Pagination from "@/ui/pagination/pagination";

const HomePage: FC<PropsWithChildren<IHome>> = ({
  initialData,
  className,
  children,
  ...rest
}) => {
  const { isFilterUpdated, queryParams, updateParams } = useFilters();
  const { page, perPage } = queryParams;
  const { data, isFetching, refetch } = useQuery(
    ["search products", queryParams],
    () => Products.getAll(queryParams),
    {
      initialData: initialData,
      enabled: isFilterUpdated,
    }
  );

  const handlePageClick = (page: number) => {
    updateParams("page", page);
  };
  const isPagination = data.length && data.length > perPage;
  return (
    <>
      <Carousel items={carouselItems} />
      {isFetching ? (
        <Spinner />
      ) : (
        <section {...rest}>
          <Catalog
            isFilter={true}
            products={data.products}
            title={"Popular Products"}
            refetch={refetch}
            className="md-custom:mt-48"
          />
          {isPagination && (
            <Pagination
              onChange={handlePageClick}
              paginationLength={Math.ceil(data.length / perPage)}
              page={page}
            />
          )}
        </section>
      )}
    </>
  );
};

export default HomePage;
