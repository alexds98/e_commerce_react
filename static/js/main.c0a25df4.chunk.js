(this.webpackJsonpe_commerce_react=this.webpackJsonpe_commerce_react||[]).push([[0],{25:function(e,t,a){e.exports=a(53)},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),o=a(20),l=a(9),m=a(10),u=a(8),s=a(6);a(30);var d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"E-commerce"))};a(31);var f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement(u.b,{className:"link",to:"/"},"Home"),r.a.createElement(u.b,{className:"link",to:"/shop"},"Shop"),r.a.createElement(u.b,{className:"link",to:"/cart"},"Cart")))};a(37);var p=function(){return r.a.createElement("header",null,r.a.createElement(d,null),r.a.createElement(f,null))},E=a(23),v=(a(46),["https://source.unsplash.com/random/1600x900/?forest","https://source.unsplash.com/random/1600x900/?water","https://source.unsplash.com/random/1600x900/?porn"]),h={duration:5e3,transitionDuration:500,infinite:!0,indicators:!0,arrows:!0};var b=function(){return r.a.createElement("div",{className:"slide-container"},r.a.createElement(E.Slide,h,r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(v[0],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(v[1],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(v[2],")")}}))))};var y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null))},O=a(16),g=a.n(O),j=a(24);a(48);var I=function(e){var t=e.item,a=t.id,n=t.cost,c=t.name,i=t.image;return r.a.createElement("div",{className:"ShopItem"},r.a.createElement("img",{src:i,alt:"ShopItem__Image".concat(a)}),r.a.createElement("div",{className:"ShopItem__Description"},r.a.createElement("h3",null,c),r.a.createElement("p",null,"Price: ",n),r.a.createElement("button",{onClick:function(){return e.addCartItem(e.item)}},"Add to Cart")))};a(49);var C=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],i=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://5db179198087400014d38a73.mockapi.io/api/v1/products");case 2:return t=e.sent,e.t0=i,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"ShopList"},c.map((function(t){return r.a.createElement(I,{key:t.id,item:t,addCartItem:e.addCartItem})})))};a(50);var k=function(e){var t=e.item,a=t.cost,n=t.name,c=t.quantity;return r.a.createElement("div",{className:"CartItem"},r.a.createElement("h3",null,n),r.a.createElement("p",null,"Price: ",a),r.a.createElement("div",{className:"CartItem__Quantity"},r.a.createElement("button",{onClick:function(){return e.decrementCartItem(e.item)}},"-"),r.a.createElement("p",null,"Quantity: ",c),r.a.createElement("button",{onClick:function(){return e.incrementCartItem(e.item)}},"+")))};a(51);var w=function(e){var t=e.cartItems,a=e.decrementCartItem,n=e.incrementCartItem,c=e.total;return 0===t.length?r.a.createElement("h3",{className:"Empty"},"The cart is empty."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"CartList"},t.map((function(e){return r.a.createElement(k,{key:e.id,item:e,decrementCartItem:a,incrementCartItem:n})}))),r.a.createElement("p",{className:"CartList__Total"},"Total: ",c))};a(52);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(0),o=Object(m.a)(i,2),d=o[0],f=o[1];Object(n.useEffect)((function(){var e=a.reduce((function(e,t){return e+t.quantity*t.cost}),0);f(e)}),[a]);var E=function(e){void 0!==a.find((function(t){return e.id===t.id}))?(a.forEach((function(t){t.id===e.id&&t.quantity++})),c(Object(l.a)(a))):c([].concat(Object(l.a)(a),[_({},e,{quantity:1})]))},v=function(e){e.quantity++,c(Object(l.a)(a))},h=function(e){if(e.quantity--,0===e.quantity){var t=a.filter((function(e){return e.quantity>0}));c(Object(l.a)(t))}else c(Object(l.a)(a))};return r.a.createElement(u.a,null,r.a.createElement("div",{id:"app"},r.a.createElement(p,null),r.a.createElement("div",{className:"container"},r.a.createElement(s.a,{exact:!0,path:"/e_commerce_react/",component:y}),r.a.createElement(s.a,{path:"/shop",render:function(){return r.a.createElement(C,{addCartItem:E})}}),r.a.createElement(s.a,{path:"/cart",render:function(){return r.a.createElement(w,{cartItems:a,total:d,decrementCartItem:h,incrementCartItem:v})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.c0a25df4.chunk.js.map