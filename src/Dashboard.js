import React, { Component } from 'react';
import './index.css';
import { Typography, Grid, Divider, AppBar } from '@material-ui/core';
import { TestData } from "./TestData";
import Mainmenu from './Mainmenu';

class Dashboard extends Component {

    render() {
        // const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar position="fixed" style={{ "background": "#3b3b3b" }}>
                    <Grid container
                        className="grid_css" >
                        <Grid item xs><Typography
                            variant="h4"
                            className="title1"
                        >
                            Dynasty Owner Sample React App
                      </Typography></Grid>
                    </Grid>
                </AppBar>
                <Divider />
                <div>
                    <Mainmenu
                        testData={TestData}
                    />
                </div>
            </React.Fragment>
        );
    }
}
export default Dashboard;