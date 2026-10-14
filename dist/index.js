"use strict";var m=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var x=m(function(S,q){
var l=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),I=require('@stdlib/ndarray-base-numel-dimension/dist'),o=require('@stdlib/ndarray-base-clip-upper-index/dist'),w=require('@stdlib/ndarray-base-stride/dist'),D=require('@stdlib/ndarray-base-offset/dist'),k=require('@stdlib/ndarray-base-data-buffer/dist'),B=require('@stdlib/blas-ext-base-gfind-last-index/dist').ndarray;function L(t,r,v){var e,i,d,s,u,n,f,a;if(a=t[0],e=l(t[1]),i=l(t[2]),n=I(a,0),e=o(e,e<0?n:n-1),e<0||(i=o(i,i<0?n:n-1),f=e-i,f<=0))return-1;return d=w(a,0),s=D(a)+d*(i+1),u=B(f,k(a),d,s,c,null),u>=0&&(u+=i+1),u;function c(p,g){return r.call(v,p,e-g,a)}}q.exports=L
});var N=x();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
