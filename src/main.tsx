import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Collection from "./Pages/Collection/Collection";
import Mint from "./Pages/Mint/Mint";
import ErrorNotFound from "./Pages/ErrorNotFound/ErrorNotFound";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import Protected from "./Pages/Protected/Protected";
import SearchNotFound from "./Pages/SearchNotFound/SearchNotFound";
import ThreeDCarousel from "./Pages/ThreeDCarousel/ThreeDCarousel";
import WFCarousel from "./Pages/WFCarousel/WFCarousel";
import FullScreenSlider from "./Pages/FullScreenSlider/FullScreenSlider";
import ArticlePage from "./Pages/ArticlePage/ArticlePage";
import Orginization from "./Pages/Orginization/Orginization";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/mint" element={<Mint />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/soon" element={<ComingSoon />} />
      <Route path="/protected" element={<Protected />} />
      <Route path="/bended-carousel" element={<ThreeDCarousel />} />
      <Route path="/water-effect" element={<WFCarousel />} />
      <Route path="/search-no-results" element={<SearchNotFound />} />
      <Route path="/fullslider-carousel" element={<FullScreenSlider />} />
      <Route path="/orgin" element={<Orginization />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
      <Route path="/*" element={<ErrorNotFound />} />

      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
