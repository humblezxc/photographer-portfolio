import {IPriceOptions} from "../models.ts";

interface PriceOptionImagesProps {
    image: IPriceOptions
}
export default function PriceOptionImages({image} : PriceOptionImagesProps) {
    return(
        <img className="p-5" style={{width: "600px"}} src={image.image.imageUrl} alt={image.image.imageAlt}/>
    )
}
