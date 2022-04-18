import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Demo from "./menuList";

class Navbar extends Component {
    render() {
        return (
            <header>
                <AppBar position="static" className="bg-gray-900">
                    <div className='flex justify-center'>
                        <div className='w-3/5 text-justify'>
                                <Toolbar>
                                    <Typography variant="h6" color="inherit" className="mr-auto">
                                        <a href="https://dev.ayo.icu" className="underline hover:no-underline">Ayo ICU</a>
                                        
                                    </Typography>
                                    <a href="/about" className="underline text-white hover:no-underline">About</a>
                                    &nbsp;
                                    &nbsp;
                                    <Demo />
                                </Toolbar>
                                
                        </div>
                    </div>
                </AppBar>
            </header>
        );
    }
}

export default Navbar;