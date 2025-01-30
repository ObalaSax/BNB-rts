import { Grid } from "@mui/material";
import RoomCard from "../Components/RoomCard";
import { useGetAllRoomsQuery } from "../Features/Slices/DataApi";

function Welcome() {
  const { data: myRooms, isLoading } = useGetAllRoomsQuery();
  console.log(myRooms);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <Grid container spacing={3} marginY={8} padding={3}>
      {myRooms.map((room) => (
        <RoomCard
          key={room.id}
          name={room.name}
          imageUrl={room.imageUrl}
          price={room.price}
          priceCurrency={room.priceCurrency}
        />
      ))}
    </Grid>
  );
}

export default Welcome;
