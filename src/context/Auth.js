import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useState } from 'react';
import { auth } from '~/firebase/firebaseConfig';

const AuthContext = createContext();

function AuthProvider(props) {
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (user) => {
        setUser(user ?? {});
    });

    return <AuthContext.Provider value={{ user, setUser }} {...props} />;
}

function useAuth() {
    return useContext(AuthContext);
}

export default useAuth;
export { AuthProvider };
