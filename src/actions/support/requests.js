/**
 * Created by eugene on 04.05.2017.
 */
// eslint-disable-next-line
import request from 'request'
import store from './../../store/store'
import editedState from './../../store/editedState'
import { editImage } from '../../actions/editImage'

export function deleteRequest(data) {
    fetch('/', {
        method: 'POST',
        body: data
    }).then(function (response) {
        console.log('r', response);
    });
}

export function editImageRequest(data) {
    fetch('/', {
        method: 'POST',
        body: data
    }).then(function (response) {
        store.dispatch(editImage(editedState));
    });
}

export function uploadImageRequest(data) {
    fetch('/', {
        method: 'POST',
        body: data
    }).then(function (response) {

    });
}