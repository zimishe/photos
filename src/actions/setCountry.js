/**
 * Created by eugene on 04.05.2017.
 */

export function setCountry(selectedCountryId) {
    return {
        type: 'COUNTRY_CHOSEN', selectedCountryId: selectedCountryId
    }
}