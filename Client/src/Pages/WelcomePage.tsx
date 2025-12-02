import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import RoomCard from "../Components/RoomCard";
import { useGetRoomsQuery } from "../Redux/Main/bnbApi";
import type { roomData } from "../Redux/Reducers/RoomReducer";

function WelcomePage() {
  const { data: myRooms, isLoading } = useGetRoomsQuery({});
  console.log(myRooms);

  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
        <Typography variant="h2" color="text.default">
          Loading...
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      padding={2}
      boxShadow={2}
      margin={0}
      justifyItems={"center"}
      justifyContent={"center"}
      bgcolor={"background.default"}
    >
      <Grid container spacing={2} justifyContent={"center"}>
        {myRooms.map((room: roomData) => (
          <RoomCard
            key={room.id}
            id={room.id}
            name={room.name}
            imageUrl={room.imageUrl}
            price={room.price}
            priceCurrency={room.priceCurrency}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default WelcomePage;
