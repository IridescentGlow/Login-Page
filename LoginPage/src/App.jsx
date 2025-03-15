import React from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import { AuthProvider } from "./pages/AuthProvider"
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Home from "./pages/HomePage";
import Services from "./pages/ServicesPage";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:  <AuthProvider>
        <LoginPage />
      </AuthProvider>,
    },
    {
      path: "/Home",
      element: <AuthProvider>
        <Home />
      </AuthProvider>,
    },
    {
      path: "/About",
      element: <AuthProvider>
        <About />
      </AuthProvider>,
    },
    {
      path: "/Services",
      element: <AuthProvider>
        <Services />
      </AuthProvider>,
    },
    {
      path: "/Contact",
      element: <AuthProvider>
        <Contact />
      </AuthProvider>,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
