import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/Signup/signup";
import Dashboard from "./pages/dashboard/dashboard";
import ErrorPage from "./components/errorBoundary/errorBoundary";
import Counter from "./pages/counter/counter";
import RootLayout from "./pages/rootLayout/rootLayout";
import SkillDashboard from "./pages/skillDashBoard/skillDashBoard";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      index: true,
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
    {
      path: "/skill",
      element: <SkillDashboard />,
    },
    {
      path: "/dashboard",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
