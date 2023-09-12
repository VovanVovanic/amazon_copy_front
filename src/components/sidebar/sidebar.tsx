import classes from './sidebar.module.scss';
import { FC } from 'react';
import Menu from './menu';

const Sidebar: FC = () => {

	return (
		<aside className={classes.sidebar}>
			<Menu
			variant="desk"
			/>
		</aside>
	);
};

export default Sidebar;
