import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginRegister from './LoginRegister'
import Forget from './Forget'
import Browse from './Browse'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginRegister />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/forget",
      element: <Forget />,
    },
  

  ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
