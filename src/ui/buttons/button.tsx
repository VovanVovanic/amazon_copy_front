import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import classes from './button.module.scss'
import { IButton } from './types'

const Button: FC<PropsWithChildren<IButton>> = ({ size = "md",variant, children, className, ...rest }) => {
 return (
  <button {...rest} className={cn(className, classes.button, {
   [classes.primary]: variant === 'dark',
   [classes.sm]: size === 'sm',
   [classes.lg]: size === 'lg',
   [classes.bt]: size === 'bt'
  })} >
   {children}
  </button>
 )
}

export default Button