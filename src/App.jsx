//rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Layout

import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";

// pages

import CreatePosts from "./pages/admin/CreatePost";
import DashboardPage from "./pages/admin/DashboardPage";
import LoginPage from "./pages/auth/LoginPage";
import DeatilPostsPage from "./pages/landing/DeatilPostsPage";
import HomePage from "./pages/landing/HomePage";
import PostsPage from "./pages/landing/PostsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostsPage />,
      },
      {
        path: "/detail",
        element: <DeatilPostsPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <CreatePosts />,
      },
      {
        index: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
