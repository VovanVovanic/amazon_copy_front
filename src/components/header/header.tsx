
import classes from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import Cart from './cart/cart';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/ui/buttons/button';
import Search from '@/ui/search/search';

const Header: FC<PropsWithChildren> = ({ children }) => {
	const { isAdminPanel } = useIsAdmin()
	const { user } = useAuth()
	const[open, setOpen]=useState<boolean>(false)

	return (
		<header className={classes.header}>
			<Link href='/'>
				{isAdminPanel ?
					<h6 className={classes.adminHeader}>Admin Panel</h6> :
					<Image
						priority
						width={60}
						height={10}
						src={'/logo.svg'}
						alt={'amazon_logo'}
						className={classes.logo}
					/>
				}

			</Link>
			<div className='md-custom:hidden'>
			<Search variant=''/> 
			</div>
	
			<div className={classes.headerBtns}>
				{user?.isAdmin && !isAdminPanel && (
					<Link href="/admin" className={classes.adminBtn}>
						<Button className={classes.btn} variant={'dark'} size={'sm'}>
							<MdOutlineAdminPanelSettings size={30} />
						</Button>

					</Link>
				)}
				<Link href='/favorites'>
					<Button className={classes.btn} variant={'dark'} size={'sm'}>
						<AiOutlineHeart size={30} />
					</Button>
				</Link>
				<Cart />
			
				<Link className={classes.pandaLogo} href='/profile'>
					<Image
						priority
						width={100}
						height={50}
						src={'/panda.svg'}
						alt={'panda_logo'}
						// className='sm-custom:w-32 sm-custom:h-32'
					/>
				</Link>
				<button onClick={()=>setOpen(!open)}
					className={classes.mobileBtn}>
					{open ? (
						<Image 
						height={25}
						width={25}
						alt="menu"
							src={'./close.svg'}
							className='m-0'
						/>
					) : (
							<Image 
							height={32}
							width={32}
							alt="menu"
								src={'./burger.svg'}
							/>
						)}
					</button>
			</div>
			<Search variant='hidden'/> 
		</header>
	);
};

export default Header;
