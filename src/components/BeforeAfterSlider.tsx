import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

export default function BeforeAfterSlider() {
    const FIRST_IMAGE = {
        imageUrl: 'src/assets/images/beforeAfter/img.jpg'
    };
    const SECOND_IMAGE = {
        imageUrl: 'src/assets/images/beforeAfter/img_1.jpg'
    };
    return (
        <>
            <h1>Sliders</h1>
            <ReactBeforeSliderComponent firstImage={FIRST_IMAGE} secondImage={SECOND_IMAGE} />
=        </>
    );
}
