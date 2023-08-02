import { FC, useMemo } from 'react'
import classes from './categoryGroup.module.scss'
import { useCategory } from '@/hooks/querries/useCategory'
import { useFilters } from '@/hooks/useFilters'
import Checkbox from '@/ui/checkbox/checkbox'
import Spinner from '@/ui/spinner/spinner'

const CategoryGroup: FC = () => {
 const { data, isLoading } = useCategory()
 const { queryParams, updateParams } = useFilters()
 
 // eslint-disable-next-line react-hooks/exhaustive-deps
 const onCategoryChange = (data: string) => {
  updateParams("categoryId",data)
 }
 const list = useMemo(() => {
  return data?.map((el) => {
   return (
    <li key={el.slug}>
     <Checkbox
      isChecked={el.id.toString() === queryParams.categoryId}
      onClick={()=>onCategoryChange(el.id.toString())}
     />
     {el.name}
    </li>
   )
  })
 },[data, onCategoryChange, queryParams.categoryId])
 
 return (
  <div>
    <h6>Select by product category:</h6>
    {isLoading ? (
      <Spinner />
    ) : (
      <ul className={classes.group}>
      {list}
     </ul>
    )}

  </div>
 )
}
export default CategoryGroup