import React, { useRef, useState } from "react";

type Validator = {
  value: boolean;
  message?: string;
};

type Props = {
  initValue: string;
  validator?: (value: string) => Validator;
};

type Return = [
  {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  },
  Validator
];

const useInput = ({ initValue, validator }: Props): Return => {
  const [value, setValue] = useState(initValue);
  const result = useRef<Validator>({ value: false });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (typeof validator === "function") {
      result.current = validator(value);
    }

    setValue(value);
  };

  return [{ value, onChange, setValue }, result.current];
};

export default useInput;
