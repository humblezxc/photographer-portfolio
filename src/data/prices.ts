import {IPriceOptions} from "@/models";

export const priceOptions : IPriceOptions[] = [
    {
        id: 1,
        title: "Individual shooting",
        priceInfo: [
            '1 година',
            'Усі влучні кадри в авторській обробці (60-90+ фото)',
            'Фото на файлообмінник протягом 10-14 днів',
            'Допомога з позуванням, вибором локації, образів, реквізиту',
        ],
        price: '300 zl',
        category: "love-story",
        image: {
                imageUrl: "/images/beforeAfter/imgFirstBefore.jpg",
                imageAlt: "An image"
            },
    },
    {
        id: 2,
        title: "Love story",
        priceInfo: [
            '1 година',
            'Усі влучні кадри в авторській обробці (70-100+ фото)',
            'Фото на файлообмінник протягом 10-14 днів',
            'Допомога з позуванням, вибором локації, образів, реквізиту',
        ],
        price: '400 zl',
        category: "love-story",
        image: {
                imageUrl: "/images/beforeAfter/imgSecondAfter.jpg",
                imageAlt: "An image"
            },
    },
]
