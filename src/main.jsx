// React
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Redux
import { Provider as ReduxProvider } from "react-redux";

// Components
import ErrorBoundary from "@/components/feedback/ErrorBoundary/index.jsx";
import Toaster from "@/components/feedback/Toaster/index.jsx";

// Store
import { store } from "./store/store.js";

// i18n
import "./i18n.js";

// Css
import "./index.css";

import { Loading } from "@/components/feedback/Loading/index.jsx";
createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <ReduxProvider store={store}>
      {/* Lazy Loading */}
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
      <Toaster
        position="bottom-center"
        richColors // màu sắc đẹp (xanh thành công, đỏ lỗi...)
        duration={3500} // tự ẩn sau 3.5 giây
        closeButton // có nút X rõ ràng
      />
    </ReduxProvider>
  </ErrorBoundary>,
);
