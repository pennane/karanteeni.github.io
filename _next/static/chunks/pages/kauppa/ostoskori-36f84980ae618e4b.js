(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{9240:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kauppa/ostoskori",function(){return r(2573)}])},9160:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.heading,r=e.lead,s=e.children;return(0,n.jsxs)("div",{className:"main-heading",children:[(0,n.jsx)("h1",{children:t}),(0,n.jsx)("p",{className:"lead",children:r}),s]})}},2573:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(5893),s=r(9160),a=r(2147),i=r(6737),o=r(7294),c=r(7024),u=r(5652),l=r(9941),d=r(5025),p=r.n(d),m=function(e){var t=e.id,r=(0,o.useContext)(c.I),s=r.state,a=r.dispatch,i=s.cart.find((function(e){return e.product.id===t})),d=i&&i.amount>0;return(0,n.jsxs)("div",{children:[!d&&(0,n.jsx)("button",{onClick:function(){return a((0,u.mc)(t))},children:"Lis\xe4\xe4 ostoskoriin"}),d&&(0,n.jsxs)("div",{children:[i.amount," ostoskorissa"," ",(0,n.jsx)(l.Z,{customClass:p().inline,onIncrement:function(){return a((0,u.$K)(t))},onDecrement:function(){return a((0,u.ii)(t))}})]})]})},h=r(1664),f=function(e){var t=e.cartProduct;return(0,n.jsxs)("div",{className:p()["cart-product"],children:[(0,n.jsx)(h.default,{href:"/kauppa/tuotteet/"+t.product.type+"/"+t.product.id,children:(0,n.jsx)("a",{children:(0,n.jsx)("h3",{children:t.product.name})})}),(0,n.jsxs)("p",{children:[(0,i.P)(t.product.price*t.amount)," ",(0,n.jsxs)("span",{className:p().light,children:["(",t.amount,"*",(0,i.P)(t.product.price),")"]})]}),(0,n.jsx)(m,{id:t.product.id})]})},_=r(5611),j=function(){var e=(0,o.useContext)(c.I).dispatch,t=(0,_.e1)().addToast;return(0,n.jsx)("div",{className:p()["clear-cart-button"],children:(0,n.jsx)("button",{onClick:function(){e((0,u.r4)()),t("Ostoskori tyhjennetty",{appearance:"success",autoDismiss:!0})},children:"Tyhjenn\xe4 ostoskori"})})},x=r(4670),v=r(2232),y=function(){return(0,n.jsx)("iframe",{style:{position:"fixed",inset:0,width:"100vw",height:"100vh"},src:"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},b=function(){var e=(0,_.e1)().addToast,t=(0,o.useState)(!1),r=t[0],u=t[1],l=(0,o.useState)(""),d=l[0],m=l[1],h=(0,o.useState)(!1),b=h[0],g=h[1],k=(0,o.useContext)(c.I).state,w=k.cart.reduce((function(e,t){return e+t.amount}),0),N=k.cart.filter((function(e){return e.amount>1})),O=k.cart.some((function(e){return e.amount>0&&e.product.type===v.k.PLAYTIME})),P=k.cart.some((function(e){return e.amount>0&&(e.product.type===v.k.PLAYTIME||e.product.type===v.k.ITEM)})),C=O&&k.cart.reduce((function(e,t){return t.product.playtime?e+t.product.playtime*t.amount:e}),0),S=C&&C/1e3/60/60;return(0,n.jsxs)(a.Z,{title:"Ostoskori",description:"Karanteenin verkkokaupan ostoskori",className:p()["store-page"],children:[(0,n.jsx)("link",{rel:"preload",href:"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0",as:"document"}),(0,n.jsx)(x.Z,{}),(0,n.jsx)(s.Z,{heading:"Ostoskori"}),w<=0&&(0,n.jsx)("p",{children:"Ei tuotteita ostoskorissa. K\xe4y shoppailemassa jotakin."}),w>0&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Tuotteet"}),(0,n.jsx)("div",{className:p()["cart-products-list"],children:w>0&&k.cart.filter((function(e){return e.amount>0})).map((function(e){return(0,n.jsx)(f,{cartProduct:e},e.product.id)}))}),(0,n.jsx)(j,{}),(0,n.jsxs)("section",{className:p().emphasize,children:[(0,n.jsx)("fieldset",{children:(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Lunasta etukoodi"}),(0,n.jsx)("input",{name:"playername",value:d,onChange:function(e){return m(e.target.value)}})]})}),(0,n.jsx)("button",{className:p().redeem,onClick:function(){"kara22"===d.toLowerCase()?(e("20% etukoodi 'kara22' on nyt k\xe4yt\xf6ss\xe4",{appearance:"success",autoDismiss:!0}),u(!0),m("")):e("Virheellinen etukoodi",{appearance:"error",autoDismiss:!0})},children:"Lunasta"})]}),(0,n.jsx)("h3",{children:"Yhteens\xe4"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:p().price,children:(0,i.P)(k.cart.reduce((function(e,t){return e+t.amount*t.product.price}),0))})," ","(sis alv 24%)",r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Alennusten j\xe4lkeen"}),(0,n.jsx)("span",{className:p().price,children:(0,i.P)(.8*k.cart.reduce((function(e,t){return e+t.amount*t.product.price}),0))}),(0,n.jsx)("p",{className:p().light,children:"K\xe4yt\xf6ss\xe4 20% alennuskoodi 'kara22'"})]})]}),N.length>0&&(0,n.jsxs)("section",{className:p().emphasize,children:[(0,n.jsx)("p",{children:"Huomasithan, ett\xe4 sinulla on seuraavia tuotteita useampi kappale ostoskorissa"}),(0,n.jsx)("ul",{children:N.map((function(e){return(0,n.jsxs)("li",{style:{color:"black"},children:[e.product.name," (",e.amount," kpl)"]},e.product.id)}))})]}),P&&(0,n.jsxs)("section",{className:p().emphasize,children:[(0,n.jsx)("p",{children:"Olet ostamassa pelin sis\xe4isi\xe4 tuotteita. Tarvitsemme minecraft k\xe4ytt\xe4j\xe4nimesi, jotta saamme annettua tuotteet k\xe4ytt\xe4j\xe4llesi."}),O&&(0,n.jsxs)("p",{children:["Olet ostamassa yhteens\xe4"," ",S>24?(S/24).toFixed(2)+" p\xe4iv\xe4\xe4":String(S)+" tuntia"," ","peliaikaa."]}),(0,n.jsx)("fieldset",{children:(0,n.jsxs)("label",{className:"required",children:[(0,n.jsx)("span",{children:"Minecraft k\xe4ytt\xe4j\xe4nimi"}),(0,n.jsx)("input",{name:"playername"})]})})]}),(0,n.jsx)("section",{className:p().emphasize,children:(0,n.jsx)("p",{children:"Seuraavalla sivulla p\xe4\xe4set valitsemaan maksutavan sek\xe4 t\xe4ytt\xe4m\xe4\xe4n yhteystiedot, sek\xe4 valitsemaan tuotteiden toimitustavan."})}),(0,n.jsx)("button",{className:p()["pay-button"],onClick:function(){return g(!0)},children:"Siirry maksamaan"}),b&&(0,n.jsx)(y,{})]})]})}},9941:function(e,t,r){"use strict";var n=r(5893),s=r(5025),a=r.n(s);t.Z=function(e){var t=e.onIncrement,r=e.onDecrement,s=e.customClass;return(0,n.jsxs)("div",{className:s?"".concat(a()["increment-decrement"]," ").concat(s):a()["increment-decrement"],children:[(0,n.jsx)("button",{onClick:r,children:"-"}),(0,n.jsx)("button",{onClick:t,children:"+"})]})}},4670:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(5893),s=r(7294),a=r(1163),i=r(1664),o=r(5025),c=r.n(o),u=r(7024),l=r(6737),d=function(){var e=(0,s.useContext)(u.I).state,t=e.cart.reduce((function(e,t){return e+t.amount}),0);return(0,n.jsx)("div",{className:c()["cart-info"],children:t>0&&(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:c().price,children:(0,l.P)(e.cart.reduce((function(e,t){return e+t.amount*t.product.price}),0))})})})},p=r(7959);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function f(e){var t=e.children,r=e.onBlur,a=h(e,["children","onBlur"]),i=(0,s.useCallback)((function(e){var t=e.currentTarget;requestAnimationFrame((function(){t.contains(document.activeElement)||r()}))}),[r]);return(0,n.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}({},a,{onBlur:i,children:t}))}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j,x=function(e){if(Array.isArray(e))return _(e)}(j=p.R.values())||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(j)||function(e,t){if(e){if("string"===typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(j)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),v=function(){var e=(0,s.useState)(""),t=e[0],r=e[1],i=(0,s.useState)([]),o=i[0],u=i[1],l=(0,s.useState)(!1),d=l[0],p=l[1],m=(0,a.useRouter)();return(0,n.jsxs)(f,{className:c()["search-bar"],onFocus:function(){return p(!0)},onBlur:function(){return setTimeout((function(){return p(!1)}),200)},children:[(0,n.jsx)("input",{onClick:function(){return p(!0)},type:"text",value:t,onChange:function(e){r(e.target.value),u(x.filter((function(e){return e.name.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)})))},placeholder:"haku"}),d&&t.length>2&&o.length>0&&(0,n.jsx)("div",{className:c()["search-results"],children:o.map((function(e){return(0,n.jsx)("a",{onClick:function(t){t.preventDefault(),r(""),m.push("/kauppa/tuotteet/"+e.type+"/"+e.id)},tabIndex:0,children:e.name},e.id)}))}),d&&t.length>2&&0===o.length&&(0,n.jsx)("div",{className:c()["search-results"],children:(0,n.jsx)("span",{children:"ei l\xf6yt\xf6j\xe4"})})]})};function y(){var e=(0,a.useRouter)(),t=e.asPath.slice(1).split("/").map((function(e,t,r){return"/".concat(r.slice(0,t+1).join("/"))})).slice(0,-1),r=!["/kauppa/ostoskori","/kauppa/kassa"].includes(e.route);return(0,n.jsxs)("div",{className:c()["navigation-container"],children:[(0,n.jsx)(v,{}),(0,n.jsxs)("div",{className:c().navigation+" "+c().breadcrumbs,children:[t&&t.map((function(e,t){return(0,n.jsx)(i.default,{href:e,children:(0,n.jsx)("a",{className:c().crumb,children:e.split("/")[e.split("/").length-1]})},t)})),(0,n.jsx)("div",{className:c().right+" "+c().crumb+" "+c().last,children:r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.default,{href:"/kauppa/ostoskori",children:(0,n.jsx)("a",{children:"Ostoskoriin"})}),(0,n.jsx)(d,{})]})})]})]})}},6737:function(e,t,r){"use strict";r.d(t,{P:function(){return n}});var n=function(e){return(e/100).toFixed(2)+"\u20ac"}},5025:function(e){e.exports={"store-page":"store_store-page__8rd0y",crumb:"store_crumb__3ZDoz",breadcrumbs:"store_breadcrumbs__9mogc",last:"store_last__1rq6W",price:"store_price__N_3ul",emphasize:"store_emphasize__6o60w","product-description":"store_product-description__3Am_0","small-product":"store_small-product__Kj7Zy","search-bar":"store_search-bar__DDFt4","search-results":"store_search-results__Vv1bn","navigation-container":"store_navigation-container__VgXBU","large-product":"store_large-product__gdWyb","large-product-center":"store_large-product-center__3MO2o","aside-products-list":"store_aside-products-list__rPdDP","products-list":"store_products-list__lt4OH","cart-product":"store_cart-product__7S2AJ","cart-products-list":"store_cart-products-list__oQ4_s","clear-cart-button":"store_clear-cart-button__JPE4P",navigation:"store_navigation__24MRF",right:"store_right__DKrwR","product-page":"store_product-page__Mc6z1","product-page-main":"store_product-page-main__Z_IOb","type-page":"store_type-page__Re01d","open-type-link":"store_open-type-link__POw0G","similar-products-aside":"store_similar-products-aside__D0_rU","cart-info":"store_cart-info__SZBRa","product-image":"store_product-image__x6kBA","increment-decrement":"store_increment-decrement__D_8rv",inline:"store_inline__2qRBf","add-to-cart":"store_add-to-cart__IXb0c",bottom:"store_bottom__FTceX",light:"store_light__MlSg1",redeem:"store_redeem__3TDiJ"}}},function(e){e.O(0,[523,112,902,147,774,888,179],(function(){return t=9240,e(e.s=t);var t}));var t=e.O();_N_E=t}]);