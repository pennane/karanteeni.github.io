(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[917],{3109:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kauppa/tuotteet/[type]",function(){return t(8667)}])},8667:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return u},default:function(){return l}});var n=t(5893),s=t(2147),i=t(5405),o=t(4670),c=t(5025),a=t.n(c),u=!0;function l(e){var r=e.type,t=e.products;return(0,n.jsxs)(s.Z,{title:r+" tuotteet",className:a()["store-page"],children:[(0,n.jsx)(o.Z,{}),(0,n.jsxs)("div",{className:a()["type-page"],children:[(0,n.jsx)("h2",{children:r}),(0,n.jsx)("div",{className:a()["aside-products-list"],children:t&&t.map((function(e){return(0,n.jsx)(i.Z,{product:e},e.id)}))})]})]})}},9022:function(e,r,t){"use strict";var n=t(5893),s=t(5025),i=t.n(s);r.Z=function(e){var r=e.product,t=e.height,s=e.width;if(!r.image)return(0,n.jsx)("img",{src:"/store/placeholder.png",height:t,width:s});var o="/store/"+r.type+"/"+r.image;return(0,n.jsx)("div",{className:i()["product-image"],children:(0,n.jsx)("img",{src:o,height:t,width:s,alt:""})})}},5405:function(e,r,t){"use strict";var n=t(5893),s=t(6737),i=t(5025),o=t.n(i),c=t(1664),a=t(9022);r.Z=function(e){var r=e.product;return(0,n.jsxs)("div",{className:o()["small-product"],children:[(0,n.jsx)(c.default,{href:"/kauppa/tuotteet/"+r.type+"/"+r.id,children:(0,n.jsx)("a",{children:(0,n.jsx)("h3",{children:r.name})})}),(0,n.jsx)(a.Z,{product:r,height:100,width:200}),(0,n.jsx)("p",{className:o()["product-description"],children:r.description}),r.sale&&(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:o().price,children:(0,s.P)(r.price)}),(0,n.jsx)("div",{className:o().sale,children:r.originalPrice&&(0,n.jsx)("p",{className:o()["old-price"],children:(0,s.P)(r.originalPrice)})})]}),!r.sale&&(0,n.jsx)("p",{className:o().price,children:(0,s.P)(r.price)})]})}},4670:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var n=t(5893),s=t(7294),i=t(1163),o=t(1664),c=t(5025),a=t.n(c),u=t(7024),l=t(6737),d=function(){var e=(0,s.useContext)(u.I).state,r=e.cart.reduce((function(e,r){return e+r.amount}),0);return(0,n.jsx)("div",{className:a()["cart-info"],children:r>0&&(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:a().price,children:(0,l.P)(e.cart.reduce((function(e,r){return e+r.amount*r.product.price}),0))})})})},p=t(7959);function _(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function h(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function m(e){var r=e.children,t=e.onBlur,i=h(e,["children","onBlur"]),o=(0,s.useCallback)((function(e){var r=e.currentTarget;requestAnimationFrame((function(){r.contains(document.activeElement)||t()}))}),[t]);return(0,n.jsx)("div",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){_(e,r,t[r])}))}return e}({},i,{onBlur:o,children:r}))}function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var g,j=function(e){if(Array.isArray(e))return f(e)}(g=p.R.values())||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(g)||function(e,r){if(e){if("string"===typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,r):void 0}}(g)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),b=function(){var e=(0,s.useState)(""),r=e[0],t=e[1],o=(0,s.useState)([]),c=o[0],u=o[1],l=(0,s.useState)(!1),d=l[0],p=l[1],_=(0,i.useRouter)();return(0,n.jsxs)(m,{className:a()["search-bar"],onFocus:function(){return p(!0)},onBlur:function(){return setTimeout((function(){return p(!1)}),200)},children:[(0,n.jsx)("input",{onClick:function(){return p(!0)},type:"text",value:r,onChange:function(e){t(e.target.value),u(j.filter((function(e){return e.name.toLowerCase().includes(r)||e.description.toLowerCase().includes(r)})))},placeholder:"haku"}),d&&r.length>2&&c.length>0&&(0,n.jsx)("div",{className:a()["search-results"],children:c.map((function(e){return(0,n.jsx)("a",{onClick:function(r){r.preventDefault(),t(""),_.push("/kauppa/tuotteet/"+e.type+"/"+e.id)},tabIndex:0,children:e.name},e.id)}))}),d&&r.length>2&&0===c.length&&(0,n.jsx)("div",{className:a()["search-results"],children:(0,n.jsx)("span",{children:"ei l\xf6yt\xf6j\xe4"})})]})};function v(){var e=(0,i.useRouter)(),r=e.asPath.slice(1).split("/").map((function(e,r,t){return"/".concat(t.slice(0,r+1).join("/"))})).slice(0,-1),t=!["/kauppa/ostoskori","/kauppa/kassa"].includes(e.route);return(0,n.jsxs)("div",{className:a()["navigation-container"],children:[(0,n.jsx)(b,{}),(0,n.jsxs)("div",{className:a().navigation+" "+a().breadcrumbs,children:[r&&r.map((function(e,r){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{href:e,children:(0,n.jsx)("a",{className:a().crumb,children:e.split("/")[e.split("/").length-1]})},r),(0,n.jsx)("span",{className:a()["crumb-arrow"],children:"\u2192"})]})})),(0,n.jsx)("div",{className:a().right+" "+a().crumb+" "+a().last,children:t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{href:"/kauppa/ostoskori",children:(0,n.jsx)("a",{children:"Ostoskoriin"})}),(0,n.jsx)(d,{})]})})]})]})}},6737:function(e,r,t){"use strict";t.d(r,{P:function(){return n}});var n=function(e){return(e/100).toFixed(2)+"\u20ac"}},5025:function(e){e.exports={"store-page":"store_store-page__8rd0y",crumb:"store_crumb__3ZDoz",breadcrumbs:"store_breadcrumbs__9mogc","crumb-arrow":"store_crumb-arrow__U1TPX",last:"store_last__1rq6W",price:"store_price__N_3ul","old-price":"store_old-price__UekuR","small-product":"store_small-product__Kj7Zy",sale:"store_sale__xoMte",emphasize:"store_emphasize__6o60w","product-description":"store_product-description__3Am_0","search-bar":"store_search-bar__DDFt4","search-results":"store_search-results__Vv1bn","navigation-container":"store_navigation-container__VgXBU","large-product":"store_large-product__gdWyb","large-product-center":"store_large-product-center__3MO2o","aside-products-list":"store_aside-products-list__rPdDP","products-list":"store_products-list__lt4OH","cart-product":"store_cart-product__7S2AJ","cart-products-list":"store_cart-products-list__oQ4_s","clear-cart-button":"store_clear-cart-button__JPE4P",navigation:"store_navigation__24MRF",right:"store_right__DKrwR","product-page":"store_product-page__Mc6z1","product-page-main":"store_product-page-main__Z_IOb","type-page":"store_type-page__Re01d","open-type-link":"store_open-type-link__POw0G","similar-products-aside":"store_similar-products-aside__D0_rU","cart-info":"store_cart-info__SZBRa","product-image":"store_product-image__x6kBA","increment-decrement":"store_increment-decrement__D_8rv",inline:"store_inline__2qRBf","add-to-cart":"store_add-to-cart__IXb0c",bottom:"store_bottom__FTceX",light:"store_light__MlSg1",redeem:"store_redeem__3TDiJ"}}},function(e){e.O(0,[523,112,902,147,774,888,179],(function(){return r=3109,e(e.s=r);var r}));var r=e.O();_N_E=r}]);