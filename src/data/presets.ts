import {IPresetPhotos, IPresets} from "../models.ts";

export const presets: IPresets[] = [
    {
        id: 1,
        title: 'Family presets',
        titleImage: "src/assets/images/beforeAfter/imgFirstBefore.jpg",
        description: "Presets designed to process individual portrait shots, both plein air and studio.",
        packageInfo: [
            '24 presets: 17 color and 7 black and white',
            'Presets have xmp-format (for Desktop Lightroom)',
            'Presets work with raw-files (you need to make corrections for jpg-files)',
            'Preset installation guide',
        ],
    },
]

export const presetPhotos: IPresetPhotos[] = [
    {
        id: 1,
        sliderImages: [
            {
                beforeImg: {
                    imageUrl: 'src/assets/images/beforeAfter/imgFirstBefore.jpg'
                },
                afterImg: {
                    imageUrl: 'src/assets/images/beforeAfter/imgFirstAfter.jpg'
                },
            },
            {
                beforeImg: {
                    imageUrl: 'src/assets/images/beforeAfter/imgSecondBefore.jpg'
                },
                afterImg: {
                    imageUrl: 'src/assets/images/beforeAfter/imgSecondAfter.jpg'
                },
            },
            {
                beforeImg: {
                    imageUrl: 'src/assets/images/beforeAfter/imgThirdBefore.jpg',
                }, afterImg: {
                    imageUrl: 'src/assets/images/beforeAfter/imgThirdAfter.jpg',
                },
            },
        ],
    },
]
