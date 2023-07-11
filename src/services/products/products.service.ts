import { products } from "@/api/api.endpoints"
import { instance } from "@/api/api.interceptor"
import { ByFeature } from "@/store/category/types"
import { IProduct, IProductData, IProductFilters } from "@/store/product/types"

class ProductService{
 async getAll(data?:IProductFilters) {
  return instance<{products:IProduct[], length:number}>({
   url: `${products.all}`,
   method: "GET",
   params:data
  })
 }
 
 async getProductByFeature(type: ByFeature, data: string) {
  return instance<IProduct[]>({
   url: `${products.all}${type}/${data}`,
   method:"GET"
  })
  
 }
 async getProductByCategory(categorySlug:string) {
  return instance<IProduct[]>({
   url: `${products.category}${categorySlug}`,
   method:"GET"
  })
  
 }

 async getSimilarProducts(id:string) {
  return instance<IProduct[]>({
   url: `${products.similar}${id}`,
   method:"GET"
  })
  
 }

 async create() {
  return instance<IProduct>({
   url: `${products.create}`,
   method:"POST"
  })
  
 }

 async update(id:string, data:IProductData) {
  return instance<IProduct>({
   url: `${products.update}${id}`,
   method: "PUT",
   data
  })
  
 }

 async delete(id:string) {
  return instance<IProduct>({
   url: `${products.delete}${id}`,
   method: "DELETE",

  })
  
 }
}

const Product = new ProductService()
export default   Product