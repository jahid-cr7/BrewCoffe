import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Components/Home.jsx";
import AddCoffee from "./Pages/AddCoffee.jsx";
import DisplayCoffee from "./Pages/DisplayCoffee.jsx";
import CoffeeShow from "./Pages/CoffeeShow.jsx";
import UpdateCoffee from "./Pages/UpdateCoffee.jsx";
import Footer from "./Components/Footer.jsx";
import SignUp from "./Pages/SignUp.jsx";
import AuthProvider from "./ContextAPI/AuthProvider.jsx";
import SignIn from "./Pages/SignIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/coffee"),
      },
      {
        path: "AddCoffee",
        element: <AddCoffee />,
      },
      {
        path: "DisplayCoffee",
        element: <DisplayCoffee />,
      },
      {
        path: "coffeeDisplay",
        element: <CoffeeShow />,
        loader: ({ params }) => fetch(`http://localhost:3000/${params._id}`),
      },
      {
        path: "coffee/:id",
        element: <CoffeeShow />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
      },
      {
        path: "update/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
