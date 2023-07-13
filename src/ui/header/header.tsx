import Sidebar from '@/components/sidebar/sidebar'
import { FC, PropsWithChildren } from 'react'
import classes from './header.module.scss'

const Header: FC<PropsWithChildren> = ({ children }) => {
 return (
  <header className={classes.header}>
   Header

  </header>
 )
}

export default Header