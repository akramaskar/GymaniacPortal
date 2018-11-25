import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import LeftLinks from "components/Header/LeftLinks.jsx";
import SectionTabs from "./Sections/SectionTabs.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          rightLinks={<HeaderLinks />}
          leftLinks={<LeftLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{ height: 400, color: "dark" }}
          {...rest}
        />
        <Parallax image={require("assets/img/woman_gym.jpg")}>
          <div className={classes.container}>
            <GridContainer sm={12}>
              <GridItem sm={12}>
                <div className={classes.brand}>
                  <h1 className={classes.title} style={{ color: "#FFF" }}>
                    Online Treffpunkt 4 trainee & coach.
                  </h1>
                  <h3 className={classes.subtitle} style={{ color: "#FFF" }}>
                    Take your first step to your goal body!
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          {/* <SectionNavbars /> */}
          <SectionTabs />
          <SectionCarousel />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
