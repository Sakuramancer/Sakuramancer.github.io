import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/pages/HomePage";
import SheetPage from "./components/pages/SheetPage";
import ErrorPage from "./components/pages/ErrorPage";

const router = createBrowserRouter([
  { path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "sheets/:id", element: <SheetPage /> },
    ]
  }
])

const App = (props) => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
