import classes from './cart.module.scss';
import CartItem from './cartItem/cartItem';
import { ICart } from './types';
import { orders } from '@/app/app.endpoints';
import Order from '@/services/orders/orders.service';
import { useMutation } from '@tanstack/react-query';
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { FC, useMemo } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

import Button from '@/ui/buttons/button';
import SquareButton from '@/ui/buttons/squareButton/squareButton';

import { useCart } from '@/hooks/useCart';
import { useOutside } from '@/hooks/useOutside';
import { useActions } from '@/hooks/useActions';

const Cart: FC = () => {
	const { push } = useRouter();
	const { isShow, setIsShow, ref } = useOutside(false);
	const { items, total } = useCart();
	const{reset}=useActions()

	const { mutate } = useMutation(['create_payment'], () =>
		Order.createPayment({
			items: items.map(el => ({
				price: el.price,
				quantity: el.quantity,
				productId: el.product.id
			}))
		}),
		{onSuccess({data}){
			push(data.confirmation.confirmation_url)
			reset()
		}}
	);

	const list = useMemo(() => {
		return items.map(el => {
			return <CartItem key={el.product.id} item={el} />;
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
						<Button 
						variant='dark'
						 className={cn(classes.btn)}
						 onClick={()=>mutate()}
						 >
							Place Order
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
