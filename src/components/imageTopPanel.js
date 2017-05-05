/**
 * Created by eugene on 04.05.2017.
 */

import React, { Component } from 'react'
// eslint-disable-next-line
import store from './../store/store'
import EditPhoto from '../components/editPhoto'

class ImageTopPanel extends Component {
    render() {
        return (
            <div className="image__controls">
                <a className="image__show-preview">Preview</a>
                <div className="image__edit">
                    <a className="image__edit--toggle">Edit</a>
                    <EditPhoto imageEdit={this.props.imageEdit} imageID={this.props.imageID} />
                </div>
                <a className="image__remove" onClick={this.props.imageDelete}>X</a>
            </div>
        )
    }
}

export default ImageTopPanel
