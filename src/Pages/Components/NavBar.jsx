import React from 'react'
import {Box, Button, Drawer, Stack, Typography, useMediaQuery} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../../assets/Logo.png'







const useStyles = makeStyles({
    navTabs:{
        cursor:'pointer',
        fontSize: '12px',
        fontFamily:"Helvetica",
        fontWeight: "600 !important",
    },
    signInButton: {
        backgroundColor: 'black !important',
        borderRadius: '25px !important',
    },
    navBar:{
        backgroundColor: '#f8f8f8',
        padding: '5px 20px',
        borderRadius: '25px',
    },
    icons:{
        cursor:'pointer',
    },
    centerStack: {
        position: "absolute", // Make the center stack absolute
        left: "50%", // Center horizontally
        transform: "translateX(-50%) translateY(-50%)", // Offset by 50% to perfectly center
    },
    container: {
        position: "relative",
        width: "100%",
        height: "70px", // Ensure a consistent height for the navbar
    },
    hamburger:{
        width: "50vw",
        height: "100%",
        backgroundColor: 'white',
    }
});


const NavBar = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [openHamburger, setOpenHamburger] = React.useState(false);
    const isMobile = useMediaQuery("(max-width: 1000px)");
    console.log(isMobile);
    return<Box className={classes.container}>
        {isMobile?(<Stack className={classes.container} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                <Stack flexDirection={'row'} alignItems={'center'}>
                    <GiHamburgerMenu onClick={()=>setOpenHamburger(!openHamburger)} />
                    <Stack><img src={Logo} alt={'logo'} style={{width: '75px'}}/></Stack>
                </Stack>


                {/*<Stack>*/}
                {/*    <Stack className={`${classes.navBar} ${classes.centerStack}`} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} gap={4}>*/}
                {/*        <Typography className={classes.navTabs}>Home</Typography>*/}
                {/*        <Typography className={classes.navTabs}>Shop</Typography>*/}
                {/*        <Typography className={classes.navTabs}>Our Story</Typography>*/}
                {/*        <Typography className={classes.navTabs}>Blog</Typography>*/}
                {/*        <Typography className={classes.navTabs}>Contact Us</Typography>*/}
                {/*    </Stack>*/}
                {/*</Stack>*/}
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
                    <IoSearch size={'20px'} className={classes.icons}/>
                    <FaRegHeart size={'20px'} className={classes.icons}/>
                    <IoCartOutline  size={'25px'} className={classes.icons}/>
                    <Button className={classes.signInButton} variant="contained" onClick={() => navigate('/Shaanvi/login')}>
                        Sign In
                    </Button>
                </Stack>
            </Stack>):
            (<Stack className={classes.container} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
            <Stack><img src={Logo} alt={'logo'} style={{width: '75px'}}/></Stack>

            <Stack>
                <Stack className={`${classes.navBar} ${classes.centerStack}`} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} gap={4}>
                    <Typography className={classes.navTabs}>Home</Typography>
                    <Typography className={classes.navTabs}>Shop</Typography>
                    <Typography className={classes.navTabs}>Our Story</Typography>
                    <Typography className={classes.navTabs}>Blog</Typography>
                    <Typography className={classes.navTabs}>Contact Us</Typography>
                </Stack>
            </Stack>
            <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
                <IoSearch size={'20px'} className={classes.icons}/>
                <FaRegHeart size={'20px'} className={classes.icons}/>
                <IoCartOutline  size={'25px'} className={classes.icons}/>
                <Button className={classes.signInButton} variant="contained" onClick={() => navigate('/Shaanvi/login')}>
                    Sign In
                </Button>
            </Stack>
        </Stack>)}
        <Drawer PaperProps={{
            sx: {
                width: '50vw', // Set the width of the drawer
                backgroundColor: 'white', // Background color
                height: '100%',
                padding: '15px'// Full height of the viewport
            },
        }} open={openHamburger} onClose={()=>setOpenHamburger(!openHamburger)}>
            <Stack width={'100%'}>
                <img src={Logo} alt={'logo'} style={{width: '75px'}}/>
                        <Typography className={classes.navTabs}>Home</Typography>
                        <Typography className={classes.navTabs}>Shop</Typography>
                        <Typography className={classes.navTabs}>Our Story</Typography>
                        <Typography className={classes.navTabs}>Blog</Typography>
                        <Typography className={classes.navTabs}>Contact Us</Typography>
            </Stack>
        </Drawer>
        </Box>
        }
export default NavBar;