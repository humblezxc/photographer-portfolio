import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mt-auto">
            <section className="container bg-pink-400 text-center py-4">
                © 2023 Copyrights by <Link to="#" className="link link_decoration">Fol.photo</Link> All Rights
                Reserved. Designed by&nbsp;
                <Link className="link link_decoration" to="https://github.com/humblezxc" target="_blank"
                >humblezxc</Link>
            </section>
        </footer>
    );
}
