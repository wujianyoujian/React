import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./pages/App";

const List = lazy(() => import("./pages/List"));
const Detail = lazy(() => import("./pages/Detail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/list",
    element: (
      <Suspense>
        <List />
      </Suspense>
    ),
  },
  {
    path: "/detail/:id",
    element: (
      <Suspense>
        <Detail />
      </Suspense>
    ),
  },
]);

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
