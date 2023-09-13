import { useMemo, useState } from "react";
import "react-dropdown/style.css";
import classes from "./drop.module.scss";
import cn from "classnames";
import { IDrop, ISortType } from "./types";
import { BsCaretDownFill } from "react-icons/bs";
import Button from "../buttons/button";
import { useOutside } from "@/hooks/useOutside";
import { useCategoryProductFilter } from "@/hooks/useCategoryProductFilter";
import { EnumProductsSort } from "@/store/product/types";

function DropDown<K>({ onSelect, items, value, title = "Sort:" }: IDrop<K>) {
  const { isShow, setIsShow, ref } = useOutside(false);
  const { updateFilter, isCategory } = useCategoryProductFilter();
  const [active, setActive] = useState<ISortType<K> | undefined>(value);

  const onChange = (data: ISortType<K>) => {
    if (isCategory) {
      const key = data.key as EnumProductsSort;
      updateFilter(key);
    }
    onSelect(data);
    setIsShow(false);
    setActive(data);
  };

  const list = useMemo(() => {
    return items.map((el) => {
      return (
        <li
          key={el.label.toString()}
          className={cn(classes.item, {
            [classes.active]: el.label === active?.label,
          })}
        >
          <button
            className={classes.btnLink}
            onClick={() => onChange(el)}
            disabled={el.label === active?.label}
          >
            {el.label}
          </button>
        </li>
      );
    });
  }, [items, active]);

  return (
    <div className={classes.drop} ref={ref} onClick={() => setIsShow(!isShow)}>
      <b>
        {title}
        <i>{active?.label}</i>
      </b>

      <Button
        onClick={() => setIsShow(!isShow)}
        variant="light"
        size="sm"
        className={classes.btn}
      >
        <BsCaretDownFill
          className={cn("", {
            [classes.arrowActive]: isShow,
          })}
        />
      </Button>
      {isShow && <ul className={classes.menu}>{list}</ul>}
    </div>
  );
}

export default DropDown;
