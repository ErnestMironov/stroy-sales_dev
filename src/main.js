import pasteSVG from '../src/js/libs/pasteSvg';
var categories = require('../src/js/custom/categories');
var menu = require('../src/js/custom/menu');

$(document).ready(function() {
    categories.categories();
    menu.menu();
    pasteSVG();
    $('.js-example-basic-single').select2({
        width: 'style'
    });
});