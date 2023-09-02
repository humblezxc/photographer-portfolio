import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import {IPresets} from "../models.ts";

interface PresetsProps {
    preset: IPresets
}
export default function BeforeAfterSliders({preset}: PresetsProps) {
    return (
            <div className="flex flex-col p-2 lg:flex-row">
                {preset.sliderImages.map((image, index) => <ReactBeforeSliderComponent className="m-2" key={index}
                                                                                       firstImage={image.beforeImg} secondImage={image.afterImg}/>)}
            </div>
    );
}
