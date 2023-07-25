import { FC } from "react"
import classes from './carousel.module.scss'
import cn from 'classnames'
import { ICarousel } from "./types"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import Arrows from "./carouselNav"
import { TransitionGroup } from "react-transition-group"
import CSSTransition from "./cssTransition"
import Link from "next/link"
import Button from "../buttons/button"
import Image from 'next/image'


const Carousel: FC<ICarousel> = ({ items, className, ...rest }) => {
  const { selectedItemIndex } = useTypedSelector(state => state.carousel)
  const selectedItem = items[selectedItemIndex]
  return (
    <div
      {...rest}
      className={cn(classes.carousel, className)}
    >
      <TransitionGroup className='relative h-56'>
        <CSSTransition
          timeout={500}
          key={selectedItem.title}
          classNames={{
            enter: classes['item-enter'],
            enterActive: classes['item-enter-sctive'],
            exit: classes['item-exit'],
            exitActive: classes['item-exit-active']
          }}
          unmountOnExit
          mountOnEnter
        >
          <div
            className={classes.item}
          >
            <div>
              <h2 className={classes.title}>{selectedItem.title}</h2>
              <p className={classes.desc}>{selectedItem.description}</p>
              <Button variant="light">
                {selectedItem.link ? (
                  <Link
                    href={selectedItem.link}
                  >Read More</Link>
                ) : (
                  <Link
                    href="/search_result"
                  >Browse Products</Link>
                )
                }
              </Button>
            </div>
            <div
              className={classes.img}
            >
              <Image
                height={90} alt="image"
                className={classes.picture}
                width={300}
                src={selectedItem.image ? selectedItem.image : ''}
              />
              <Image
                height={90} alt="image"
                width={290}
                className={classes.picture}
                src={selectedItem.image ? selectedItem.image : ''}
              />
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Arrows />
    </div>)
}

export default Carousel