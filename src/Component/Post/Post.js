import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from "moment";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

function Post(props) {
  const classes = useStyles();
  var date= props.date.substring(0,10);
  
  // console.log(moment(date).format("MMMM DD,YYYY"));
 
  return (
    <Card className={classes.root} style={{margin: "10px" ,width:"350px",height:"400px"}} onClick={props.clicked}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
        />
        <CardContent  width="350px" height="350px">
          <Typography gutterBottom variant="h5" component="h6">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {moment(date).format("MMMM DD, YYYY")}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          
        </Button> */}
          {/* <Typography variant="body2" color="textSecondary" component="p">
          {moment(date).format("MMMM DD, YYYY")}
            </Typography>  */}

        {/* <Button size="small" color="primary">
          
        </Button> */}
      </CardActions>
    </Card>
  );
}
export default Post;
