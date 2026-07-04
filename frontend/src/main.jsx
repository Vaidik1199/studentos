import React from "react";
import ReactDOM from "react-dom/client";

import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>

      <App />

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2500,

          style: {
            background: "#0f172a",
            color: "#ffffff",
            border: "1px solid #334155",
          },

          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#ffffff",
            },
          },

          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#ffffff",
            },
          },
        }}
      />

    </AuthProvider>
  </React.StrictMode>
);