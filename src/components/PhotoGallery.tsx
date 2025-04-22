'use client';

import Gallery from "react-photo-gallery";

export default function PhotoGallery({ photos }: { photos: any[] }) {
    return <Gallery direction="column" photos={photos} />;
}
