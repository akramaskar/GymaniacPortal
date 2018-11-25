import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import Grid from "@material-ui/core/Grid";

const RadioProgress = props => {
  const { progress } = props;
  return (
    <Grid container spacing={0} alignItems="center" justify="center">
      <Radio
        checked={progress == 1 ? true : false}
        value="e"
        color="default"
        name="radio-button-demo"
        aria-label="E"
        icon={
          <RadioButtonUncheckedIcon fontSize="small" /> //onChange={this.handleChange}
        }
        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
        disabled
      />
      <Radio
        checked={progress == 2 ? true : false}
        value="e"
        color="default"
        name="radio-button-demo"
        aria-label="E"
        icon={
          <RadioButtonUncheckedIcon fontSize="small" /> //onChange={this.handleChange} //checked={this.state.selectedValue === 'e'}
        }
        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
        disabled
      />
      <Radio
        checked={progress == 3 ? true : false}
        value="e"
        color="default"
        name="radio-button-demo"
        aria-label="E"
        icon={
          <RadioButtonUncheckedIcon fontSize="small" /> //onChange={this.handleChange} //checked={this.state.selectedValue === 'e'}
        }
        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
        disabled
      />
    </Grid>
  );
};

export default RadioProgress;
