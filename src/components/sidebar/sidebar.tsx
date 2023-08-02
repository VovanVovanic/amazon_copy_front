import { adminMenu } from './constants';
import classes from './sidebar.module.scss';
import { IAdminMenuItem } from './types';
import { convertToMenuFormat } from './utils';
import Category from '@/services/caterory/category.service';
import { useQuery } from '@tanstack/react-query';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

import Button from '@/ui/buttons/button';
import Spinner from '@/ui/spinner/spinner';

import { useCategory } from '@/hooks/querries/useCategory';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useIsAdmin } from '@/hooks/useIsAdmin';

const Sidebar: FC = () => {
	const { data, isLoading } = useCategory();
	const { asPath } = useRouter();
	const router = useRouter();
	const { user } = useAuth();
	const { isAdminPanel, pathname } = useIsAdmin();
	const { logout } = useActions();

	const onAuth = () => {
		user ? logout() : router.push('/auth');
	};

	const getMenu = (): IAdminMenuItem[] => {
		const menu =
			user?.isAdmin && isAdminPanel ? adminMenu : convertToMenuFormat(data);
		return menu;
	};

	return (
		<aside className={classes.sidebar}>
			{isLoading ? (
				<Spinner />
			) : (
				<ul className='h-fit'>
					{getMenu().map(el => {
						return (
							<li key={el.name}>
								<Link
									className={cn(classes.link, {
										[classes.active]: asPath === el.route
									})}
									href={el.route}
								>
									{el.name}
								</Link>
							</li>
						);
					})}
					{!data?.length && !isAdminPanel && (
						<li className='text-white text-center h-6 '>
							Categories not found
						</li>
					)}
				</ul>
			)}

			<Button variant='light' className={cn(classes.btn)} onClick={onAuth}>
				{user ? 'Logout' : 'Login'}
				{user ? <FiLogOut /> : <FiLogIn />}
			</Button>
		</aside>
	);
};

export default Sidebar;
