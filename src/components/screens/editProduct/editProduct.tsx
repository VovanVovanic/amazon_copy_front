import { IProduct, IProductData } from "@/store/product/types"
import classes from './edit.module.scss'
import { ChangeEvent, ChangeEventHandler, FC } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ICategorySelect } from "./types";
import Products from "@/services/products/products.service";
import Spinner from "@/ui/spinner/spinner";
import Field from "@/ui/input/input";
import Button from "@/ui/buttons/button";
import SelectCategory from "./select";
import Heading from "@/ui/heading/heading";


const EditProductPage: FC<{ product: IProduct, categories: ICategorySelect[] }> = ({ product, categories }) => {
 const { id, price, description, category, name } = product

 const {
  register: FormRegister,
  handleSubmit,
  formState: { errors },
  reset,
  control
 } = useForm<IProductData>({
  mode: 'onChange', defaultValues: {
   name,
   price,
   description,
   categoryId: category.id
  }
 });

 const queryClient = useQueryClient();

 const { mutate, isSuccess, isLoading } = useMutation(
  ['update product'],
  (data: IProductData) => Products.update(String(id), data),
  {
   onError: () => {
    console.error('err');
    queryClient.invalidateQueries(['update product']);
   }
  }
 );

 const onSubmit: SubmitHandler<IProductData> = data => {
  mutate(data)
 };
 if (isSuccess) return <div>Product Successfully updated</div>

 return (
  <>
   
   { product && <Heading className={classes.title}>
    Edit product: {product.name}
   </Heading> }

   {isLoading ? (
     <Spinner />
    ) : ( <form
    onSubmit={handleSubmit(onSubmit)}
    className={classes.form}>

     <div>
      {categories && (
       <Controller
        control={control}
        render={({ field: { onChange, value } }) => {
         const currentSelection = categories.find(
          (c) => c.id === value
         );
         return (
          <SelectCategory
           title="Category"
           onChange={onChange}
           options={categories}
           current={currentSelection?.name}
          />
         );
        }}
        name="categoryId"
        rules={{
         required: true
        }}
       />
      )}
      <Field
       {...FormRegister('name', {
        required: 'Required',
       })}
       placeholder="Name"
       error={errors.name}
       type="text"
      />
      <Field
       {...FormRegister('price', {
        required: 'Required',
       })}
       placeholder="Price"
       error={errors.price}
       type="number"
      />
      <span>Description</span>
      <textarea
       {...FormRegister('description')}
       placeholder='Description'
       className={classes.textArea}
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
  </>
 )
}
export default EditProductPage