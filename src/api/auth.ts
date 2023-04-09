import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { apiClient } from "./client";

type Props = {
  email: string;
  password: string;
};

const login = async ({ email, password }: Props) => {
  try {
    return await apiClient.post("/auth/signin", { email, password });
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        toast("비밀번호 또는 아이디가 틀렸습니다.");
      } else {
        toast(error.response?.data.message);
      }

      return error.response;
    }
    console.log(error);
  }
};

const signup = async ({ email, password }: Props) => {
  try {
    return apiClient.post("/auth/signup", { email, password });
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data.message);
      return error.response;
    }
    console.log(error);
  }
};

const authAPI = {
  login,
  signup,
};

export default authAPI;
