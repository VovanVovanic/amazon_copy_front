import Button from '../buttons/button';
import Search from '../search/search';
import classes from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiShoppingCartLine } from 'react-icons/ri';
import Cart from './cart/cart';

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
						<AiOutlineHeart size={28} className='fill-primary' />
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
