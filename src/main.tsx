import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes.tsx";
import "./index.css";
import ThemeProvider from "./hooks/ThemeProvider.tsx";
import AuthProvider from "./hooks/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
);
