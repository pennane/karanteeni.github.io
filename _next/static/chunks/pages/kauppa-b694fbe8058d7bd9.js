(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{8917:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kauppa",function(){return r(437)}])},9160:function(t,e,r){"use strict";var n=r(5893);e.Z=function(t){var e=t.heading,r=t.lead,i=t.children;return(0,n.jsxs)("div",{className:"main-heading",children:[(0,n.jsx)("h1",{children:e}),(0,n.jsx)("p",{className:"lead",children:r}),i]})}},437:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return m},default:function(){return f}});var n=r(5893),i=(r(7294),r(9160)),a=r(2147),s=r(5405),o=r(5025),c=r.n(o),u=r(8707),l=r(7959),d=function(){var t=["5h-peliaikaa","100d-peliaikaa","karanteeni-rintamerkki"].map((function(t){return l.R.get(t)})).filter(Boolean);return(0,n.jsxs)("section",{className:c().emphasize,children:[(0,n.jsx)("h2",{children:"Suosittelemme"}),(0,n.jsx)("div",{className:c()["aside-products-list"],children:t&&t.map((function(t){return(0,n.jsx)(s.Z,{product:t},t.id)}))})]})},p=r(1664);function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,a=[],s=!0,o=!1;try{for(r=r.call(t);!(s=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);s=!0);}catch(c){o=!0,i=c}finally{try{s||null==r.return||r.return()}finally{if(o)throw i}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return _(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=!0,f=function(t){var e=t.products;return(0,n.jsxs)(a.Z,{title:"Kauppa",description:"Osta minecraft tavaroita, peliaikaa tai Karanteeni mechi\xe4!",children:[(0,n.jsx)(u.Z,{}),(0,n.jsx)(i.Z,{heading:"Kauppa",lead:"Tarjoamme pelinsis\xe4isi\xe4 tuotteita palvelimelle, sek\xe4 tarkasti suunniteltua Karanteenimerchi\xe4\u2122"}),(0,n.jsx)("section",{className:c().emphasize,children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Osta peliaikaa, ja speedrunaa vaikka kuolemattomaksi!"}),(0,n.jsx)("li",{children:"Myynniss\xe4 kotiin tilattavia tuotteita, sek\xe4 pelinsis\xe4isi\xe4 tuotteita palvelimelle"}),(0,n.jsx)("li",{children:"Ilmaiset postikulut yli 100\u20ac tilauksiin. Muuten maksu on 7\u20ac."}),(0,n.jsx)("li",{children:"Monta maksutapaa. My\xf6s CSGO skineill\xe4 voi maksaa."})]})}),(0,n.jsx)(d,{}),e&&Object.entries(e).map((function(t,e){var r=h(t,2),i=r[0],a=r[1];return(0,n.jsxs)("section",{className:c().emphasize,children:[(0,n.jsx)("h2",{children:i}),(0,n.jsx)("div",{className:c()["aside-products-list"],children:a&&a.slice(0,3).map((function(t){return(0,n.jsx)(s.Z,{product:t},t.id)}))}),(0,n.jsx)("div",{className:c()["open-type-link"],children:(0,n.jsx)(p.default,{href:"/kauppa/tuotteet/"+i,children:"Kaikki tuotetyypin tuotteet"})})]},e)}))]})}},9022:function(t,e,r){"use strict";var n=r(5893),i=r(5025),a=r.n(i);e.Z=function(t){var e=t.product,r=t.height,i=t.width;if(!e.image)return(0,n.jsx)("img",{src:"/store/placeholder.png",height:r,width:i});var s="/store/"+e.type+"/"+e.image;return(0,n.jsx)("div",{className:a()["product-image"],children:(0,n.jsx)("img",{src:s,height:r,width:i,alt:""})})}},5405:function(t,e,r){"use strict";var n=r(5893),i=r(6737),a=r(5025),s=r.n(a),o=r(1664),c=r(9022);e.Z=function(t){var e=t.product;return(0,n.jsxs)("div",{className:s()["small-product"],children:[(0,n.jsx)(o.default,{href:"/kauppa/tuotteet/"+e.type+"/"+e.id,children:(0,n.jsx)("a",{children:(0,n.jsx)("h3",{children:e.name})})}),(0,n.jsx)(c.Z,{product:e,height:100,width:200}),(0,n.jsx)("p",{className:s()["product-description"],children:e.description}),(0,n.jsx)("p",{className:s().price,children:(0,i.P)(e.price)})]})}},8707:function(t,e,r){"use strict";r.d(e,{Z:function(){return j}});var n=r(5893),i=r(7294),a=r(1163),s=r(1664),o=r(5025),c=r.n(o),u=r(7024),l=r(6737),d=function(){var t=(0,i.useContext)(u.I).state,e=t.cart.reduce((function(t,e){return t+e.amount}),0);return(0,n.jsx)("div",{className:c()["cart-info"],children:e>0&&(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:c().price,children:(0,l.P)(t.cart.reduce((function(t,e){return t+e.amount*e.product.price}),0))})})})},p=r(7959);function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var h,m=function(t){if(Array.isArray(t))return _(t)}(h=p.R.values())||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(h)||function(t,e){if(t){if("string"===typeof t)return _(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(t,e):void 0}}(h)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),f=function(){var t=function(){l(m.filter((function(t){return t.name.toLowerCase().includes(r)||t.description.toLowerCase().includes(r)})))},e=(0,i.useState)(""),r=e[0],s=e[1],o=(0,i.useState)([]),u=o[0],l=o[1],d=(0,i.useState)(!1),p=d[0],_=d[1],h=(0,a.useRouter)();return(0,n.jsxs)("div",{className:c()["search-bar"],onFocus:function(){return _(!0)},onBlur:function(){return setTimeout((function(){return _(!1)}),200)},children:[(0,n.jsx)("input",{onClick:function(){return _(!0)},type:"text",value:r,onChange:function(e){s(e.target.value),t()}}),(0,n.jsx)("button",{onClick:t,children:"hae"}),p&&r.length>2&&u.length>0&&(0,n.jsx)("div",{className:c()["search-results"],children:u.map((function(t){return(0,n.jsx)("a",{onClick:function(e){e.preventDefault(),s(""),h.push("/kauppa/tuotteet/"+t.type+"/"+t.id)},children:t.name},t.id)}))}),p&&r.length>2&&0===u.length&&(0,n.jsx)("div",{className:c()["search-results"],children:(0,n.jsx)("span",{children:"ei l\xf6yt\xf6j\xe4"})})]})};function j(){var t=(0,a.useRouter)(),e=t.asPath.slice(1).split("/").map((function(t,e,r){return"/".concat(r.slice(0,e+1).join("/"))})).slice(0,-1),r=!["/kauppa/ostoskori","/kauppa/kassa"].includes(t.route);return(0,n.jsxs)("div",{className:c()["navigation-container"],children:[(0,n.jsx)(f,{}),(0,n.jsxs)("div",{className:c().navigation+" "+c().breadcrumbs,children:[e&&e.map((function(t,e){return(0,n.jsx)(s.default,{href:t,children:(0,n.jsx)("a",{className:c().crumb,children:t.split("/")[t.split("/").length-1]})},e)})),(0,n.jsx)("div",{className:c().right+" "+c().crumb+" "+c().last,children:r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.default,{href:"/kauppa/ostoskori",children:(0,n.jsx)("a",{children:"Ostoskoriin"})}),(0,n.jsx)(d,{})]})})]})]})}},6737:function(t,e,r){"use strict";r.d(e,{P:function(){return n}});var n=function(t){return(t/100).toFixed(2)+"\u20ac"}},5025:function(t){t.exports={crumb:"store_crumb__3ZDoz",breadcrumbs:"store_breadcrumbs__9mogc",last:"store_last__1rq6W",price:"store_price__N_3ul",emphasize:"store_emphasize__6o60w","product-description":"store_product-description__3Am_0","small-product":"store_small-product__Kj7Zy","search-bar":"store_search-bar__DDFt4","search-results":"store_search-results__Vv1bn","navigation-container":"store_navigation-container__VgXBU","large-product":"store_large-product__gdWyb","large-product-center":"store_large-product-center__3MO2o","aside-products-list":"store_aside-products-list__rPdDP","products-list":"store_products-list__lt4OH","cart-product":"store_cart-product__7S2AJ","cart-products-list":"store_cart-products-list__oQ4_s","clear-cart-button":"store_clear-cart-button__JPE4P",navigation:"store_navigation__24MRF",right:"store_right__DKrwR","product-page":"store_product-page__Mc6z1","product-page-main":"store_product-page-main__Z_IOb","type-page":"store_type-page__Re01d","open-type-link":"store_open-type-link__POw0G","similar-products-aside":"store_similar-products-aside__D0_rU","cart-info":"store_cart-info__SZBRa","product-image":"store_product-image__x6kBA","increment-decrement":"store_increment-decrement__D_8rv",inline:"store_inline__2qRBf","add-to-cart":"store_add-to-cart__IXb0c",bottom:"store_bottom__FTceX",light:"store_light__MlSg1",redeem:"store_redeem__3TDiJ"}}},function(t){t.O(0,[774,523,112,902,147,888,179],(function(){return e=8917,t(t.s=e);var e}));var e=t.O();_N_E=e}]);