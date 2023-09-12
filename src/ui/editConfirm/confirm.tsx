import { FC } from "react"
import Button from "../buttons/button"
import classes from './confirm.module.scss'

const Confirm: FC<{ title: string, onClick: () => void }> = ({ title, onClick }) => {
 return (
  <div className={classes.confirm}>
   <div>
   {title}
   </div>
   <div>
   <Button
    onClick={onClick}
    variant="dark">
    Back
   </Button>
   </div>

  </div>
 )
}

export default Confirm