import React, { Component } from 'react';
import { withStyles, Drawer, CssBaseline, List, Divider, ListItem, ListItemIcon, ListItemText, Card } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import OrdersIcon from '@material-ui/icons/List';
import "./index.css";
import Home from './Home';
import Data from './Data';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const drawerWidth = 300;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    main_heading: {
        fontVariant: "all-petite-caps",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        position: "sticky",
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: "3%",
        background: "lightgrey",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    menu_list: {
        background: "#3b3b3b",
        textAlign: "center",
    },
    menu_text: {
        color: "white",
    },
    card_css: {
        marginTop: "5%",
        marginLeft: "3%",
        marginRight: "3%",
        width: "77%",
    },
    div_css: {
        height: "100vh"
    },
    toolbar: theme.mixins.toolbar,
});

class Mainmenu extends Component {
    constructor() {
        super();
        this.state = {
            home_selected: false,
            data_selected: false,
        }
    }
    handleHome = () => {
        this.setState({
            ...this.state, home_selected: true, req_form_selected: false
        });
    };
    handleData = () => {
        this.setState({
            ...this.state, home_selected: false, data_selected: false
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <Router>
                <div className={classes.root}>
                    <CssBaseline />
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}>
                        <div className={classes.toolbar} />
                        <List className={classes.main_heading}>
                            <ListItem className={classes.menu_list}>
                                <ListItemText className={classes.menu_text} primary="Menu" />
                            </ListItem>
                            <Divider />
                            <Link to="/" className="link_css">
                                <ListItem
                                    button
                                    onClick={() => this.handleHome()}
                                    selected={this.state.home_selected}
                                >
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        style={{ "fontSize": "x-large" }}
                                    >
                                        Hello
                                        </ListItemText>
                                </ListItem>
                            </Link>
                            <Divider />
                            <Link to="/sampleapp/data" className="link_css">
                                <ListItem button
                                    onClick={() => this.handleData()}
                                    selected={this.state.data_selected}>
                                    <ListItemIcon>
                                        <OrdersIcon />
                                    </ListItemIcon>
                                    <ListItemText className={classes.menu_item_text} primary="Data" />
                                </ListItem>
                            </Link>
                            <Divider />
                        </List>
                    </Drawer>
                    <Card className={classes.card_css}>
                        <Route exact path='/' component={Home} />
                        <Route path='/sampleapp/data' component={Data} />
                    </Card>
                </div >
            </Router>
        );
    }
}
export default withStyles(styles)(Mainmenu)