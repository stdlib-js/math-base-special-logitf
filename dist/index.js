"use strict";var n=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var u=n(function(F,t){
var f=require('@stdlib/math-base-assert-is-probabilityf/dist'),o=require('@stdlib/math-base-assert-is-nanf/dist'),s=require('@stdlib/math-base-special-lnf/dist'),i=require('@stdlib/number-float64-base-to-float32/dist'),q=require('@stdlib/constants-float32-pinf/dist'),v=require('@stdlib/constants-float32-ninf/dist');function l(r){return o(r)?r:f(r)?r===0?v:r===1?q:s(i(r/i(1-r))):NaN}t.exports=l
});var N=u();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
