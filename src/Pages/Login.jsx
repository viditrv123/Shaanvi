import React from 'react';
import {Stack, TextField, Typography, Button} from '@mui/material';
import login from '../assets/login.png';
import {makeStyles} from "@mui/styles";

// Create styles using makeStyles
const useStyles = makeStyles({
    imageContainer: {
        width: '60%',
        height: '100vh',
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        maxWidth: '100%',
        minWidth: '100%',
        minHeight: "100vh",
        maxHeight: '100vh',
    },
    formContainer: {
        width: '100%',
        maxWidth: '1000px',
        padding: '4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
    },
    header: {
        marginBottom: '2rem',
        textAlign: 'left',
    },
    form: {
        width: '100%',

    },
    textField: {
        width: '100%',
        maxWidth: '1000px',
        "& .MuiInputLabel-root": {
            "&.Mui-focused": {
                color: 'black', // Change label color on focus
            },
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: 'black', // Change focus border color
            },
        },
    },
    button: {
        marginTop: '1rem',
        backgroundColor: 'black !important',
        color: 'white !important',
        '&:hover': {
            backgroundColor: 'white !important',
            color: 'black !important',
        },
        borderRadius:"10px"
    },
});

const Register = () => {
    const classes = useStyles();

    return (
        <Stack flexDirection='row' height='100vh' justifyContent='space-between'>
            <Stack className={classes.imageContainer}>
                <img
                    src={login}
                    alt="create-account"
                    className={classes.image}
                />
            </Stack>

            {/* Right Side with Form */}
            <Stack className={classes.formContainer}>
                {/* Form Header */}
                <Stack className={classes.header}>
                    <Typography variant="h4" fontWeight="bold">
                        Welcome 👋
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Please login here
                    </Typography>
                </Stack>

                <form className={classes.form}>
                    <Stack width={'auto'} gap={2}>
                        <TextField
                            placeholder="Email Address"
                            label="Email Address"
                            type="email"
                            variant="outlined"
                            fullWidth
                            className={classes.textField}
                        />
                        <TextField
                            placeholder="Password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            className={classes.textField}
                        />
                        <Button
                            variant="contained"
                            fullWidth
                            className={classes.button}
                        >
                            Sign In
                        </Button>
                    </Stack>



                </form>
            </Stack>
        </Stack>
    );
};

export default Register;
