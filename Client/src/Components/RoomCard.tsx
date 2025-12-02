import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import type { roomData } from "../Redux/Reducers/RoomReducer";
import { useNavigate, useParams } from "react-router-dom";

function RoomCard(props: roomData) {
  const roomNavigate = useNavigate();
  const { id } = useParams();
  const handleCardClick = () => {
    roomNavigate(`/room/${props.id}`);
  };

  return (
    <Grid xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          marginBottom: 2,
          padding: 0,
          maxWidth: 345,
          height: 290,
          backgroundColor: "background.paper",
        }}
      >
        <CardActionArea onClick={handleCardClick}>
          <CardMedia
            sx={{ height: 140, maxWidth: 450 }}
            image={props.imageUrl}
            title={props.name}
          />
          <CardContent>
            <Typography variant="h6" color="text.primary">
              {props.name}
            </Typography>
            <Typography variant="h6" color="Text.secondary">
              {props.priceCurrency}
              {props.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default RoomCard;
