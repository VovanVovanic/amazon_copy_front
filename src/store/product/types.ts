import { ICategory } from "../category/types";
import { IPagination } from "../pagination/types";
import { IReview } from "../reviews/types";

export enum EnumProductsSort {
  HIGH_PRICE = "high-price",
  LOW_PRICE = "low-price",
  NEWEST = "newest",
  OLDEST = "oldest",
}
export interface IProductData {
  name: string;
  description?: string;
  price: number;
  categoryId: number;
}
export interface IProduct extends IProductData {
  id: number;
  slug: string;
  reviews: IReview[];
  createdAt: string;
  images: string[];
  category: ICategory;
}

export interface IProductFilters extends IPagination {
  sort?: EnumProductsSort | undefined;
  searchTerm?: string;
  ratings: string;
  minPrice?: string;
  maxPrice?: string;
  categoryId?: string;
}
export interface IProductDetails {
  product: IProduct;
}

export type TypePaginationProducts = {
  length: number;
  products: IProduct[];
};

export type TypeParamSlug = {
  slug?: string;
};

export interface IPageSlugParam {
  params: TypeParamSlug;
}
