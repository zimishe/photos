/**
 * Created by eugene on 04.05.2017.
 */

import React, { Component } from 'react'



class AddPhoto extends Component {
    render() {
        return(
            <form id="uploadPhoto" className="photos__upload" onSubmit={this.props.uploadHandler}>
                <label>
                    Choose new image
                    <input type="file" name="form_photo" />
                </label>
                <button>Send</button>
            </form>
        )
    }
}

export default AddPhoto
