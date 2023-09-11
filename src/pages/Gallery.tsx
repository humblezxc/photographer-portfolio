import {categories} from '../data/gallery.ts'
import {Link} from "react-router-dom";

export default function Gallery() {
    return (
        <main>
            <section className="container flex flex-col gap-16 py-5">
                {categories.map(category => (
                    <div className="flex flex-col gap-8" key={category.id}>
                        <div className="flex flex-row justify-between">
                            <h2 className="font-bold text-2xl">{category.title}</h2>
                            <Link
                                to={`/gallery/${category.title}`}
                                className="hover:underline flex items-center"
                            >
                                more photos
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-right ml-1"
                                    viewBox="0 0 16 16"
                                    style={{ verticalAlign: 'middle' }}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex gap-5">
                            {category.image.map(image => <div><img key={image.id} src={image.imageUrl}
                                                                   alt={image.imageAlt}/></div>)}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
