import React from 'react'
import ReactDOM from 'react-dom/client'
import "@style/index.css"
import { Box } from "@mui/material"
import Table_time from './components/table-time'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Box className='bg-[#f9f9f9] flex justify-center items-center' sx={{ width: "100vw", height: "100vh",display: "flex", justifyContent: "center", alignItems: "center", padding:"10px" }}> {/* Parent container with dimensions */}
          <Table_time />
    </Box>

  </React.StrictMode>,
)
