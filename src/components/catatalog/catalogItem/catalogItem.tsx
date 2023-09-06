import { FC, PropsWithChildren } from "react";
import { ICatalogItem } from "./types";
import classes from './item.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import Ratings from "../rating/ratings";
import FavoritesButton from "@/ui/buttons/FavoriteButton/favoriteButton";
import AddToCartButton from "@/ui/buttons/addToCartButton/addToCartButton";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";


const CatalogItem: FC<PropsWithChildren<ICatalogItem>> = ({ product, children, className, ...rest }) => {
  const { user } = useAuth()
  return <div
    {...rest}
    className={cn(classes.catalogItem, className)}
  >
    <div className={cn(classes.links)}>
      <div className={cn(classes.btns)}>
        <AddToCartButton product={product} />
        {user && <FavoritesButton productId={product.id} />}
      </div>
      <Link
        className={cn(classes.link)}
        href={`/product/${product.slug}`} >
        <Image
          width={300} height={300} src={product.images[0]} alt={product.name}
          className="block mx-auto rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </Link>
    </div>
    <Link href={`/product/${product.slug}`} >
      <h3 className={cn(classes.name)}>{product.name}</h3>
    </Link>

    <Link href={`/category/${product.category.slug}`} className={cn(classes.category)}>{product.category.name}</Link>
    <Ratings product={product} isText/>
    <div className={cn(classes.price)}>
      <span className={cn(classes.priceName)}>Price:</span> $ {product.price}</div>
  </div >
}

export default CatalogItem