import {IPriceOptions} from "@/models";

interface PriceOptionImagesProps {
    priceOptionImage: IPriceOptions
}
export default function PriceOptionImages({priceOptionImage} : PriceOptionImagesProps) {
    return(
        <img className="p-5" style={{width: "600px"}} src={priceOptionImage.image.imageUrl} alt={priceOptionImage.image.imageAlt}/>
    )
}
