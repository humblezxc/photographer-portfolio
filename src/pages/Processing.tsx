import ReactCompareImage from "react-compare-image";
import {processingImages} from "../data/processing.ts";

export default function Processing() {
    console.log(processingImages)

    return (
        <main>
            <section className="container pb-10">
                <div className="flex flex-col gap-12 m-auto" style={{maxWidth: "500px"}}>
                    {processingImages.map(photos => (
                            <ReactCompareImage key={photos.id}
                                               leftImage={photos.image.beforeImage}
                                               rightImage={photos.image.afterImage}
                            />
                    ))}
                </div>
            </section>
        </main>
    )
}
