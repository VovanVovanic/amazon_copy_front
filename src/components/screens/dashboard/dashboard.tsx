import { FC, useMemo } from 'react'
import classes from './dashboard.module.scss'
import { IDashboard } from './types'
import { useQuery } from '@tanstack/react-query'
import { statistic } from '@/api/api.endpoints'
import Statistic from '@/services/statistic/statistic.service'
import Heading from '@/ui/heading/heading'

const Dashboard: FC<IDashboard> = () => {
  const { data, isFetching } = useQuery(
    ['statistic'],
    () => Statistic.getStatistic(),
    { select: ({ data }) => data }
  )

  const list = useMemo(() => {
    return data?.map((el) => {
      return (
        <li
          key={el.name}
          className={classes.item}
        >
          <div>{el.name}:</div>
          <div>{el.value}</div>

        </li>)
    })
  }, [data])
  return (
    <>
      <Heading className="mb-8">Dashboard</Heading>
      {isFetching ?
        (<div>...loading</div>) :
        <ul className={classes.dashboard}>
          {data?.length ? list : (
            <li>Threre is no statistic yet</li>
          )}
        </ul>
      }
    </>
  )
}
export default Dashboard