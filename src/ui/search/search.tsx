import classes from './search.module.scss'
import cn from 'classnames'
import { ChangeEvent, FC, useState } from 'react'
import { ISearch } from './types'
import { ImSearch } from 'react-icons/im';
import { useRouter } from 'next/router';

const Search: FC<ISearch> = () => {
 const [term, setTerm] = useState<string>("")
 const router = useRouter()

 const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  setTerm(e.currentTarget.value)
 }

 const onPath = () => {
  
  router.push(`/search_result?searchTerm=${term.trim().toLowerCase()}`)
 }

 const onKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.code === 'Enter') {
   onPath()
   setTerm("")
  }
  if (e.code === "Escape") {
   setTerm("")
  }
 }
 return (
  <div className={cn(classes.search)}>
   <input
    type="search"
    onKeyDown={(e) => onKeyHandler(e)}
    onChange={(e) => onChangeHandler(e)}
   />
   <button
    onClick={onPath}
    className={cn(classes.glass)}>
    <ImSearch />
   </button>
  </div>

 )
}

export default Search