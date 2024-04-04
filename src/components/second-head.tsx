import { Box } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function FirstHead() {
    return (
        <Box className={"flex flex-row items-center justify-between pl-4 pr-4 md:pl-20 md:pr-20"}>
            <div className="flex items-center space-x-2">
                <p className="text-lg md:text-xl">Wade Warren</p>
                <span className="flex items-center space-x-1">
                    <FontAwesomeIcon icon={faClock} />
                    <p className="text-xs md:text-sm">11 hours</p>
                </span>
            </div>
            <Box className="flex flex-row justify-around items-center space-x-5 " sx={{display:{sm:"flex"},flexDirection:{sm:"column",xs:"column",lg:"row" , alignItems:{xs:"center",sm:"center"} , margin:{sm:0,xs:0}}}}>
                <Box className="flex items-center space-x-2" sx={{margin:{sm:0,xs:0}}}>
                    <Box className="bg-[#dfe7fd] rounded-full " sx={{margin:{sm:0,xs:0} , width:{sm:"1rem",xs:"1rem",lg:"1.75red"},height:{sm:"1rem",xs:"1rem",lg:"1.75red"}}}></Box>
                    <p className="text-xs md:text-sm">Booked</p>
                </Box>
                <Box className="flex items-center space-x-2">
                    <Box className="bg-[#fdfbe8] rounded-full" sx={{margin:{sm:0,xs:0} , width:{sm:"1rem",xs:"1rem",lg:"1.75red"},height:{sm:"1rem",xs:"1rem",lg:"1.75red"}}}></Box>
                    <p className="text-xs md:text-sm">In progress</p>
                </Box>
                <Box className="flex items-center space-x-2">
                    <Box className="bg-[#f1f8f0] rounded-full" sx={{margin:{sm:0,xs:0} , width:{sm:"1rem",xs:"1rem",lg:"1.75red"},height:{sm:"1rem",xs:"1rem",lg:"1.75red"}}}></Box>
                    <p className="text-xs md:text-sm">Finished</p>
                </Box>
                <Box className="flex items-center space-x-2">
                    <Box className="bg-[#faeae8] rounded-full " sx={{margin:{sm:0,xs:0} , width:{sm:"1rem",xs:"1rem",lg:"1.75red"},height:{sm:"1rem",xs:"1rem",lg:"1.75red"}}}></Box>
                    <p className="text-xs md:text-sm">Missed</p>
                </Box>
            </Box>
        </Box>
    )
}
