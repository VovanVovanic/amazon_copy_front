import { FC, PropsWithChildren } from "react"
import { IHome } from "./types"
import Catalog from "@/components/catatalog/catalog"
import Carousel from "@/ui/carousel/carousel"
import { carouselItems } from "@/ui/carousel/constants"


const HomePage: FC<PropsWithChildren<IHome>> = ({products, className, children, ...rest}) => {
 return (
  <>
   <Carousel items={carouselItems} />
 
  <section {...rest}>
   <Catalog paginationData={products} title={'Popular Products'} />
   </section>
   </>
 )
}

export default HomePage