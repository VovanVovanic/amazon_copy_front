import { EnumProductsSort } from "@/store/product/types";
import { ISortType } from "@/ui/dropdown/types";

export const dropItems: ISortType<EnumProductsSort>[] = [
  { key: EnumProductsSort.NEWEST, label: "Newest" },
  { key: EnumProductsSort.OLDEST, label: "Oldest" },
  { key: EnumProductsSort.HIGH_PRICE, label: "High Price" },
  { key: EnumProductsSort.LOW_PRICE, label: "LowPrice" },
];
