import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import classes from './header.module.scss'
import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai';
import Search from '../search/search'
import Button from '../buttons/button'
import { RiShoppingCartLine } from 'react-icons/ri'

const Header: FC<PropsWithChildren> = ({ children }) => {
 return (
  <header className={classes.header}>
   <Link href='/'>
    <Image
     priority
     width={70}
     height={10}
     src={'/logo.svg'}
     alt={'amazon_logo'}
     className={classes.logo}
    />
   </Link>
   <Search />
   <div className={classes.headerBtns}>
    <Link href='/favorites'>
     <Button className={classes.btn} variant={'dark'} size={'sm'}>
      <AiOutlineHeart size={28} className="fill-primary" />
     </Button>
    </Link>
    
    <Button variant='dark' size={"sm"} className={classes.shopCart}>
     <RiShoppingCartLine  />
    </Button>
    
    <Link
      className={classes.pandaLogo}
      
     href='/profile'>
    <Image
     priority
     width={100}
     height={100}
     src={'/panda.svg'}
     alt={'panda_logo'}
    
    />
   </Link>
   </div>
  </header>
 )
}

export default Header