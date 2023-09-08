import BeforeAfterSliders from "../components/BeforeAfterSliders.tsx";
import {presets, presetPhotos} from "../data/presets.ts";


export default function Presets() {
    return (
        <main className="bg-purple-400">
            <section className="bg-purple-300 container flex flex-col  py-5 w-full">
                {presets.map(preset => (
                    <div key={preset.id}>
                        <h1 className="text-center text-4xl mb-16">{preset.title}</h1>
                        <div className="flex flex-col">
                            <p>{preset.description}</p>
                            <h2>Package consists of:</h2>
                            <ul className="list-disc list-inside pl-16 py-2">
                                {preset.packageInfo.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

                {presetPhotos.map(photos => <BeforeAfterSliders photos={photos} key={photos.id}/>)}
                <button
                    className="mt-4 w-40 self-center rounded-full bg-white px-3 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                >BUY NOW
                </button>
            </section>
        </main>
    );
}
