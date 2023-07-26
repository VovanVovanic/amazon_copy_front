import { FC } from "react"
import { IFilters } from "./types"
import classes from './filters.module.scss'
import cn from 'classnames'

const Filters: FC<IFilters> = ({ className, ...rest }) => {
 return (<div
  {...rest}
  className={cn(className, classes.filters)}
 >
  Filters
 </div>)
}

export default Filters