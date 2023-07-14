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

const Catalog: FC<PropsWithChildren<ICatalog>> = ({ title = "product List",paginationData, children, className, ...rest }) => {

  const [sort, setSort] = useState<any>(EnumProductsSort.NEWEST)
  const [page, setPage] = useState<number>(1)
  
  const { data, isLoading } = useQuery(['products', sort,page],
  
    () => Products.getAll({
      sort,
      page,
      perPage: 4
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

  const pagination = useMemo(() => {
    return Array.from({ length: data.length / 4 }).map((_, i) => {
      const pageNumber = i + 1
      return(
        <Button
          key={pageNumber}
          variant={page === pageNumber ? "dark" : "light"}
          size={"sm"}
          className='mr-4'
          disabled={page === pageNumber}
          onClick={()=>setPage(pageNumber)}
        >
          {pageNumber}
        </Button>
      )
    })
  },[data.length])

  const list = useMemo(() => {
    if (data.products) {
      return data.products.map((el) => {
        return (
          <li key={el.id}>
            <CatalogItem product={el} />
          </li>
        )
      })
    } else { return null }
  }, [data.products])
  return (
    <div className={cn(classes.wrapper)}>
      <div className={classes.header}>
        <Heading>{title}</Heading>
        
          < DropDown onSelect={setSort} items={sortItems} />
      </div>
      <ul
        {...rest}
        className={cn(classes.catalog, className)}
      >
        {list}
      </ul >
      <div className={classes.pagination}>
          {pagination}
      </div>
    </div>)
}

export default Catalog