import {IPriceOptions} from "../models.ts";
import {Link} from "react-router-dom";

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
            <div className="flex justify-between pt-5 items-center">
                <h3 className="font-bold text-3xl">{priceOption.price}</h3>
                <Link to={""} className="self-end" style={{textDecoration: "underline"}}>Переглянути роботи</Link>
            </div>
        </div>
    )
}
