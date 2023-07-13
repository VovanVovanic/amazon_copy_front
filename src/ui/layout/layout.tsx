import Sidebar from '@/components/sidebar/sidebar'
import { FC, PropsWithChildren } from 'react'
import Header from '../header/header'
import classes from './layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
 return (
  <div className={classes.layout}>
   <Header />
   <Sidebar />
   <main className={classes.main}>
    {children}
   </main>

  </div>
 )
}

export default Layout