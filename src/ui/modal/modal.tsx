import { RiCloseFill } from 'react-icons/ri';
import classes from './modal.module.scss';
import { IModal } from './types';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Modal: FC<PropsWithChildren<IModal>> = ({
	isOpen,
	onClose,
	children
}) => {
	const modal = document.getElementById('modal')
	const modalRef = useRef<HTMLElement | null>(null);
	useEffect(()=>{
		if(modal !==null){
			modalRef.current = modal
		}
	},[modal])

	if (!isOpen || !modalRef.current) return null;
	return ReactDOM.createPortal(
		<div className={classes.overlay}>
			<div className={classes.window}>
                <button onClick={onClose}>
                    <RiCloseFill/>
                </button>
                {children}

            </div>
		</div>,
		modalRef.current
	);
};
export default Modal;
