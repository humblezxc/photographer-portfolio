import {IPriceOptions} from "../models.ts";

interface PriceOptionDetailsProps {
    priceOption: IPriceOptions
}
export default function PriceOptionDetails({priceOption} : PriceOptionDetailsProps){
    return(
        <div className="p-10">
            <h2 className="font-bold text-5xl pb-5">{priceOption.title}</h2>
            {priceOption.priceInfo.map( (info, index) => (
                <ul className="list-disc text-xl pl-12 mb-3" key={index}>
                    <li>{info}</li>
                </ul>
            ))}
            <h3 className="font-bold text-3xl pt-5">{priceOption.price}</h3>
        </div>
    )
}
