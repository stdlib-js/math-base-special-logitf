"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=a(function(c,t){
var n=require('@stdlib/math-base-assert-is-probabilityf/dist'),f=require('@stdlib/math-base-assert-is-nanf/dist'),o=require('@stdlib/math-base-special-lnf/dist'),i=require('@stdlib/number-float64-base-to-float32/dist'),s=require('@stdlib/constants-float32-pinf/dist'),q=require('@stdlib/constants-float32-ninf/dist');function v(r){return f(r)?r:n(r)?r===0?q:r===1?s:o(i(r/i(1-r))):NaN}t.exports=v
});var l=u();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
