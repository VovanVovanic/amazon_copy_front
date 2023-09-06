import { FC, useMemo, useState } from 'react'
import classes from './edit.module.scss'
import { ISelect } from './types'
import cn from 'classnames'
import { BsCaretDownFill } from 'react-icons/bs'
const SelectCategory: FC<ISelect> = ({ title, current, options, onChange }) => {
 const [isShow, setIsShow] = useState<boolean>(false)

 const list = useMemo(() => {
  return options.map(({ id, name }) => (

   <li
    key={id}
    className={classes.option}
    onClick={() => onChange(id)}
   >
    {name}
   </li>


  ))

 }, [onChange, options])
 return (
  <>
   <h6>{title}</h6>
   <div
    className={classes.select}
    onClick={() => setIsShow(!isShow)}>
    <div className={classes.name}>
    {current}
    </div>
         
    <div className={classes.arrowBtn}>

     <BsCaretDownFill className={cn("", {
      [classes.active]: isShow,
      [classes.close]: !isShow
     })} />
    </div>
    <ul className={classes.list}>
     {isShow && list}
    </ul>
   </div>

  </>
 )
}


export default SelectCategory