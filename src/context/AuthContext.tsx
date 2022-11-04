import React from "react";
import { createContext, useState } from "react";


//Definir como luce, que informacion tendre aqui

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// Lo usaremos para decirle a React como luce y que expone el context

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    signInWithUsername: (username: string) => void;
}

// Crear el contexto

export const AuthContext = createContext( {} as AuthContextProps);

// Componente proveedor del estado

export const AuthProvider = ({ children }: any) => {
    
        const [authState, setAuthState] = useState(authInitialState);
    
        const signIn = () => {
            setAuthState({
                ...authState,
                isLoggedIn: true,
                username: 'no-username-yet'
            });
        }
    
        const signInWithUsername = (username: string) => {
            setAuthState({
                ...authState,
                isLoggedIn: true,
                username
            });
        }
    
        const changeFavoriteIcon = (iconName: string) => {
            setAuthState({
                ...authState,
                favoriteIcon: iconName
            });
        }
    
        const logout = () => {
            setAuthState({
                ...authState,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            });
        }
    
        return (
            <AuthContext.Provider value={{
                authState,
                signIn,
                changeFavoriteIcon,
                logout,
                signInWithUsername
            }}>
                { children }
            </AuthContext.Provider>
        )
    }

