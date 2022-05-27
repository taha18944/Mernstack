import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const drawerWidth = 240;

function CardCom(props) {
  return (
  <Card sx={{ maxWidth: 345, height: '350px' }}>
    <CardMedia
      component="img"
      height="140"
      image={props.url}
      alt="Images"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
</Card>
  );
}

export default CardCom;