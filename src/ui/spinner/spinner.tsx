import { FC } from 'react'
import classes from './spinner.module.scss'
import Image from 'next/image'
const Spinner:FC = ()=>{
    return(
    <div className={classes.spinner}>
        <Image 
        height={100}
        width={100}
        alt="loading..."
        src="/spinner.svg"
        />

    </div>)
}

export default Spinner