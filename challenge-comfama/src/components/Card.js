import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 250,
    margin: "10px",
    textAlign: "center",
    borderRadius: "14px"
  },
  media: {
    height: 140,
  },
  addBtn: {
    justifyContent: "center"
  }
});

function MediaCard({
  title,
  score,
  image_url,
  synopsis,
  url
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image_url}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {synopsis}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.addBtn}>
        <Button size="large" color="primary" href={url} target="_blank ">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard
