/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import firebase from "../../config/firebase";
import { Typography } from "@material-ui/core";

import { logOut } from "../../actions/authentication";

const HeaderLinks = props => {
  const { classes, user } = props;

  const logOutFromFirebaseAndSetUserStateNull = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
      })
      .catch(function(error) {
        // An error happened.
      });

    this.props.dispatch(logOut());
    console.log("Signed out!");
  };

  const renderLoginOrAvatar = () => {
    return user.email !== "" ? (
      <ListItem className={classes.listItem}>
        <CustomDropdown
          left
          caret={false}
          hoverColor="inherit"
          buttonText={
            <Grid container spacing={8}>
              <Grid item>
                <Avatar
                  alt="Avatar"
                  src={user.avatar}
                  className={classes.avatar}
                  sizes="small"
                />
              </Grid>
              <Grid item>
                <Typography variant="h6" gutterBottom>
                  {user.username}
                </Typography>
              </Grid>
            </Grid>
          }
          buttonProps={{
            className: classes.navLink + " " + classes.imageDropdownButton,
            color: "transparent"
          }}
          dropdownList={[
            <Link
              to="/profile"
              style={{ display: "block", height: "100%", color: "#111111" }}
            >
              My Profile
            </Link>,
            <Link
              to="/profile"
              style={{ display: "block", height: "100%", color: "#111111" }}
            >
              Settings
            </Link>,
            <Button
              color="danger"
              className={classes.button}
              onClick={() => this.logOutFromFirebaseAndSetUserStateNull()}
            >
              Sign Out
            </Button>
          ]}
        />
      </ListItem>
    ) : (
      <ListItem className={classes.listItem}>
        <Button
          className={classes.registerNavLink}
          onClick={e => e.preventDefault()}
          color="rose"
          round
        >
          <Link
            to="/login"
            style={{ display: "block", height: "100%", color: "white" }}
          >
            LOGIN
          </Link>
        </Button>
      </ListItem>
    );
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/gymaniac"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/GyManiacOfficial/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      {renderLoginOrAvatar()}
    </List>
  );
};

export default withStyles(headerLinksStyle)(HeaderLinks);
