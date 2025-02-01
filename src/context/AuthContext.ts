import { createContext } from 'react';
interface AuthContextType {
    isAuth: boolean;
    setIsAuth: (auth: boolean) => void;
    isLoading: boolean;
}
export const AuthContext = createContext<AuthContextType | null>(null);
