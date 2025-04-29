import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// Importar configuração i18n
import "./i18n";

const root = createRoot(document.getElementById("root")!);

// Add title to the page
document.title = "DARE Framework - Design AI Reliable Engagement";

root.render(<App />);
