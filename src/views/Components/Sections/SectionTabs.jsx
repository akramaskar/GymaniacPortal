import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Public from "@material-ui/icons/Public";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

const suggestions = [
  { city: "Hamburg", country: "Germany" },
  { city: "Munich", country: "Germany" },
  { city: "Berlin", country: "Germany" },
  { city: "Jakarta", country: "Indonesia" },
  { city: "Bogor", country: "Indonesia" },
  { city: "Bandung", country: "Indonesia" },
  { city: "Surabaya", country: "Indonesia" }
];

const targets = [
  { value: "mbodybuilding", label: "Muskelaufbau" },
  { value: "straffen", label: "Haut straffen" },
  { value: "dieting", label: "Gewichtsverlust" },
  { value: "powerlifting", label: "Stärker werden" }
];

class SectionTabs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="nav-tabs">
            <h3>What are you looking for?</h3>
            <CustomTabs
              headerColor="info"
              tabs={[
                {
                  tabName: "Personal Training",
                  tabIcon: Person,
                  tabContent: (
                    <div id="inputs">
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Your City"
                            id="font-awesome"
                            formControlProps={{ fullWidth: true }}
                            inputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <i className="fas fa-location-arrow" />
                                </InputAdornment>
                              )
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <br />
                          <FormControl fullWidth>
                            <Datetime
                              inputProps={{
                                placeholder: "When do you have time?"
                              }}
                            />
                          </FormControl>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <TextField
                            id="standard-select-currency-native"
                            select
                            label="Native select"
                            className={classes.textField}
                            value={this.state.target}
                            onChange={this.handleChange("currency")}
                            SelectProps={{
                              native: true,
                              MenuProps: {
                                className: classes.menu
                              }
                            }}
                            helperText="Setze deinen Ziel"
                            margin="normal"
                          >
                            {targets.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </TextField>
                        </GridItem>
                      </GridContainer>
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    </div>
                  )
                },
                {
                  tabName: "Online Coaching",
                  tabIcon: Public,
                  tabContent: (
                    <p className={classes.textCenter}>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. I will be the leader of a company that
                      ends up being worth billions of dollars, because I got the
                      answers. I understand culture. I am the nucleus. I think
                      that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at.
                    </p>
                  )
                }
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(tabsStyle)(SectionTabs);
