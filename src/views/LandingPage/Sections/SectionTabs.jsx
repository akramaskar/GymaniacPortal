import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Public from "@material-ui/icons/Public";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

// images
import cardImage from "assets/img/faces/christian.jpg";
import TrainerCard from "./TrainerCard";

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

const trainer = [
  {
    name: "Akram",
    avatar:
      "https://i.pinimg.com/280x280_RS/e9/4a/33/e94a33bf2d3e582e8134964887bb6b9d.jpg",
    rating: "4"
  },
  {
    name: "Omid",
    avatar:
      "https://scontent.fham1-1.fna.fbcdn.net/v/t1.0-9/14595732_702116033273012_4271698503615343066_n.jpg?_nc_cat=108&_nc_ht=scontent.fham1-1.fna&oh=5263707604bb69d5dbab6152983fc5e7&oe=5C7B0E80",
    rating: "4"
  },
  {
    name: "Norman",
    rating: "3",
    avatar:
      "https://scontent-lga3-1.cdninstagram.com/vp/c3062ce51de5960eb41c5273e2afc4ec/5C7A6273/t51.2885-15/sh0.08/e35/s750x750/43051270_1987359814686665_8524567033097291132_n.jpg?ig_cache_key=MTkwNzk4NTk3MTU0MDMzMDgyMg%3D%3D.2"
  },
  {
    name: "Nico",
    rating: "4",
    avatar:
      "https://scontent.fham1-1.fna.fbcdn.net/v/t1.0-9/17342884_1480530101989392_3575966313955281469_n.jpg?_nc_cat=110&_nc_ht=scontent.fham1-1.fna&oh=10922eb123306a96ed05028f6aa23668&oe=5C799989"
  }
];

const SectionTabs = props => {
  const { classes, target, onTargetChange } = props;
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
                        <FormControl fullWidth className={classes.margin}>
                          <TextField
                            id="standard-select-currency"
                            select
                            label="Your goal is..."
                            className={classes.textField}
                            SelectProps={{
                              MenuProps: {
                                className: classes.menu
                              }
                            }}
                            margin="normal"
                          >
                            {targets.map(option => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </FormControl>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <br />
                        <FormControl fullWidth>
                          <Datetime
                            className={classes.textField}
                            inputProps={{
                              placeholder: "When do you have time?"
                            }}
                          />
                        </FormControl>
                      </GridItem>
                    </GridContainer>
                    {trainer.map(trainer => (
                      <TrainerCard
                        name={trainer.name}
                        avatar={trainer.avatar}
                        rating={trainer.rating}
                        classes={classes}
                        title={trainer.name}
                      />
                    ))}
                    <TrainerCard
                      name="Christian"
                      avatar={cardImage}
                      title="Titel"
                      rating="4"
                      classes={classes}
                    />
                  </div>
                )
              },
              {
                tabName: "Online Coaching",
                tabIcon: Public,
                tabContent: (
                  <p className={classes.textCenter}>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. I will be the leader of a company that ends up
                    being worth billions of dollars, because I got the answers.
                    I understand culture. I am the nucleus. I think that’s a
                    responsibility that I have, to push possibilities, to show
                    people, this is the level that things could be at.
                  </p>
                )
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default withStyles(tabsStyle)(SectionTabs);
