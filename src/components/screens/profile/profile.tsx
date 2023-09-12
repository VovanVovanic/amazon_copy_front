import { UserUpdate } from "@/store/user/types"
import { FC } from "react"
import classes from './profile.module.scss'
import Button from "@/ui/buttons/button"
import { useRouter } from "next/navigation"

const Profile: FC<{ profile: UserUpdate }> = ({ profile }) => {
 const router = useRouter()
 return (
  <div className={classes.profile}>
   <div className={classes.content}>
    <h6>Name:</h6>
    {profile.name}
   </div>
   <div className={classes.content}>
    <h6>Email:</h6>
    {profile.email}
   </div>
   <div className={classes.content}>
    <h6>Phone:</h6>
    {profile.phone}
   </div>
   <div className={classes.content}>
    <Button
     onClick={()=>router.push("/edit_profile")}
     variant="light"
     size="sm"
     className="w-24 sm-custom:w-16 sm-custom:p-0 sm-custom:text-xs">
     Edit
    </Button>
    <Button
     onClick={()=>router.push("/my_orders")}
     variant="light"
    size="sm"
    className="w-24 sm-custom:w-16 sm-custom:p-0 sm-custom:text-xs"
    >
     My Orders
    </Button>
    <Button
     size="sm"
     className="w-24 sm-custom:w-16 sm-custom:p-0 sm-custom:text-xs"
     onClick={()=>router.push("/delete_profile")}
     variant="dark">
     Delete
    </Button>
    </div>
  </div>
 )
}

export default Profile