import { FC, useMemo } from 'react'
import classes from './categoryGroup.module.scss'
import { useCategory } from '@/hooks/querries/useCategory'
import { useFilters } from '@/hooks/useFilters'
import Checkbox from '@/ui/checkbox/checkbox'

const CategoryGroup: FC = () => {
 const { data, isLoading } = useCategory()
 const { queryParams, updateParams } = useFilters()
 
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
 },[data, queryParams.categoryId])
 
 return (
  <div>
    <h6>Select by product category:</h6>
   <ul className={classes.group}>
    {list}
   </ul>
  </div>
 )
}
export default CategoryGroup