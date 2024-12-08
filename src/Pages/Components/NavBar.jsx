import React from 'react'
import {Button, Stack, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";






const useStyles = makeStyles({
    navTabs:{
        cursor:'pointer',
        fontSize: '12px',
        fontFamily:"Helvetica",
        fontWeight: 500,
    },
    signInButton: {
        backgroundColor: 'black !important',
        borderRadius: '25px !important',
    },
    navBar:{
        backgroundColor: '#EDECEE',
        padding: '5px 20px',
        borderRadius: '25px',
    },
    icons:{
        cursor:'pointer',
    }
});


const NavBar = () => {
    const classes = useStyles();
    return <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
            <Stack><Typography>Shaanvi</Typography></Stack>

            <Stack>
                <Stack className={classes.navBar} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} gap={4}>
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
                <Button className={classes.signInButton} variant="contained">
                    Sign In
                </Button>
            </Stack>
    </Stack>
}
export default NavBar;