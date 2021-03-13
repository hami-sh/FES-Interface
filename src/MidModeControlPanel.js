import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import PinDropIcon from "@material-ui/icons/PinDrop";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import green from "@material-ui/core/colors/green";
import VariableReadOut from "./VariableReadOut";
import WavesIcon from "@material-ui/icons/Waves";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import Button from "@material-ui/core/Button";
import TimelineIcon from "@material-ui/icons/Timeline";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const useStyles = makeStyles({
  root: {
    width: 300
  },
  input: {
    width: 42
  }
});

export default function ControlPanel(props) {
  const classes = useStyles();

  const [pulseMode, setPulseMode] = React.useState({ pulseChecked: false });
  const handlePulseModeChange = (event) => {
    setPulseMode({ ...pulseMode, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>{props.icon}</Grid>
        <Grid item xs>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Run</Grid>
              <Grid item>
                <Switch
                  checked={pulseMode.pulseChecked}
                  onChange={handlePulseModeChange}
                  name="pulseChecked"
                />
              </Grid>
              <Grid item>Start/Stop</Grid>
              <Grid item>
                <VariableReadOut
                  label={"Current (mA)"}
                  step={10}
                  initial={50}
                  min={0}
                  max={100}
                  icon={<OfflineBoltIcon />}
                />
                <VariableReadOut
                  label={"Pulse Width (μs)"}
                  step={10}
                  initial={50}
                  min={0}
                  max={100}
                  icon={<WavesIcon />}
                />
                <VariableReadOut
                  label={"Period (ms)"}
                  step={1}
                  initial={500}
                  min={0}
                  max={1000}
                  icon={<TimelineIcon />}
                />
                {!pulseMode.pulseChecked ? (
                  <Grid item>
                    <VariableReadOut
                      label={"Total Runtime (ms)"}
                      step={1}
                      initial={500}
                      min={0}
                      max={1000}
                      icon={<AccessTimeIcon />}
                    />
                    <Button variant="contained">RUN (Total Runtime)</Button>
                  </Grid>
                ) : (
                  <Grid item>
                    <Button variant="contained">START</Button>
                    <Button variant="contained">STOP</Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}
