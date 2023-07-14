import Catalog from "@/components/catatalog/catalog"
import { useProfile } from "@/hooks/useProfile"
import { NextPageAuth } from "@/providers/authProviders/types"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"

const FavoritesPage: NextPageAuth = () => {
 const {profile} = useProfile() 
 return (
   <Meta title = "Favorites Page">
     <Layout >
       <Catalog title="Favorites" goods={profile?.favorites || []}/>
     </Layout>
     </Meta>

 )
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage