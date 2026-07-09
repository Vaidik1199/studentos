import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }

    setLoading(false);
  }, []);

  const login = (jwt, userData = null) => {
    localStorage.setItem("token", jwt);

    setToken(jwt);

    if (userData) {
      localStorage.setItem(
        "user",
        JSON.stringify(userData)
      );

      setUser(userData);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
  };

  const updateUser = (userData) => {
    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        loading,
        isAuthenticated: !!token,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}