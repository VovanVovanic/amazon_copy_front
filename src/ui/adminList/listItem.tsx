import { FC } from 'react'
import classes from './adminList.module.scss'
import cn from 'classnames'
import { IAdminList, IAdminListItem } from './types'
import AdminActions from './adminActions/adminActions'
import { capitalize } from '@/utils/capitalize'

const AdminListItem: FC<IAdminListItem> = ({ removeHandler, listItem,data}) => {
 
 return (
  <li className={cn(classes.item, {
   [classes.review]: data && data === 'review'
  })}>
   {listItem.items.map((el) => <div
    className={cn(classes.info, {
     [classes.reviewInfo]: data && data === 'review'
   })}
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