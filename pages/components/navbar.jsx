import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

class Navbar extends Component {
    render() {
        return (
            <header>
                <AppBar position="static" className="bg-gray-900">
                    <div className='flex justify-center'>
                        <div className='w-3/5 text-justify'>
                                <Toolbar>
                                    <Typography variant="h6" color="inherit" className="mr-auto">
                                        <a href="https://dev.ayo.icu" className="underline hover:text-blue-500">Ayo ICU</a>
                                        
                                    </Typography>
                                    <Button color="inherit" variant="outlined" >Login</Button>
                                    &nbsp;
                                    <Button color="inherit" variant="outlined" >Register</Button>
                                </Toolbar>
                            
                        </div>
                    </div>
                </AppBar>
            </header>
        );
    }
}

export default Navbar;