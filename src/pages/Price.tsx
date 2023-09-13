import PriceOption from "../components/PriceOption.tsx";
import {priceOptions} from "../data/prices.ts";

export default function Price(){
    return(
      <main>
          <section className="container flex flex-col gap-10">
              {priceOptions.map((priceOption) => <PriceOption priceOption = {priceOption} key={priceOption.id} />)}
          </section>
      </main>
    );
}
