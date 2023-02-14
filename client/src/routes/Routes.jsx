import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AddAutor from "../pages/autors/AddAutor";
import EditAutor from "../pages/autors/EditAutor";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";


export default createBrowserRouter ([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'add',
                element: <AddAutor />
            },
            {
                path: 'edit/:id',
                element: <EditAutor />
            }
        ]
    }
])