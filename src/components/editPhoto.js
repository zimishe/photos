/**
 * Created by eugene on 04.05.2017.
 */

import React, { Component } from 'react'

class EditPhoto extends Component {
    render() {
        return(
            <form className="image__edit__form" onSubmit={this.props.imageEdit.bind(this)}>
                <label>
                    <span>Chose new image</span>
                    <input type="file" name="photo_edit" accept=".jpg"/>
                </label>
                <button>Send</button>
            </form>
        )
    }
}

export default EditPhoto
