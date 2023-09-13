import {useParams} from 'react-router-dom'
import {categories} from "../data/gallery.ts";
import NotFoundPage from "./NotFoundPage.tsx";
import Gallery from "react-photo-gallery";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import React from "react";
import {photos} from "../data/gallery.ts";
export default function Category() {
    const {key} = useParams();
    const category = categories.find((el) => el.key === key)
    if (!category) return <NotFoundPage/>

    return (
        <main>
            <section className="container">
                <h1 className="text-center text-3xl mb-4">{category.title}</h1>
                <Gallery direction={'column'} photos={photos}/>

                <ResponsiveMasonry
                    columnsCountBreakPoints={{700: 2, 900: 3}}
                >
                    <Masonry gutter="10px">
                        {category.image.map((image) => (
                            <React.Fragment key={image.id}>
                                <img src={image.imageUrl} alt={image.imageAlt}/>
                            </React.Fragment>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </section>
        </main>
    );
}
