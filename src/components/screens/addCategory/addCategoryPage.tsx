import classes from './add.module.scss'
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Spinner from "@/ui/spinner/spinner";
import Field from "@/ui/input/input";
import Button from "@/ui/buttons/button";
import Heading from "@/ui/heading/heading";
import Category from "@/services/caterory/category.service";
import { useRouter } from 'next/navigation';
import Confirm from '@/ui/editConfirm/confirm';


const AddCategoryPage: FC = () => {
const router = useRouter()
 const {
  register: FormRegister,
  handleSubmit,
  formState: { errors },
  reset,
  control
 } = useForm<{name:string}>({
  mode: 'onChange', defaultValues: {
   name:""
  }
 });

 const queryClient = useQueryClient();

 const { mutate, isSuccess, isLoading } = useMutation(
  ['add category'],
  (data: {name:string}) => Category.create(data),
  {
   onError: () => {
    console.error('err');
    queryClient.invalidateQueries(['add category']);
   }
  }
 );

 const onSubmit: SubmitHandler<{name:string}> = data => {
  mutate(data)
 };
 if (isSuccess) return <Confirm
  title={`Category created`}
  onClick={()=>router.back()}
 />

 return (
  <>
   
    <Heading className={classes.title}>
    Add category
   </Heading> 

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
       {Object.entries(errors) && (
							<ul className={classes.errors}>
								{Object.entries(errors).map(([_, error]) => (
									<li key={error.message}>{error.message}</li>
								))}
							</ul>
						)}
      <Button variant="dark">Add</Button>
     </div>
 
   </form> )}
  </>
 )
}
export default AddCategoryPage