import { log } from "console"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

type Outside = {
    ref:any
    isShow:boolean
    setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (val:boolean):Outside=>{
    const[isShow, setIsShow]=useState(val)
    const ref = useRef<HTMLElement>(null)
    const onClickOutside = (e:any)=>{
        if(ref.current && !ref.current.contains(e.target)){
            setIsShow(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('click',onClickOutside, true)
        return()=>{
            document.removeEventListener('click', onClickOutside)
        }
    },[])

    return{isShow, setIsShow, ref}
}