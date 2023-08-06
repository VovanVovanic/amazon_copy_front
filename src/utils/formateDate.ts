export const formatDate = (dateString:string) => {
 const date = new Date(dateString)

 const day = String(date.getDate()).padStart(2, "0")
 const month = date.toLocaleString('en', { month: 'short'})
 const year = date.getFullYear()

 return `${year} ${month} ${day}`
}