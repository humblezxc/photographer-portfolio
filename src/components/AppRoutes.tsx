import {Routes, Route} from "react-router-dom"
import {routes} from "./Routes.ts";
import Layout from "./Layout.tsx";
import Home from "../pages/Home.tsx";
import Presets from "../pages/Presets.tsx";
import NotFoundPage from "./NotFoundPage.tsx";
export default function AppRoutes(){
    return(
        <>
        <Routes>
            <Route path={routes.ROOT} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={routes.PRESETS} element={<Presets />}/>
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
        </>
    )
}
