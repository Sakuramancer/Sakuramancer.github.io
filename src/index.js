import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { configureStorage } from "./storage/storage";

configureStorage();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
