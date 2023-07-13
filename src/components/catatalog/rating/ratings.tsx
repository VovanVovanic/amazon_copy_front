import { FC, PropsWithChildren, useState } from "react"
import { IRatings } from "./types"
import cn from 'classnames'
import classes from './ratings.module.scss'
import { Rating } from "react-simple-star-rating"
import { useQuery } from "@tanstack/react-query"
import { Reviews } from "@/services/reviews/reviews.service"



const Ratings: FC<PropsWithChildren<IRatings>> = ({ product, className, ...rest }) => {
 const avgRating = () => {
  if (product) {
   return Math.round(product.reviews.reduce((acc, el) => {

    acc += +el.rating
    return acc
   }, 0)) / product.reviews.length
  } else { return 0 }
 }

 const [rating, setRating] = useState<number>(avgRating())
 return (<div className={cn(className, classes.ratings)}  {...rest}>
  {rating !== 0 && (
   <>
    <span>Rating:</span>
    <Rating
     readonly
     initialValue={rating}
     SVGstyle={{ display: 'inline-block', margin: "0 2px 4px 2px" }}
     size={20}
     allowFraction
     transition
    />
   </>
  )}

  <span>{product.reviews.length} reviews</span>
 </div>)
}

export default Ratings