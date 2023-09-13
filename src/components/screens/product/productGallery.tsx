import classes from "./product.module.scss";
import cn from "classnames";
import Image from "next/image";
import { FC, useMemo, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import CSSTransition from "../../../ui/carousel/cssTransition";

const ProductGallery: FC<{ images: string[] }> = ({ images }) => {
  const [activeImage, setActiveImage] = useState<number>(0);

  const list = useMemo(() => {
    return images.map((el, i) => {
      return (
        <button
          className={cn(classes.button, {
            [classes.active]: activeImage === i,
          })}
          key={el}
          onClick={() => setActiveImage(i)}
        >
          <Image src={el} alt="image" width={100} height={100} priority />
        </button>
      );
    });
  }, [activeImage, images]);
  return (
    <div>
      <TransitionGroup>
        <CSSTransition
          timeout={300}
          key={activeImage}
          classNames={{
            enter: classes["item-enter"],
            enterActive: classes["item-enter-sctive"],
            exit: classes["item-exit"],
            exitActive: classes["item-exit-active"],
          }}
          unmountOnExit
          mountOnEnter
        >
          <Image
            src={images[activeImage]}
            alt="image"
            height={500}
            width={500}
            priority={true}
            draggable={false}
            className={classes.image}
          />
        </CSSTransition>
      </TransitionGroup>

      <div className={classes.galery}>{list}</div>
    </div>
  );
};

export default ProductGallery;
