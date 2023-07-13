import classNames from 'classnames'
import cn from 'classnames'
import { FC, forwardRef, PropsWithChildren } from 'react'
import classes from './input.module.scss'
import { IInput } from './types'

const Field = forwardRef<HTMLInputElement, IInput>(({ placeholder, Icon, error, type = "text", className, ...rest }, ref) => {
 return (
  <div className={cn(className, classes.wrapper)}>
   <label>
    {Icon && <Icon className='mr-3 block'/>}
    <span className='mb-1'>{placeholder}</span>
    <input
     placeholder={placeholder}
     ref={ref}
     type={type}
     {...rest}
     className={cn(classes.input, {
     [classes.error]: !!error
    })} />
   </label>
   {error && <span className={cn(classes.errorText)}>{error.message}</span>}
  </div>
 )
})

Field.displayName = 'Field'
export default Field