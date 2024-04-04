import { Box } from "@mui/material";
import Body_table from '@components/body-table'
import First_head from "@/components/first-head";
import Second_head from "@components/second-head"
const Timetable = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "100%",
        width: { xs: "100%", sm: "90%", lg: "90%" },
        overflow: "auto",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      className={"rounded-xl"}
    >
      <Box sx={{ padding: "16px" }}>
        <Box className={"space-y-6"} >
          {/* First Header" of the time table */}
          <First_head />
          {/* Second Header" of the time table */}
          <Second_head />
        </Box>
      </Box>
      <Box sx={{ padding: "16px" }}>
          {/* he main body of the table.*/}
        <Body_table />
      </Box>
    </Box>
  );
};

export default Timetable;
