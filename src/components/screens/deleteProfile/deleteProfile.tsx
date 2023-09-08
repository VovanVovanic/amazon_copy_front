import Users from "@/services/users/users.service"
import DeleteConfirm from "@/ui/deleteConfirm/deleteConfirm"
import Confirm from "@/ui/editConfirm/confirm"
import Modal from "@/ui/modal/modal"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"
import classes from './deleteProfile.module.scss'
const DeleteProfile: FC<{id:string, name?:string}> = ({id,name}) => {
 const router = useRouter()

 const onClose = () => {
 router.back()
 }

 const { mutate, isSuccess } = useMutation(['delete user'],
  (id: number) => Users.deleteProfile(id))
 
 const onDelete = () => {
  mutate(+id)
 }

 if (isSuccess) return <Confirm
 title={`Profile ${name} deleted`}
 onClick={()=>router.push("/")}
 />
 
 return (
  <div className={classes.delete}>
   <div className={classes.content}>
    <DeleteConfirm
     title={`user ${name}`}
     onClose={onClose}
     onDelete={onDelete}
    />
    </div>
  </div>
 )
}

export default DeleteProfile