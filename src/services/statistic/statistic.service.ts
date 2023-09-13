import { statistic } from "@/api/api.endpoints";
import { instance } from "@/api/api.interceptor";
import { IStatistic } from "@/store/statistic/statistic.types";
class StatisticService {
  async getStatistic() {
    return instance<IStatistic[]>({
      url: `${statistic.all}`,
      method: "GET",
    });
  }
}

const Statistic = new StatisticService();
export default Statistic;
