import React, { Component } from 'react'
import './../../assets/css/style.css'

import { connect } from 'react-redux'
import store from './../store/store'

import Image from './image'
import AddPhoto from './addPhoto'
// eslint-disable-next-line
import { setTooltipCoords } from '../actions/setTooltipCoordinate'
import { deleteImage } from '../actions/deleteImage'

// eslint-disable-next-line
import { deleteRequest, uploadImageRequest } from '../actions/support/requests'
// eslint-disable-next-line
import { editImageRequest } from '../actions/support/requests'
import { activateTooltipArea } from '../actions/activateTooltipArea'
import { editTooltipText } from '../actions/editTooltipText'
import { previewTooltips } from '../actions/previewTooltips'


const mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        editTooltipTextHandler: function (i, id, e) {
            editTooltipText(i, id, e);
        },

        createTooltipHandler: function (i, id, e) {
            activateTooltipArea(i, id, e.target.parentNode);
        },

        imageDeleteHandler: function (id) {
            let images = store.getState().images,
                imagesToSet = images.filter(el => el.id !== id);

            deleteRequest(imagesToSet);
            store.dispatch(deleteImage(imagesToSet));
        },

        imageEditHandler: function (id, e) {
            e.preventDefault();
            
            let dataToSend = new FormData(e.target);

            dataToSend.append('imageID', id);
            editImageRequest(dataToSend);
        },

        imageUploadHandler: function (e) {
            e.preventDefault();

            let dataToSend = new FormData(e.target);
            uploadImageRequest(dataToSend);
        },

        previewTooltips: function(e) {
            previewTooltips(e);
        },
        
        editFormToggle: function (e) {
            let form = e.target.parentNode.parentNode.lastChild;
            
            form.classList.toggle('image__edit__form--visible');
        }
    }
};

const mapStateToProps = function () {
    return {
        data : store.getState()
    }
};

class Container extends Component {
    render() {
        let images = store.getState().images,
            tooltips = store.getState().tooltips;

        return (
            <div className="photos">
                <AddPhoto uploadHandler={this.props.imageUploadHandler.bind(this)}/>
                <div className="photos__list">
                    {
                        images.map((el, i) =>
                            <Image key={i}
                                   src={el.src}
                                   id={el.id}
                                   tooltips={tooltips[i]}
                                   createTooltip={this.props.createTooltipHandler.bind(this, i)}
                                   editTooltipText={this.props.editTooltipTextHandler.bind(this, i, el.id)}
                                   imageDelete={this.props.imageDeleteHandler.bind(this, el.id)}
                                   imageEdit={this.props.imageEditHandler}
                                   previewTooltips={this.props.previewTooltips}
                                   editFormToggle={this.props.editFormToggle}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
