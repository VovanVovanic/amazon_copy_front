import { IProduct, IProductData } from "@/store/product/types"
import classes from './edit.module.scss'
import { ChangeEvent, ChangeEventHandler, FC } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ICategorySelect, IProductAction } from "./types";
import Products from "@/services/products/products.service";
import Spinner from "@/ui/spinner/spinner";
import Field from "@/ui/input/input";
import Button from "@/ui/buttons/button";
import SelectCategory from "./select";
import Heading from "@/ui/heading/heading";
import { useRouter } from "next/router";
import Confirm from "@/ui/editConfirm/confirm";


const EditProductPage: FC<{ product?: IProduct, categories: ICategorySelect[], variant:IProductAction}> = ({ product, categories, variant }) => {

  const values = (variant === IProductAction.Edit && product) ? {
    name:product.name,
    price:product.price,
    description:product.description,
    categoryId: product.category.id
  } : {
    name:"",
    price: 0,
    description:"",
    categoryId: categories[0].id
  }
  
 const router = useRouter()
 const {
  register: FormRegister,
  handleSubmit,
  formState: { errors },
  reset,
  control
 } = useForm<IProductData>({
  mode: 'onChange', defaultValues: {...values}
 });

 const queryClient = useQueryClient();

 const { mutate:edit, isSuccess:isEditSuccess, isLoading:IsEditLoading } = useMutation(
  ['update product'],
  (data: IProductData) => Products.update(String(product?.id), data),
  {
   onError: () => {
    console.error('err');
    queryClient.invalidateQueries(['update product']);
   }
  }
  );
  
  
 const { mutate:add, isSuccess:isAddSuccess, isLoading:isAddLoading } = useMutation(
  ['add product'],
  (data: IProductData) => Products.create(data),
  {
   onError: () => {
    console.error('err');
    queryClient.invalidateQueries(['add product']);
   }
  }
 );

  const onSubmit: SubmitHandler<IProductData> = data => {
    if (variant === IProductAction.Edit) edit(data)
    if (variant === IProductAction.Add) {
      add(data)
      queryClient.refetchQueries()
    }
 
 };
  if (isEditSuccess || isAddSuccess) return <Confirm
    title={`Product
     ${variant === IProductAction.Edit ? product?.name : ""}
     ${variant === IProductAction.Edit ? "updated" : "added"}`}
    onClick={()=>router.back()}
  />

 return (
  <>
   
   { product && <Heading className={classes.title}>
       {IProductAction.Edit ? `Edit product: ${product.name}` : "Add Product"}
   </Heading> }

   {isAddLoading || IsEditLoading ? (
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