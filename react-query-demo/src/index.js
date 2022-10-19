/**
 * @author Charles
 * 
 * React Query 사용을 위해 <QueryClientProvider> 사용
 * Ant Design 사용을 위해 -> import "antd/dist/antd.css"
 * 
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "antd/dist/antd.css"; 
import "./index.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
