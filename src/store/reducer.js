/**
 * Created by eugene on 04.05.2017.
 */
import initialState from './../store/initialState'

let reducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case 'COUNTRY_CHOSEN' : return {
            selectedCountryId: action.selectedCountryId,
            countries: state.countries
        };

        default : return state
    }
};

export default reducer