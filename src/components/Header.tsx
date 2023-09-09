import {NavLink} from "react-router-dom"

export default function Header() {
    return (
        <header className="">
            <section className="container flex flex-row items-center justify-between py-3">
                <NavLink to="/"><p>logo</p></NavLink>
                <nav>
                    <ul className="flex flex-row gap-14 uppercase">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/presets">Presets</NavLink></li>
                    </ul>
                </nav>
                <div className="relative flex items-center gap-6">
                    <button className="button button_square">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-person"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
                            />
                        </svg>
                    </button>
                    <button className="button button_square">
                        EN
                        {/*<svg*/}
                        {/*    xmlns="http://www.w3.org/2000/svg"*/}
                        {/*    width="16"*/}
                        {/*    height="16"*/}
                        {/*    fill="currentColor"*/}
                        {/*    className="bi bi-arrow-down-short"*/}
                        {/*    viewBox="0 0 16 16"*/}
                        {/*>*/}
                        {/*    <path*/}
                        {/*        fillRule="evenodd"*/}
                        {/*        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"*/}
                        {/*    />*/}
                        {/*</svg>*/}
                    </button>
                </div>
            </section>
        </header>
    );
}
