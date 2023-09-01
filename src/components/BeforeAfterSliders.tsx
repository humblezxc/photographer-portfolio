import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

export default function BeforeAfterSliders() {
    const FIRST_IMAGE = {
        imageUrl: 'src/assets/images/beforeAfter/img.jpg'
    };
    const SECOND_IMAGE = {
        imageUrl: 'src/assets/images/beforeAfter/img_1.jpg'
    };
    const THIRD_IMAGE = {
        imageUrl: 'src/assets/images/beforeAfter/img.png'
    };
    const FOUR_IMAGE = {
        imageUrl: 'src/assets/images/beforeAfter/img_1.png'
    };
    const FIFTH_IMAGE = {
        imageUrl: 'src/assets/images/beforeAfter/img_2.png'
    };
    const SIXTH_IMAGE = {
        imageUrl: 'src/assets/images/beforeAfter/img_3.png'
    };

    return (
        <main className="flex flex-col">
            <h1 className="text-4xl mb-16">Sliders</h1>
            <div className="flex flex-col p-2 lg:flex-row">
                <ReactBeforeSliderComponent className="m-2" firstImage={FIRST_IMAGE} secondImage={SECOND_IMAGE}/>
                <ReactBeforeSliderComponent className="m-2" firstImage={THIRD_IMAGE} secondImage={FOUR_IMAGE}/>
                <ReactBeforeSliderComponent className="m-2" firstImage={FIFTH_IMAGE} secondImage={SIXTH_IMAGE}/>
            </div>
            <button
                className="mt-4 w-40 self-center rounded-full bg-white px-3 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
            >BUY NOW
            </button>
        </main>
    );
}
