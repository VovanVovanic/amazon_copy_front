import { FC } from "react";
import classes from "./adminActions.module.scss";
import { IAdminActions } from "./types";
import { useRouter } from "next/navigation";
import { RiDeleteRow, RiEdit2Line, RiExternalLinkLine } from "react-icons/ri";

const AdminActions: FC<IAdminActions> = ({
  editUrl,
  viewUrl,
  removeHandler,
}) => {
  const router = useRouter();
  const { push } = router;
  return (
    <div className={classes.wrapper}>
      {viewUrl && (
        <button className={classes.btn} onClick={() => push(viewUrl)}>
          <RiExternalLinkLine />
        </button>
      )}
      {editUrl && (
        <button className={classes.btn} onClick={() => push(editUrl)}>
          <RiEdit2Line />
        </button>
      )}
      {removeHandler && (
        <button className={classes.btn} onClick={removeHandler}>
          <RiDeleteRow />
        </button>
      )}
    </div>
  );
};

export default AdminActions;
