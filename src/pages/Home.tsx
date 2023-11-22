import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import {photos} from "../data/gallery.ts";
import {InstagramIcon, TelegramIcon} from "../assets/svg/svg.tsx";

export default function Home() {
    return (
        <main className=".hebo-font">
            <section className="container p-12 flex flex-row gap-10">
                <div className="flex flex-col mx-10 items-start">
                    <h1 className="text-4xl">Tori Hooper Film</h1>
                    <p className="py-6 flex-nowrap">A professional model that  takes professional analog pictures.</p>
                    <p className="py-6 flex-nowrap">Embrace your shyness! Cry in public! Have big big feelings! Be a mess! Write me an email to work
                        with me.</p>
                    <ul className="flex gap-5">
                        <li>
                            <Link to="#">
                                <InstagramIcon/>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <TelegramIcon/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <Gallery direction={'row'} margin={10} photos={photos}/>
                </div>
            </section>
        </main>
    );
}
