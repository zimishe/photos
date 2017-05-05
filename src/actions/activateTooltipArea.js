/**
 * Created by eugene on 05/05/17.
 */

import store from './../store/store'

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

        coords.push(coordsToAdd);
        
        // let targetData = imagesData.filter(el => el.id === id);
        
        tooltip.id = id;
        tooltip.coords = coords;

        dataToSet[i] = tooltip;
        
        console.log('ttip', tooltip);
        console.log('dsss', dataToSet[i]);
        
        console.log('store', store.getState().tooltips);
    });
}