import {IPriceOptions} from "../models.ts";
import PriceOptionDetails from "./PriceOptionDetails.tsx";
import PriceOptionImages from "./PriceOptionImages.tsx";

interface PriceOptionProps {
    priceOption: IPriceOptions
}
export default function PriceOption({priceOption}: PriceOptionProps){

    return(
        <>
        {priceOption.id % 2 ?
            <div className="flex justify-between items-center">
                <PriceOptionImages priceOptionImage={priceOption} />
                <PriceOptionDetails priceOption={priceOption} />
            </div>
            :
            <div className="flex justify-between items-center">
                <PriceOptionDetails priceOption={priceOption} />
                <PriceOptionImages priceOptionImage={priceOption} />
            </div>
        }
        </>
    );
}
