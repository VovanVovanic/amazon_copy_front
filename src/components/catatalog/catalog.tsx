import { FC, PropsWithChildren, useMemo, useState } from "react";
import { ICatalog } from "./types";
import classes from './catalog.module.scss'
import cn from 'classnames'
import CatalogItem from "./catalogItem/catalogItem";
import Heading from "@/ui/heading/heading";
import DropDown from "@/ui/dropdown/drop";
import { EnumProductsSort } from "@/store/product/types";
import { useQuery } from "@tanstack/react-query";
import Products from "@/services/products/products.service";
import Button from "@/ui/buttons/button";
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
import ReactPaginate from "react-paginate";

const Catalog: FC<PropsWithChildren<ICatalog>> = ({ title = "product List", paginationData, goods, children, className, ...rest }) => {

  const [sort, setSort] = useState<any>(EnumProductsSort.NEWEST)
  const [page, setPage] = useState<number>(1)

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

  const sortItems = useMemo(() => {
    return Object.values(EnumProductsSort).map((el) => ({
      value: el,
      label: el.charAt(0).toUpperCase() + el.slice(1).replace("-", " ")
    }))
  }, [])
  const pagesData = data ? data : goods


  const handlePageClick = (event: { selected: number }) => {
    console.log(event.selected, "sel")
    setPage(event.selected + 1)
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
        {paginationData && < DropDown onSelect={setSort} items={sortItems} />}
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
          pageCount={pagesData.length / 5}
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