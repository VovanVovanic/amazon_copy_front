import { useAdminProducts } from "@/hooks/admin/useAdminProducts"
import AdminList from "@/ui/adminList/adminList"
import { IListItem } from "@/ui/adminList/types"
import Button from "@/ui/buttons/button"
import DeleteConfirm from "@/ui/deleteConfirm/deleteConfirm"
import Heading from "@/ui/heading/heading"
import Modal from "@/ui/modal/modal"
import { useRouter } from "next/router"
import { FC, useState } from "react"

const Products: FC = () => {
 const { mutate, isFetching, data } = useAdminProducts()
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
    <Heading >Products</Heading>
    <Button
     onClick={()=>router.push('/admin/product/add')}
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
     title={`product ${item?.items[0]}`}
     onClose={onClose}
     onDelete={onDelete}
    />
 </Modal>
  </>
 )
}
export default Products