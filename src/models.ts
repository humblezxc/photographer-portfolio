export interface IPresets {
    id: number
    title: string
    titleImage: string
    description: string
    sliderImages: [
        {
            beforeImg: {
                imageUrl: string
            },
            afterImg: {
                imageUrl: string
            }
        },
        {
            beforeImg: {
                imageUrl: string
            }
            afterImg: {
                imageUrl: string
            }
        },
        {
            beforeImg: {
                imageUrl: string
            },
            afterImg: {
                imageUrl: string
            }
        },
    ]
}
