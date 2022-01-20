import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../App.css';
import { spacing } from '@mui/system';
import { borders } from '@mui/system';
import { grey, orange } from '@mui/material/colors';
import { clear } from '@testing-library/user-event/dist/clear';

export default function Cardbody({
    name, 
    age,
    power,
    image,
}) {
    return (
        <Card sx={{ maxWidth: 365, border: 85, opacity: .9,  }} >
        <CardActionArea >
          <CardMedia 
            component="img"
            height="500"
            image={image}
            
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


