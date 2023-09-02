import BeforeAfterSliders from "../components/BeforeAfterSliders.tsx";
import {presets} from "../data/presets.ts";


export default function Presets() {
    return (
        <main className="flex flex-col">
            <h1 className="text-4xl mb-16">{presets[0].title}</h1>
            {presets.map(preset => <BeforeAfterSliders preset={preset} key={preset.id}/>)}
            <button
                className="mt-4 w-40 self-center rounded-full bg-white px-3 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
            >BUY NOW
            </button>
        </main>
    );
}
