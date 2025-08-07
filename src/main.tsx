import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { StoreProvider } from "./app/providers/store-provider";

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
