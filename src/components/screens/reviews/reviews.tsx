import { useAdminReviews } from "@/hooks/admin/useAdminReviews";
import AdminList from "@/ui/adminList/adminList";
import Heading from "@/ui/heading/heading";
import { FC } from "react";

const Reviews: FC = () => {
  const { isFetching, data } = useAdminReviews();
  return (
    <>
      <Heading className="mb-7 md-custom:pt-10 md-custom:text-sm">
        Reviews
      </Heading>
      <AdminList isLoading={isFetching} listItems={data} data="review" />
    </>
  );
};
export default Reviews;
