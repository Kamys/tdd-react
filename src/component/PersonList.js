import React, {Component} from 'react';
import {Grid} from "material-ui";

import PersonCard from "./PersonCard";
import * as userList from "../redux/creatorAction/userListCreatorAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withStyles} from "material-ui/styles/index";

class NoteList extends Component {

    constructor(args) {
        super(args);
    }


    render() {
        return (
            <Grid
                container
                alignItems="flex-start"
                direction="row"
                justify="flex-start">
                {this.props.userList.map(person => (
                    <PersonCard person={person}/>
                ))}
            </Grid>
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
(NoteList);