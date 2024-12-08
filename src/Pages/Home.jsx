import React from 'react'
import NavBar from "./Components/NavBar.jsx";
import {makeStyles} from "@mui/styles";
import {Box} from "@mui/material";
import HomeLandingPage from "./Components/HomeLandingPage.jsx";

const useStyles = makeStyles({
    container:{
        margin: '25px'
    }
});
const Home = () => {
    const classes = useStyles();
    return <Box className={classes.container}>
    <NavBar />
        <HomeLandingPage />
    </Box>
}

export default Home;