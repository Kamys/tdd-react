import {ADD_USER} from '../eventName';

function addUser(payload) {
    return {type: ADD_USER, payload}
}


export {addUser};