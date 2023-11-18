import { Box, Container, Stack, Typography, } from "@mui/material"
import { useSelector } from "react-redux"
import useGoogleSearch from "../utils/useGoogleSearch"
//  import response from "../utils/response"
import { Link } from "react-router-dom"
import { logo } from "../utils/data"
import "./styles/SearchPage.css"
import SearchBar from "../components/SearchBar"
import { Description, Image, LocalOffer, MoreVert, Room, Search } from "@mui/icons-material"

const SearchPage = () => {
    // const dispatch = useDispatch()
    const reduxState = useSelector((store) => {
        return store.termStore.term
    })

    //LIVE API CALL 
    const { data } = useGoogleSearch(reduxState)
    // const data = response
    console.log(data);

    const searchOptions = [
        {
            icon: <Search />,
            text: 'All',
            link: "/all"
        },
        {
            icon: <Description />,
            text: 'News',
            link: "/news"

        },
        {
            icon: <Image />,
            text: 'Images',
            link: "/images"

        },
        {
            icon: <LocalOffer />,
            text: 'shopping',
            link: "/shopping"

        },
        {
            icon: <Room />,
            text: 'maps',
            link: "/maps"

        },
        {
            icon: <MoreVert />,
            text: 'more',
            link: "/more"

        },


    ]


    return (
        <Box>
            <Container maxWidth={"xl"}>
                <Stack className="searchPage">
                    <Box component={"header"} className="search_header" >
                        <Stack >
                            <Link to={'/'}>
                                <img src={logo} alt="google" className="header_logo" />
                            </Link>
                        </Stack>
                        <Stack className="search__headerBody">
                            <SearchBar hideButtons />
                            <Stack direction={"row"} className="searchPage__options">
                                <Stack direction={"row"} className="search__Optionleft">
                                    {searchOptions.map((option, index) => (
                                        <Stack key={index} direction={"row"} className="searchPage__option">
                                            {option.icon}
                                            <Link to={option.link}>{option.text}</Link>
                                        </Stack>
                                    ))}
                                </Stack>
                                <Stack direction={"row"} className="search__OptionRight">
                                    <Stack className="searchPage__option">
                                        <Link to={"/settings"}>Settings</Link>
                                    </Stack>
                                    <Stack className="searchPage__option">
                                        <Link to={"/tools"}>Tools</Link>
                                    </Stack>
                                </Stack>
                            </Stack>

                        </Stack>
                    </Box>
                    {reduxState && (
                        <Stack className="search__results">
                            <Typography variant="p" className="search__resultCount">About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)</Typography>

                            {data?.items.map((item, index) => (
                                <Stack key={index} className="search__result">
                                    <Link to={item.link}>
                                        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                            <img className="search__resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" />
                                        )}
                                        {item.displayLink}
                                    </Link>
                                    <Link to={item.link} className="search__resultTitle">
                                        <Typography variant="h6" >{item.title}</Typography>
                                    </Link>
                                    <Typography variant="p" mt={1} className="search__resultSnippet">
                                        {item.snippet}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    )}
                </Stack>
            </Container>
        </Box>
    )
}

export default SearchPage 