import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isMinLengthError, setIsMinLengthError] = useState(false);
  const [isMaxLengthError, setIsMaxLengthError] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);

  const [error, setError] = useState('')
  const [errorEmpty, setErrorEmpty] = useState('')
  const [errorMin, setErrorMin] = useState('')
  const [errorMax, setErrorMax] = useState('')

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isMinLengthError":
          if (value.length < validations[validation]) {
            setIsMinLengthError(true)
            setErrorMin('Слишком короткий')
          } else {
            setIsMinLengthError(false)
            setErrorMin('')
          }
          break;
        case "isEmpty":
          if (value) {
            setIsEmpty(false)
          } else {
            setIsEmpty(true)
            setErrorEmpty('Поле не может быть пустым')
          }
          break;
        case "isMaxLengthError":
          if (value.length > validations[validation]) {
            setIsMaxLengthError(true)
            setErrorMax("Слишком длинный")
          } else {
            setIsMaxLengthError(false)
            setErrorMax('')
          }
          break;
        case "isEmailError":
          const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (re.test(String(value).toLocaleLowerCase())) {
            setIsError(true)
            setError('Некорректный')
          } else {
            setIsError(false)
            setError('')
          }
          break;
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isError || isEmpty || isMinLengthError || isMaxLengthError) {
        setIsInputValid(false)
    } else {
        setIsInputValid(true)
    }
  }, [isError, isEmpty, isMinLengthError, isMaxLengthError])

  return {
    isEmpty,
    isMinLengthError,
    isError,
    isMaxLengthError,
    isInputValid,
    error,
    errorEmpty,
    errorMin,
    errorMax
  };
};
