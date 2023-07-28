export const updateRatingQuery = (initRating: string, rating: string) => {
 let arr: string[] = initRating !== "" ? initRating.split("|") : []
 if (!arr.includes(rating)) {
  arr.push(rating)
 }
 else {
  arr = arr.filter((el) => el !== rating)
 }
 return arr.join("|")
}

