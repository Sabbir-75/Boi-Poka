
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
     path: "/",
     Component: Root,
     errorElement: <div className='text-center text-3xl'>I am error</div>,
     children:[
      {
        index: true,
        path: "/",
        loader: () => fetch("Books.json"),
        Component: Home
      },
      {
        path: "/bookdetails/:id",
        element: <div>Hello Book Details</div>
      }
     ]
    }
  ])