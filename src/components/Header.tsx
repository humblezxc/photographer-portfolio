import {NavLink} from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-purple-500">
            <section className="bg-pink-400 container flex flex-row items-center justify-between py-3">
                <div><NavLink to="/">there`re logo</NavLink></div>
                <nav>
                    <ul className="flex flex-row gap-14">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/presets">Presets</NavLink></li>
                    </ul>
                </nav>
                <div className="flex gap-14">
                    <button>login</button>
                    <button>languages</button>
                </div>
            </section>
        </header>
    );
}
