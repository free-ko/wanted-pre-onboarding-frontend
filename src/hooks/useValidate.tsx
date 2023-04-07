import { useState } from "react";

type Props = {
  type: "email" | "password";
};

type UseValidateReturnType = [
  validity: boolean,
  warnList: string[],
  onCheckValidity: (text: string) => void
];

const useValidate = ({ type }: Props): UseValidateReturnType => {
  const [warnList, setWarnList] = useState<string[]>([]);
  const [validity, setValidity] = useState<boolean>(false);

  const onCheckValidity = (text: string) => {
    const warnList: string[] = [];

    if (!text) {
      return setValidity(false);
    }

    const regexForValAuth = {
      password: {
        warnText: "비밀번호는 8글자 이상이어야 합니다.",
        fn: new RegExp("(?=.{8,})"),
      },
      email: {
        warnText: "이메일에는 @가 포함되어야 합니다.",
        fn: new RegExp("@"),
      },
    };

    const { warnText, fn } = regexForValAuth[type];

    if (!fn.test(text)) {
      warnList.push(warnText);
    }

    setWarnList(warnList);

    if (warnList.length > 0) {
      setValidity(false);
    } else {
      setValidity(true);
    }
  };

  return [validity, warnList, onCheckValidity];
};

export default useValidate;
