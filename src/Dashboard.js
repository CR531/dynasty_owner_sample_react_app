import React, { Component } from 'react';
import './index.css';
import { withStyles, Typography, Grid, Divider, AppBar } from '@material-ui/core';
const styles = theme => ({
    title1: {
        flexGrow: 1,
        color: "white",
        fontSize: "200%",
        fontWeight: "500",
        fontVariant: "all-petite-caps",
    },
    root: {
        flexGrow: 1,
    },
    grid_css: {
        marginTop: "1%",
        marginBottom: "1%"
    },
});

class Dashboard extends Component {

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar position="fixed" style={{ "background": "#3b3b3b" }}>
                    <Grid container className={classes.grid_css} >
                        <Grid item xs><Typography variant="h3" className={classes.title1}>
                            Dynasty Owner Sample React App
                      </Typography></Grid>
                    </Grid>
                </AppBar>
                <Divider />
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(Dashboard);