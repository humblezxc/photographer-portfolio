import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import {photos} from "../data/gallery.ts";

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
                                <svg width="30px" height="30px" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.38,10.46a2.19,2.19,0,1,0,2.16,2.22v-.06A2.18,2.18,0,0,0,35.38,10.46Z"
                                          fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M40.55,5.5H7.45a2,2,0,0,0-1.95,2v33.1a2,2,0,0,0,2,2h33.1a2,2,0,0,0,2-2V7.45A2,2,0,0,0,40.55,5.5Z"
                                        fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M24,15.72A8.28,8.28,0,1,0,32.28,24h0A8.28,8.28,0,0,0,24,15.72Z" fill="none"
                                          stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <svg width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill="none"
                                        stroke="#000000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M40.83,8.48c1.14,0,2,1,1.54,2.86l-5.58,26.3c-.39,1.87-1.52,2.32-3.08,1.45L20.4,29.26a.4.4,0,0,1,0-.65L35.77,14.73c.7-.62-.15-.92-1.07-.36L15.41,26.54a.46.46,0,0,1-.4.05L6.82,24C5,23.47,5,22.22,7.23,21.33L40,8.69a2.16,2.16,0,0,1,.83-.21Z"
                                    />
                                </svg>
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
