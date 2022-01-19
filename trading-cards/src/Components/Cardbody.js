import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../App.css';

export default function Cardbody({
    name, 
    age,
    power,
    image,
}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image={image}
            alt=""
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {name}
              
              
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {age}

            {power}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );

}


