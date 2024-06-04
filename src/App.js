import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import LoginRegister from './components/LoginRegister';
import Forget from './components/Forget';


function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginRegister />,
    },
    {
      path: "/forget",
      element: <Forget />,
    },
  ])

  return <RouterProvider router={appRouter} />
}
export default App;
