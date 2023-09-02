import {IPresets} from "../models.ts";

export const presets: IPresets[] = [
    {
        id: 1,
        title: 'titleHAHA',
        titleImage: "src/assets/images/beforeAfter/imgFirstBefore.jpg",
        description: "Presets designed to process individual portrait shots, both plein air and studio.",
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
            {
                beforeImg: {
                    imageUrl: 'src/assets/images/beforeAfter/imgThirdBefore.jpg',
                },
                afterImg: {
                    imageUrl: 'src/assets/images/beforeAfter/imgThirdAfter.jpg',
                },
            }
        ],
    },
]
