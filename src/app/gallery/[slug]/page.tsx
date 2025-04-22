import { categories, photos } from "@/data/gallery";
import PhotoGallery from "@/components/PhotoGallery";
import MasonryGallery from "@/components/MasonryGallery";


type CategoryProps = {
    params: { slug: string };
};

export default async function Category({ params }: CategoryProps) {
    const category = categories.find((el) => el.key === params.slug);

    if (!category) return null;

    return (
        <main>
            <section className="container">
                <h1 className="text-center text-3xl mb-4">{category.title}</h1>
                {/*<PhotoGallery photos={category.image} />*/}
                {/*<MasonryGallery images={category.image} />*/}
                <div className="flex flex-row flex-wrap gap-5">
                    {category.image.map((image) => (
                        <img className="w-[calc(33.333%-13.333px)]" key={image.id} src={image.imageUrl} alt={image.imageAlt} />
                    ))}
                </div>
            </section>
        </main>
    );
}
