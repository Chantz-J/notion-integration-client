import axios from 'axios';
import { notionTypes } from './notion-types';

export const NotionCreatePage = data => {
    return async (dispatch) => {
        // e.preventDefault()
        dispatch({type: notionTypes.START_ADD_NEW_PAGE});
        await axios
        // .post('http://localhost:8080/',  data )
        .post('https://notion-integration-server.herokuapp.com/', data )
        .then(res => {
            dispatch({
                type: notionTypes.NEW_PAGE_ADDED,
                payload: res.data
            })
            console.log(res.data)
        })
        .catch(error => {
            dispatch({
                type: notionTypes.ERROR_ADDING_PAGE,
                payload: error.message
            })
        });
    };
};