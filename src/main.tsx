import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// Styles are loaded early via <link rel="stylesheet"> in index.html to prevent FOUC

createRoot(document.getElementById("root")!).render(<App />);