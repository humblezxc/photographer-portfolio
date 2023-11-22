import ReactCompareImage from "react-compare-image";
import {processingImages} from "../data/processing.ts";

export default function Processing() {
    //TODO fix styles and zIndex when isModal
    return (
        <main>
            <section className="container pb-10" style={{position: "relative"}}>
                <div className="flex flex-col gap-12 m-auto" style={{maxWidth: "500px"}}>
                    {processingImages.map(image => (
                            <ReactCompareImage key={image.id}
                                               leftImage={image.image.beforeImage}
                                               rightImage={image.image.afterImage}
                                               // leftImageCss={{zIndex: 0}}
                                               // rightImageCss={{zIndex: 0}}
                            />
                    ))}
                </div>
            </section>
        </main>
    )
}
