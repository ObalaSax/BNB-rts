import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";

import { RoomData } from "../Features/Slices/BookRoomSlice";
function RoomCard(props: RoomData) {
  return (
    <Grid item spacing={2} xs={12} sm={6} lg={4} xl={3} wrap="wrap">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height={200}
            image={props.imageUrl}
            alt={props.name}
          />
          <CardContent>
            <Typography variant="h6" color="initial">
              {props.name}
            </Typography>
            <Box paddingY={2}>
              <Typography variant="body1" color="initial">
                {props.priceCurrency} {props.price}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default RoomCard;
