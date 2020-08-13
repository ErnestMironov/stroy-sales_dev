import pasteSVG from '../src/js/libs/pasteSvg';
var categories = require('../src/js/custom/categories');
var menu = require('../src/js/custom/menu');
var form = require('../src/js/custom/form');

$(document).ready(function() {
    categories.categories();
    menu.menu();
    form.form();
    pasteSVG();
    $('.js-example-basic-single').select2({
        width: 'style'
    });
});