(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[917],{3109:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kauppa/tuotteet/[type]",function(){return r(8667)}])},8667:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return u},default:function(){return l}});var n=r(5893),s=r(2147),i=r(5405),a=r(8707),o=r(5025),c=r.n(o),u=!0;function l(t){var e=t.type,r=t.products;return(0,n.jsxs)(s.Z,{title:e+" tuotteet",children:[(0,n.jsx)(a.Z,{}),(0,n.jsxs)("div",{className:c()["type-page"],children:[(0,n.jsx)("h2",{children:e}),(0,n.jsx)("div",{className:c()["aside-products-list"],children:r&&r.map((function(t){return(0,n.jsx)(i.Z,{product:t},t.id)}))})]})]})}},9022:function(t,e,r){"use strict";var n=r(5893),s=r(5025),i=r.n(s);e.Z=function(t){var e=t.product,r=t.height,s=t.width;if(!e.image)return(0,n.jsx)("img",{src:"/store/placeholder.png",height:r,width:s});var a="/store/"+e.type+"/"+e.image;return(0,n.jsx)("div",{className:i()["product-image"],children:(0,n.jsx)("img",{src:a,height:r,width:s,alt:""})})}},5405:function(t,e,r){"use strict";var n=r(5893),s=r(6737),i=r(5025),a=r.n(i),o=r(1664),c=r(9022);e.Z=function(t){var e=t.product;return(0,n.jsxs)("div",{className:a()["small-product"],children:[(0,n.jsx)(o.default,{href:"/kauppa/tuotteet/"+e.type+"/"+e.id,children:(0,n.jsx)("a",{children:(0,n.jsx)("h3",{children:e.name})})}),(0,n.jsx)(c.Z,{product:e,height:100,width:200}),(0,n.jsx)("p",{className:a()["product-description"],children:e.description}),(0,n.jsx)("p",{className:a().price,children:(0,s.P)(e.price)})]})}},8707:function(t,e,r){"use strict";r.d(e,{Z:function(){return g}});var n=r(5893),s=r(7294),i=r(1163),a=r(1664),o=r(5025),c=r.n(o),u=r(7024),l=r(6737),d=function(){var t=(0,s.useContext)(u.I).state,e=t.cart.reduce((function(t,e){return t+e.amount}),0);return(0,n.jsx)("div",{className:c()["cart-info"],children:e>0&&(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:c().price,children:(0,l.P)(t.cart.reduce((function(t,e){return t+e.amount*e.product.price}),0))})})})},_=r(7959);function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var h,m=function(t){if(Array.isArray(t))return p(t)}(h=_.R.values())||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(h)||function(t,e){if(t){if("string"===typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}(h)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),f=function(){var t=(0,s.useState)(""),e=t[0],r=t[1],a=(0,s.useState)([]),o=a[0],u=a[1],l=(0,s.useState)(!1),d=l[0],_=l[1],p=(0,i.useRouter)();return(0,n.jsxs)("div",{className:c()["search-bar"],onFocus:function(){return _(!0)},onBlur:function(){return setTimeout((function(){return _(!1)}),200)},children:[(0,n.jsx)("input",{onClick:function(){return _(!0)},type:"text",value:e,onChange:function(t){r(t.target.value),u(m.filter((function(t){return t.name.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)})))},placeholder:"haku"}),d&&e.length>2&&o.length>0&&(0,n.jsx)("div",{className:c()["search-results"],children:o.map((function(t){return(0,n.jsx)("a",{onClick:function(e){e.preventDefault(),r(""),p.push("/kauppa/tuotteet/"+t.type+"/"+t.id)},children:t.name},t.id)}))}),d&&e.length>2&&0===o.length&&(0,n.jsx)("div",{className:c()["search-results"],children:(0,n.jsx)("span",{children:"ei l\xf6yt\xf6j\xe4"})})]})};function g(){var t=(0,i.useRouter)(),e=t.asPath.slice(1).split("/").map((function(t,e,r){return"/".concat(r.slice(0,e+1).join("/"))})).slice(0,-1),r=!["/kauppa/ostoskori","/kauppa/kassa"].includes(t.route);return(0,n.jsxs)("div",{className:c()["navigation-container"],children:[(0,n.jsx)(f,{}),(0,n.jsxs)("div",{className:c().navigation+" "+c().breadcrumbs,children:[e&&e.map((function(t,e){return(0,n.jsx)(a.default,{href:t,children:(0,n.jsx)("a",{className:c().crumb,children:t.split("/")[t.split("/").length-1]})},e)})),(0,n.jsx)("div",{className:c().right+" "+c().crumb+" "+c().last,children:r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{href:"/kauppa/ostoskori",children:(0,n.jsx)("a",{children:"Ostoskoriin"})}),(0,n.jsx)(d,{})]})})]})]})}},6737:function(t,e,r){"use strict";r.d(e,{P:function(){return n}});var n=function(t){return(t/100).toFixed(2)+"\u20ac"}},5025:function(t){t.exports={crumb:"store_crumb__3ZDoz",breadcrumbs:"store_breadcrumbs__9mogc",last:"store_last__1rq6W",price:"store_price__N_3ul",emphasize:"store_emphasize__6o60w","product-description":"store_product-description__3Am_0","small-product":"store_small-product__Kj7Zy","search-bar":"store_search-bar__DDFt4","search-results":"store_search-results__Vv1bn","navigation-container":"store_navigation-container__VgXBU","large-product":"store_large-product__gdWyb","large-product-center":"store_large-product-center__3MO2o","aside-products-list":"store_aside-products-list__rPdDP","products-list":"store_products-list__lt4OH","cart-product":"store_cart-product__7S2AJ","cart-products-list":"store_cart-products-list__oQ4_s","clear-cart-button":"store_clear-cart-button__JPE4P",navigation:"store_navigation__24MRF",right:"store_right__DKrwR","product-page":"store_product-page__Mc6z1","product-page-main":"store_product-page-main__Z_IOb","type-page":"store_type-page__Re01d","open-type-link":"store_open-type-link__POw0G","similar-products-aside":"store_similar-products-aside__D0_rU","cart-info":"store_cart-info__SZBRa","product-image":"store_product-image__x6kBA","increment-decrement":"store_increment-decrement__D_8rv",inline:"store_inline__2qRBf","add-to-cart":"store_add-to-cart__IXb0c",bottom:"store_bottom__FTceX",light:"store_light__MlSg1",redeem:"store_redeem__3TDiJ"}}},function(t){t.O(0,[774,523,112,902,147,888,179],(function(){return e=3109,t(t.s=e);var e}));var e=t.O();_N_E=e}]);