import { ReactNode, useReducer } from "react";
import User from "../models/User";
import AuthContext from "./AuthContext";

interface Login {
  type: "LOGIN";
  user: User;
}

interface LogOut {
  type: "LOGOUT";
}

export type AuthActions = Login | LogOut;

const AuthReducer = (state: User, action: AuthActions): User => {
  if (action.type == "LOGIN") return action.user;
  if (action.type == "LOGOUT") return {} as User;
  return state;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(AuthReducer, { isLoged: false });
  return (
    <AuthContext.Provider value={{ user: user, dispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
