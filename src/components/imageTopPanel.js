/**
 * Created by eugene on 04.05.2017.
 */

import React, { Component } from 'react'

import EditPhoto from '../components/editPhoto'
import EditIcon from '../../assets/img/edit.png'
import PreviewIcon from '../../assets/img/preview.png'
import RemoveIcon from '../../assets/img/remove.png'

class ImageTopPanel extends Component {
    render() {
        return (
            <div className="image__controls">
                <a className="image__show-preview" title="Preview Tooltips" onClick={this.props.previewTooltips.bind(this)}><img src={PreviewIcon} alt="Preview"/></a>
                <div className="image__edit">
                    <a className="image__edit--toggle" title="Edit Image" onClick={this.props.editFormToggle.bind(this)}><img src={EditIcon} alt="Edit"/></a>
                    <EditPhoto imageEdit={this.props.imageEdit} imageID={this.props.imageID} />
                </div>
                <a className="image__remove" title="Remove Image" onClick={this.props.imageDelete}><img src={RemoveIcon} alt="Remove" /></a>
            </div>
        )
    }
}

export default ImageTopPanel