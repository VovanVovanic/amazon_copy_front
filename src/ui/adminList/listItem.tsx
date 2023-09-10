import { FC } from 'react'
import classes from './adminList.module.scss'
import { IAdminList, IAdminListItem } from './types'
import AdminActions from './adminActions/adminActions'
import { capitalize } from '@/utils/capitalize'

const AdminListItem: FC<IAdminListItem> = ({ removeHandler, listItem }) => {
 
 return (
  <li className={classes.item}>
   {listItem.items.map((el) => <div
   className={classes.info}
    key={el}>{capitalize(el)}</div>)}

   <AdminActions
    viewUrl={listItem.viewUrl}
    editUrl={listItem.editUrl}
    removeHandler={removeHandler}
   />
  </li>
 )
}

export default AdminListItem