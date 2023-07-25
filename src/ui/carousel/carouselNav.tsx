import { FC } from "react"
import classes from './carousel.module.scss'
import cn from 'classnames'
import { useActions } from "@/hooks/useActions"
import { BsCaretLeftSquare, BsCaretRightSquare } from 'react-icons/bs'
import Button from "../buttons/button"

const Arrows: FC = () => {
 const { nextSlide, prevSlide } = useActions()

 return <div className={cn(classes.nav)}>
  <Button 
  variant="light" 
  size="sm"
  className={classes.btn}
  onClick={() => prevSlide()}>
   <BsCaretLeftSquare />
  </Button>
  <Button 
  variant="light" 
  size="sm"
  className={classes.btn}
  onClick={() => nextSlide({ carouselLength: 4 })}>
   <BsCaretRightSquare />
  </Button>
 </div>
}

export default Arrows