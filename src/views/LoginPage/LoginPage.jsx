import React from "react";
import firebase from "../../config/firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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

import { logIn } from "../../actions/authentication";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/people_in_gym.jpg";
import LoginForm from "./LoginForm";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
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

  render() {
    const {
      classes,
      user,
      handleUserChange,
      handleSubmitLogin,
      error,
      ...rest
    } = this.props;
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
                  <LoginForm
                    classes={classes}
                    handleSubmitLogin={handleSubmitLogin}
                    user={user}
                    handleUserChange={handleUserChange}
                    error={error}
                    {...rest}
                  />
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

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(withStyles(loginPageStyle)(LoginPage));
