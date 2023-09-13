import classes from "./edit.module.scss";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Spinner from "@/ui/spinner/spinner";
import Field from "@/ui/input/input";
import Button from "@/ui/buttons/button";
import Heading from "@/ui/heading/heading";
import { ICategory } from "@/store/category/types";
import Category from "@/services/caterory/category.service";
import { useRouter } from "next/navigation";
import Confirm from "@/ui/editConfirm/confirm";

const EditCategoryPage: FC<{ category: ICategory }> = ({ category }) => {
  const router = useRouter();
  const {
    register: FormRegister,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ICategory>({
    mode: "onChange",
    defaultValues: {
      name: category.name,
      id: category.id,
    },
  });

  const queryClient = useQueryClient();

  const { mutate, isSuccess, isLoading } = useMutation(
    ["update product"],
    (data: ICategory) => Category.update(String(category.id), data),
    {
      onError: () => {
        console.error("err");
        queryClient.invalidateQueries(["update category"]);
      },
    }
  );

  const onSubmit: SubmitHandler<ICategory> = (data) => {
    mutate(data);
  };
  if (isSuccess)
    return (
      <Confirm
        title={`Category ${category.name} updated`}
        onClick={() => router.back()}
      />
    );

  return (
    <>
      {category && (
        <Heading className={classes.title}>
          Edit category: {category.name}
        </Heading>
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <div>
            <Field
              {...FormRegister("name", {
                required: "Required",
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
            <Button variant="dark">Update</Button>
          </div>
        </form>
      )}
    </>
  );
};
export default EditCategoryPage;
