import Catalog from "@/components/catatalog/catalog"
import { useFilters } from "@/hooks/useFilters"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import Products from "@/services/products/products.service"
import { useQuery } from "@tanstack/react-query"
import { FC, useState } from "react"
import classes from './explorer.module.scss'
import cn from 'classnames'
import Button from "@/ui/buttons/button"
import Filters from "@/ui/filters/filters"
import { IExplorer } from "./types"
import Heading from "@/ui/heading/heading"


const Explorer: FC<IExplorer> = ({ initialProducts }) => {
 const { isFilterUpdated, queryParams, updateParams } = useFilters()
 const [filtersOpen, setFiltersOpen] = useState<boolean>(false)

 const { data, isFetching } = useQuery(['search products', queryParams],
  () => Products.getAll(queryParams), {
  initialData: initialProducts,
  enabled: isFilterUpdated
 })

 return (
  <>
   <Button
    variant="light"
   size="sm"
    onClick={() => setFiltersOpen(!filtersOpen)}
   >
    {filtersOpen ? "Close" : "Open"} filters
   </Button>
   <div
    className={cn(classes.explorer, {
     [classes.filterOpened]: filtersOpen
    })}
   >
    <Filters className={classes.explorersFilters} />
    <Catalog
     //className={classes.catalog}
     title={`Found ${data?.length} products`} paginationData={data} />
   </div>
  </>
 )
}
export default Explorer