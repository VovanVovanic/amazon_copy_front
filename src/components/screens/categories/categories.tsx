import { useAdminCategories } from "@/hooks/admin/useAdminCategories"
import AdminList from "@/ui/adminList/adminList"
import { IListItem } from "@/ui/adminList/types"
import Button from "@/ui/buttons/button"
import DeleteConfirm from "@/ui/deleteConfirm/deleteConfirm"
import Heading from "@/ui/heading/heading"
import Modal from "@/ui/modal/modal"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"

const Categories: FC = () => {
 const { mutate, isFetching, data } = useAdminCategories()
 const router = useRouter()
 const [open, setOpen] = useState<boolean>(false)
 const [item,setItem] = useState<IListItem | null>(null)

 const onRemoveConfirm = (data: IListItem) => {
  setOpen(true)
  setItem(data)
 }

 const onClose = () => {
  setOpen(false)
  setItem(null)
 }

 const onDelete = () => {
  item && mutate(item.id)
  setOpen(false)
  setItem(null)
 }

 
 return (
  <>
   <div className="mb-7 flex justify-between">
    <Heading >Categories</Heading>
    <Button
     onClick={()=>router.push('/admin/category/add')}
     variant='light'
    >
     Add
    </Button>
   </div>
   
   <AdminList
    isLoading={isFetching}
    listItems={data}
    removeHandler={onRemoveConfirm}
   /> 
   <Modal isOpen={open} onClose={()=>setOpen(false)}>
    <DeleteConfirm
     title={`category ${item?.items[0]}`}
     onClose={onClose}
     onDelete={onDelete}
    />
 </Modal>
  </>
 )
}
export default Categories