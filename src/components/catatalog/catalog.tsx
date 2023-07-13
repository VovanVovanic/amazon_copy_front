import { FC, PropsWithChildren, useMemo } from "react";
import { ICatalog } from "./types";
import classes from './catalog.module.scss'
import cn from 'classnames'
import CatalogItem from "./catalogItem/catalogItem";
import Heading from "@/ui/heading/heading";

const Catalog: FC<PropsWithChildren<ICatalog>> = ({ title = "product List", products, children, className, ...rest }) => {
 
 const list = useMemo(() => {
  if (products.length) {
   return products.map((el) => {
     return (
      <li key={el.id}>
         <CatalogItem product={el} />
         </li>
    )
   })
  } else { return null }
 }, [products])
 return (
  <>
   <Heading>{title}</Heading>
   <ul
    {...rest}
    className={cn(classes.catalog, className)}
   >

    {list}
   </ul >
  </>)
}

export default Catalog