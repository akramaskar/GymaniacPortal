import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Icon from "@material-ui/core/Icon";

import _ from "lodash";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing.unit / 4
  }
});

const Rating = props => {
  const { classes, initialRating } = props;

  function renderStars(initialRating) {
    let stars = [];

    for (let i = initialRating, j = 0; j >= 5; j++) {
      if (initialRating >= j) {
        stars = _.concat(stars, [{ starValue: "star" }]);
      } else {
        stars = _.concat(stars, [{ starValue: "star_border" }]);
      }
    }
    return stars.map(star => {
      console.log("Current star:" + star);
      <Icon className={classes.icon} color="secondary">
        {star.starValue}
      </Icon>;
    });
  }

  return (
    <div>
      <Icon className={classes.icon} color="secondary">
        star
      </Icon>
      <Icon className={classes.icon} color="secondary">
        star
      </Icon>
      <Icon className={classes.icon} color="secondary">
        star
      </Icon>
      <Icon className={classes.icon} color="secondary">
        star
      </Icon>
      <Icon className={classes.icon} color="secondary">
        star_border
      </Icon>
    </div>
  );
};

Rating.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Rating);
