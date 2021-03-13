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
import LowModeControlPanel from "./LowModeControlPanel";
import MidModeControlPanel from "./MidModeControlPanel";

import VariableReadOut from "./VariableReadOut";

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

  const [level, setLevel] = React.useState({ levelChecked: false });
  const handleLevelChange = (event) => {
    setLevel({ ...level, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <Typography id="control-panel" gutterBottom>
        Stimulator Level Mode
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>{props.icon}</Grid>
        <Grid item xs>
          <Typography component="div" alignCentre>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Low</Grid>
              <Grid item>
                <Switch
                  checked={level.levelChecked}
                  onChange={handleLevelChange}
                  name="levelChecked"
                />
              </Grid>
              <Grid item>Mid</Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
      {!level.levelChecked ? (
        <LowModeControlPanel> </LowModeControlPanel>
      ) : (
        <MidModeControlPanel> </MidModeControlPanel>
      )}
    </div>
  );
}
