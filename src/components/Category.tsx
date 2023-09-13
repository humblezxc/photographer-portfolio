import {useParams} from 'react-router-dom'
import {categories} from "../data/gallery.ts";
import NotFoundPage from "./NotFoundPage.tsx";
// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
// import React from "react";
import PhotoAlbum from "react-photo-album";
const photos = [
    { src: "/src/assets/images/categories/stadium.jpg", width: 800, height: 600 },
    { src: "/src/assets/images/categories/stadium.jpg", width: 1600, height: 900 },
];
export default function Category() {
    console.log(useParams())
    const {key} = useParams();
    const category = categories.find((el) => el.key === key)

    if (!category) return <NotFoundPage/>

    return (
        <main>
            <section className="container">
                <h1>{category.title}</h1>
                {/*{category.image.map((image) => (*/}
                {/*    <React.Fragment key={image.id}>*/}
                {/*        <img src={image.imageUrl} alt={image.imageAlt}/>*/}
                {/*    </React.Fragment>*/}
                {/*))}*/}
                <PhotoAlbum layout="masonry" photos={photos}/>;



                {/*<ResponsiveMasonry*/}
                {/*    columnsCountBreakPoints={{700: 2, 900: 3}}*/}
                {/*>*/}
                {/*    <Masonry gutter="10px">*/}
                {/*        {category.image.map((image) => (*/}
                {/*            <React.Fragment key={image.id}>*/}
                {/*                <img src={image.imageUrl} alt={image.imageAlt}/>*/}
                {/*            </React.Fragment>*/}
                {/*        ))}*/}
                {/*    </Masonry>*/}
                {/*</ResponsiveMasonry>*/}
            </section>
        </main>
    );
}
