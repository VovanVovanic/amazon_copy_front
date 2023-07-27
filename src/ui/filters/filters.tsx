import { FC } from "react"
import { IFilters } from "./types"
import classes from './filters.module.scss'
import cn from 'classnames'
import Ranges from "../range/ranges"
import PriceGroup from "./priceGroup/priceGroup"

const Filters: FC<IFilters> = ({ className, ...rest }) => {
 return (<div
  {...rest}
  className={cn(className, classes.filters)}
 >
  <PriceGroup />
 </div>)
}

export default Filters