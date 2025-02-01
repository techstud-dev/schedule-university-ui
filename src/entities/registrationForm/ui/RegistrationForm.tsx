import { useState } from "react";
import { Input } from "@/shared/ui/input/Input";
import { useModal } from "@/shared/hooks/useModal";
import { VisuallyHidden } from "@/shared/ui/visuallyHidden/VisuallyHidden";
import { Text } from "@/shared/ui/text/Text";
import r from "./RegistrationForm.module.css";

const fields = [
    {
        id: 1,
        type: "text",
        name: "surname",
        label: "Фамилия",
        placeholder: "Иванов",  
    },
    {
        id: 2,
        type: "text",
        name: "name",
        label: "Имя",
        placeholder: "Иван",   
    },
    {
        id: 3,
        type: "text",
        name: "patronymic",
        label: "Отчество",
        placeholder: "Иванович",
    },
    {
        id: 4,
        type: "text",
        name: "university",
        label: "Университет",
        placeholder: "Например: МГУ", 
    },
    {
        id: 5,
        type: "text",
        name: "group",
        label: "Группа",
        placeholder: "Например: AA01",  
    },
    {
        id: 6,
        type: "text",
        name: "sex",
        label: "Пол",
        placeholder: "Укажите пол", 
    },
    {
        id: 7,
        type: "text",
        name: "userName",
        label: "Username (после сменить нельзя)",
        placeholder: "example123",
    },
    {
        id: 8,
        type: "email",
        name: "email",
        label: "Почта",
        placeholder: "example@mail.ru",   
    },
    {
        id: 9,
        type: "tel",
        name: "tel",
        label: "Номер телефона",
        placeholder: "Например: +7-xxx-xxx-xx-xx",    
    },
];

interface RegistrationFormProps {
    changeOpen: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({changeOpen}) => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [changeCreateModal, drawCreateModal] = useModal();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: undefined
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        fields.forEach((field) => {
            if (!formData[field.name]) {
                newErrors[field.name] = `Поле ${field.label} обязательно к заполнению.`;
            }
            // Дополнительные проверки для специфических полей
            if (field.name === 'email' && formData[field.name]) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(formData[field.name])) {
                    newErrors[field.name] = 'Введите корректный e-mail.';
                }
            }
            if (field.name === 'tel' && formData[field.name]) {
                const phonePattern = /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/;
                if (!phonePattern.test(formData[field.name])) {
                    newErrors[field.name] = 'Номер телефона должен быть в формате +7-xxx-xxx-xx-xx.';
                }
            }
        });

        return newErrors;
    };

    const getFormData = (e: React.FormEvent) => {
        e.preventDefault(); 

        const validationErrors = validateForm();
        
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }

        console.log(formData);
        changeOpen();
        changeCreateModal();
        setFormData({});
    };

    const handelClick = () => {
        
        const validationErrors = validateForm();
        
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }

        changeCreateModal();
    }
    
    return (
            <form onSubmit={getFormData}>
                {fields.map(field => 
                    <Input 
                        key={field.id}
                        className={r.input}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                        required={true}
                        errorMessage={errors[field.name]}
                    />
                )}
                {drawCreateModal(
                <div className={r.container}>
                    <Text className={r.text}>Сохранить изменения?</Text>
                    <div className={r.buttonWrapper}>
                        <button className={r.button} type="button" onClick={changeCreateModal}>Отмена</button>
                        <button className={r.button} type="submit">Сохранить</button>
                    </div>
                    <button className={r.buttonClosed} type="button" onClick={changeCreateModal}>
                        <VisuallyHidden>Закрыть модальное окно</VisuallyHidden>
                    </button>
                </div>
            )}
                <button className={r.button} type="button" onClick={handelClick}>Далее</button>
            </form>
    )
}
