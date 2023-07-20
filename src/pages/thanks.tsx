import { NextPageAuth } from "@/providers/authProviders/types"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"

const ThanksPage: NextPageAuth = () => {

    return (
      <Meta title = "Thanks Page">
        <Layout >
          <div>
            Thanks...
          </div>
        </Layout>
        </Meta>
   
    )
   }
   
   ThanksPage.isOnlyUser = true
  
   export default ThanksPage