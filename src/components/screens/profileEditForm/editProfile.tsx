import classes from './form.module.scss'
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Spinner from "@/ui/spinner/spinner";
import Field from "@/ui/input/input";
import Button from "@/ui/buttons/button";
import Heading from "@/ui/heading/heading";
import { useRouter } from "next/router";
import Confirm from "@/ui/editConfirm/confirm";
import { UserUpdate } from "@/store/user/types";
import Users from "@/services/users/users.service";


const EditProfileForm: FC<{profile:UserUpdate}> = ({ profile}) => {

  
 const router = useRouter()
 const {
  register: FormRegister,
  handleSubmit,
  formState: { errors },
  reset,
  control
 } = useForm<UserUpdate>({
  mode: 'onChange', defaultValues: {...profile}
 });

 const queryClient = useQueryClient();

 const { mutate, isSuccess, isLoading } = useMutation(
  ['update user'],
  (data: UserUpdate) => Users.updateProfile(data),
  {
   onError: () => {
    console.error('err');
    queryClient.invalidateQueries(['update user']);
   }
  }
  );
  

  const onSubmit: SubmitHandler<UserUpdate> = data => {
   mutate(data)
 
 };
  if (isSuccess) return <Confirm
   title={`Profile ${profile.name} updated`}
    onClick={()=>router.back()}
  />

 return (
  <div className="flex flex-col gap-8 items-center md-custom:pt-10">
   
   { profile && <Heading className={classes.title}>
       {`Edit Profile ${profile.name}`}
   </Heading> }

   {isLoading ? (
     <Spinner />
    ) : ( <form
    onSubmit={handleSubmit(onSubmit)}
    className={classes.form}>

     <div>
      <Field
       {...FormRegister('name', {
        required: 'Required',
       })}
       placeholder="Name"
       error={errors.name}
       type="text"
      />
      <Field
       {...FormRegister('email', {
        required: 'Required',
       })}
       placeholder="Email"
       error={errors.email}
       type="email"
      />
        <Field
       {...FormRegister('password')}
       placeholder="New password if needed"
       error={errors.password}
       type="password"
      />
       <Field
       {...FormRegister('phone', {
        required: 'Required',
       })}
       placeholder="Phone"
       error={errors.email}
       type="tel"
      />

       	{Object.entries(errors) && (
					<ul className={classes.errors}>
						{Object.entries(errors).map(([_, error]) => (
							<li key={error.message}>{error.message}</li>
						))}
							</ul>
						)}
      <Button variant="dark">Update</Button>
     </div>
 
   </form> )}
  </div>
 )
}
export default EditProfileForm