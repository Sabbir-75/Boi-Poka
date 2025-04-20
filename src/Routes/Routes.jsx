
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
    {
     path: "/",
     Component: Root,
     children:[
      {
        index: true,
        path: "/",
        loader: () => fetch("Books.json"),
        Component: Home
      },
      {
        path: "/bookdetails/:id",
        loader: () => fetch("Books.json"),
        Component: BookDetails
      }
     ]
    }
  ])