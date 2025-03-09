# React Context ( State management )

> **The****Context API****is a powerful feature of React that allows you to**
>
> share values between components without having to pass props
>
> manually at every level (a process known as "**prop drilling**").

- This Project is for practicing react context for state management on the client side.
- In this project there are two contexts, which are Auth context and Theme Context.
- ```js
  import { createContext } from "react";
  import User from "../models/User";
  import { AuthActions } from "./AuthProvider";

  interface AuthContextType {
    user: User;
    dispatch: React.Dispatch<AuthActions>;
  }

  const AuthContext = createContext<AuthContextType>({} as AuthContextType);

  export default AuthContext;


  ///////// in the ThemeContext.tsx
  import { createContext, Dispatch } from "react";

  interface ThemeContextType {
    isLightMode: boolean;
    setIsLightMode: Dispatch<React.SetStateAction<boolean>>;
  }

  const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

  export default ThemeContext;
  ```
- Both contexts have their own hook, because why call `useContext( theContextName )`  everytime when we need to use our context just call it one time and use that function everytime.
- ```js
  import { useContext } from "react";
  import AuthContext from "./AuthContext";

  const useAuth = () => useContext(AuthContext);

  export default useAuth;

  ///////in useTheme.tsx file

  import { useContext } from "react";
  import ThemeContext from "./ThemeContext";

  const useTheme = () => useContext(ThemeContext);

  export default useTheme;

  ```

  ### Providing Context
- providing a context to a component involves wrapping the component in a context provider. i.e.
- ```js
  ////////////////////////////////////////
  // This is the Provider    //
  ////////////////////////////////////////
  // AuthProvider.tsx

  const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, dispatch] = useReducer(AuthReducer, { isLoged: false });
    return (
      <AuthContext.Provider value={{ user: user, dispatch: dispatch }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export default AuthProvider;

  ///////////////////////////////////////////////////////////////////
  // This is How the component is wraped //
  /////////////////////////////////////////////////////////////////
  // main.tsx
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={routes} />
        </ThemeProvider>
      </AuthProvider>
    </StrictMode>,
  );


  ```

  ### Using a Context
- Using a context in a provided component looks like. i.e toggling the theme, logging in and logging out
- ```js
  const NavBar = () => {
    const { isLightMode, setIsLightMode } = useTheme();
    const { user } = useAuth();

    return (
      <div className="...">
          ...
          {user.isLoged ? <ProfileLink /> : <LoginLink />}
          <li>
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className={`... ${!isLightMode ? "bg-white text-black" : "bg-black text-white"}`}
            >
              {isLightMode ? <Sun /> : <Moon />}
            </button>
          </li>
        </ul>
      </div>
    );

  const LoginLink = () => {
    const navigate = useNavigate();
    const { dispatch } = useAuth();
    const { isLightMode } = useTheme();

    const handleLogin = async () => {
      dispatch({
        type: "LOGIN",
        user: {
          isLoged: true,
          name: "Habib Elias",
          phNum: "0940827141",
          university: "AASTU",
        },
      });

      // navigate to the homepage with a new user
      navigate("/");
      alert("Successfully Logged In 🍾🍾🎉🎉");
    };
    return (
      <button
        onClick={handleLogin}
        className={`"...""}`}
      >
        <LogIn />
        Login
      </button>
    );
  };


  ```

## Deployment Link

[https://react-router-r5dacm5p7-habib-elias-projects.vercel.app](https://react-router-roan-seven.vercel.app/)
