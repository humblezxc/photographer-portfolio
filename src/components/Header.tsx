import {Link} from "react-router-dom"
export default function Header (){
    return(
    <header>
        <p><Link to="/">logo</Link></p>
        <ul>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/presets">Presets</Link></li>
        </ul>
    </header>
    );
}
