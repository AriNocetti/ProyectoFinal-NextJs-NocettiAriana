import {
  Button, 
  Card, 
  CardActions,
  CardContent, 
  CardMedia, 
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function ProductCard({ title, price, imageUrl, description, id, fabric }) {

  return(
    <>
      <Card sx={{ width: 250, height: 430 }}>
        <CardMedia sx={{height : 240, width: '100%', objectFit: 'cover'}} image={imageUrl} title="producto"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', height: 22, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
              {description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {fabric}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {price}
          </Typography>
        </CardContent>
        <CardActions>
            <Link href={`/detail/${id}`}>
                <Button variant="outlined" size="small" >
                    Ver detalle
                </Button>
            </Link>
        </CardActions>
      </Card>
    </>
  )
}