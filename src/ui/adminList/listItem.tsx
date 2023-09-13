import { FC } from "react";
import classes from "./adminList.module.scss";
import cn from "classnames";
import { IAdminListItem } from "./types";
import AdminActions from "./adminActions/adminActions";
import { capitalize } from "@/utils/capitalize";

const AdminListItem: FC<IAdminListItem> = ({
  removeHandler,
  listItem,
  data,
}) => {
  return (
    <li
      className={cn(classes.item, {
        [classes.review]: data && data === "review",
      })}
    >
      {listItem.items.map((el, i) => (
        <div
          key={i}
          className={cn(classes.info, {
            [classes.reviewInfo]: data && data === "review",
          })}
        >
          {capitalize(el)}
        </div>
      ))}

      <AdminActions
        viewUrl={listItem.viewUrl}
        editUrl={listItem.editUrl}
        removeHandler={removeHandler}
      />
    </li>
  );
};

export default AdminListItem;
