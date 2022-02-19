(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{9240:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kauppa/ostoskori",function(){return r(2573)}])},9160:function(t,e,r){"use strict";var n=r(5893);e.Z=function(t){var e=t.heading,r=t.lead,s=t.children;return(0,n.jsxs)("div",{className:"main-heading",children:[(0,n.jsx)("h1",{children:e}),(0,n.jsx)("p",{className:"lead",children:r}),s]})}},2573:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return y}});var n=r(5893),s=r(9160),a=r(2147),i=r(6737),o=r(7294),c=r(7024),u=r(5652),l=r(9941),d=r(5025),p=r.n(d),m=function(t){var e=t.id,r=(0,o.useContext)(c.I),s=r.state,a=r.dispatch,i=s.cart.find((function(t){return t.product.id===e})),d=i&&i.amount>0;return(0,n.jsxs)("div",{children:[!d&&(0,n.jsx)("button",{onClick:function(){return a((0,u.mc)(e))},children:"Lis\xe4\xe4 ostoskoriin"}),d&&(0,n.jsxs)("div",{children:[i.amount," ostoskorissa"," ",(0,n.jsx)(l.Z,{customClass:p().inline,onIncrement:function(){return a((0,u.$K)(e))},onDecrement:function(){return a((0,u.ii)(e))}})]})]})},h=r(1664),_=function(t){var e=t.cartProduct;return(0,n.jsxs)("div",{className:p()["cart-product"],children:[(0,n.jsx)(h.default,{href:"/kauppa/tuotteet/"+e.product.type+"/"+e.product.id,children:(0,n.jsx)("a",{children:(0,n.jsx)("h3",{children:e.product.name})})}),(0,n.jsxs)("p",{children:[(0,i.P)(e.product.price*e.amount)," ",(0,n.jsxs)("span",{className:p().light,children:["(",e.amount,"*",(0,i.P)(e.product.price),")"]})]}),(0,n.jsx)(m,{id:e.product.id})]})},f=r(5611),j=function(){var t=(0,o.useContext)(c.I).dispatch,e=(0,f.e1)().addToast;return(0,n.jsx)("div",{className:p()["clear-cart-button"],children:(0,n.jsx)("button",{onClick:function(){t((0,u.r4)()),e("Ostoskori tyhjennetty",{appearance:"success",autoDismiss:!0})},children:"Tyhjenn\xe4 ostoskori"})})},x=r(8707),v=r(2232),k=function(){return(0,n.jsx)("iframe",{style:{position:"fixed",inset:0,width:"100vw",height:"100vh"},src:"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},y=function(){var t=(0,f.e1)().addToast,e=(0,o.useState)(!1),r=e[0],u=e[1],l=(0,o.useState)(""),d=l[0],m=l[1],h=(0,o.useState)(!1),y=h[0],g=h[1],b=(0,o.useContext)(c.I).state,N=b.cart.reduce((function(t,e){return t+e.amount}),0),w=b.cart.filter((function(t){return t.amount>1})),C=b.cart.some((function(t){return t.amount>0&&t.product.type===v.k.PLAYTIME})),P=b.cart.some((function(t){return t.amount>0&&(t.product.type===v.k.PLAYTIME||t.product.type===v.k.ITEM)})),S=C&&b.cart.reduce((function(t,e){return e.product.playtime?t+e.product.playtime*e.amount:t}),0),T=S&&S/1e3/60/60;return(0,n.jsxs)(a.Z,{title:"Ostoskori",description:"Karanteenin verkkokaupan ostoskori",children:[(0,n.jsx)("link",{rel:"preload",href:"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0",as:"document"}),(0,n.jsx)(x.Z,{}),(0,n.jsx)(s.Z,{heading:"Ostoskori"}),N<=0&&(0,n.jsx)("p",{children:"Ei tuotteita ostoskorissa. K\xe4y shoppailemassa jotakin."}),N>0&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Tuotteet"}),(0,n.jsx)("div",{className:p()["cart-products-list"],children:N>0&&b.cart.filter((function(t){return t.amount>0})).map((function(t){return(0,n.jsx)(_,{cartProduct:t},t.product.id)}))}),(0,n.jsx)(j,{}),(0,n.jsxs)("section",{className:p().emphasize,children:[(0,n.jsx)("fieldset",{children:(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Lunasta etukoodi"}),(0,n.jsx)("input",{name:"playername",value:d,onChange:function(t){return m(t.target.value)}})]})}),(0,n.jsx)("button",{className:p().redeem,onClick:function(){"kara22"===d.toLowerCase()?(t("20% etukoodi 'kara22' on nyt k\xe4yt\xf6ss\xe4",{appearance:"success",autoDismiss:!0}),u(!0),m("")):t("Virheellinen etukoodi",{appearance:"error",autoDismiss:!0})},children:"Lunasta"})]}),(0,n.jsx)("h3",{children:"Yhteens\xe4"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:p().price,children:(0,i.P)(b.cart.reduce((function(t,e){return t+e.amount*e.product.price}),0))})," ","(sis alv 24%)",r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Alennusten j\xe4lkeen"}),(0,n.jsx)("span",{className:p().price,children:(0,i.P)(.8*b.cart.reduce((function(t,e){return t+e.amount*e.product.price}),0))}),(0,n.jsx)("p",{className:p().light,children:"K\xe4yt\xf6ss\xe4 20% alennuskoodi 'kara22'"})]})]}),w.length>0&&(0,n.jsxs)("section",{className:p().emphasize,children:[(0,n.jsx)("p",{children:"Huomasithan, ett\xe4 sinulla on seuraavia tuotteita useampi kappale ostoskorissa"}),(0,n.jsx)("ul",{children:w.map((function(t){return(0,n.jsxs)("li",{style:{color:"black"},children:[t.product.name," (",t.amount," kpl)"]},t.product.id)}))})]}),P&&(0,n.jsxs)("section",{className:p().emphasize,children:[(0,n.jsx)("p",{children:"Olet ostamassa pelin sis\xe4isi\xe4 tuotteita. Tarvitsemme minecraft k\xe4ytt\xe4j\xe4nimesi, jotta saamme annettua tuotteet k\xe4ytt\xe4j\xe4llesi."}),C&&(0,n.jsxs)("p",{children:["Olet ostamassa yhteens\xe4"," ",T>24?(T/24).toFixed(2)+" p\xe4iv\xe4\xe4":String(T)+" tuntia"," ","peliaikaa."]}),(0,n.jsx)("fieldset",{children:(0,n.jsxs)("label",{className:"required",children:[(0,n.jsx)("span",{children:"Minecraft k\xe4ytt\xe4j\xe4nimi"}),(0,n.jsx)("input",{name:"playername"})]})})]}),(0,n.jsx)("section",{className:p().emphasize,children:(0,n.jsx)("p",{children:"Seuraavalla sivulla p\xe4\xe4set valitsemaan maksutavan sek\xe4 t\xe4ytt\xe4m\xe4\xe4n yhteystiedot, sek\xe4 valitsemaan tuotteiden toimitustavan."})}),(0,n.jsx)("button",{className:p()["pay-button"],onClick:function(){return g(!0)},children:"Siirry maksamaan"}),y&&(0,n.jsx)(k,{})]})]})}},9941:function(t,e,r){"use strict";var n=r(5893),s=r(5025),a=r.n(s);e.Z=function(t){var e=t.onIncrement,r=t.onDecrement,s=t.customClass;return(0,n.jsxs)("div",{className:s?"".concat(a()["increment-decrement"]," ").concat(s):a()["increment-decrement"],children:[(0,n.jsx)("button",{onClick:r,children:"-"}),(0,n.jsx)("button",{onClick:e,children:"+"})]})}},8707:function(t,e,r){"use strict";r.d(e,{Z:function(){return j}});var n=r(5893),s=r(7294),a=r(1163),i=r(1664),o=r(5025),c=r.n(o),u=r(7024),l=r(6737),d=function(){var t=(0,s.useContext)(u.I).state,e=t.cart.reduce((function(t,e){return t+e.amount}),0);return(0,n.jsx)("div",{className:c()["cart-info"],children:e>0&&(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:c().price,children:(0,l.P)(t.cart.reduce((function(t,e){return t+e.amount*e.product.price}),0))})})})},p=r(7959);function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var h,_=function(t){if(Array.isArray(t))return m(t)}(h=p.R.values())||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(h)||function(t,e){if(t){if("string"===typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}(h)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),f=function(){var t=(0,s.useState)(""),e=t[0],r=t[1],i=(0,s.useState)([]),o=i[0],u=i[1],l=(0,s.useState)(!1),d=l[0],p=l[1],m=(0,a.useRouter)();return(0,n.jsxs)("div",{className:c()["search-bar"],onFocus:function(){return p(!0)},onBlur:function(){return setTimeout((function(){return p(!1)}),200)},children:[(0,n.jsx)("input",{onClick:function(){return p(!0)},type:"text",value:e,onChange:function(t){r(t.target.value),u(_.filter((function(t){return t.name.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)})))},placeholder:"haku"}),d&&e.length>2&&o.length>0&&(0,n.jsx)("div",{className:c()["search-results"],children:o.map((function(t){return(0,n.jsx)("a",{onClick:function(e){e.preventDefault(),r(""),m.push("/kauppa/tuotteet/"+t.type+"/"+t.id)},children:t.name},t.id)}))}),d&&e.length>2&&0===o.length&&(0,n.jsx)("div",{className:c()["search-results"],children:(0,n.jsx)("span",{children:"ei l\xf6yt\xf6j\xe4"})})]})};function j(){var t=(0,a.useRouter)(),e=t.asPath.slice(1).split("/").map((function(t,e,r){return"/".concat(r.slice(0,e+1).join("/"))})).slice(0,-1),r=!["/kauppa/ostoskori","/kauppa/kassa"].includes(t.route);return(0,n.jsxs)("div",{className:c()["navigation-container"],children:[(0,n.jsx)(f,{}),(0,n.jsxs)("div",{className:c().navigation+" "+c().breadcrumbs,children:[e&&e.map((function(t,e){return(0,n.jsx)(i.default,{href:t,children:(0,n.jsx)("a",{className:c().crumb,children:t.split("/")[t.split("/").length-1]})},e)})),(0,n.jsx)("div",{className:c().right+" "+c().crumb+" "+c().last,children:r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.default,{href:"/kauppa/ostoskori",children:(0,n.jsx)("a",{children:"Ostoskoriin"})}),(0,n.jsx)(d,{})]})})]})]})}},6737:function(t,e,r){"use strict";r.d(e,{P:function(){return n}});var n=function(t){return(t/100).toFixed(2)+"\u20ac"}},5025:function(t){t.exports={crumb:"store_crumb__3ZDoz",breadcrumbs:"store_breadcrumbs__9mogc",last:"store_last__1rq6W",price:"store_price__N_3ul",emphasize:"store_emphasize__6o60w","product-description":"store_product-description__3Am_0","small-product":"store_small-product__Kj7Zy","search-bar":"store_search-bar__DDFt4","search-results":"store_search-results__Vv1bn","navigation-container":"store_navigation-container__VgXBU","large-product":"store_large-product__gdWyb","large-product-center":"store_large-product-center__3MO2o","aside-products-list":"store_aside-products-list__rPdDP","products-list":"store_products-list__lt4OH","cart-product":"store_cart-product__7S2AJ","cart-products-list":"store_cart-products-list__oQ4_s","clear-cart-button":"store_clear-cart-button__JPE4P",navigation:"store_navigation__24MRF",right:"store_right__DKrwR","product-page":"store_product-page__Mc6z1","product-page-main":"store_product-page-main__Z_IOb","type-page":"store_type-page__Re01d","open-type-link":"store_open-type-link__POw0G","similar-products-aside":"store_similar-products-aside__D0_rU","cart-info":"store_cart-info__SZBRa","product-image":"store_product-image__x6kBA","increment-decrement":"store_increment-decrement__D_8rv",inline:"store_inline__2qRBf","add-to-cart":"store_add-to-cart__IXb0c",bottom:"store_bottom__FTceX",light:"store_light__MlSg1",redeem:"store_redeem__3TDiJ"}}},function(t){t.O(0,[774,523,112,902,147,888,179],(function(){return e=9240,t(t.s=e);var e}));var e=t.O();_N_E=e}]);