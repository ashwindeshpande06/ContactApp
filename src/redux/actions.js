/*
 * actions
 */

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const TOGGLE = 'TOGGLE';

/*
 * actions creators
 */

export function addItem(name, number, email) {
    return {
        type: ADD_ITEM,
        name,
        number,
        email
    };
}

export function deleteItem(index) {
    return {
        type: DELETE_ITEM,
        index
    };
}

export function editItem(index, name, number, email) {
    console.log("inside edit");
    return {
        type: EDIT_ITEM,
        index,
        name, 
        number,
        email
    };
}