/**
 * Created by eugene on 03.05.2017.
 */

import imgOne from '../../assets/img/1.jpg'
import imgTwo from '../../assets/img/2.JPG'
import imgThree from '../../assets/img/3.png'

const initialState = {
    images: [
        {
            id: 1,
            src: imgOne
        },
        {
            id: 12,
            src: imgTwo
        },
        {
            id: 16,
            src: imgThree
        }
    ],
    
    tooltips: [
        {
            id: 1,
            coords: [],
            text: []
        },
        {
            id: 12,
            coords: [],
            text: []
        },
        {
            id: 1,
            coords: [],
            text: []
        }
    ]
};

export default initialState
