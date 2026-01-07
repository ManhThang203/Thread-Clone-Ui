// React
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Redux
import { Provider as ReduxProvider } from "react-redux";

// Components
import ErrorBoundary from "@/components/ErrorBoundary";

// Store
import { store } from "./store/store.js";

// Css
import "./index.css";

import { Loading } from "@/components/Loading";
createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <ReduxProvider store={store}>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </ReduxProvider>
  </ErrorBoundary>,
);
