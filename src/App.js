import "./styles.css";
import React from "react";
import WavesIcon from "@material-ui/icons/Waves";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import VariableReadOut from "./VariableReadOut";
import WaveformReadOut from "./WaveformReadOut";
import MatrixArrayReadOut from "./MatrixArrayReadOut";

// good luck! <3
// https://reactjs.org/docs/hello-world.html
export default function App() {
  return (
    <div className="App">
      <VariableReadOut
        label={"Frequency"}
        step={10}
        initial={50}
        min={0}
        max={100}
        icon={<WavesIcon />}
      />
      <VariableReadOut
        label={"Amplitude"}
        step={10}
        initial={50}
        min={0}
        max={100}
        icon={<OfflineBoltIcon />}
      />
      <WaveformReadOut
        label={"Waveform Generator"}
        initial={[40, 50, 60]}
        step={10}
        min={0}
        max={100}
      />
      <MatrixArrayReadOut rowNumb={4} columnNumb={4} />
    </div>
  );
}
