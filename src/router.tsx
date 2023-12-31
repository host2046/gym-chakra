import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";

import BenefitsPage from "./pages/BenefitsPage";
import ContactUsPage from "./pages/ContactUsPage";
import OurClassesPage from "./pages/OurClassesPage";
import HomePage from "./pages/HomePage";

import SignInPage from "./pages/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "benefits", element: <BenefitsPage /> },
      { path: "contactus", element: <ContactUsPage /> },
      { path: "ourclasses", element: <OurClassesPage /> },
      { path: "signin", element: <SignInPage /> },
    ],
  },
]);

export default router;
