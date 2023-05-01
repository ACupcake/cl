import './App.css'
import SignUp from './pages/Signup'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />
  },
  {
    path: "/home",
    element: <Home />
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
