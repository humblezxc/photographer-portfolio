import {Routes, Route} from "react-router-dom"
import {routes} from "./Routes.ts";
import Layout from "./Layout.tsx";
import Home from "../pages/Home.tsx";
import Presets from "../pages/Presets.tsx";
import NotFoundPage from "./NotFoundPage.tsx";
import Gallery from "../pages/Gallery.tsx";
import About from "../pages/About.tsx";
import Price from "../pages/Price.tsx";
import Processing from "../pages/Processing.tsx";
import Category from "../pages/Category.tsx";
import CookiesPage from "../pages/CookiesPage.tsx";
import Login from "../pages/Login.tsx";
export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path={routes.ROOT} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={routes.GALLERY} element={<Gallery/>}/>
                    <Route path={`${routes.GALLERY}/:key`} element={<Category/>}/>
                    <Route path={routes.PRICE} element={<Price/>}/>
                    <Route path={routes.PROCESSING} element={<Processing/>}/>
                    <Route path={routes.ABOUT} element={<About/>}/>
                    <Route path={routes.PRESETS} element={<Presets/>}/>
                    <Route path="cookies" element={<CookiesPage />}/>
                    <Route path={routes.LOGIN} element={<Login />}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    )
}
