/**
 * Created by eugene on 04.05.2017.
 */

import React, { Component } from 'react'
// eslint-disable-next-line
import store from './../store/store'

class ImageTopPanel extends Component {
    render() {
        return (
            <div className="image__controls">
                <a className="image__show-preview">Preview</a>
                <a className="image__edit">Edit</a>
                <a className="image__remove">X</a>
            </div>
        )
    }
}

export default ImageTopPanel
