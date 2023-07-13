import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import classes from './button.module.scss'
import { IButton } from './types'

const Button: FC<PropsWithChildren<IButton>> = ({ variant, children, className, ...rest }) => {
 return (
  <button {...rest} className={cn(className, classes.button, {
   [classes.primary]: variant === 'dark'
  })} >
   {children}
  </button>
 )
}

export default Button