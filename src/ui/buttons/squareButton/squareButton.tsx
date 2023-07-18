
import classes from './squareB.module.scss'
import cn from 'classnames'
import { FC } from "react";
import { IButtonSquare } from "./types";

const SquareButton:FC<IButtonSquare>=({Icon, onClickHandle, number})=>{
    return(
        <button
        onClick={onClickHandle}
        className={cn(classes.btn)}
        >
        {!!number && (
            <span className={cn(classes.number)}>
                {number}
            </span>
        )}
        <Icon className={cn(classes.icon)}/>
        </button>
    )
}

export default SquareButton