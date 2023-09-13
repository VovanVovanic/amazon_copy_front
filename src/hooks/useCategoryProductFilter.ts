import { usePathname, useRouter as appRouter } from "next/navigation";
import { useTypedSelector } from "./useTypedSelector";
import { useActions } from "./useActions";
import { EnumProductsSort } from "@/store/product/types";
import { useEffect, useState } from "react";

export const useCategoryProductFilter = () => {
  const pathname = usePathname();
  const { replace } = appRouter();
  const { categoryProdictsFilter, categoryPath } = useTypedSelector(
    (state) => state.filters
  );
  const { setCategoryProductFilter, resetQueryParam } = useActions();
  const slug = pathname.split("/")[2];
  const isCategory = pathname.includes("/category/");
  const [trigger, setTrigger] = useState<boolean>(false);

  useEffect(() => {
    const path = categoryPath ? categoryPath : pathname;
    isCategory && replace(`${path}?sort=${categoryProdictsFilter}`);
    resetQueryParam();
  }, [categoryPath, trigger]);

  const updateFilter = (sort: EnumProductsSort) => {
    setCategoryProductFilter(sort);
    setTrigger(!trigger);
  };

  return {
    updateFilter,
    slug,
    isCategory,
    categoryProdictsFilter,
    trigger,
    setTrigger,
  };
};
