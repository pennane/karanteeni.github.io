(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3482)}])},1770:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),a=n(3855),s=n(4797),i=n(5999),l=n.n(i);function c(e){var t=e.dateString,n=(0,a.Z)(t);return(0,r.jsx)("time",{dateTime:t,children:(0,s.Z)(n,"LLLL d, yyyy",{locale:l()})})}},2532:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),a=n(1770);function s(e){var t=e.postData;return(0,r.jsxs)("article",{className:"post",children:[(0,r.jsx)("h2",{className:"post-title",children:t.title}),(0,r.jsx)("div",{className:"secondary-color",children:(0,r.jsx)(a.Z,{dateString:t.date})}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:t.contentHtml}})]})}},3482:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return x},default:function(){return k}});var r=n(5893),a=n(7294),s=n(1664),i=n(1770),l=n(2147),c=n(5611),o=function(){var e,t=(0,c.e1)().addToast,n=(0,a.useState)(null),s=n[0],i=n[1],l="mc.karanteeni.net";(0,a.useEffect)((function(){fetch("https://api.mcsrvstat.us/2/".concat(l)).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]);return(0,r.jsxs)("div",{className:"server-status",children:[(0,r.jsx)("h3",{children:"Palvelin"}),!s&&(0,r.jsx)("div",{className:"loading-spinner-container",children:(0,r.jsx)("div",{className:"loading-spinner"})}),s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:(s.online," online"),children:s.online?"P\xe4\xe4ll\xe4":"Pois p\xe4\xe4lt\xe4"}),(0,r.jsxs)("span",{className:"server-version-wrapper",children:["Versio:",(0,r.jsxs)("span",{className:"server-version",children:[" ","1.7.x-1.18.x"===s.version?"1.18.2":s.version]})]}),(0,r.jsxs)("span",{className:"ip-wrapper",children:["ip: ",(0,r.jsx)("span",{className:"server-address",children:"mc.karanteeni.net"})]}),(0,r.jsxs)("span",{className:"server-player-count",children:["Pelaajia paikalla: ",(null===s||void 0===s||null===(e=s.players)||void 0===e?void 0:e.online)||0]})]}),(0,r.jsx)("button",{className:"ip-to-clipboard button",onClick:function(){navigator.clipboard.writeText(l),t("IP tallennettu leikep\xf6yd\xe4lle",{appearance:"success",autoDismiss:!0})},children:"Kopioi IP leikep\xf6yd\xe4lle"})]})},u=function(){return(0,r.jsxs)("div",{className:"vote-buttons",children:[(0,r.jsx)("h3",{children:"\xc4\xe4nest\xe4minen"}),(0,r.jsx)("a",{href:"https://minecraft-mp.com/server/194896/vote/",target:"_blank",rel:"noreferrer",children:"\xc4\xe4nestyslinkki 1"}),(0,r.jsx)("a",{href:"https://topg.org/Minecraft/in-515100",target:"_blank",rel:"noreferrer",children:"\xc4\xe4nestyslinkki 2"})]})},d=n(2532),p=JSON.parse('[{"title":"Maailmanloppu","description":"Haha, TNT printer go brrr.","dates":{"startDate":"05.11.2020","endDate":"06.11.2020"}},{"title":"Mapreset","description":"Palvelimen aukaisu.","dates":{"startDate":"07.11.2020"}},{"title":"Karanteenin joulu","description":"Karanteenin joulua vietet\xe4\xe4n joulukalenterin muodossa koko joulun ajan.","dates":{"startDate":"1.12.2019","endDate":"28.12.2019"}},{"title":"Karanteenin p\xe4\xe4si\xe4isjuhla","description":"P\xe4\xe4si\xe4isjuhlia vietetet\xe4\xe4n pitkin p\xe4iv\xe4\xe4!","dates":{"startDate":"3.4.2021"}},{"title":"Maailmanloppu","description":"Haha, TNT printer go brrr.","dates":{"startDate":"10.7.2021","endDate":"11.7.2021"}},{"title":"Mapreset servu","description":"11.7 klo 15:00 nykyinen survimap sulkeutuu ja v\xe4liaikainen mapreset servu aukeaa","dates":{"startDate":"11.7.2021","endDate":"13.7.2021"}},{"title":"Map reset","description":"Uusi survimap aukeaa 1.17.1 versiossa klo 15:00","dates":{"startDate":"13.7.2021"}}]');function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,s=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=function(e){if(!e)return null;var t=j(e.split("."),3),n=t[0],r=t[1],a=t[2];return Date.parse([r,n,a].join("."))},f=function(e){var t=e.title,n=e.description,a=e.dates,s=a.startDate,i=a.endDate,l=i?s+" - "+i:s;return(0,r.jsxs)("div",{className:"server-event",children:[(0,r.jsx)("h4",{children:t}),(0,r.jsx)("p",{children:n}),(0,r.jsx)("time",{children:l})]})},m=function(){var e=p,t=Date.now(),n=e.filter((function(e){var n=v(e.dates.startDate),r=e.dates.endDate?v(e.dates.endDate):n+864e5;return n<t&&r>t})),a=e.filter((function(e){return v(e.dates.startDate)>t}));return n||a?(0,r.jsxs)("div",{className:"server-events",children:[n.length>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"Meneill\xe4\xe4n olevat tapahtumat"}),n.map((function(e,t){return(0,r.jsx)(f,{title:e.title,description:e.description,dates:e.dates},t)}))]}),a.length>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"Tulevat tapahtumat"}),a.map((function(e,t){return(0,r.jsx)(f,{title:e.title,description:e.description,dates:e.dates},t)}))]})]}):null},x=!0;function k(e){var t=e.visiblePost,n=e.olderPosts;return(0,r.jsx)(l.Z,{home:!0,description:"Karanteeni on suomalainen minecraft palvelin.",children:(0,r.jsxs)("div",{className:"home-grid",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("section",{children:(0,r.jsx)(o,{})}),(0,r.jsx)("section",{children:(0,r.jsx)(u,{})})]}),(0,r.jsx)("div",{className:"home-grid-main",children:(0,r.jsx)("section",{children:(0,r.jsx)(d.Z,{postData:t})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("section",{children:(0,r.jsx)(m,{})}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h3",{children:"Vanhempia julkaisuja"}),(0,r.jsx)("ul",{className:"posts",children:n.map((function(e){var t=e.id,n=e.date,a=e.title;return(0,r.jsxs)("li",{className:"list-item",children:[(0,r.jsx)(s.default,{href:"/julkaisut/".concat(t),children:(0,r.jsx)("a",{children:a})}),(0,r.jsx)("small",{className:"secondary-color",children:(0,r.jsx)(i.Z,{dateString:n})})]},t)}))}),(0,r.jsx)(s.default,{href:"/julkaisut",children:"Kaikki julkaisut"})]})]})]})})}}},function(e){e.O(0,[774,523,112,902,954,147,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);