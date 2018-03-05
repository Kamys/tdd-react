import {ADD_USER} from '../eventName';
import uuidv1 from "uuid/v1";
import * as faker from "faker";

function initialState() {
    return [];
}

/*
createUsers = (number = 10) => {
    let userList = [];
    for (let i = 1; i <= number; i++) {
        userList.push(createUser());
    }
    return userList;
};

*/

export default function userListReducer(state = initialState(), action) {
    switch (action.type) {
        case ADD_USER:
            return [...state, createUser()];
        default:
            return state
    }
}


function createUser() {
    return {
        id: uuidv1(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
    }
}