import { useState } from "react"
import { useValidation } from "./useValidation";

// Определяем интерфейс для валидаций
interface Validation {
    isEmpty?: boolean;
    isMinLengthError?: number;
    isMaxLengthError?: number;
    isEmail?: boolean;
}

// Используем этот интерфейс в качестве типа для validations
export const useInput = (initialValue: string, validations: Validation) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    
    const valid = useValidation(value, validations);

    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setIsDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}