import {Routes, Route} from "react-router-dom"
import {routes} from "./Routes.ts";
import Layout from "./Layout.tsx";
import Home from "../pages/Home.tsx";
import Presets from "../pages/Presets.tsx";
import NotFoundPage from "./NotFoundPage.tsx";
import Gallery from "../pages/Gallery.tsx";
import About from "../pages/About.tsx";
import Contact from "../pages/Contact.tsx";
export default function AppRoutes(){
    return(
        <>
        <Routes>
            <Route path={routes.ROOT} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={routes.GALLERY} element={<Gallery />}/>
                <Route path={routes.ABOUT} element={<About />}/>
                <Route path={routes.CONTACT} element={<Contact />}/>
                <Route path={routes.PRESETS} element={<Presets />}/>
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
        </>
    )
}
