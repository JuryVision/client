import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout";

import HomePage from "./HomePage";
import CasesPage from "./CasesPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import CasePage from "./CasePage";
import StakePage from "./StakePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout.Default />}>
        <Route index element={<HomePage />} />
        <Route path="cases" element={<CasesPage />} />
        <Route path="cases/:id" element={<CasePage />} />
        <Route path="stake" element={<StakePage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

export default router;
