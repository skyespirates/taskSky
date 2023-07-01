import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// state management
import { Provider } from "react-redux";
import store from "./store.ts";

// context provider
import { TodoProvider } from "./context/todoContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <TodoProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </TodoProvider>
  </Provider>
);
