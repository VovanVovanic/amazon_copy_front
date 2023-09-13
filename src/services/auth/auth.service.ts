import { IAuthVariants } from "./../../store/user/types";
import { auth } from "@/api/api.endpoints";
import { getContentType } from "@/api/api.helper";
import { instance } from "@/api/api.interceptor";
import { IEmailPassword, IAuthResponse } from "@/store/user/types";
import axios from "axios";
import Cookies from "js-cookie";
import { saveToStorage, saveTokenStorage } from "./auth.helper";
import { get } from "react-hook-form";
class AuthService {
  async auth(type: IAuthVariants, data: IEmailPassword) {
    const res = await instance({
      url: `${auth.sign}${type}`,
      method: "POST",
      data,
    });

    if (res.data.accessToken) {
      saveToStorage(res.data);
      saveTokenStorage(res.data);
      return res.data;
    }
  }

  async getNewTokens() {
    const refreshToken = Cookies.get("refreshToken");
    const res = await axios.post<string, { data: IAuthResponse }>(
      process.env.SERVER_URL + "/auth/login/refresh",
      { refreshToken },
      { headers: getContentType() }
    );
    if (res.data.accessToken) {
      saveTokenStorage(res.data);
    }
    return res;
  }
}
export const Auth = new AuthService();
