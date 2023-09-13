import Sidebar from "@/components/sidebar/sidebar";
import { FC, PropsWithChildren } from "react";
import classes from "./layout.module.scss";
import Header from "@/components/header/header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />
      <Sidebar />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
