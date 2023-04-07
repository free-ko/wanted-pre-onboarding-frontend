import { SyntheticEvent, useCallback, useState } from "react";

import useValidate from "./useValidate";

const useForm = () => {
  const [isEmail, warnEmailList, onCheckEmail] = useValidate({ type: "email" });
  const [isPassword, warnPasswordList, onCheckPassword] = useValidate({ type: "password" });

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputValue = useCallback(
    (key: "email" | "password") => (e: SyntheticEvent) => {
      const value = (e.target as HTMLInputElement).value;
      setUserInfo({ ...userInfo, [key]: value });

      if (key === "email") {
        onCheckEmail(value);
      }

      if (key === "password") {
        onCheckPassword(value);
      }
    },
    [userInfo]
  );

  return {
    userInfo,
    setUserInfo,
    isEmail,
    isPassword,
    warnEmailList,
    warnPasswordList,
    handleInputValue,
  };
};

export default useForm;
