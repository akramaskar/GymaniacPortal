import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import LeftLinks from "components/Header/LeftLinks.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "@material-ui/core/Button/Button";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/people_in_gym.jpg";
import RegistrationFormOne from "./RegistrationFormOne";
import RegistrationFormTwo from "./RegistrationFormTwo";
import RegistrationFormThree from "./RegistrationFormThree";

import RadioProgress from "./RadioProgress";

class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      currentForm: 1
    };
    this.incrementFormCounter = this.incrementFormCounter.bind(this);
    this.decrementFormCounter = this.decrementFormCounter.bind(this);
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  incrementFormCounter() {
    let currentForm = this.state.currentForm;
    currentForm = currentForm + 1;
    this.setState({ currentForm });
  }

  decrementFormCounter() {
    let currentForm = this.state.currentForm;
    if (currentForm >= 1) {
      currentForm = currentForm - 1;
    }
    this.setState({ currentForm });
  }

  render() {
    const {
      classes,
      user,
      error,
      handleUserChange,
      onAddressUserChange,
      handleSubmitRegistration,
      ...rest
    } = this.props;

    const { currentForm } = this.state;

    const renderRegistrationForm = () => {
      switch (this.state.currentForm) {
        case 1: {
          return (
            <RegistrationFormOne
              classes={classes}
              user={user}
              error={error}
              handleUserChange={handleUserChange}
              handleNextButton={this.incrementFormCounter}
            />
          );
        }
        case 2: {
          return (
            <RegistrationFormTwo
              classes={classes}
              user={user}
              error={error}
              handleUserChange={handleUserChange}
              onAddressUserChange={onAddressUserChange}
              onNextButton={this.incrementFormCounter}
              onPreviousButton={this.decrementFormCounter}
            />
          );
        }
        case 3: {
          return (
            <RegistrationFormThree
              classes={classes}
              user={user}
              error={error}
              handleUserChange={handleUserChange}
              onPreviousButton={this.decrementFormCounter}
              handleSubmitRegistration={handleSubmitRegistration}
            />
          );
        }
      }
    };

    return (
      <div>
        <Header
          rightLinks={<HeaderLinks user={user} />}
          leftLinks={<LeftLinks />}
          fixed
          color="transparent"
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>Register</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justicon="true"
                        href="#pablo"
                        target="_blank"
                        color="default"
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justicon="true"
                        href="#pablo"
                        target="_blank"
                        color="default"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google"} />
                      </Button>
                    </div>
                  </CardHeader>
                  {renderRegistrationForm()}
                  <RadioProgress progress={currentForm} />
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(RegistrationPage);
