import React, { Component } from 'react';
import {
    Typography,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Divider,
    Grid,
    withStyles,
    Paper,
    TableContainer
} from '@material-ui/core';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '91%',
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: "3%",
    },
    table: {
        minWidth: 600,
        fontSize: "large"
    },
    details: {
        alignItems: 'center',
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
        flexBasis: '99%',
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
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={1}>
                                                <Typography className={classes.secondaryHeading}>Author </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Typography className={classes.dataHeading}>{(listValue.commit.author.name && listValue.commit.author.name !== "") ? listValue.commit.author.name : "N/A"} </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <Typography className={classes.secondaryHeading}>Commit Message : </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Typography className={classes.dataHeading}>{(listValue.commit.message && listValue.commit.message !== "") ? listValue.commit.message : "N/A"} </Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </ExpansionPanelSummary>
                                <Divider />
                                <ExpansionPanelDetails className={classes.details}>
                                    <TableContainer component={Paper}>
                                        <Table className={classes.table}>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>Github Author Email</TableCell>
                                                    <TableCell align="left">
                                                        {(listValue.commit.author.email && listValue.commit.author.email !== "") ? listValue.commit.author.email : "N/A"}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Code Cimmitted Date</TableCell>
                                                    <TableCell align="left">
                                                        {(listValue.commit.committer.date && listValue.commit.committer.date !== "") ? listValue.commit.committer.date : "N/A"}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Github URL</TableCell>
                                                    <TableCell align="left">
                                                        {(listValue.author.html_url && listValue.author.html_url !== "") ? listValue.author.html_url : "N/A"}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Commit URL</TableCell>
                                                    <TableCell align="left">
                                                        {(listValue.commit.url && listValue.commit.url !== "") ? listValue.commit.url : "N/A"}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Github Repo URL</TableCell>
                                                    <TableCell align="left">
                                                        {(listValue.author.repos_url && listValue.author.repos_url !== "") ? listValue.author.repos_url : "N/A"}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Node ID</TableCell>
                                                    <TableCell align="left">
                                                        {(listValue.node_id && listValue.node_id !== "") ? listValue.node_id : "N/A"}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Author Node ID</TableCell>
                                                    <TableCell align="left">
                                                        {(listValue.author.node_id && listValue.author.node_id !== "") ? listValue.author.node_id : "N/A"}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Committer ID</TableCell>
                                                    <TableCell align="left">
                                                        {(listValue.committer.id && listValue.committer.id !== "") ? listValue.committer.id : "N/A"}
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        );
                    })}
            </div >
        )
    }
}
export default withStyles(styles)(Data);