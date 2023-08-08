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
      className={cn(classes.carousel, className, {
        [classes.delivery]: selectedItem.id === 1,
        [classes.techs]: selectedItem.id === 2,
        [classes.gift]: selectedItem.id === 3,
        [classes.sale]: selectedItem.id === 4,
      })}
    >
      <TransitionGroup className='relative h-56'>
        <CSSTransition
          timeout={300}
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
            style={{ backgroundImage: `url(${selectedItem.url})` }}
          >
            <div>
              <h2 className={classes.title}>{selectedItem.title}</h2>
              <p className={classes.desc}>{selectedItem.description}</p>
              <Button
                variant="light"
                className={classes.link}
              >
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
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Arrows />
    </div>)
}

export default Carousel