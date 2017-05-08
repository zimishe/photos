/**
 * Created by eugene on 08.05.2017.
 */

export function previewTooltips(e) {
    let image = document.querySelector('.image.image__tooltip--selecting'),
        previewMode = document.querySelector('.image.image__tooltip--visible');

    (image !== null) &&
    image.classList.remove('image__tooltip--selecting', 'image__tooltip--adding-text');

    function getParent(target) {

        if (target.classList.contains('image')) {
            target.classList.add('image__tooltip--visible')
        }   else {
            getParent(target.parentNode);
        }
    }

    getParent(e.target);

    if (previewMode !== null) {
        previewMode.classList.remove('image__tooltip--visible');
    }
}