import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import {IPresetPhotos} from "../models.ts";

interface PresetPhotosProps {
    photos: IPresetPhotos;
}

export default function BeforeAfterSliders({photos}: PresetPhotosProps) {
    return (
        <div className="flex flex-col p-2 lg:flex-row">
            {photos.sliderImages.map((image, index) => <ReactBeforeSliderComponent className="m-2" key={index}
                                                                                   firstImage={image.beforeImg}
                                                                                   secondImage={image.afterImg}/>)}
        </div>
    );
}
