import React from 'react';
import styles from '../styles/Section.module.css';

const Section = ({ id, title }) => {
    return (
        <section id={id} className={styles.section}>
            <h2>{title}</h2>
            {/* Add your content here */}
        </section>
    );
};

export default Section;
