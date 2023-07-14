import { FC } from "react"
import { IFavoriteButton } from "./types"
import cn from 'classnames'
import classes from './fav.module.scss'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useProfile } from "@/hooks/useProfile"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Users from "@/services/users/users.service"

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