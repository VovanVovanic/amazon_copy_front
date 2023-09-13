import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";
import { useEffect, useState } from "react";
import { IProductFilters } from "@/store/product/types";

export const useFilters = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { updateQueryParam, resetQueryParam } = useActions();
  const { replace } = useRouter();
  const { queryParams, isFilterUpdated } = useTypedSelector(
    (state) => state.filters
  );
  const [trigger, setTrigger] = useState<boolean>(false);

  useEffect(() => {
    trigger === true && resetQueryParam();
    setTrigger(false);
  }, [trigger]);

  const updateParams = (key: keyof IProductFilters, value: string | number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (value) {
      newParams.set(key, String(value));
    } else {
      newParams.delete(key);
    }
    replace(pathname + `?${newParams.toString()}`);

    updateQueryParam({ key, value });
    setTrigger(true);
  };
  return {
    updateParams,
    queryParams,
    resetQueryParam,
    isFilterUpdated,
  };
};
