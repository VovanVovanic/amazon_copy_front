import { statistic } from '@/api/api.endpoints';
import { instance } from '@/api/api.interceptor';
import { IStatistic } from '@/store/statistic/statistic.types';
class StatisticService{
 async getStatistic(userId: string) {
  return instance<IStatistic>({
   url: `${statistic}${userId}`,
   method: "GET"
  })
}
}

const Statistic = new StatisticService()
export default Statistic