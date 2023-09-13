import { adminMenu } from "./constants";
import classes from "./sidebar.module.scss";
import { IAdminMenuItem, IMenu } from "./types";
import { convertToMenuFormat } from "./utils";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { FiLogIn, FiLogOut } from "react-icons/fi";

import Button from "@/ui/buttons/button";
import Spinner from "@/ui/spinner/spinner";

import { useCategory } from "@/hooks/querries/useCategory";
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { EnumProductsSort } from "@/store/product/types";
import { capitalize } from "@/utils/capitalize";

export const Menu: FC<IMenu> = ({ variant }) => {
  const { data, isLoading } = useCategory();
  const { asPath } = useRouter();
  const router = useRouter();
  const { user } = useAuth();
  const { isAdminPanel, pathname } = useIsAdmin();
  const {
    logout,
    setCategoryPath,
    updateQueryParam,
    setCategoryProductFilter,
  } = useActions();

  const onAuth = () => {
    user ? logout() : router.push("/auth");
  };

  const getMenu = (): IAdminMenuItem[] => {
    const menu =
      user?.isAdmin && isAdminPanel ? adminMenu : convertToMenuFormat(data);
    return menu;
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={classes.menuList}>
          {getMenu().map((el) => {
            return (
              <li key={el.name}>
                <Link
                  className={cn(classes.link, {
                    [classes.active]: asPath.split("?")[0] === el.route,
                  })}
                  href={el.route}
                  onClick={() => {
                    setCategoryPath(el.route);
                    updateQueryParam({
                      key: "sort",
                      value: EnumProductsSort.NEWEST,
                    });
                    setCategoryProductFilter(EnumProductsSort.NEWEST);
                  }}
                >
                  {capitalize(el.name)}
                </Link>
              </li>
            );
          })}
          {variant === "mobile" && (
            <li onClick={onAuth} className="text-red text-center uppercase">
              {user ? "Logout" : "Login"}
            </li>
          )}
          {!data?.length && !isAdminPanel && (
            <li className="text-white text-center h-6 ">
              Categories not found
            </li>
          )}
        </ul>
      )}

      {variant === "desk" && (
        <Button variant="light" className={cn(classes.btn)} onClick={onAuth}>
          {user ? "Logout" : "Login"}
          {user ? <FiLogOut /> : <FiLogIn />}
        </Button>
      )}
    </>
  );
};

export default Menu;
