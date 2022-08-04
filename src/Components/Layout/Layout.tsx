import { Box, SxProps} from '@mui/material'
import NavBar from '../MainPage/MainPage'






const Layout = () => {
  return (
    <>
    <Box sx={MainLayout}>
      <NavBar/>
    </Box>
    </>
  )
}

const MainLayout: SxProps = {
    backgroundColor: '#011114',
    
  }


export default Layout