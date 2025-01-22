import { useEffect, useState } from "react";

export const useValidation = (value: string, validations: any) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isMinLengthError, setIsMinLengthError] = useState(false);
  const [isMaxLengthError, setIsMaxLengthError] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isMinLengthError":
          if (value.length < validations[validation]) {
            setIsMinLengthError(true);
          } else {
            setIsMinLengthError(false);
          }
          break;
        case "isEmpty":
          if (value) {
            setIsEmpty(false);
          } else {
            setIsEmpty(true);
          }
          break;
        case "isMaxLengthError":
          if (value.length > validations[validation]) {
            setIsMaxLengthError(true);
          } else {
            setIsMaxLengthError(false);
          }
          break;
        case "isEmailError":
          const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!re.test(String(value).toLocaleLowerCase())) {
            setIsError(true);
          } else {
            setIsError(false);
          }
          break;
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isError || isEmpty || isMinLengthError || isMaxLengthError) {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
    }
  }, [isError, isEmpty, isMinLengthError, isMaxLengthError]);

  return {
    isEmpty,
    isMinLengthError,
    isError,
    isMaxLengthError,
    isInputValid
  };
};
