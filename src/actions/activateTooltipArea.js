/**
 * Created by eugene on 05/05/17.
 */

import store from './../store/store'
import { setTooltipCoords } from './../actions/setTooltipCoordinate'

export function activateTooltipArea(i, id, target) {
    let images = Array.from(document.querySelectorAll('.image'));
    
    images.forEach(image => image.classList.remove('image__tooltip--selecting'));
    
    target.classList.add('image__tooltip--selecting');

    let imagesData = store.getState().tooltips,
        dataToSet = [...imagesData],
        coords = [],
        tooltip = {};
    
    target.addEventListener('click', (e) => {
        let coordsToAdd = {
            left: e.offsetX,
            top: e.offsetY
        };

        if (!target.classList.contains('image__tooltip--adding-text')) {

            coords.push(coordsToAdd);

            target.classList.add('image__tooltip--adding-text');
            // let targetData = imagesData.filter(el => el.id === id);

            tooltip.id = id;
            tooltip.coords = coords;

            let form = document.getElementsByClassName('.image__tooltip--adding-text .image__tooltip__text');

            console.log('fl', form);

            dataToSet[i] = tooltip;

            store.dispatch(setTooltipCoords(dataToSet));
        }
        // console.log('store', store.getState().tooltips);
    });
}