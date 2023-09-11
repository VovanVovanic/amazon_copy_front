export const capitalize = (str: string): string => {

 const arr = str.split(" ")
 const result = arr.map((el) => {
  const res = el ? el[0].toUpperCase() + el.substring(1) : ''
  return res
 })

 return result.join(" ")
}
