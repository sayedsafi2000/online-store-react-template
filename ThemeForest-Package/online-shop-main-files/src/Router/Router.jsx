import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AllProducts/AllProducts";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Search from "../Pages/Search/Search";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import ThankYou from "../Pages/ThankYou/ThankYou";
import About from "../Pages/FooterPages/About";
import Career from "../Pages/FooterPages/Career";
import Contact from "../Pages/FooterPages/Contact";
import Cookies from "../Pages/FooterPages/Cookies";
import FAQ from "../Pages/FooterPages/FAQ";
import Help from "../Pages/FooterPages/Help";
import Privacy from "../Pages/FooterPages/Privacy";
import Returns from "../Pages/FooterPages/Returns";
import Terms from "../Pages/FooterPages/Terms";
import Press from "../Pages/FooterPages/Press";
import Shipping from "../Pages/FooterPages/Shipping";
import SellOnShop from "../Pages/FooterPages/SellOnShop";



// Footer Pages

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products",
                element: <AllProducts />
            },
            {
                path: "/category/:category",
                element: <CategoryProducts />
            },
            {
                path: "/product/:id",
                element: <ProductDetails />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/thank-you",
                element: <ThankYou />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            // Footer Routes
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/career",
                element: <Career />
            },
            {
                path: "/sell-on-shop",
                element: <SellOnShop />
            },
            {
                path: "/press",
                element: <Press />
            },
            {
                path: "/terms",
                element: <Terms />
            },
            {
                path: "/privacy",
                element: <Privacy />
            },
            {
                path: "/help",
                element: <Help />
            },
            {
                path: "/shipping",
                element: <Shipping />
            },
            {
                path: "/returns",
                element: <Returns />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/faq",
                element: <FAQ />
            },
            {
                path: "/cookies",
                element: <Cookies />
            }
        ]
    }
]);

export default router;