import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout";

import HomePage from "./HomePage";
import CasesPage from "./CasesPage";
import ErrorPage from "./ErrorPage/ErrorPage";
<<<<<<< HEAD
import StakePage from "./StakePage";
=======
import CasePage from "./CasePage";
>>>>>>> e9b2f2cbaf7ed32fd9e84f0f3600329daea810a4

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout.Default />}>
        <Route index element={<HomePage />} />
        <Route path="cases" element={<CasesPage />} />
<<<<<<< HEAD
        <Route path="stake" element={<StakePage />} />
=======
        <Route path="cases/:id" element={<CasePage />} />
>>>>>>> e9b2f2cbaf7ed32fd9e84f0f3600329daea810a4
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

export default router;
