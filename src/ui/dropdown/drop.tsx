
import { FC } from 'react';
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import classes from './drop.module.scss'
import { IDrop, ISortType } from './types';


const DropDown: FC<IDrop> = ({ onSelect, items }) => {
 const selectHandler = (data: Option) => {
  onSelect(data.value)
 }

 return (
  
  <Dropdown
   options={items}
   className={classes.drop}
   arrowClosed={<span className={classes.closed} />}
   arrowOpen={<span className={classes.open} />}
   controlClassName={classes.control}
   menuClassName={classes.menu}
   onChange={(e) => selectHandler(e)}
   placeholder="Sort By" />
 )
}

export default DropDown


