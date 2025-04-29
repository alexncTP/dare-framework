import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

// Add title to the page
document.title = "DARE Framework - Design AI Reliable Engagement";

root.render(<App />);
