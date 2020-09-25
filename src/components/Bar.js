import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const Bar = () => {
    return (
        <>
            <AppBar position="relative" >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        <img src={require('../images/logo.png')} alt="logo" />
                    </Typography>

                    <Link to="/login">
                        <Button variant="contained" color="secondary" float="right">
                            Login
                    </Button></Link>

                </Toolbar>
            </AppBar>
        </>
    );
};

export default Bar;