import { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext(null);

const initialState = JSON.parse(localStorage.getItem("user")) || null;

const reducer = (user, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload };
    case "LOGOUT":
      return null;
    default:
      return user;
  }
};

export function AuthProvider({ children }) {
  const [user, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
