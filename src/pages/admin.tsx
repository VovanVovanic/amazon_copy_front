import { NextPageAuth } from "@/providers/authProviders/types"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"

const AdminPage: NextPageAuth = () => {

    return (
      <Meta title = "Admin Page">
        <Layout >
          <div>
            Admin
          </div>
        </Layout>
        </Meta>
   
    )
   }
   
AdminPage.isAdmin = true
   
export default AdminPage