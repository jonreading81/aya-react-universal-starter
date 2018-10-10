module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=16)}([
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("react")},
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/*! exports used: combineReducers, createStore */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("redux")},
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("prop-types")},
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("express")},
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports={box:"main_box_1JShKH2NLVak9oMKV2CHaT"}},
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("path")},
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/*! exports used: renderToString */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("react-dom/server")},
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("react-helmet")},
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/*! exports used: StaticRouter */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("react-router")},
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/*! exports used: Provider */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("react-redux")},
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses injected variables (module) */function(e,t,r){"use strict";(function(e){var n=r(/*! react */0),o=r.n(n),a=r(/*! react-hot-loader */11),c=r(/*! ./components/presentation/ExampleBox/ExampleBox */12);r(/*! normalize.css */15),r(/*! ./scss/main.scss */4);t.a=Object(a.hot)(e)(function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Hello I am amye!  "),o.a.createElement(c.a,null))})}).call(this,r(/*! ./../node_modules/webpack/buildin/harmony-module.js */14)(e))},
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/*! exports used: hot */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("react-hot-loader")},
/*!**************************************************************!*\
  !*** ./src/components/presentation/ExampleBox/ExampleBox.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,r){"use strict";var n=r(/*! react */0),o=r.n(n),a=r(/*! ./styles.scss */13),c=r.n(a);t.a=function(){return o.a.createElement("div",{className:"example-box ".concat(c.a.box)},"Example Box 1")}},
/*!************************************************************!*\
  !*** ./src/components/presentation/ExampleBox/styles.scss ***!
  \************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){e.exports={box:"styles_box_qDGX6gV4ZJOYKCz51bKQI "+r(/*! -!../../../../node_modules/css-loader/locals.js??ref--6-0!../../../../node_modules/sass-loader/lib/loader.js!../../../scss/main.scss */4).box}},
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){},
/*!************************************!*\
  !*** ./server/main.js + 2 modules ***!
  \************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./src/App.js (<- Module uses injected variables (module)) */
/*! ModuleConcatenation bailout: Cannot concat with external "express" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "path" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "prop-types" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "react" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "react-dom/server" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "react-helmet" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "react-redux" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "react-router" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "redux" (<- Module is not an ECMAScript module) */function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(5),c=r.n(a),i=r(3),u=r.n(i),l=r(1),s=r(6),f=r(2),p=r.n(f),d=r(7),m=r.n(d),b=r(8),x=r(9),y=r(10),v=function(e){var t=e.assets,r=e.url,n=e.store,a=m.a.rewind();return o.a.createElement("html",{lang:"en"},o.a.createElement("head",null,a.base.toComponent(),a.title.toComponent(),a.meta.toComponent(),a.link.toComponent(),a.script.toComponent(),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object.keys(t.styles).map(function(e,r){return o.a.createElement("link",{href:t.styles[e],key:r,media:"screen, projection",rel:"stylesheet",type:"text/css",charSet:"UTF-8"})})),o.a.createElement("body",null,o.a.createElement("div",{id:"root"},o.a.createElement(x.Provider,{store:n},o.a.createElement(b.StaticRouter,{location:r,context:{}},o.a.createElement(y.a,null)))),Object.keys(t.javascript).map(function(e,r){return o.a.createElement("script",{src:"".concat(t.javascript[e]),key:r})})))};v.propTypes={store:p.a.any.isRequired,assets:p.a.any.isRequired,url:p.a.string.isRequired};var h=v,j=Object(l.combineReducers)({blankReducer:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}});function O(e){var t=e.chunks,r=u()(),n=t();r.use(u.a.static(c.a.resolve("./build/static"))),r.listen(3e3,"0.0.0.0",function(e){e?console.error(e):console.info("Listening at http://localhost:3000")}),r.get("*",function(e,t){var r=Object(l.createStore)(j),a=Object(s.renderToString)(o.a.createElement(h,{url:e.url,store:r,assets:n}));t.send(a)})}r.d(t,"default",function(){return O})}]);
//# sourceMappingURL=server.js.map