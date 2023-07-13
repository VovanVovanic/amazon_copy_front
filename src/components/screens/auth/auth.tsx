import { useActions } from "@/hooks/useActions"
import { useAuth, useAuthRedirect } from "@/hooks/useAuth"
import { IAuthVariants, IEmailPassword } from "@/store/user/types"
import { emailValidation } from "@/utils/email"
import { useRef, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import cn from 'classnames'
import classes from './auth.module.scss'
import Button from "@/ui/buttons/button"
import Heading from "@/ui/heading/heading"
import Field from "@/ui/input/input"

const Auth = () => {
  useAuthRedirect()
  const { isLoading } = useAuth()
  const { login, register } = useActions()
  const [type, setType] = useState<IAuthVariants>(IAuthVariants.LOGIN)
  const ref = useRef<any>(null)


  const {
    register: onRegister,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IEmailPassword>()

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    if (type === IAuthVariants.LOGIN) {
      login(data)
    }

    if (type === IAuthVariants.REGISTER) {
      register(data)
    }
    reset()
  }

  const authType = type === IAuthVariants.LOGIN ? "Login" : "Register"
  const authChange = type === IAuthVariants.LOGIN ? IAuthVariants.REGISTER : IAuthVariants.LOGIN
  return (
    <div className={cn(classes.auth)}>
      <form onSubmit={handleSubmit(onSubmit)} ref={ref} className={cn(classes.form)}>
        <Heading className={cn(classes.heading)}>{authType}</Heading>
        <Field
          {...onRegister('email', {
            required: 'Required',
            pattern: {
              value: emailValidation,
              message: "Please enter a valid email"
            }
          })}
          placeholder="Enter email"
          error={errors.email}
        />
        <Field
          {...onRegister('password', {
            required: 'Required',
            minLength: {
              value: 6,
              message: "Password must be at least 6 symbols"
            }
          })}
          placeholder="Enter password"
          error={errors.password}
          type='password'
        />
        <div className={cn(classes.btn)}>
          <Button variant="dark">Lets Go</Button>
          <Button
            onClick={() => setType(authChange)}
            type="button" variant="light">{`To ${authChange}`}</Button>
        </div>
      </form>

    </div>
  )
}

export default Auth