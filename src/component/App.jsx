import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import RestaurantListing from "./RestaurantListing";
import About from "./About";
import Contact from "./Contact";
import ResMenu from "./ResMenu";
import "../index.css";

const App = () => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    );
}

const router  = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <RestaurantListing />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/menu/:resId',
                element: <ResMenu />
            }
        ]
    }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);