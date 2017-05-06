/**
 * Created by eugene on 04.05.2017.
 */
import initialState from './../store/initialState'

let reducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case 'TOOLTIP_COORDINATE_SET' : return {
            images: state.images,
            tooltips: action.tooltipsToSet
        };

        case 'IMAGE_DELETED' : return {
            images: action.imagesToSet,
            tooltips: state.tooltips
        };
        
        case 'IMAGE_EDITED' : return {
            images: action.imagesToSet,
            tooltips: state.tooltips
        };

        default : return state
    }
};

export default reducer