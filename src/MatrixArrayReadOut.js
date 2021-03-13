import React from "react";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function NestedGrid(props) {
  const classes = useStyles();
  var columnNumb = [...Array(props.columnNumb).keys()];
  var rowNumb = [...Array(props.rowNumb).keys()];

  const instantiateMatrix = () => {
    let dict = {};
    for (let y = 0; y < props.rowNumb; y++) {
      for (let x = 0; x < props.columnNumb; x++) {
        let key = `${y}:${x}`;
        dict[key] = false;
      }
    }
    return dict;
  };

  const [arrayDict, setArrayDict] = React.useState(instantiateMatrix());

  // TODO doesn't update the first time!
  const updateMatrix = (x, y) => {
    console.log(x, y);
    const key = `${x}:${y}`;
    setArrayDict((prevState) => {
      return { ...prevState, [key]: !arrayDict[key] };
    });
    console.log(arrayDict[key]);
  };

  const buttonTheme = createMuiTheme({
    palette: { primary: green, secondary: grey }
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {columnNumb.map((y) => (
          <Grid container item xs={12} spacing={3}>
            {rowNumb.map((x) => (
              <Grid item xs={2}>
                <MuiThemeProvider theme={buttonTheme}>
                  <Button
                    variant="contained"
                    onClick={() => updateMatrix(x, y)}
                    color={arrayDict[`${x}:${y}`] ? "primary" : "secondary"}
                  >
                    {x}:{y}
                  </Button>
                </MuiThemeProvider>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
