import classes from './sidebar.module.scss';
import Category from '@/services/caterory/category.service';
import { useQuery } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';
import cn from 'classnames'
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {FiLogOut} from 'react-icons/fi'

const Sidebar: FC = () => {
	const { data, isLoading } = useQuery(
		['get category'],
		() => Category.getAllCategories(),
		{ select: ({ data }) => data }
	);
    const{asPath}=useRouter()
	const { user } = useAuth();

	const { logout } = useActions();
	return (
		<aside className={classes.sidebar}>
			{data?.length ? (<ul>
				{data?.map(el => {
					return (<li key={el.id}>
                        <Link 
                        className={cn(classes.link,{
                            [classes.active]: asPath === `/category/${el.slug}`
                        })}
                        href={`/category/${el.slug}`}>
                        {el.name}
                        </Link>
                    </li>);
				})}
			</ul>):
            <div>Categories not found</div>}

            {
                !!user &&(
                    <button
                    className={cn(classes.btn)}
                    onClick={()=>logout()}
                    >
                        <FiLogOut />
                    </button>
                )
            }
		</aside>
	);
};

export default Sidebar;
