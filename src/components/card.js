import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { GitHub } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin : 30,
  },
  media: {
    height: "80px",
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.name}
      />
      <Grid 
         container
         justify="center"
         >
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="body2">
        {props.name}
        </Typography>
      </CardContent>
      </Grid>
      <CardActions disableSpacing>
        <Grid 
         container
         justify="center"
         >
        <IconButton aria-label="add to favorites" href={props.github}>
          <GitHub />
        </IconButton>
        <IconButton aria-label="share" href={props.linkedin}>
          <LinkedIn />
        </IconButton>
        </Grid>
      </CardActions>
    </Card>
  );
}
