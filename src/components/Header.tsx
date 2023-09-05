import {NavLink} from "react-router-dom"

export default function Header() {
    return (
        <header className="">
            <section className="flex flex-row container w-full">
                <div><NavLink to="/">logo</NavLink></div>
                <nav>
                    <ul className="flex">
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/presets">Presets</NavLink></li>
                    </ul>
                </nav>
                <div>
                    <button>login</button>
                    <button>languages</button>
                </div>
            </section>
        </header>
    );
}
