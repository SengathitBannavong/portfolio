import { ViteReactSSG } from "vite-react-ssg/single-page";
import App from "./App";
import "./styles.css";

export const createRoot = ViteReactSSG(<App />);
