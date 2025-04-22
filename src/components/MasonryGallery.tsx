'use client';

import useMasonry from "@/hooks/useMasonry";

export default function MasonryGallery({ images }: { images: any[] }) {
    const masonryContainer = useMasonry();

    return (
        <div
            ref={masonryContainer}
            className="grid items-start gap-4 sm:grid-cols-3 md:gap-6"
        >
            {images.map((image) => (
                <img key={image.id} src={image.imageUrl} alt={image.imageAlt} />
            ))}
        </div>
    )
}