import React from 'react'
import {Box, Button, Stack, Typography} from "@mui/material";

import {makeStyles} from "@mui/styles";
import landingPageImage3 from '../../assets/landingPage3.jpg'






const useStyles = makeStyles({
    container: {
        width: "100%",
        height: "90vh",
        marginTop: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "0px 65%",
    },
    imageText:{
        position: "absolute",
        top: "40%",
        left: "10%"
    },
    title1:{
        color: "white",
    },
    title2:{
        color: "white",
        fontSize:"75px !important",
        fontWeight: "600 !important",
    },
    title3:{
        color: "white",
    },
    button: {
        marginTop: '1rem',
        backgroundColor: 'black !important',
        color: 'white !important',
        '&:hover': {
            backgroundColor: 'white !important',
            color: 'black !important',
        },
        borderRadius:"10px",
        width:'140px'
    }

});


const HomeLandingPage=()=>{
    const classes = useStyles();
    return <Box className={classes.container}>
        <img src={landingPageImage3} alt="Landing" className={classes.image} />
        <Stack className={classes.imageText} gap={2}>
            <Typography variant="h5" component="div" className={classes.title1}>Classic Exclusive</Typography>
            <Typography variant="h5" component="div" className={classes.title2}>Women's Fashion</Typography>
            <Typography variant="h5" component="div" className={classes.title3}>Upto 40% Off</Typography>
            <Button
                variant="contained"
                className={classes.button}
            >
                Shop Now
            </Button>
        </Stack>
    </Box>
}

export default HomeLandingPage;