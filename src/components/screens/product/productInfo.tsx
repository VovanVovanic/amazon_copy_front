import classes from './product.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { FaLock } from 'react-icons/fa'
import { IProduct } from '@/store/product/types';
import { formatDate } from '@/utils/formateDate';
import FavoritesButton from '@/ui/buttons/FavoriteButton/favoriteButton';
import AddToCartInline from './addToCartInline';

const ProductInfo: FC<{ product: IProduct }> = ({ product }) => {
    const deliveryDate = new Date(new Date().getTime()+(2*24*60*60*1000));
	return (
		<div className={classes.info}>
			<h6 className={classes.title}>${product.price}</h6>
			<div className={classes.link}>
				$6.55 Shipping
				<Link href={'/'}>Details</Link>
			</div>
            <span className={classes.sales}>
                Sales taxes may apply at checkout
            </span>
            <div className={classes.delivery}>
                <span>Delivery</span>
                {formatDate(deliveryDate.toString())}
            </div>
            <AddToCartInline product={product}/>
            <p className={classes.transaction}>
                <FaLock className="mr-2"/> SecureTransaction
            </p>
            <div className={classes.favorite}>
                <FavoritesButton
                productId={product.id}
                />
            </div>
		</div>
	);
};

export default ProductInfo;
