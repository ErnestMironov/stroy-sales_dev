parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hRSz":[function(require,module,exports) {
function t(){$("img.svg").each(function(){var t=$(this),a=t.attr("id"),r=t.attr("class"),i=t.attr("src");$.get(i,function(i){var e=$(i).find("svg");void 0!==a&&(e=e.attr("id",a)),void 0!==r&&(e=e.attr("class",r+" replaced-svg")),!(e=e.removeAttr("xmlns:a")).attr("viewBox")&&e.attr("height")&&e.attr("width")&&e.attr("viewBox","0 0 "+e.attr("height")+" "+e.attr("width")),t.replaceWith(e)},"xml")})}module.exports=t;
},{}],"pU7I":[function(require,module,exports) {
var s=function(){var s=$(".categories-block__grid"),t=$(".categories-block__more");s&&(s.click(function(s){var t=s.target,e=$(t).closest(".categories-block__show-all");if(e){$(e).toggleClass("active");var a=$(e).hasClass("active")?"Закрыть подкатегории":"Все подкатегории";$(e).siblings(".categories-block__subcats-list").toggleClass("categories-block__subcats-list_short"),$(e).text(a)}}),t.click(function(e){t.toggleClass("active");var a=$(t).hasClass("active")?"СКРЫТЬ КАТЕГОРИИ":"ЕЩЁ КАТЕГОРИИ";t.text(a),s.toggleClass("categories-block__grid_short")}))};module.exports={categories:s};
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=s(require("../src/js/libs/pasteSvg"));function s(e){return e&&e.__esModule?e:{default:e}}var t=require("../src/js/custom/categories");$(document).ready(function(){t.categories(),(0,e.default)(),$(".js-example-basic-single").select2({width:"style"})});
},{"../src/js/libs/pasteSvg":"hRSz","../src/js/custom/categories":"pU7I"}]},{},["epB2"], null)
//# sourceMappingURL=/stroy-sales_dev/dist/main.1f19ae8e.js.map