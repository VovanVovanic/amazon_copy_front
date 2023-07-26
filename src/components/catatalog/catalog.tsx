import { FC, PropsWithChildren, useMemo, useState } from "react";
import { ICatalog } from "./types";
import classes from './catalog.module.scss'
import cn from 'classnames'
import CatalogItem from "./catalogItem/catalogItem";
import Heading from "@/ui/heading/heading";
import DropDown from "@/ui/dropdown/drop";
import { useQuery } from "@tanstack/react-query";
import Products from "@/services/products/products.service";
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
import ReactPaginate from "react-paginate";
import { dropItems } from "./constants";
import { useFilters } from "@/hooks/useFilters";
import { ISortType } from "@/ui/dropdown/types";
import { EnumProductsSort } from "@/store/product/types";

const Catalog: FC<PropsWithChildren<ICatalog>> = ({ title = "product List", paginationData, goods, children, className, ...rest }) => {

  const [page, setPage] = useState<number>(1)
  const{updateParams,queryParams,}=useFilters()

  const { sort } = queryParams
  
  const { data, isLoading } = useQuery(['products', sort, page],

    () => Products.getAll({
      sort,
      page,
      perPage: 5,
      ratings: ""
    }), {
    initialData: paginationData
  }

  )

  const pagesData = data ? data : goods

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1)
  }

  const setSort = (data:ISortType) => {
    updateParams("sort",data.key.toString())
  }
  const list = useMemo(() => {
    const toRender = paginationData ? data?.products : goods

    return toRender?.map((el) => {
      return (
        <li key={el.id}>
          <CatalogItem product={el} />
        </li>
      )
    })
  }, [data?.products, goods, paginationData])


  return (
    <div className={cn(classes.wrapper)}>
      <div className={classes.header}>
        <Heading>{title}</Heading>
        {paginationData &&
          < DropDown<EnumProductsSort>
            value={dropItems.find((el)=>el.key === sort)}
            onSelect={setSort} items={dropItems}
            title={`Sorted By: `}
          />}
      </div>
      <ul
        {...rest}
        className={cn(classes.catalog, className)}
      >
        {list}
      </ul >
      {pagesData?.length && <div className={classes.pagination}>
        <ReactPaginate
          className={classes.paginate}
          pageCount={Math.ceil(pagesData.length / 5)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          breakLabel="..."
          pageClassName={classes.page}
          nextClassName={classes.arrow}
          previousClassName={classes.arrow}
          activeClassName={classes.active}
          onPageChange={handlePageClick}
          previousLabel={
            <HiArrowSmLeft />}
          nextLabel={
            <HiArrowSmRight />
          }
        />
      </div>}
    </div>)
}

export default Catalog