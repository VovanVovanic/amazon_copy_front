import { instance } from "@/api/api.interceptor";
import { category } from "@/api/api.endpoints";
import { ByFeature, ICategory, ICreateCategory } from "@/store/category/types";

class CategoryService {
  async getCategoryByFeature(
    type: ByFeature,
    data: string,
    sort: string = "newest"
  ) {
    return instance<ICategory[]>({
      url: `${category.all}${type}/${data}/${sort}`,
      method: "GET",
    });
  }

  async getAllCategories() {
    return instance<ICategory[]>({
      url: `${category.all}`,
      method: "GET",
    });
  }

  async create(data: { name: string }) {
    return instance<ICategory[]>({
      url: `${category.create}`,
      method: "POST",
      data,
    });
  }

  async update(id: string, data: ICreateCategory) {
    return instance<ICategory[]>({
      url: `${category.update}${id}`,
      method: "PUT",
      data,
    });
  }

  async delete(id: string) {
    return instance<ICategory[]>({
      url: `${category.delete}${id}`,
      method: "DELETE",
    });
  }
}

const Category = new CategoryService();
export default Category;
