import "./App.css";
import DimensionChoice from "./Components/DimensionChoice";
import Header from "./Components/Header";
import InputGrid from "./Components/InputGrid";
import ResultGrid from "./Components/ResultGrid";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="Not-Header">
                <DimensionChoice />
                <div className="Lower">
                    <InputGrid />
                    <ResultGrid />
                </div>
            </div>
        </div>
    );
}

export default App;
