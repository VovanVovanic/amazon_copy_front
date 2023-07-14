import { FC, PropsWithChildren } from "react"
import { IHome } from "./types"
import Catalog from "@/components/catatalog/catalog"


const HomePage: FC<PropsWithChildren<IHome>> = ({products, className, children, ...rest}) => {
 return (
  <section {...rest}>
   <Catalog paginationData={products} title={'Popular Products'} />
  </section>
 )
}

export default HomePage