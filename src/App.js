import "./App.css";
import DimensionChoice from "./Components/DimensionChoice";
import InputGrid from "./Components/InputGrid";
import ResultGrid from "./Components/ResultGrid";

function App() {
    return (
        <div className="App">
            <DimensionChoice />

            <div className="Lower">
                <InputGrid />
                <ResultGrid />
            </div>
        </div>
    );
}

export default App;
