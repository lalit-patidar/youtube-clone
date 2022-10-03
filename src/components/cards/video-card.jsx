import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";


export default function VideoCard({ items:{ title, author, banner} }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={banner}
        alt="Paella dish"
      />
      <CardContent>
        <CardActions disableSpacing>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
          />
          <Typography variant="h5" color="text.primary">
            {title}
          </Typography>
        </CardActions>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
      </CardContent>
    </Card>
  );
}
