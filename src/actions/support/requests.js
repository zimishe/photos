/**
 * Created by eugene on 04.05.2017.
 */

import request from 'request'

export function deleteRequest(data) {
    request({
        uri: 'http://some.url',
        method: "post",
        form: data
    }, function(error, response, body) {
        console.log('err', error)
    });
}