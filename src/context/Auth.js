import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useState } from 'react';
import { auth } from '~/firebase/firebaseConfig';

const AuthContext = createContext();

function AuthProvider({ children, ...props }) {
    const [user, setUser] = useState(null);

    onAuthStateChanged(auth, (user) => {
        setUser(user);
    });

    return (
        <AuthContext.Provider value={{ user, setUser }} {...props}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

export default useAuth;
export { AuthProvider };
