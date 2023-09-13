import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTypedSelector } from "./useTypedSelector";
export const useAuth = () => useTypedSelector((state) => state.user);

export const useAuthRedirect = () => {
  const { user } = useAuth();

  const router = useRouter();
  useEffect(() => {
    if (user) router.replace("/");
  }, [router, user]);
};
