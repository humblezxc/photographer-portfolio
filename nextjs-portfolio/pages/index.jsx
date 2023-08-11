import Navbar from '../components/Navbar';
import Head from "next/head";
import styles from '../styles/Portfolio.module.css';
import Home from "../components/Home";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";
import Section from "../components/Section";

export default function Portfolio() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Photographer portfolio</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Navbar />
        </header>
        <main>
            <Section id="home" title="Home">
                <Home />
            </Section>
            <Section id="gallery" title="Gallery">
                <Gallery />
            </Section>
            <Section id="about" title="About">
                <About />
            </Section>
            <Section id="contact" title="Contact">
                <Contact />
            </Section>
        </main>

      <footer>
        <a
          href="https://github.com/humblezxc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
