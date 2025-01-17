import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isMinLengthError, setIsMinLengthError] = useState(false);
  const [isMaxLengthError, setIsMaxLengthError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isMinLengthError":
          value.length < validations[validation]
            ? setIsMinLengthError(true)
            : setIsMinLengthError(false);
          break;
        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case "isMaxLengthError":
          value.length > validations[validation]
            ? setIsMaxLengthError(true)
            : setIsMaxLengthError(false);
          break;
        case "isEmailError":
          const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          re.test(String(value).toLocaleLowerCase())
            ? setIsEmailError(true)
            : setIsEmailError(false);
          break;

        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmailError || isEmpty || isMinLengthError || isMaxLengthError) {
        setIsInputValid(false)
    } else {
        setIsInputValid(true)
    }
  }, [isEmailError, isEmpty, isMinLengthError, isMaxLengthError])

  return {
    isEmpty,
    isMinLengthError,
    isEmailError,
    isMaxLengthError,
    isInputValid
  };
};
