import { useContext } from "react";
import "./App.css";
import DimensionChoice from "./Components/DimensionChoice";
import Header from "./Components/Header";
import InputGrid from "./Components/InputGrid";
import ResultGrid from "./Components/ResultGrid";
import Transition from "./Components/Transition";
import { GridContext } from "./Context/GridContext";

function App() {
    const { grid, resultGrid } = useContext(GridContext);

    return (
        <div className="App">
            <Header />
            <div className="Not-Header">
                {!grid && <DimensionChoice />}
                <div className="Lower">
                    {grid && <InputGrid />}
                    <ResultGrid />
                    {resultGrid && <Transition />}
                </div>
            </div>
        </div>
    );
}

export default App;
