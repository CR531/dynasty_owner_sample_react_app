import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '91%',
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: "3%",
    }
});
class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} style={{ "marginBottom": "2%" }}>
                <p style={{ "textAlign": "center", "fontSize": "larger" }}>
                    This is a React application which contains mock json data and performs operations on the data.
                </p>
                <p style={{ "textAlign": "center", "fontSize": "larger" }}><b>Functionalities</b></p>
                <p style={{ "textAlign": "left", "fontSize": "larger" }}><ol>
                    <li>Initially the app contains test data in a specific js file.</li>
                    <li>Main dashboard has 2 routes i.e Home and Data in the left permanent drawer</li>
                    <li>Home has what this application contains</li>
                    <li>Data contains all the data pulled from the mock json file into the UI</li>
                    <li>Data is pulled into expansion panels and dipicted onto UI</li>
                </ol>
                </p>
            </div>
        );
    }
}
export default withStyles(styles)(Home);