import { useFilters } from "@/hooks/useFilters"
import Ranges from "@/ui/range/ranges"
import { FC } from "react"

const PriceGroup: FC = () => {
 const { queryParams, updateParams } = useFilters()
 return (
   <Ranges
    min={0}
    max={2000}
    fromInit={queryParams.minPrice}
    toInit={queryParams.maxPrice}
    onChangeFrom={(data) => updateParams("minPrice",data)}
    onChangeTo={(data) => updateParams("maxPrice",data)}
   />
 )
} 

export default PriceGroup