import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { ModalProvider } from "./context/modal-context";
import "./index.css";
import { ThemeProvider } from "./context/theme-context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>
  </StrictMode>
);
