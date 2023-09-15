import classes from "./search.module.scss";
import cn from "classnames";
import { ChangeEvent, FC, useState } from "react";
import { ISearch } from "./types";
import { ImSearch } from "react-icons/im";
import { useRouter } from "next/router";
import { useFilters } from "@/hooks/useFilters";
import { useActions } from "@/hooks/useActions";

const Search: FC<ISearch> = ({ variant, className, ...rest }) => {
  const [term, setTerm] = useState<string>("");
  const router = useRouter();
  const { updateParams } = useFilters();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
  };

  const onPath = () => {
    router.push(`/search_result?searchTerm=${term.trim().toLowerCase()}`);
    updateParams("searchTerm", term);
  };

  const onKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      onPath()
    }
    if (e.code === "Escape") {
      setTerm("");
    }
  };
  return (
    <div
      className={cn(classes.search, {
        [classes.hide]: variant === "hidden",
      })}
    >
      <input
        type="search"
        onKeyDown={(e) => onKeyHandler(e)}
        onChange={(e) => onChangeHandler(e)}
      />
      <button onClick={onPath} className={cn(classes.glass)}>
        <ImSearch />
      </button>
    </div>
  );
};

export default Search;
