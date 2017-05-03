import React, { Component } from 'react'
import './../../assets/css/style.css'

import { connect } from 'react-redux'
import store from './../store/store'

import Image from './image'
import AddPhoto from './addPhoto'
import { setTooltipCoords } from '../actions/setTooltipCoordinate'

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
        uploadHandler: function (e) {
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
        return (
            <div className="photos">
                <AddPhoto uploadHandler={this.props.uploadHandler.bind(this)}/>
                <div className="photos__list">
                    <Image createTooltip={this.props.someHandler.bind(this)} />
                    <Image createTooltip={this.props.someHandler.bind(this)} />
                    <Image createTooltip={this.props.someHandler.bind(this)} />
                    <Image createTooltip={this.props.someHandler.bind(this)} />
                    <Image createTooltip={this.props.someHandler.bind(this)} />
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
