import { FC, PropsWithChildren } from 'react'
import classes from './sidebar.module.scss'

const Sidebar: FC<PropsWithChildren> = ({ children })=> {
 return (
  <aside className={classes.sidebar}>Sidebar</aside>
 )
}

export default Sidebar