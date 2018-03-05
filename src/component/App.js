import React, {Component} from 'react';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import PersonList from "./PersonList";
import * as userList from "../redux/creatorAction/userListCreatorAction"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class App extends Component {

    constructor(args) {
        super(args);
    }

    onClick = () => {
        this.props.actions.addUser();
    };

    render() {
        return (
            <div>
                <h1>My person manage</h1>
                <Button variant="raised" color="primary" onClick={this.onClick} className={this.props.classes.button}>
                    Add user
                </Button>
                <PersonList/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.userList,
    }
};


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        ...userList,
    }, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(withStyles(styles)(App));
