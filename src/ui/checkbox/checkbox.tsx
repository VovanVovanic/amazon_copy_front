import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { ICheck } from './types'
import classes from './checkbox.module.scss'

const Checkbox: FC<PropsWithChildren<ICheck>> = ({ children, isChecked, onClick, className, ...rest }) => {
 return (
  <button
   {...rest}
   className={cn(classes.checkbox, className, {
    [classes.active]:isChecked
   })}
   onClick={onClick}
  >
   <span>{ children}</span>
  </button>)
}
export default Checkbox