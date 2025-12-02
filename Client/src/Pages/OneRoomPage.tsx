import { Box, Typography } from "@mui/material";
import type { roomData } from "../Redux/Reducers/RoomReducer";

function OneRoomPage(props: roomData) {
  return (
    <Box>
      <Box>{props.imageUrl}</Box>
      <Box>
        <Typography variant="h5" color="initial">
          {props.name}
        </Typography>
      </Box>
    </Box>
  );
}

export default OneRoomPage;
