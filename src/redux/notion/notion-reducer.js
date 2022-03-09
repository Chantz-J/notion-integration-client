import { notionTypes } from "./notion-types";

const INTIAL_STATE = {
    isCreated: false,
    errors: '',
    pageURL: '',
    submitting: false,
    submitted: false,
};

export const notionReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        case notionTypes.START_ADD_NEW_PAGE:
            return {
                ...state,
                submitting: true
            }
        case notionTypes.NEW_PAGE_ADDED:
            return {
                pageURL: action.payload,
                submitting: false,
                submitted: true,
            }
        case notionTypes.ERROR_ADDING_PAGE:
            return {
                errors: action.payload,
                submitting: false,
            }
        default:
            return state
    }
}