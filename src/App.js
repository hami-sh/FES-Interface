import "./styles.css";
import React from "react";
import WavesIcon from "@material-ui/icons/Waves";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import VariableReadOut from "./VariableReadOut";
import WaveformReadOut from "./WaveformReadOut";
import MatrixArrayReadOut from "./MatrixArrayReadOut";
import ControlPanel from "./ControlPanel";

// good luck! <3
// https://reactjs.org/docs/hello-world.html
export default function App() {
  return (
    <div className="App">
      <ControlPanel />
      <MatrixArrayReadOut rowNumb={4} columnNumb={4} />
    </div>
  );
}
