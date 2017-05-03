/**
 * Created by eugene on 04.05.2017.
 */

import React, { Component } from 'react'
// eslint-disable-next-line
import store from './../store/store'

class AddPhoto extends Component {
    render() {
        return(
            <form id="uploadPhoto" onSubmit={this.props.uploadHandler}>
                <label>
                    <input type="file" name="form_photo" />
                </label>
                <button>Send</button>
            </form>
        )
    }
}

export default AddPhoto
