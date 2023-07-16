import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li>
                    <Link href="#home">Home</Link>
                </li>
                <li>
                    <Link href="#gallery">Gallery</Link>
                </li>
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
