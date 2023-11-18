import { Box, Button, IconButton, Stack, } from "@mui/material"
import "./Search.css"
import { Mic, Search } from "@mui/icons-material"
import { useState } from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setTerm } from "../store/slice/termSlice"
// import { setTerm } from "../store/slice/termSlice"

const SearchBar = ({ hideButtons = false }) => {

  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const data = "I'm Feeling Lucky"

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(input);
    dispatch(setTerm(input))

    navigate("/search")
  }

  return (
    <Box>
      <form >
        <Stack direction={"row"} className="search__input">
          <Search sx={{ color: "gray" }} />
          <input value={input} type="text" onChange={handleChange} />
          <IconButton>
            <Mic sx={{ color: "black" }} />
          </IconButton>
        </Stack>

        {!hideButtons ? (
          <Stack className="search-button" direction={"row"}>
            <Button type="submit" onClick={handleSubmit} variant="outlined">Google Search</Button>
            <Button variant="outlined">{data}</Button>
          </Stack>
        ) : (
          <Stack className="search-button" direction={"row"}>
            <Button className="hideButton" type="submit" onClick={handleSubmit} variant="outlined">Google Search</Button>
            <Button className="hideButton" variant="outlined">{data}</Button>
          </Stack>
        )}

      </form>
    </Box>
  )
}

SearchBar.propTypes = {
  hideButtons: PropTypes.bool,
}

export default SearchBar