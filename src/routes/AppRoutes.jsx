import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

// PAGES
const ButtonPage = lazy(() => import("../pages/buttons/ButtonPage"));
const TextPage = lazy(() => import("../pages/texts/TextPage"));
const LinkPage = lazy(() => import("../pages/links/LinkPage"));
const NotFoundPage = lazy(() =>
  import("../pages/notFound/NotFoundPage")
);
import LoaderPage from "../pages/loader/LoaderPage";

import routes from "./data";

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>
        <Route path={routes.BUTTONS} element={<ButtonPage />} />
        <Route path={routes.LINKS} element={<LinkPage />} />
        <Route path={routes.TEXTS} element={<TextPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
