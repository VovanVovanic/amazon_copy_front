import Layout from "@/ui/layout/layout";
import Meta from "@/ui/meta/meta";

import { NextPageAuth } from "@/providers/authProviders/types";
import ThankYou from "@/components/screens/thankYou/thank";

const ThanksPage: NextPageAuth = () => {
  return (
    <Meta title="Thanks Page">
      <Layout>
        <ThankYou />
      </Layout>
    </Meta>
  );
};

ThanksPage.isOnlyUser = true;

export default ThanksPage;
