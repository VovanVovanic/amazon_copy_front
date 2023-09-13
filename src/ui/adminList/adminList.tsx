import { FC } from "react";
import classes from "./adminList.module.scss";
import { IAdminList } from "./types";
import ListItem from "./listItem";
import Spinner from "../spinner/spinner";

const AdminList: FC<IAdminList> = ({
  listItems,
  isLoading,
  removeHandler,
  data = "",
}) => {
  return (
    <div className={classes.wrapper}>
      {isLoading ? (
        <Spinner />
      ) : listItems?.length ? (
        <ul className={classes.list}>
          {listItems.map((el) => {
            return (
              <ListItem
                data={data}
                key={el.id}
                removeHandler={
                  removeHandler ? () => removeHandler(el) : undefined
                }
                listItem={el}
              />
            );
          })}
        </ul>
      ) : (
        <div>Elements not found</div>
      )}
    </div>
  );
};

export default AdminList;
