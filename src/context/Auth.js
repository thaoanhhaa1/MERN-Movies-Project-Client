import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '~/firebase/firebaseConfig';

const AuthContext = createContext();

function AuthProvider({ children, ...props }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, 'users', user.uid);

                const result = await getDoc(docRef);

                setUser({
                    ...result.data(),
                    ...user,
                });
            } else {
                setUser(null);
            }
        });
    }, []);

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
