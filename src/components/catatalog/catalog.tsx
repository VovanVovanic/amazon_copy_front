import { FC, PropsWithChildren, useMemo } from "react";
import { ICatalog } from "./types";
import classes from './catalog.module.scss'
import cn from 'classnames'
import CatalogItem from "./catalogItem/catalogItem";
import Heading from "@/ui/heading/heading";
import DropDown from "@/ui/dropdown/drop";
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
import ReactPaginate from "react-paginate";
import { dropItems } from "./constants";
import { useFilters } from "@/hooks/useFilters";
import { ISortType } from "@/ui/dropdown/types";
import { EnumProductsSort } from "@/store/product/types";

const Catalog: FC<PropsWithChildren<ICatalog>> = ({ title = "product List", products, paginationLength=0, children, className, ...rest }) => {

  const{updateParams,queryParams,}=useFilters()

  const { sort } = queryParams
  
  const handlePageClick = (event: { selected: number }) => {
    updateParams("page", String(event.selected + 1))
  }

  const setSort = (data:ISortType) => {
    updateParams("sort",data.key.toString())
  }
  const list = useMemo(() => {

    return products.map((el) => {
      return (
        <li key={el.id}>
          <CatalogItem product={el} />
        </li>
      )
    })
  }, [products])


  return (
    <div className={cn(classes.wrapper)}>
      <div className={classes.header}>
        <Heading>{title}</Heading>
        {products &&
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
      {
        paginationLength &&
        paginationLength > queryParams.perPage &&
        <div className={classes.pagination}>
        <ReactPaginate
          className={classes.paginate}
          pageCount={Math.ceil(paginationLength / queryParams.perPage)}
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