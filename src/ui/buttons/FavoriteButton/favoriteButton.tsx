import { useProfile } from "@/hooks/querries/useProfile"
import Users from "@/services/users/users.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import cn from 'classnames'
import { FC } from "react"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import classes from './fav.module.scss'
import { IFavoriteButton } from "./types"

const FavoritesButton: FC<IFavoriteButton> = ({ productId, className, ...rest }) => {
  const { profile } = useProfile()
  const { invalidateQueries } = useQueryClient()
  const isExist = profile?.favorites.some((el) => el.id === productId)

  const queryClient = useQueryClient()
  const { mutate } = useMutation(['toggle favorite'], () => Users.toggleFeatures(productId), {
    onSuccess() {
      queryClient.invalidateQueries(['get profile'])
    }
  })

  const onFavoritesHanlder = () => {
    mutate()
  }

  return (
    <button
      onClick={() => onFavoritesHanlder()}
      className={cn(className, classes.fButton)} {...rest}>
      {isExist ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  )
}

export default FavoritesButton