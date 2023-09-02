import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import {IPresets} from "../models.ts";

interface PresetsProps {
    preset: IPresets
}

export default function BeforeAfterSliders({preset}: PresetsProps) {
    console.log(preset.sliderImages)
    preset.sliderImages.map((image) => console.log(image.beforeImg.imageUrl, image.afterImg.imageUrl))

    return (
        <main className="flex flex-col">
            <h1 className="text-4xl mb-16">{preset.title}</h1>
            <div className="flex flex-col p-2 lg:flex-row">
                {preset.sliderImages.map((image, index) => <ReactBeforeSliderComponent className="m-2" key={index}
                                                                                       firstImage={image.beforeImg}
                                                                                       secondImage={image.afterImg}/>)}
            </div>
            <button
                className="mt-4 w-40 self-center rounded-full bg-white px-3 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
            >BUY NOW
            </button>
        </main>
    );
}
