import { FC } from 'react'
import classes from './adminList.module.scss'
import { IAdminList } from './types'
import ListItem from './listItem'
import Spinner from '../spinner/spinner'

const AdminList: FC<IAdminList> = ({ listItems, isLoading, removeHandler }) => {
   return (
      <div className={classes.wrapper}>
         {isLoading ? (
            <Spinner />
         ) : listItems?.length ? (
            <ul className={classes.list}>

               {listItems.map((el) => {
                  return (
                     <ListItem
                        key={el.id}
                        removeHandler={removeHandler ? () => removeHandler(el.id) : undefined}
                        listItem={el}
                     />
                  )
               })}
            </ul>


         ) : (
            <div>Elements not found</div>
         )
         }
      </div>
   )
}

export default AdminList