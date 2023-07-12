import { statistic } from '@/app/app.endpoints';
import { instance } from '@/app/app.interceptor';
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