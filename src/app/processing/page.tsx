'use client'

import ReactCompareImage from "react-compare-image";
import {processingImages} from "@/data/processing";

export default function Processing() {
    //TODO fix styles and zIndex when isModal
    return (
        <main>
            <section className="pb-10 relative">
                <div className="container">
                    <div className="flex flex-col gap-12 m-auto max-w-[500px]">
                        {processingImages.map(image => (
                            <ReactCompareImage key={image.id}
                                               leftImage={image.image.beforeImage}
                                               rightImage={image.image.afterImage}

                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
