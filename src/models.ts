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

export interface IPriceOptions {
    id: number
    title: string
    priceInfo: string[]
    price: string
    category: string
    image: {
        imageUrl: string
        imageAlt: string
    }
}

export interface IProcessingImages {
    id: number
    image: {
        beforeImage: string
        afterImage: string
    }
}

export interface ICategories {
    id: number
    title: string
    key: string
    image: [
        {
            id: number
            imageUrl: string
            imageAlt: string
        },
        {
            id: number
            imageUrl: string
            imageAlt: string
        },
        {
            id: number
            imageUrl: string
            imageAlt: string
        }
    ]
}
