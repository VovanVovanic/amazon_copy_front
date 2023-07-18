import classes from './cart.module.scss';
import CartItem from './cartItem/cartItem';
import { ICart } from './types';
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { FC, useMemo } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

import Button from '@/ui/buttons/button';
import SquareButton from '@/ui/buttons/squareButton/squareButton';

import { useCart } from '@/hooks/useCart';
import { useOutside } from '@/hooks/useOutside';

const Cart: FC = () => {
	const { push } = useRouter();
	const { isShow, setIsShow, ref } = useOutside(false);
	const { items, total } = useCart();

	const list = useMemo(() => {
		return items.map(el => {
			return <CartItem key={el.id} item={el} />;
		});
	}, [items]);

	return (
		<div className={cn(classes.cart)} ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClickHandle={() => setIsShow(!isShow)}
				number={items.length}
			/>
			{isShow && (
				<div className={cn(classes.wrapper)}>
					<div className={cn(classes.title)}>MyCart</div>
					<ul>{items.length ? list : 'Cart is Empty'}</ul>
					<div className={cn(classes.placeOrder)}>
						<div className={cn(classes.total)}>{`Total: $${total}`}</div>
						<Button variant='dark' className={cn(classes.btn)}>
							Place Order
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
