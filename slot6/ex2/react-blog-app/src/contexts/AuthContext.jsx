import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // fake user (demo)
    if (email === 'admin@gmail.com' && password === '123456') {
      const fakeUser = {
        id: 1,
        name: 'Admin',
        email,
      };
      setUser(fakeUser);
      return { success: true };
    }

    return { success: false, message: 'Sai email hoặc mật khẩu' };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);