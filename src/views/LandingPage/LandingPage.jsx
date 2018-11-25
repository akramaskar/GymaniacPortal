import React from "react";
import { connect } from "react-redux";
import firebase from "../../config/firebase";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import LeftLinks from "components/Header/LeftLinks.jsx";
// sections for this page
import SectionTabs from "./Sections/SectionTabs.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

//images
import people from "assets/img/people_in_gym.jpg";
import woman from "assets/img/woman_gym.jpg";
import cardImage from "assets/img/faces/christian.jpg";

//import magnus
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import StarRatingComponent from "react-star-rating-component";
import { DataSnapshot as snap, app } from "firebase";

const database = firebase.database();

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.authListener();
  }

  componentDidMount() {
    const { classes, user, ...rest } = this.props;

    console.log(user);
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        {/* {console.log("Current user: " + this.props.user.email)} */}
        <Header
          rightLinks={<HeaderLinks user={this.props.user} />}
          leftLinks={<LeftLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{ height: 400, color: "dark" }}
          {...rest}
        />
        <Parallax image={people}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem sm={12} md={12}>
                <div className={classes.brand}>
                  <h1 className={classes.title} style={{ color: "#FFF" }}>
                    Meet the coaches!
                  </h1>
                  <h3 className={classes.subtitle} style={{ color: "#FFF" }}>
                    Search – Review – Book
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionTabs
            //target={this.state.coachSearch.target}
            onTargetChange={this.handleTargetChange}
          />
          {/*<SectionCarousel />*/}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(LandingPage);
