import classes from './ratingsGroup.module.scss'
import cn from 'classnames'
import { IRatingGroup } from './types'
import { FC, useMemo } from 'react'
import { useFilters } from '@/hooks/useFilters'
import { ratings } from './constatnts'
import Checkbox from '@/ui/checkbox/checkbox'
import { updateRatingQuery } from '@/utils/updateRatingQuery'
import { Rating } from 'react-simple-star-rating'

const RatingGroup: FC<IRatingGroup> = () => {
 const { queryParams, updateParams } = useFilters()

 const onRatingsUpdate = (rating: string) => {
  updateParams("ratings", updateRatingQuery(queryParams.ratings, rating))
 }

 const list = useMemo(() => {
  return ratings.map((el) => {
   return (
    <li key={el}>
     <Checkbox
      isChecked={queryParams.ratings.includes(el.toString())}
      onClick={() => onRatingsUpdate(el.toString())}
     />
     <Rating
      readonly
      initialValue={el}
      SVGstyle={{ display: 'inline-block', margin: "0 2px 4px 2px" }}
      size={20}
      allowFraction
      transition
     />
    </li>)
  })
 }, [queryParams.ratings])


 return (
  <div>
   <h6>Select by average rating:</h6>
   <ul className={classes.group}>
    {list}
   </ul>
  </div>
 )
}

export default RatingGroup

