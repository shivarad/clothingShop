(this.webpackJsonpclothshop=this.webpackJsonpclothshop||[]).push([[0],{57:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(1),i=n.n(c),a=n(34),s=n.n(a),l=n(20),o=(n(57),n(13)),u=n.n(o),d=n(4),b=n(21),p=n(28),m=n(29),h=n(32),j=n(31),g=n(9),f=(n(59),n(60),Object(g.g)((function(e){var t=e.title,n=e.bgUrl,c=e.size,i=e.history,a=e.match,s=e.linkUrl;return Object(r.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return i.push("".concat(a.url).concat(s))},children:[Object(r.jsx)("div",{className:"bgImg",style:{backgroundImage:"url(".concat(n,")")}}),Object(r.jsxs)("div",{className:"item-content",children:[Object(r.jsx)("h1",{className:"item-title",children:t.toUpperCase()}),Object(r.jsx)("span",{className:"item-subtitle",children:"SHOP NOW"})]})]})}))),O=n(8),v=n(6),x=Object(v.a)([function(e){return e.menu}],(function(e){return e.sections})),y=(n(66),Object(v.b)({sections:x})),w=Object(O.b)(y,null)((function(e){var t=e.sections;return Object(r.jsx)("div",{className:"menu",children:t.map((function(e){var t=e.title,n=e.id,c=e.imageUrl,i=e.size,a=e.linkUrl;return Object(r.jsx)(f,{title:t,size:i,bgUrl:c,linkUrl:a},n)}))})})),k=n(14),N=n(15);function E(){var e=Object(k.a)(["\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 80px;\n\n"]);return E=function(){return e},e}var U=N.b.div(E()),C=function(){return Object(r.jsx)(U,{children:Object(r.jsx)(w,{})})},I=n(30),S=Object(v.a)([function(e){return e.shop}],(function(e){return e.collections})),T=Object(v.a)([S],(function(e){return Object.keys(e).map((function(t){return e[t]}))}));n(67);function P(){var e=Object(k.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ","\n"]);return P=function(){return e},e}function B(){var e=Object(k.a)(["\n  background-color: #4285f4;\n  color: white;\n  padding:0 8px 0 8px !important;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return B=function(){return e},e}function A(){var e=Object(k.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return A=function(){return e},e}function R(){var e=Object(k.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return R=function(){return e},e}var M=Object(N.a)(R()),_=Object(N.a)(A()),D=Object(N.a)(B()),q=N.b.button(P(),(function(e){return e.isGoogleSignIn?D:e.inverted?_:M})),G=function(e){var t=e.children,n=Object(I.a)(e,["children"]);return Object(r.jsx)(q,Object(d.a)(Object(d.a)({className:"CustomBtn"},n),{},{children:t}))},W={CART_TOGGLE_HIDDEN:"CART_TOGGLE_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM:"CLEAR_ITEM",REMOVE_ITEM:"REMOVE_ITEM"},H=function(){return{type:W.CART_TOGGLE_HIDDEN}},z=function(e){return{type:W.ADD_ITEM,payload:e}},L=Object(O.b)(null,(function(e){return{AddItem:function(t){return e(z(t))}}}))((function(e){var t=e.item,n=e.AddItem,c=t.name,i=t.price,a=t.imageUrl;return Object(r.jsxs)("div",{className:"collection-item",children:[Object(r.jsx)("div",{className:"bgImg",style:{backgroundImage:"url(".concat(a,")")}}),Object(r.jsxs)("div",{className:"collection-info",children:[Object(r.jsx)("span",{className:"collection-name",children:c}),Object(r.jsxs)("span",{className:"collection-price",children:["$",i]})]}),Object(r.jsx)(G,{inverted:!0,onClick:function(){return n(t)},children:"Add to cart"})]})})),V=(n(68),function(e){var t=e.title,n=e.items;return Object(r.jsxs)("div",{className:"collectionPreview",children:[Object(r.jsx)("h1",{className:t,children:t.toUpperCase()}),Object(r.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(r.jsx)(L,{item:e},e.id)}))})]})}),J=Object(v.b)({collections:T}),F=Object(O.b)(J,null)((function(e){var t=e.collections;return Object(r.jsx)("div",{className:"collection-overview",children:t.map((function(e){var t=e.id,n=Object(I.a)(e,["id"]);return Object(r.jsx)(V,Object(d.a)({},n),t)}))})})),Q=(n(69),Object(O.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(v.a)([S],(function(e){return e[n]})))(e)};var n}),null)((function(e){var t=e.collection,n=t.title,c=t.items;return Object(r.jsxs)("div",{className:"collection-page",children:[Object(r.jsx)("h2",{className:"title",children:n}),Object(r.jsx)("div",{className:"items",children:c.map((function(e){return Object(r.jsx)(L,{item:e},e.id)}))})]})}))),K=function(e){var t=e.match;return Object(r.jsxs)("div",{className:"shop-page",children:[Object(r.jsx)(g.b,{exact:!0,path:"".concat(t.path),component:F}),Object(r.jsx)(g.b,{path:"".concat(t.path,"/:collectionId"),component:Q})]})},Y=(n(70),Object(O.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:W.CLEAR_ITEM,payload:e}}(t))},addItem:function(t){return e(z(t))},removeItem:function(t){return e(function(e){return{type:W.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,i=e.removeItem,a=t.name,s=t.price,l=t.quantity,o=t.imageUrl;return Object(r.jsxs)("div",{className:"checkout-item",children:[Object(r.jsx)("div",{className:"img-container",children:Object(r.jsx)("img",{src:o,alt:"item"})}),Object(r.jsx)("span",{className:"name",children:a}),Object(r.jsxs)("div",{className:"quantity",children:[Object(r.jsx)("div",{className:"qty-arrow",onClick:function(){return i(t)},children:"\u276e"}),Object(r.jsx)("span",{className:"qty-value",children:l}),Object(r.jsx)("div",{className:"qty-arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(r.jsx)("span",{className:"price",children:s}),Object(r.jsx)("div",{className:"removeBtn",onClick:function(){return n(t)},children:"\u2715"}),"  "]})}))),X=n(47),Z=n.n(X),$=function(e){var t=e.price,n=100*t;return Object(r.jsx)(Z.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Succesful!")},stripeKey:"pk_test_51Hj12dKVa2Ebn3Q48zTUS0mGotnMlTZhcqnJQ3qNWpqFqBu4HwVWrGHWyOj2oPQ6HKWjeZC7wS9t4rD7dyOOHI2700dYBPAnz8"})},ee=function(e){return e.cart},te=Object(v.a)([ee],(function(e){return e.cartItems})),ne=Object(v.a)([ee],(function(e){return e.hidden})),re=Object(v.a)([te],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ce=Object(v.a)([te],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),ie=(n(71),Object(v.b)({cartItems:te,total:ce})),ae=Object(O.b)(ie)((function(e){var t=e.cartItems,n=e.total;return Object(r.jsxs)("div",{className:"checkout-page",children:[Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Product"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Description"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Quantity"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Price"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(r.jsx)(Y,{cartItem:e},e.id)})),Object(r.jsxs)("div",{className:"total",children:["TOTAL: $",n]}),Object(r.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(r.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/21 - CVV: 123"]}),Object(r.jsx)($,{price:n})]})})),se=n(33);n(72),n(74);se.a.initializeApp({apiKey:"AIzaSyBQrSqoA-q16hyGmUbu8PBh5uyrXNzPdWY",authDomain:"reactec-web.firebaseapp.com",databaseURL:"https://reactec-web.firebaseio.com",projectId:"reactec-web",storageBucket:"reactec-web.appspot.com",messagingSenderId:"939447745931",appId:"1:939447745931:web:b0af2b3ae4917de81dc38e"});var le=function(){var e=Object(b.a)(u.a.mark((function e(t,n){var r,c,i,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=ue.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,i=t.email,a=new Date,e.prev=9,e.next=12,r.set(Object(d.a)({displayName:c,email:i,createdAt:a},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),oe=se.a.auth(),ue=se.a.firestore(),de=new se.a.auth.GoogleAuthProvider;de.setCustomParameters({prompt:"select_account"});var be=function(){return oe.signInWithPopup(de)};se.a;function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var he=c.createElement("desc",null,"Created with Sketch."),je=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function ge(e,t){var n=e.title,r=e.titleId,i=me(e,["title","titleId"]);return c.createElement("svg",pe({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t,"aria-labelledby":r},i),void 0===n?c.createElement("title",{id:r},"Group"):n?c.createElement("title",{id:r},n):null,he,je)}var fe=c.forwardRef(ge);n.p;function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var xe=c.createElement("g",null),ye=c.createElement("g",null),we=c.createElement("g",null),ke=c.createElement("g",null),Ne=c.createElement("g",null),Ee=c.createElement("g",null),Ue=c.createElement("g",null),Ce=c.createElement("g",null),Ie=c.createElement("g",null),Se=c.createElement("g",null),Te=c.createElement("g",null),Pe=c.createElement("g",null),Be=c.createElement("g",null),Ae=c.createElement("g",null),Re=c.createElement("g",null);function Me(e,t){var n=e.title,r=e.titleId,i=ve(e,["title","titleId"]);return c.createElement("svg",Oe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),xe,ye,we,ke,Ne,Ee,Ue,Ce,Ie,Se,Te,Pe,Be,Ae,Re)}var _e=c.forwardRef(Me),De=(n.p,n(76),Object(v.b)({ItemCount:re})),qe=Object(O.b)(De,(function(e){return{CartToggleHidden:function(){return e(H())}}}))((function(e){var t=e.CartToggleHidden,n=e.ItemCount;return Object(r.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(r.jsx)(_e,{className:"shopping-icon"}),Object(r.jsx)("span",{className:"item-count",children:n})]})})),Ge=(n(77),function(e){var t=e.item,n=t.imageUrl,c=t.price,i=t.name,a=t.quantity;return Object(r.jsxs)("div",{className:"cart-item",children:[Object(r.jsx)("img",{src:n,alt:"item"}),Object(r.jsxs)("div",{className:"item-details",children:[Object(r.jsx)("span",{className:"name",children:i}),Object(r.jsxs)("span",{className:"price",children:[a," x $",c]})]})]})}),We=(n(78),Object(v.b)({cartItems:te})),He=Object(g.g)(Object(O.b)(We)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(r.jsxs)("div",{className:"cart-dropdown",children:[Object(r.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(r.jsx)(Ge,{item:e},e.id)})):Object(r.jsx)("span",{className:"empty-message",children:"Your cart is empty!"})}),Object(r.jsx)(G,{onClick:function(){n.push("/checkout"),c(H())},children:"GO TO CHECKOUT"})]})}))),ze=Object(v.a)([function(e){return e.user}],(function(e){return e.currentUser}));function Le(){var e=Object(k.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n"]);return Le=function(){return e},e}function Ve(){var e=Object(k.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]);return Ve=function(){return e},e}function Je(){var e=Object(k.a)(["\n      height: 100%;\n      width: 70px;\n      padding: 25px;\n"]);return Je=function(){return e},e}function Fe(){var e=Object(k.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n"]);return Fe=function(){return e},e}var Qe=N.b.div(Fe()),Ke=Object(N.b)(l.b)(Je()),Ye=N.b.div(Ve()),Xe=Object(N.b)(l.b)(Le()),Ze=Object(v.b)({currentUser:ze,hidden:ne}),$e=Object(O.b)(Ze)((function(e){var t=e.currentUser,n=e.hidden;return Object(r.jsxs)(Qe,{children:[Object(r.jsx)(Ke,{to:"/",children:Object(r.jsx)(fe,{})}),Object(r.jsxs)(Ye,{children:[Object(r.jsx)(Xe,{to:"/shop",children:"SHOP"}),Object(r.jsx)(Xe,{to:"/shop",children:"CONTACT"}),t?Object(r.jsx)(Xe,{as:"div",onClick:function(){return oe.signOut()},children:"SIGN OUT"}):Object(r.jsx)(Xe,{to:"/signin",children:"SIGN IN"}),Object(r.jsx)(qe,{})]}),n?null:Object(r.jsx)(He,{})]})})),et=n(27),tt=(n(79),function(e){var t=e.handleChange,n=e.label,c=Object(I.a)(e,["handleChange","label"]);return Object(r.jsxs)("div",{className:"group",children:[Object(r.jsx)("input",Object(d.a)({className:"form-input",onChange:t},c)),n?Object(r.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})}),nt=(n(80),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(b.a)(u.a.mark((function e(t){var n,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,c=n.email,i=n.password,e.prev=2,e.next=5,oe.signInWithEmailAndPassword(c,i);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,c=t.name;r.setState(Object(et.a)({},c,n))},r.state={email:"",password:""},r}return Object(m.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"sign-in",children:[Object(r.jsx)("h2",{children:"I allready have an account "}),Object(r.jsx)("span",{children:"Sign in with your email and password"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsx)(tt,{name:"email",label:"Email",type:"email",value:this.state.email,required:!0,onChange:this.handleChange}),Object(r.jsx)(tt,{name:"password",label:"Password",type:"password",value:this.state.password,required:!0,onChange:this.handleChange}),Object(r.jsxs)("div",{className:"buttons-container",children:[Object(r.jsx)(G,{type:"submit",children:"Sign In"}),Object(r.jsx)(G,{onClick:be,isGoogleSignIn:!0,children:"Sign In with Google"})]})]})]})}}]),n}(i.a.Component)),rt=(n(81),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(b.a)(u.a.mark((function t(n){var r,c,i,a,s,l,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.displayName,i=r.email,a=r.password,s=r.confirmPassword,a===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,oe.createUserWithEmailAndPassword(i,a);case 8:return l=t.sent,o=l.user,t.next=12,le(o,{displayName:c});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(et.a)({},r,c))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,c=e.password,i=e.confirmPassword;return Object(r.jsxs)("div",{className:"sign-up",children:[Object(r.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(r.jsx)("span",{children:"Sign up with your email and password"}),Object(r.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(r.jsx)(tt,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(r.jsx)(tt,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(r.jsx)(tt,{type:"password",name:"password",value:c,onChange:this.handleChange,label:"Password",required:!0}),Object(r.jsx)(tt,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(r.jsx)(G,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(i.a.Component)),ct=(n(82),function(){return Object(r.jsxs)("div",{className:"sign-in-up-wrapper",children:[Object(r.jsx)(nt,{}),Object(r.jsx)(rt,{})]})}),it={SET_CURRENT_USER:"SET_CURRENT_USER"},at=function(e){return{type:it.SET_CURRENT_USER,payload:e}},st=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).unsubscribeFromAuth=null,e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.SetCurrentUser;this.unsubscribeFromAuth=oe.onAuthStateChanged(function(){var n=Object(b.a)(u.a.mark((function n(r){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=5;break}return n.next=3,le(r);case 3:n.sent.onSnapshot((function(t){e.props.SetCurrentUser(Object(d.a)({id:t.id},t.data()))}));case 5:t(r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)($e,{}),Object(r.jsxs)(g.d,{children:[Object(r.jsx)(g.b,{exact:!0,path:"/",component:C}),Object(r.jsx)(g.b,{path:"/shop",component:K}),Object(r.jsx)(g.b,{exact:!0,path:"/checkout",component:ae}),Object(r.jsx)(g.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(r.jsx)(g.a,{to:"/"}):Object(r.jsx)(ct,{})}})]})]})}}]),n}(i.a.Component),lt=Object(v.b)({currentUser:ze}),ot=Object(O.b)(lt,(function(e){return{SetCurrentUser:function(t){return e(at(t))}}}))(st),ut=n(18),dt=n(35),bt=n(48),pt=n.n(bt),mt=n(49),ht=n.n(mt),jt={currentUser:null},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case it.SET_CURRENT_USER:return Object(d.a)(Object(d.a)({},e),{},{currentUser:t.payload});default:return e}},ft=n(51),Ot=function(e,t){return e.find((function(e){return t.id===e.id}))?e.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(ft.a)(e),[Object(d.a)(Object(d.a)({},t),{},{quantity:1})])},vt=function(e,t){return 1===e.find((function(e){return t.id===e.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id!==t.id?e:Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity-1})}))},xt={hidden:!0,cartItems:[]},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.CART_TOGGLE_HIDDEN:return Object(d.a)(Object(d.a)({},e),{},{hidden:!e.hidden});case W.ADD_ITEM:return Object(d.a)(Object(d.a)({},e),{},{cartItems:Ot(e.cartItems,t.payload)});case W.CLEAR_ITEM:return Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case W.REMOVE_ITEM:return Object(d.a)(Object(d.a)({},e),{},{cartItems:vt(e.cartItems,t.payload)});default:return e}},wt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Nt={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ut={key:"root",storage:ht.a,whitelist:["cart"]},Ct=Object(ut.c)({user:gt,cart:yt,menu:kt,shop:Et}),It=Object(dt.a)(Ut,Ct),St=[pt.a],Tt=Object(ut.d)(It,ut.a.apply(void 0,St)),Pt=Object(dt.b)(Tt),Bt=n(50);s.a.render(Object(r.jsx)(O.a,{store:Tt,children:Object(r.jsx)(l.a,{children:Object(r.jsx)(Bt.a,{persistor:Pt,children:Object(r.jsx)(ot,{})})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.d8669f62.chunk.js.map