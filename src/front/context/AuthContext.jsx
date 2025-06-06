import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        // Verifica si hay token en localStorage
        const token = JSON.parse(localStorage.getItem("token"));
        if (token) setUser({ "token": token });
    }, []);
    const login = (token) => {
        localStorage.setItem("token", JSON.stringify (token));
        setUser({ token });
    };
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);

        localStorage.removeItem("user");
        

    };
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);