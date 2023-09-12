import { FC, useCallback, useEffect } from 'react'
import classes from './sidebar.module.scss'
import cn from 'classnames'
import { IMenuMobile } from './types'
import { usePathname } from 'next/navigation'

const MobileMenu: FC<IMenuMobile> = ({ open, onClose, children }) => {

 const pathname = usePathname()

 const setClose = useCallback(() => {
  if(open ) onClose()
 },[onClose, open])

 useEffect(() => {
 setClose()
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[pathname])
 
 return (
  <div className={cn(classes.mobileMenu, {
   [classes.open]: open
  })}>
   {children}
  </div>
 )
}

export default MobileMenu