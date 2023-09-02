import './App.scss'
// import Header from "./components/Header.tsx";
// import Footer from "./components/Footer.tsx";
import BeforeAfterSliders from "./components/BeforeAfterSliders";
import {presets} from "./data/presets";

function App() {
    return (
        <div>
            {presets.map(preset => <BeforeAfterSliders preset={preset} key={preset.id}/>)}
        </div>
    );
}
export default App
