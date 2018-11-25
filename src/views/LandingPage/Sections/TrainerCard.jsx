import React from "react";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import StarRatingComponent from "react-star-rating-component";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import { Grid } from "@material-ui/core";

const TrainerCard = props => {
  const { name, avatar, title, rating, classes } = props;

  return (
    <Card
      className={classes.card}
      style={{ maxWidth: 1200, marginTop: 20, marginBottom: 20 }}
    >
      <div className={classes.details}>
        <Grid container={classes.root} spacing={8}>
          <Grid item item xs={6} sm={6}>
            <CardContent>
              <Typography variant="h1">{name}</Typography>

              <CardMedia
                className={classes.media}
                style={{
                  height: 100,
                  width: 100
                }}
                image={avatar}
                title={title}
              />
              <StarRatingComponent value={rating} />
            </CardContent>
          </Grid>
          <Grid item xs={6} sm={6}>
            <CardActions>
              <Button size="small">Book now</Button>
            </CardActions>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};

export default TrainerCard;
