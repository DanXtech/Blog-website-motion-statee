import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ZarrinFacePage from "../components/ZarrinLanding/ZarrinFacePage";
import AboutBlogSection from "../components/AboutSpage/AboutBlogSection";

import BlogSection from "../components/BlogPage/BlogSection";
import SigleInfoSection from "../components/SigleBlog/SigleInfoSection";
import ContactSection from "../components/Contact/ContactSection";
// Import other components if they are going to be used
// import Home from "../components/Home";
// import Shop from "../components/Shop";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <ZarrinFacePage /> },
            { path: "/about", element: <AboutBlogSection /> },
            { path: "/blog", element: <BlogSection /> },
            { path: "/subBlog", element: <SigleInfoSection /> },
            { path: "/contact", element: <ContactSection /> },
        ],
    }
]);

export default router;
