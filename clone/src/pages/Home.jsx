import { Avatar, Box, Container, Stack } from "@mui/material"
import { Link } from "react-router-dom"
import "./styles/Home.css"
import { Apps } from "@mui/icons-material"
import { logo } from "../utils/data"
import SearchBar from "../components/SearchBar"

const Home = () => {
  return (
    <Box component={"header"} className="home">
      <Container maxWidth={"lg"}>

        <Stack className="home-header" direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
          <Stack className="home-headerLeft" direction={"row"}>
            {/* links*/}
            <Link to={"/about"}>about</Link>
            <Link to={"/Store"}>Store</Link>
          </Stack>
          <Stack className="home-headerRight" direction={"row"}>
            {/* links */}
            <Link to={"/Gmail"}>Gmail</Link>
            <Link to={"/Images"}>Images</Link>
            {/* icon */}
            <Apps sx={{ mr: 2 }} />
            {/* avatar*/}
            <Avatar />
          </Stack>
        </Stack>
        <Stack className="home-body" flex={1} mt={10}>
          <img src={logo} alt="google-logo" style={{ objectFit: "contain", height: "100px" }} />
        </Stack>
        <Stack className="home-input">
          {/* SearchBar */}
          <SearchBar />
        </Stack>
      </Container>

    </Box>
  )
}

export default Home