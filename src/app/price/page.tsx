'use client'

import {priceOptions} from "@/data/prices";
import PriceOption from "@/components/PriceOption";

export default function Price(){
    return(
        <main>
            <section className="container flex flex-col gap-10">
                {priceOptions.map((priceOption) => <PriceOption priceOption = {priceOption} key={priceOption.id} />)}
            </section>
        </main>
    );
}
