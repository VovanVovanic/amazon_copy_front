import classes from "./dashboard.module.scss";
import { IDashboard } from "./types";
import Statistic from "@/services/statistic/statistic.service";
import { useQuery } from "@tanstack/react-query";
import { FC, useMemo } from "react";

import Heading from "@/ui/heading/heading";
import Spinner from "@/ui/spinner/spinner";

import { statistic } from "@/api/api.endpoints";

const Dashboard: FC<IDashboard> = () => {
  const { data, isFetching } = useQuery(
    ["statistic"],
    () => Statistic.getStatistic(),
    { select: ({ data }) => data }
  );

  const list = useMemo(() => {
    return data?.map((el) => {
      return (
        <li key={el.name} className={classes.item}>
          <div>{el.name}:</div>
          <div>{el.value}</div>
        </li>
      );
    });
  }, [data]);
  return (
    <>
      <Heading className="mb-8 mt-10 md-custom:text-sm">Dashboard</Heading>
      {isFetching ? (
        <Spinner />
      ) : (
        <ul className={classes.dashboard}>
          {data?.length ? list : <li>Threre is no statistic yet</li>}
        </ul>
      )}
    </>
  );
};
export default Dashboard;
