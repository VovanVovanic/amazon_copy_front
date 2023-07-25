import Button from '../buttons/button';
import Search from '../search/search';
import classes from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import Cart from './cart/cart';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import { useAuth } from '@/hooks/useAuth';

const Header: FC<PropsWithChildren> = ({ children }) => {
	const { isAdminPanel } = useIsAdmin()
	const { user } = useAuth()

	return (
		<header className={classes.header}>
			<Link href='/'>
				{isAdminPanel ?
					<h6 className={classes.adminHeader}>Admin Panel</h6> :
					<Image
						priority
						width={70}
						height={10}
						src={'/logo.svg'}
						alt={'amazon_logo'}
						className={classes.logo}
					/>
				}

			</Link>
			<Search />
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
						height={100}
						src={'/panda.svg'}
						alt={'panda_logo'}
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
