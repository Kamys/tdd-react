import React, {Component} from 'react';
import {Col, Row} from "react-materialize";
import block from 'bem-ts'

const b = block('list-person');
const persons = [
    {name: 'Person 1'},
    {name: 'Person 2'},
    {name: 'Person 3'},
    {name: 'Person 4'},
    {name: 'Person 5'},
];

class ListPerson extends Component {
    render() {
        return (
            <div className={b()}>
                <Row>
                    {persons.map((person, index) => (
                        <Col key={index} s={12} m={4} i={3} className='grid-example'>{person.name}</Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default ListPerson;