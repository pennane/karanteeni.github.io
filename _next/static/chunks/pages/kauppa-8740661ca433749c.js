(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{8917:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kauppa",function(){return r(437)}])},9160:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.heading,r=e.lead,i=e.children;return(0,n.jsxs)("div",{className:"main-heading",children:[(0,n.jsx)("h1",{children:t}),(0,n.jsx)("p",{className:"lead",children:r}),i]})}},437:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return _},default:function(){return f}});var n=r(5893),i=(r(7294),r(9160)),a=r(2147),s=r(5405),o=r(5025),c=r.n(o),u=r(4670),l=r(7959),d=function(){var e=["5h-peliaikaa","100d-peliaikaa","karanteeni-rintamerkki"].map((function(e){return l.R.get(e)})).filter(Boolean);return(0,n.jsxs)("section",{className:c().emphasize,children:[(0,n.jsx)("h2",{children:"Suosittelemme"}),(0,n.jsx)("div",{className:c()["aside-products-list"],children:e&&e.map((function(e){return(0,n.jsx)(s.Z,{product:e},e.id)}))})]})},p=r(1664);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);s=!0);}catch(c){o=!0,i=c}finally{try{s||null==r.return||r.return()}finally{if(o)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=!0,f=function(e){var t=e.products;return(0,n.jsxs)(a.Z,{title:"Kauppa",description:"Osta minecraft tavaroita, peliaikaa tai Karanteeni mechi\xe4!",className:c()["store-page"],children:[(0,n.jsx)(u.Z,{}),(0,n.jsx)(i.Z,{heading:"Kauppa",lead:"Tarjoamme pelinsis\xe4isi\xe4 tuotteita palvelimelle, sek\xe4 tarkasti suunniteltua Karanteenimerchi\xe4\u2122"}),(0,n.jsx)("section",{className:c().emphasize,children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Osta peliaikaa, ja speedrunaa vaikka kuolemattomaksi!"}),(0,n.jsx)("li",{children:"Myynniss\xe4 kotiin tilattavia tuotteita, sek\xe4 pelinsis\xe4isi\xe4 tuotteita palvelimelle"}),(0,n.jsx)("li",{children:"Ilmaiset postikulut yli 100\u20ac tilauksiin. Muuten maksu on 7\u20ac."}),(0,n.jsx)("li",{children:"Monta maksutapaa. My\xf6s CSGO skineill\xe4 voi maksaa."})]})}),(0,n.jsx)(d,{}),t&&Object.entries(t).map((function(e,t){var r=m(e,2),i=r[0],a=r[1];return(0,n.jsxs)("section",{className:c().emphasize,children:[(0,n.jsx)("h2",{children:i}),(0,n.jsx)("div",{className:c()["aside-products-list"],children:a&&a.slice(0,3).map((function(e){return(0,n.jsx)(s.Z,{product:e},e.id)}))}),(0,n.jsx)("div",{className:c()["open-type-link"],children:(0,n.jsx)(p.default,{href:"/kauppa/tuotteet/"+i,children:"Kaikki tuotetyypin tuotteet"})})]},t)}))]})}},9022:function(e,t,r){"use strict";var n=r(5893),i=r(5025),a=r.n(i);t.Z=function(e){var t=e.product,r=e.height,i=e.width;if(!t.image)return(0,n.jsx)("img",{src:"/store/placeholder.png",height:r,width:i});var s="/store/"+t.type+"/"+t.image;return(0,n.jsx)("div",{className:a()["product-image"],children:(0,n.jsx)("img",{src:s,height:r,width:i,alt:""})})}},5405:function(e,t,r){"use strict";var n=r(5893),i=r(6737),a=r(5025),s=r.n(a),o=r(1664),c=r(9022);t.Z=function(e){var t=e.product;return(0,n.jsxs)("div",{className:s()["small-product"],children:[(0,n.jsx)(o.default,{href:"/kauppa/tuotteet/"+t.type+"/"+t.id,children:(0,n.jsx)("a",{children:(0,n.jsx)("h3",{children:t.name})})}),(0,n.jsx)(c.Z,{product:t,height:100,width:200}),(0,n.jsx)("p",{className:s()["product-description"],children:t.description}),(0,n.jsx)("p",{className:s().price,children:(0,i.P)(t.price)})]})}},4670:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(5893),i=r(7294),a=r(1163),s=r(1664),o=r(5025),c=r.n(o),u=r(7024),l=r(6737),d=function(){var e=(0,i.useContext)(u.I).state,t=e.cart.reduce((function(e,t){return e+t.amount}),0);return(0,n.jsx)("div",{className:c()["cart-info"],children:t>0&&(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:c().price,children:(0,l.P)(e.cart.reduce((function(e,t){return e+t.amount*t.product.price}),0))})})})},p=r(7959);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function _(e){var t=e.children,r=e.onBlur,a=m(e,["children","onBlur"]),s=(0,i.useCallback)((function(e){var t=e.currentTarget;requestAnimationFrame((function(){t.contains(document.activeElement)||r()}))}),[r]);return(0,n.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}({},a,{onBlur:s,children:t}))}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j,g=function(e){if(Array.isArray(e))return f(e)}(j=p.R.values())||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(j)||function(e,t){if(e){if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(j)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),v=function(){var e=(0,i.useState)(""),t=e[0],r=e[1],s=(0,i.useState)([]),o=s[0],u=s[1],l=(0,i.useState)(!1),d=l[0],p=l[1],h=(0,a.useRouter)();return(0,n.jsxs)(_,{className:c()["search-bar"],onFocus:function(){return p(!0)},onBlur:function(){return setTimeout((function(){return p(!1)}),200)},children:[(0,n.jsx)("input",{onClick:function(){return p(!0)},type:"text",value:t,onChange:function(e){r(e.target.value),u(g.filter((function(e){return e.name.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)})))},placeholder:"haku"}),d&&t.length>2&&o.length>0&&(0,n.jsx)("div",{className:c()["search-results"],children:o.map((function(e){return(0,n.jsx)("a",{onClick:function(t){t.preventDefault(),r(""),h.push("/kauppa/tuotteet/"+e.type+"/"+e.id)},tabIndex:0,children:e.name},e.id)}))}),d&&t.length>2&&0===o.length&&(0,n.jsx)("div",{className:c()["search-results"],children:(0,n.jsx)("span",{children:"ei l\xf6yt\xf6j\xe4"})})]})};function y(){var e=(0,a.useRouter)(),t=e.asPath.slice(1).split("/").map((function(e,t,r){return"/".concat(r.slice(0,t+1).join("/"))})).slice(0,-1),r=!["/kauppa/ostoskori","/kauppa/kassa"].includes(e.route);return(0,n.jsxs)("div",{className:c()["navigation-container"],children:[(0,n.jsx)(v,{}),(0,n.jsxs)("div",{className:c().navigation+" "+c().breadcrumbs,children:[t&&t.map((function(e,t){return(0,n.jsx)(s.default,{href:e,children:(0,n.jsx)("a",{className:c().crumb,children:e.split("/")[e.split("/").length-1]})},t)})),(0,n.jsx)("div",{className:c().right+" "+c().crumb+" "+c().last,children:r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.default,{href:"/kauppa/ostoskori",children:(0,n.jsx)("a",{children:"Ostoskoriin"})}),(0,n.jsx)(d,{})]})})]})]})}},6737:function(e,t,r){"use strict";r.d(t,{P:function(){return n}});var n=function(e){return(e/100).toFixed(2)+"\u20ac"}},5025:function(e){e.exports={"store-page":"store_store-page__8rd0y",crumb:"store_crumb__3ZDoz",breadcrumbs:"store_breadcrumbs__9mogc",last:"store_last__1rq6W",price:"store_price__N_3ul",emphasize:"store_emphasize__6o60w","product-description":"store_product-description__3Am_0","small-product":"store_small-product__Kj7Zy","search-bar":"store_search-bar__DDFt4","search-results":"store_search-results__Vv1bn","navigation-container":"store_navigation-container__VgXBU","large-product":"store_large-product__gdWyb","large-product-center":"store_large-product-center__3MO2o","aside-products-list":"store_aside-products-list__rPdDP","products-list":"store_products-list__lt4OH","cart-product":"store_cart-product__7S2AJ","cart-products-list":"store_cart-products-list__oQ4_s","clear-cart-button":"store_clear-cart-button__JPE4P",navigation:"store_navigation__24MRF",right:"store_right__DKrwR","product-page":"store_product-page__Mc6z1","product-page-main":"store_product-page-main__Z_IOb","type-page":"store_type-page__Re01d","open-type-link":"store_open-type-link__POw0G","similar-products-aside":"store_similar-products-aside__D0_rU","cart-info":"store_cart-info__SZBRa","product-image":"store_product-image__x6kBA","increment-decrement":"store_increment-decrement__D_8rv",inline:"store_inline__2qRBf","add-to-cart":"store_add-to-cart__IXb0c",bottom:"store_bottom__FTceX",light:"store_light__MlSg1",redeem:"store_redeem__3TDiJ"}}},function(e){e.O(0,[523,112,902,147,774,888,179],(function(){return t=8917,e(e.s=t);var t}));var t=e.O();_N_E=t}]);