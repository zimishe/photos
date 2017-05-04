import React, { Component } from 'react'
import './../../assets/css/style.css'

import { connect } from 'react-redux'
import store from './../store/store'

import Image from './image'
import AddPhoto from './addPhoto'
import { setTooltipCoords } from '../actions/setTooltipCoordinate'
import { deleteImage } from '../actions/deleteImage'

import { deleteRequest } from '../actions/support/requests'


const mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        someHandler: function (e) {
            console.log('store before', store.getState());

            let coords = {
                left: e.target.offsetLeft,
                top: e.target.offsetTop
            };

            store.dispatch(setTooltipCoords(coords));
            console.log('store after', store.getState());

            // console.log('x', x);
            // console.log('y', y);
        },

        imageDeleteHandler: function (id, e) {
            let images = store.getState().images,
                imagesToSet = images.filter(el => el.id !== id);

            // deleteRequest(imagesToSet);
            store.dispatch(deleteImage(imagesToSet));
        },

        imageEditHandler: function (e) {
            e.preventDefault();
            // console.log('ns', newSrc);

            let newSrc = new FormData();

            newSrc.append('name', {govno: 'ebanoe'});
            console.log('ns', newSrc)
        },

        imageUploadHandler: function (e) {
            e.preventDefault();
            console.log('upload handler');
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
        let images = store.getState().images;

        return (
            <div className="photos">
                <AddPhoto uploadHandler={this.props.imageUploadHandler.bind(this)}/>
                <div className="photos__list">
                    {
                        images.map((el, i) =>
                            <Image key={i}
                                   src={el.src}
                                   id={el.id}
                                   createTooltip={this.props.someHandler.bind(this)}
                                   imageDelete={this.props.imageDeleteHandler.bind(this, el.id)}
                                   imageEdit={this.props.imageEditHandler}
                            />
                        )
                    }
                </div>

                <button onClick={this.props.someHandler.bind(this)}>click me</button>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
