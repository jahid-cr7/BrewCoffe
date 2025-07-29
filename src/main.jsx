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
import PrivateAuth from "./Route/PrivateAuth.jsx";
import Users from "./Users/Users.jsx";


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
        element: (
          <PrivateAuth>
            <AddCoffee />
          </PrivateAuth>
        ),
      },
      {
        path: "DisplayCoffee",
        element: (
          <PrivateAuth>
            <DisplayCoffee />
          </PrivateAuth>
        ),
      },
      {
        path: "coffeeDisplay",
        element: (
          <PrivateAuth>
            <CoffeeShow />
          </PrivateAuth>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/${params._id}`),
      },
      {
        path: "coffee/:id",
        element: (
          <PrivateAuth>
            <UpdateCoffee />
          </PrivateAuth>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
      },
      {
        path: "update/:id",
        element: (
          <PrivateAuth>
            <UpdateCoffee />
          </PrivateAuth>
        ),
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
      {
        path: "/users",
        Component: Users,
        loader: () => fetch("http://localhost:3000/users"),
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
