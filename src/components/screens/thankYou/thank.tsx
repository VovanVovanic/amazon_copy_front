import Heading from '@/ui/heading/heading'
import { FC } from 'react'
import classes from './thank.module.scss'
import Button from '@/ui/buttons/button'
import { useRouter } from 'next/navigation'
import { BsCartCheckFill } from 'react-icons/bs'

const ThankYou:FC = ()=>{
    const{push}=useRouter()
    return(
        <div className={classes.wrapper}> 
        <div className={classes.thank}>
            <BsCartCheckFill 
            className='fill-primary w-20 h-10'
            />
            <Heading>Thanks for purchase</Heading>
            <Button 
            onClick={()=>push("/")}
            variant='dark'>Home</Button>
        </div>
        </div>
    )
}

export default ThankYou