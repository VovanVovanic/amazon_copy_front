
import { useMemo, useState } from 'react';
import 'react-dropdown/style.css';
import classes from './drop.module.scss'
import cn from 'classnames'
import { IDrop, ISortType } from './types';
import { BsCaretDownFill } from 'react-icons/bs';
import Button from '../buttons/button';
import { useOutside } from '@/hooks/useOutside';

function DropDown<K>({ onSelect, items, value, title = "Sort:" }: IDrop<K>) {
  //const [open, setIsOpen] = useState<boolean>(false)
  const { isShow, setIsShow, ref } = useOutside(false);
  const[active, setActive]=useState<string>(value ? value.label: "")
  const onChange = (data: ISortType<K>) => {
    onSelect(data)
    setIsShow(false)
    setActive(data.label)
  }

  const list = useMemo(() => {
    return items.map((el) => {
      return (
        <li
          key={el.label.toString()}
          className={cn(classes.item, {
            [classes.active]: el.label === active

          })}
        >
          <button
            className={classes.btnLink}
            onClick={() => onChange(el)}
            disabled={el.key === value?.key}
          >{el.label}</button>
        </li>
      )
    })
  }, [items, active])

  return (
    <div
      className={classes.drop}
      ref={ref}
      onClick={() => setIsShow(!isShow)}
    >
      <b>
        {title}
        <i>{value?.label}</i>
      </b>

      <Button
        onClick={() => setIsShow(!isShow)}
        variant="light" size="sm"
        className={classes.btn}>
        <BsCaretDownFill className={cn("", {
          [classes.arrowActive]: isShow
        })} />
      </Button>
      {isShow && <ul className={classes.menu}>
        {list}
      </ul>}
    </div>
  )
}

export default DropDown


