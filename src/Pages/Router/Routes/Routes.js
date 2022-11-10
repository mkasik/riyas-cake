import Main from "../../../Layout/Main";
import PrivateRouter from "../../../PrivateRouter/PrivateRouter";
import UpdateReview from "../../../UpdateReview/UpdateReview";
import AddServices from "../../AddServices/AddServices";
import Blog from "../../Blog/Blog/Blog";
import Details from "../../Details/Details";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import MyReviews from "../../MyReviews/MyReviews";
import Register from "../../Register/Register";
import Services from "../../Services/Services/Services";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/addservices',
                element: <AddServices></AddServices>,
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>,
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://cake-server-mocha.vercel.app/services/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://cake-server-mocha.vercel.app/reviews/${params.id}`)
            },
        ]
    }
]);

export default router;