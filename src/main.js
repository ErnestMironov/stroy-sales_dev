import pasteSVG from '../src/js/libs/pasteSvg';
var categories = require('../src/js/custom/categories');

$(document).ready(function() {
    categories.categories();
    pasteSVG();
    $('.js-example-basic-single').select2({
        width: 'style'
    });
});