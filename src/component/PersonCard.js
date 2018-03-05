import React, {Component} from 'react';
import {Grid, IconButton} from "material-ui";
import {Avatar, Card} from "material-ui/index";
import {CardHeader} from "material-ui/Card/index";
import person from "material-ui/es/Select/SelectInput";
import MoreVertIcon from 'material-ui-icons/MoreVert';

class PersonCard extends Component {
    render() {
        const {person} = this.props;
        return (
            <Grid key={person.id} item xs={8} sm={4}>
                <Card>
                    <CardHeader noWrap
                                avatar={
                                    <Avatar aria-label="Recipe" style={{
                                        backgroundImage: `url(${person.avatar})`,
                                        backgroundPosition: "center",
                                    }}>

                                    </Avatar>
                                }
                                action={
                                    <IconButton>
                                        <MoreVertIcon/>
                                    </IconButton>
                                }
                                title={person.name}
                                subheader={person.email}/>
                </Card>
            </Grid>
        );
    }
}

export default PersonCard;