export interface IPresets {
    id: number
    title: string
    titleImage: string
    description: string
    packageInfo: string[]
}

export interface IPresetPhotos {
    id: number
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
