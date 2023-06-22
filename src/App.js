import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/pages/HomePage";
import AndrakasPage from "./components/pages/AndrakasPage";
import ErrorPage from "./components/pages/ErrorPage";

const router = createBrowserRouter([
  { path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/sheet", element: <AndrakasPage /> },
    ]
  }
])

const App = (props) => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
