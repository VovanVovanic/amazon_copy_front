import Catalog from "@/components/catatalog/catalog"
import { useFilters } from "@/hooks/useFilters"
import Products from "@/services/products/products.service"
import { useQuery } from "@tanstack/react-query"
import { FC, useEffect, useState } from "react";
import classes from './explorer.module.scss'
import cn from 'classnames'
import Button from "@/ui/buttons/button"
import { IExplorer } from "./types"
import Filters from "@/components/filters/filters";
import Spinner from "@/ui/spinner/spinner";
import Pagination from "@/ui/pagination/pagination";


const Explorer: FC<IExplorer> = ({ initialProducts }) => {
  const { isFilterUpdated, queryParams, updateParams, resetQueryParam } = useFilters()
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false)

  const { data, isFetching } = useQuery(['search products', queryParams],
    () => Products.getAll(queryParams), {
    initialData: initialProducts,
    enabled: isFilterUpdated
  })

  const handlePageClick = (page: number) => {
    updateParams("page", page)
  }
  const isPagination = data.length && data.length > queryParams.perPage
  return (
    <>
      <Button
        variant="light"
        size="sm"
        className="md-custom:mt-10"
        onClick={() => setFiltersOpen(!filtersOpen)}
      >
        {filtersOpen ? "Close" : "Open"} filters
      </Button>
      <div
        className={cn(classes.explorer, {
          [classes.filterOpened]: filtersOpen
        })}
      >
        <Filters className={cn(classes.explorersFilters, {
          [classes.closed]: !filtersOpen
        })} />
        {isFetching ? (
          <Spinner />
        ) : (
          <div>
              <Catalog
                isFilter={true}
                title={`Found ${data.length} products`}
                products={data.products}
                paginationLength={data.length}
                className={classes.explorerCatalog}
              />
            {isPagination && <Pagination
              page={queryParams.page}
              onChange={handlePageClick}
              paginationLength={Math.ceil(data.length / queryParams.perPage)}
            />}

          </div>
        )}

      </div>
    </>
  )
}
export default Explorer