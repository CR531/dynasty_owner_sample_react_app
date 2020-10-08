import React, { Component } from 'react';
import {
    Typography,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Divider,
    Grid,
    withStyles
} from '@material-ui/core';
import axios from 'axios';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '91%',
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: "3%",
    },
    details: {
        alignItems: 'center',
        marginTop: "1%",
        marginBottom: "-2%",
    },
    secondaryHeading: {
        fontSize: "large",
        fontWeight: "500",
        fontVariant: "all-petite-caps",
        color: "gray",
    },
    dataHeading: {
        fontSize: "large",
        fontWeight: "500",
        fontVariant: "all-petite-caps",
        color: "black",
    },
    column1: {
        flexBasis: '33.33%',
        marginBottom: "-1%"
    }
});
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api_response: [],
        }
    }
    async componentDidMount() {
        await axios.get('https://api.github.com/repos/CR531/3D_Print_Ordering_System_ReactJS_Project/commits')
            .then(response => {
                this.setState({ ...this.state, api_response: response.data });
                console.log(this.state.api_response.length);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    handleExpChange = (index) => {
        this.setState({ ...this.state, active_index: this.state.active_index === index ? -1 : index })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root} >
                {this.state.api_response &&
                    this.state.api_response.length > 0 &&
                    this.state.api_response.map((listValue, index) => {
                        return (
                            <ExpansionPanel expanded={this.state.active_index === index}
                                onChange={() => this.handleExpChange(index)}
                            >
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    id={index}
                                    style={{ "background": "lightgrey" }}
                                >
                                    <div className={classes.column1}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={3}>
                                                <Typography className={classes.secondaryHeading}>Author </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={9}>
                                                <Typography className={classes.dataHeading}>{(listValue.commit.author.name && listValue.commit.author.name !== "") ? listValue.commit.author.name : "N/A"} </Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className={classes.column1}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={3}>
                                                <Typography className={classes.secondaryHeading}>Commit Message : </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={9}>
                                                <Typography className={classes.dataHeading}>{(listValue.commit.message && listValue.commit.message !== "") ? listValue.commit.message : "N/A"} </Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </ExpansionPanelSummary>
                                <Divider />
                            </ExpansionPanel>
                        );
                    })}
            </div >
        )
    }
}
export default withStyles(styles)(Data);