import { createContext } from "react";
import User from "../models/User";
import { AuthActions } from "./AuthProvider";

interface AuthContextType {
  user: User;
  dispatch: React.Dispatch<AuthActions>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
