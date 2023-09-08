import { products } from "@/api/api.endpoints"
import { instance } from "@/api/api.interceptor"
import { ByFeature } from "@/store/category/types"
import { IProduct, IProductData, IProductFilters, TypePaginationProducts } from "@/store/product/types"
import test from "node:test"

class ProductService {
  async getAll(queryData?: IProductFilters) {
    const { data } = await instance<TypePaginationProducts>({
      url: `${products.all}`,
      method: "GET",
      params: queryData
    })
    return data
  }

  async getProductByFeature(type: ByFeature, data: string) {
    return instance<IProduct, any>({
      url: `${products.all}${type}/${data}`,
      method: "GET"
    })

  }
  async getProductByCategory(categorySlug: string, sort: string) {
    return instance<IProduct[], any>({
      url: `${products.category}${categorySlug}/${sort}`,
      method: "GET"
    })

  }

  async getSimilarProducts(id: string) {
    return instance<IProduct[]>({
      url: `${products.similar}${id}`,
      method: "GET"
    })

  }

  async create(data: IProductData) {
    return instance<IProduct>({
      url: `${products.create}`,
      method: "POST",
      data
    })

  }

  async update(id: string, data: IProductData) {
    return instance<IProduct>({
      url: `${products.update}${id}`,
      method: "PUT",
      data
    })

  }

  async delete(id: string) {
    return instance<IProduct>({
      url: `${products.delete}${id}`,
      method: "DELETE",

    })

  }
}

const Products = new ProductService()
export default Products


