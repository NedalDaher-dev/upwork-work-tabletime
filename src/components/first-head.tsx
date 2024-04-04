
import {useStyles} from "@/theme/buttonTheme"
import { Box, Button } from "@mui/material";

export default function first_head (){
  const classes = useStyles();

    return(
        <Box className={"flex flex-row items-center justify-between"}>
        <div className=" space-x-4   flex  text-[#808080]">
          <span>
            {`<`}
          </span>
          <p>Today</p>
          <span>
            {`>`}
          </span>
        </div>
        <div>
          {/* زر Save */}
          <button className="bg-transparent text-black font-semibold py-2 px-4 rounded-full">
            Cancel
          </button>
          <Button variant="contained" className={classes.saveButton} disabled>
            Save
          </Button>


          {/* زر Cancel */}

        </div>
      </Box>
    )
}