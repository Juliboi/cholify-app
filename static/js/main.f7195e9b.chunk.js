/*! For license information please see main.f7195e9b.chunk.js.LICENSE.txt */
(this["webpackJsonpcholify-app"]=this["webpackJsonpcholify-app"]||[]).push([[0],{123:function(e,t,a){e.exports=a.p+"static/media/cholify-inline-logo-dark.ba622f97.svg"},141:function(e,t,a){e.exports=a(251)},146:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),l=a(11),c=(a(146),a(12)),u=a(308),s=a(309),m=a(319),d=a(310),p=a(283),g=a(323),h=a(4),y=a(284),f=Object(h.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",width:"11px",height:"11px",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),borderRadius:"50%","&::after":{position:"absolute",top:"-1px",left:"-1px",width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(p.a),b=Object(y.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},large:{width:"55px",height:"55px"}}}));function E(){var e=b();return r.a.createElement("div",{className:e.root},r.a.createElement(f,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},r.a.createElement(g.a,{alt:"Sophia Jia",src:"/images/avatar/sofia.jpg",className:e.large})))}var v=a(285),F=a(286),k=a(35),S=function(e){var t=e.label,a=e.value,n=e.icon,o=Object(c.g)();return r.a.createElement(v.a,{component:k.b,className:"bottom-nav__link",to:"/".concat(a),selected:!0},r.a.createElement(F.a,{className:o.pathname==="/".concat(a)?"Mui-selected":void 0,showLabel:o.pathname==="/".concat(a),label:t,value:a,icon:n}))},j=a(21),w=a(287),N=a(288),O=a(289),x=Object(y.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(13),right:e.spacing(4)}}})),_=function(e){var t=e.fab,a=e.value,n=e.index,o=Object(j.a)(),i=x(),l={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen};return r.a.createElement(w.a,{key:n,in:a===n,timeout:l,style:{transitionDelay:"".concat(a===n?l.exit:0,"ms")},unmountOnExit:!0},r.a.createElement(N.a,{"aria-label":t.label,className:i.fab,color:t.color},r.a.createElement(O.a,null)))},C=a(290),z=a(291),T=a(292),R=a(293),L=a(130),V=a(294),M=a(118),P=a.n(M),I=a(125),A=Object(n.createContext)(),B=function(e){var t=e.children,a=Object(n.useState)([]),o=Object(l.a)(a,2),i=o[0],c=o[1];return r.a.createElement(A.Provider,{value:{foodState:i,setFoodState:c}},t)},K=function(){return Object(n.useContext)(A)},D=function(e){var t=K().foodState;return{isFoodStateEmpty:0===t.length,isFoodAvailable:function(){return t.some((function(t){return t.title===e}))},getAvailableFood:function(){return t.find((function(t){return t.title===e}))},getAvailableFoodIndex:function(){return t.findIndex((function(t){return t.title===e}))},calculateFoodValue:function(e,a){var n=0,r=0;return t.length>0&&t.forEach((function(t){var a=t.grammage,o=t.nutrition,i=a.value/100;r=o[e]*i,n+=r})),n.toFixed(1)}}},J=function(e,t,a){var n=K(),r=n.foodState,o=n.setFoodState,i=D(e).isFoodAvailable;return{addFoodToState:function(){i()?console.log("".concat(e," is already included!")):(o([].concat(Object(I.a)(r),[{title:e,nutrition:a,imgSrc:t,grammage:{value:0,unit:"g",default:""}}])),console.log("%c No ".concat(e," copy, I have added it!"),"font-size: 20px;font-weight: bold;color:red;"))},removeFoodFromState:function(){if(i()){var t=r.filter((function(t){return t.title!==e}));o(t),console.log("%c ".concat(e," is included, I have removed it!"),"font-size: 20px;font-weight: bold;color:red;")}else console.log("".concat(e," is not included!"))}}},W=Object(y.a)((function(e){return{checkMark:{width:"1.3rem",height:"1.3rem",color:"#1976d2",marginLeft:"1rem"},fitImage:{objectFit:"contain"}}})),Z=function(e){var t=e.title,a=e.imgSrc,o=e.nutrition,i=D(t).isFoodAvailable,c=J(t,a,o),u=c.addFoodToState,s=c.removeFoodFromState,m=Object(n.useState)(!1),d=Object(l.a)(m,2),p=d[0],g=d[1],h=W(),y=function(){p?(g(!1),s()):(g(!0),u())};return Object(n.useEffect)((function(){i()?g(!0):g(!1)}),[]),r.a.createElement(C.a,{className:"food-card"},r.a.createElement(z.a,{onClick:function(){return y()}},r.a.createElement(T.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:a,title:"Contemplative Reptile",className:h.fitImage}),r.a.createElement(R.a,{className:"food-card__content"},r.a.createElement(L.a,{variant:"h6",component:"h5"},t),p&&r.a.createElement(P.a,{className:h.checkMark}))),r.a.createElement(V.a,null,r.a.createElement(v.a,{size:"small",color:"primary"},"Info"),r.a.createElement(v.a,{size:"small",variant:"contained",color:p?"secondary":"primary",onClick:function(){return y()}},p?"Odebrat":"P\u0159idat")))},G=function(e){var t=e.title,a=e.children;return r.a.createElement("div",{className:"create-recipe__row"},r.a.createElement("h3",{className:"create-recipe__title"},t),r.a.createElement("div",{className:"create-recipe__slider"},a))},H=a(58),U=function(e){return"Kilogramy"===e?"kg":"Gramy"===e?"g":"Kus"===e?"ks":""},Y=a(321),$=a(295),Q=a(296),X=a(297),q=a(324),ee=a(318),te=a(298),ae=a(326),ne=a(300),re=a(301),oe=a(3),ie=Object(y.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},marginTop:{marginTop:"2rem"},marginRight:{marginRight:"0.5rem"}}}));function le(e){var t=e.title,a=e.content,o=ie(),i=Object(n.useState)(!1),c=Object(l.a)(i,2),u=c[0],s=c[1],m=Object(n.useState)(""),d=Object(l.a)(m,2),p=d[0],g=d[1],h=Object(n.useState)("Gramy"),y=Object(l.a)(h,2),f=y[0],b=y[1],E=K().setFoodState,F=D(t),k=F.getAvailableFood,S=F.getAvailableFoodIndex,j=function(){return k().grammage.value};return Object(n.useEffect)((function(){0!==j()&&g(j())}),[]),r.a.createElement("div",null,r.a.createElement(v.a,{className:o.marginRight,variant:"contained",color:"primary",onClick:function(){return s(!0)}},a),r.a.createElement(Y.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:u,onClose:function(){return s(!1)}},r.a.createElement($.a,null,t),r.a.createElement(Q.a,null,r.a.createElement("form",{className:o.container},r.a.createElement(X.a,{className:o.formControl},r.a.createElement(q.a,{htmlFor:"demo-dialog-native"},"Jednotka"),r.a.createElement(ee.a,{native:!0,value:f,onChange:function(e){return b(e.target.value||"")},input:r.a.createElement(te.a,{id:"demo-dialog-native"})},r.a.createElement("option",{value:"Kilogramy"},"Kilogramy"),r.a.createElement("option",{value:"Gramy"},"Gramy"),r.a.createElement("option",{value:"Kus"},"Kus"))),r.a.createElement(ae.a,{onClick:function(){return e=document.getElementById("outlined-start-adornment"),t=function(e){return/^-?\d*$/.test(e)},void["input","keydown","keyup","mousedown","mouseup","select","contextmenu","drop"].forEach((function(a){e.addEventListener(a,(function(){t(this.value)?(this.oldValue=this.value,this.oldSelectionStart=this.selectionStart,this.oldSelectionEnd=this.selectionEnd):this.hasOwnProperty("oldValue")?(this.value=this.oldValue,this.setSelectionRange(this.oldSelectionStart,this.oldSelectionEnd)):this.value=""}))}));var e,t},onInput:function(e){g(e.target.value)},label:"With normal TextField",id:"outlined-start-adornment",className:Object(oe.a)(o.marginTop,o.textField),InputProps:{startAdornment:r.a.createElement(ne.a,{position:"start"},U(f))},value:p,variant:"outlined"}))),r.a.createElement(re.a,null,r.a.createElement(v.a,{onClick:function(){return s(!1)},color:"primary"},"Cancel"),r.a.createElement(v.a,{onClick:function(){E((function(e){return e.map((function(t,a){return a===S()?Object(H.a)(Object(H.a)({},e[a]),{},{grammage:Object(H.a)(Object(H.a)({},e[a].grammage),{},{value:Number(p),unit:U(f)})}):t}))})),s(!1)},color:"primary"},"Ok"))))}var ce=a(119),ue=a.n(ce),se=function(e){var t=e.url,a=Object(n.useRef)();return Object(n.useEffect)((function(){ue.a.loadAnimation({container:a.current,renderer:"svg",loop:!0,autoplay:!0,path:t})}),[t]),r.a.createElement("div",{ref:a,className:"lottie-animation"})},me=a(121),de=a.n(me),pe=a(120),ge=a.n(pe),he=Object(y.a)((function(e){return{details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151,backgroundSize:"contain"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}}}));function ye(e){var t=e.title,a=e.category,n=e.grammage,o=e.imgSrc,i=he(),l=J(t).removeFoodFromState;return r.a.createElement(C.a,{className:"menu-card"},r.a.createElement("div",{className:i.details},r.a.createElement(R.a,{className:i.content},r.a.createElement(L.a,{component:"h6",variant:"h6"},t),r.a.createElement(L.a,{className:"grammage-text",component:"h6",variant:"h6"},"".concat(n.value," ").concat(n.unit)),r.a.createElement(L.a,{variant:"subtitle1",color:"textSecondary"},a)),r.a.createElement("div",{className:i.controls},r.a.createElement(le,{title:t,content:r.a.createElement(ge.a,null)}),r.a.createElement(v.a,{variant:"contained",color:"secondary",onClick:l},r.a.createElement(de.a,null)))),r.a.createElement(T.a,{className:i.cover,image:o,title:""}))}var fe=a(327),be=Object(y.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120}}}));function Ee(){var e=be(),t=r.a.useState(!1),a=Object(l.a)(t,2),n=a[0],o=a[1],i=r.a.useState(""),c=Object(l.a)(i,2),u=c[0],s=c[1],m=function(e){s(Number(e.target.value)||"")};return r.a.createElement("div",null,r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){return o(!0)}},"Upravit"),r.a.createElement(Y.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:n,onClose:function(){return o(!1)}},r.a.createElement($.a,null,"Upravte Informace"),r.a.createElement(Q.a,null,r.a.createElement("form",{className:e.container},r.a.createElement(X.a,{className:e.formControl},r.a.createElement(q.a,{htmlFor:"demo-dialog-native"},"Age"),r.a.createElement(ee.a,{native:!0,value:u,onChange:m,input:r.a.createElement(te.a,{id:"demo-dialog-native"})},r.a.createElement("option",{"aria-label":"None",value:""}),r.a.createElement("option",{value:10},"Ten"),r.a.createElement("option",{value:20},"Twenty"),r.a.createElement("option",{value:30},"Thirty"))),r.a.createElement(X.a,{className:e.formControl},r.a.createElement(q.a,{id:"demo-dialog-select-label"},"Age"),r.a.createElement(ee.a,{labelId:"demo-dialog-select-label",id:"demo-dialog-select",value:u,onChange:m,input:r.a.createElement(te.a,null)},r.a.createElement(fe.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(fe.a,{value:10},"Ten"),r.a.createElement(fe.a,{value:20},"Twenty"),r.a.createElement(fe.a,{value:30},"Thirty"))))),r.a.createElement(re.a,null,r.a.createElement(v.a,{onClick:function(){return o(!1)},color:"primary"},"Cancel"),r.a.createElement(v.a,{onClick:function(){return o(!1)},color:"primary"},"Ok"))))}var ve=a(302),Fe=a(129),ke=a(303),Se=a(304),je=a(305),we=a(306),Ne=a(307),Oe=[{type:"V\u011bk",value:61},{type:"Pohlav\xed",value:"\u017dena"},{type:"V\xfd\u0161ka",value:162},{type:"V\xe1ha",value:56},{type:"HC",value:6.46},{type:"LDL",value:4.56},{type:"HDL",value:1.28},{type:"TG",value:1.37},{type:"Aktivita",value:"?"}];function xe(e,t,a){return{title:e,value:t,secondaryValue:a}}function _e(e){return{id:"action-tab-".concat(e),"aria-controls":"action-tabpanel-".concat(e)}}var Ce=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){var e=Oe.map((function(e){return xe(e.type,e.value)}));o(e)}),[]),r.a.createElement(ve.a,{className:"table",component:Fe.a},r.a.createElement(ke.a,{"aria-label":"customized table"},r.a.createElement(Se.a,{className:"table__head"},r.a.createElement(je.a,null,r.a.createElement(we.a,null,"Moje Biometrika"),r.a.createElement(we.a,{align:"right"}),r.a.createElement(we.a,{align:"right"}))),r.a.createElement(Ne.a,{className:"table__body"},a.map((function(e){return r.a.createElement(je.a,{key:e.title},r.a.createElement(we.a,{component:"th",scope:"row"},e.title),r.a.createElement(we.a,{align:"right"},e.value),r.a.createElement(we.a,{align:"right"}))})))))},ze=(a(99),[{title:"Kalorie",type:"calories",unit:"g"},{title:"Proteiny",type:"protein",unit:"g"},{title:"Sacharidy",type:"carbohydrate",unit:"g"},{title:"Cukry",type:"sugar",unit:"g"},{title:"Celkov\xe9 Tuky",type:"totalFat",unit:"g"},{title:"Nasycen\xe9 mastn\xe9 kyseliny",type:"saturatedFat",unit:"g"},{title:"Mononenasycen\xe9 mastn\xe9 kyseliny",type:"monounsaturatedFat",unit:"g"},{title:"Polynenasycen\xe9 mastn\xe9 kyseliny",type:"polyunsaturatedFat",unit:"g"},{title:"Trans mastn\xe9 kyseliny",type:"transFat",unit:"g"},{title:"Cholesterol",type:"cholesterol",unit:"mg"},{title:"S\u016fl",type:"sodium",unit:"mg"},{title:"\u017delezo",type:"iron",unit:"mg"},{title:"V\xe1pn\xedk",type:"calcium",unit:"mg"},{title:"Vl\xe1knika",type:"fiber",unit:"g"}]),Te=Object(y.a)({table:{maxWidth:389},tableRow:{display:"flex",flexDirection:"column",width:"100%"},tableColumn:{flex:1},upperCase:{fontWeight:"bold",textTransform:"uppercase"},paddingVertical:{marginTop:"2rem",marginBottom:"2rem"}}),Re=function(){var e=Te(),t=Object(n.useState)([]),a=Object(l.a)(t,2),o=a[0],i=a[1],c=(K().foodState,D().calculateFoodValue);return Object(n.useEffect)((function(){var e=ze.map((function(e){var t=e.title,a=e.type,n=e.unit;return xe(t,c(a,n),n)}));i(e)}),[]),r.a.createElement(ve.a,{className:"table",component:Fe.a},r.a.createElement(ke.a,{className:e.table,"aria-label":"customized table"},r.a.createElement(Se.a,{className:"table__head"},r.a.createElement(je.a,null,r.a.createElement(we.a,{className:e.upperCase,align:"left"},"Moje \u017diviny"),r.a.createElement(we.a,{align:"right"}),r.a.createElement(we.a,{align:"right"}),r.a.createElement(we.a,{align:"right"}))),r.a.createElement(Ne.a,{className:"table__body"},o.map((function(e){return r.a.createElement(je.a,{key:e.title},r.a.createElement(we.a,{component:"th",scope:"row"},e.title),r.a.createElement(we.a,{align:"right"}),r.a.createElement(we.a,{align:"right"},e.value),r.a.createElement(we.a,{align:"right"},e.secondaryValue))})))))},Le=a(126),Ve=a(317);function Me(e){var t=e.children,a=e.value,n=e.index,o=Object(Le.a)(e,["children","value","index"]);return r.a.createElement(L.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"action-tabpanel-".concat(n),"aria-labelledby":"action-tab-".concat(n)},o),a===n&&r.a.createElement(Ve.a,{p:3},t))}var Pe=[{title:"Libov\xe9 Masa",foodList:[{title:"Ku\u0159ec\xed Prso",category:"Maso",nutrition:{calories:165,protein:31,carbohydrate:0,sugar:0,totalFat:3.6,saturatedFat:1,monounsaturatedFat:1.2,polyunsaturatedFat:.7,cholesterol:85,fiber:0,iron:1,sodium:74,calcium:0,phe:1.05},imgSrc:"https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1307145/1307145-1532681017.jpg"},{title:"Krut\xed Prso",category:"Maso",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1353733/1353733-1582105345.jpg"},{title:"Vep\u0159ov\xe1 Panenka",category:"Maso",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://data.labuznik.cz/labuznik/images/640x480/14445.jpg?3"},{title:"Hov\u011bz\xed Panenka",category:"Maso",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://embed.widencdn.net/img/beef/wa7zkwrlc1/800x600px/Tenderloin%20Roast_Chateaubriand.psd?keep=c&u=7fueml"}]},{title:"Tu\u010dn\xe9 Ryby",foodList:[{title:"Losos",category:"Tu\u010dn\xe9 Ryby",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://www.svetbedynek.cz/userfiles_cs/product-images/2670/94d3a9ef8e931aed7dead1f34915699d.jpg"},{title:"Tu\u0148\xe1k",category:"Tu\u010dn\xe9 Ryby",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1347509/1347509-1542704557.jpg"},{title:"Sardinky",category:"Tu\u010dn\xe9 Ryby",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://cdn.myshoptet.com/usr/www.cerstveryby.cz/user/shop/big/2087_sardine3.jpg?5be6f478"}]},{title:"Zeleniny",foodList:[{title:"Brokolice",category:"Zeleniny",nutrition:{calories:38,protein:3,carbohydrate:6,sugar:2,totalFat:.2,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:3,iron:.7,sodium:0,calcium:105,phe:165},imgSrc:"https://image.freepik.com/free-photo/fresh-broccoli-blocks-cooking-isolated-white-background_33736-2451.jpg"},{title:"Mrkev",category:"Zeleniny",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://5.imimg.com/data5/QU/CV/MY-6171882/carrot-500x500.jpg"},{title:"Sladk\xe1 Brambora",category:"Zeleniny",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1350677/1350677-1567345962.jpg"},{title:"Brambora",category:"Zeleniny",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1326173/1326173-1528784439.jpg"},{title:"Lilek",category:"Zeleniny",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://bloximages.chicago2.vip.townnews.com/thesouthern.com/content/tncms/assets/v3/editorial/e/63/e630fcfd-216a-54f0-9652-2eb1860ada14/5f57d16b9989f.image.jpg?resize=1200%2C1141"}]},{title:"Ovoce",foodList:[{title:"Jablko",category:"Ovoce",nutrition:{calories:52,protein:.3,carbohydrate:14,sugar:10,totalFat:.2,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:.1,cholesterol:0,fiber:2.4,iron:.19,sodium:0,calcium:6,phe:.06},imgSrc:"https://image.freepik.com/free-photo/close-up-view-single-red-apple-isolated-white-background_69593-1575.jpg"},{title:"Pomeran\u010d",category:"Ovoce",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://www.ekofood.cz/fotky81864/fotos/_vyr_385_pomerance-z-farmy.jpg"},{title:"Jahody",category:"Ovoce",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://www.ordinace.cz/img/articles/16b9/jahody.jpg"},{title:"Hroznov\xe9 V\xedno",category:"Ovoce",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://m.actve.net/frekvence1/edee/clanky/23957/shutterstock_64629709-610x405.jpg"}]},{title:"Lu\u0161t\u011bniny",foodList:[{title:"\u010cerven\xe9 Fazole",category:"Lu\u0161t\u011bniny",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://5.imimg.com/data5/JX/AB/MY-14534935/red-kidney-beans-500x500.jpg"},{title:"Cizrna",category:"Lu\u0161t\u011bniny",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://data.labuznik.cz/labuznik/images/640x480/14262.jpg?3"},{title:"\u010co\u010dka",category:"Lu\u0161t\u011bniny",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://data.labuznik.cz/labuznik/images/640x480/14265.jpg?3"}]},{title:"O\u0159echy",foodList:[{title:"Vla\u0161sk\xe9 O\u0159echy",category:"O\u0159echy",nutrition:{calories:691,protein:16,carbohydrate:18,sugar:4,totalFat:63,saturatedFat:7,monounsaturatedFat:12,polyunsaturatedFat:45,cholesterol:0,fiber:6,iron:2.9,sodium:0,calcium:96,phe:788},imgSrc:"https://www.vimcojim.cz/files/lide-ilustrace/2017%20obrazky/7.11.%20vlasky%20orech%20shutterstock_680681407_1000x667.jpg"},{title:"Mandle",category:"O\u0159echy",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://www.ochutnejorech.cz/obrazky/original/407.jpg"},{title:"Pist\xe1cie",category:"O\u0159echy",nutrition:{calories:0,protein:0,carbohydrate:0,sugar:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,cholesterol:0,fiber:0,iron:0,sodium:0,calcium:0,phe:0},imgSrc:"https://cdn.myshoptet.com/usr/www.nutiva.cz/user/shop/big/1625-2_pistacie-prazene-solene.jpg?5e9e82c0"}]}],Ie=function(){return r.a.createElement(r.a.Fragment,null,Pe.map((function(e,t){return r.a.createElement(G,{key:t,title:e.title},e.foodList.map((function(e,t){return r.a.createElement(Z,{key:t,title:e.title,imgSrc:e.imgSrc,nutrition:e.nutrition})})))})))},Ae=function(){var e=K(),t=e.foodState,a=e.setFoodState,n=D().isFoodStateEmpty;return r.a.createElement(u.a,{className:"menu"},n?r.a.createElement("div",{className:"menu__default"},r.a.createElement(se,{url:"./images/animations/empty-bag4.json"}),r.a.createElement("h3",null,"PR\xc1ZDNO")):t.map((function(e){var t=e.title,n=e.category,o=e.grammage,i=e.nutrition,l=e.imgSrc;return r.a.createElement(ye,{key:t,setFoodState:a,title:t,category:n,grammage:o,nutrition:i,imgSrc:l})})))},Be=function(){return r.a.createElement(u.a,{className:"nutrition"},r.a.createElement(Re,null))},Ke=a(122),De=[{title:"B\xedlkoviny",type:"protein",subSection:[]},{title:"Sacharidy",type:"carbohydrate",subSection:[]},{title:"Tuky",type:"totalFat",subSection:[{title:"Nasycen\xe9 mastn\xe9 kyseliny",type:"saturatedFat"},{title:"Mononenasycen\xe9 mastn\xe9 kyseliny",type:"monounsaturatedFat"},{title:"Polynenasycen\xe9 mastn\xe9 kyseliny",type:"polyunsaturatedFat"},{title:"Trans mastn\xe9 kyseliny",type:"transFat"}]}],Je=function(){K().foodState;var e=D(),t=e.calculateFoodValue,a=(e.isFoodStateEmpty,{datasets:[{data:De.map((function(e){var a=e.type;return 0==t(a)?.1:t(a)})),backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 206, 86)"]}],labels:["B\xedlkoviny","Sacharidy","Tuky"]});return r.a.createElement(u.a,{className:"recipe-nutrition"},r.a.createElement("div",{className:"recipe-nutrition__dougnut"},r.a.createElement(Ke.Doughnut,{data:a,width:240,height:240,options:{maintainAspectRatio:!1}})),r.a.createElement("div",{className:"recipe-nutrition__data"},r.a.createElement("div",{className:"data-section"},r.a.createElement("h3",{className:"data-section__title"},"Kalorie"),r.a.createElement("p",null,"Celkem:"," ",r.a.createElement("span",{className:"highlight--bold"},t("calories")," kcal")," ")),De.map((function(e){var a=e.title,n=e.type,o=e.subSection;return r.a.createElement("div",{className:"data-section"},r.a.createElement("h3",{className:"data-section__title"},a),r.a.createElement("div",{className:"data-section__data"},r.a.createElement("p",null,"Celkem:"," ",r.a.createElement("span",{className:"highlight--bold"},t(n)," g")," "),o.map((function(e){var a=e.title,n=e.type;return r.a.createElement("p",null,a,":"," ",r.a.createElement("span",{className:"highlight--bold"},t(n)," g"))}))))}))))},We=[{color:"primary",className:"fab",label:"Nutrition"},{color:"primary",className:"fab",label:"Nutrition"},{color:"primary",className:"fab",label:"Nutrition"}];function Ze(e){var t=e.header,a=Object(n.useState)(0),o=Object(l.a)(a,2),i=o[0],c=o[1],p=Object(n.useState)(!1),g=Object(l.a)(p,2),h=g[0],y=g[1],f=K(),b=f.foodState,E=f.setFoodState,v=function(){var e=window.scrollY,a=t.current.offsetHeight;y(e>=a)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}),[h]),r.a.createElement(u.a,{className:"create-recipe"},r.a.createElement("div",{className:"create-recipe__header"},r.a.createElement(s.a,{position:h?"fixed":"static",color:"default"},r.a.createElement(m.a,{value:i,onChange:function(e,t){return c(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example"},r.a.createElement(d.a,Object.assign({label:"J\xeddla"},_e(0))),r.a.createElement(d.a,Object.assign({label:"Recept"},_e(1))),r.a.createElement(d.a,Object.assign({label:"\u017diviny"},_e(2))),r.a.createElement(d.a,Object.assign({label:"\u017diviny"},_e(3)))))),r.a.createElement("div",{className:"create-recipe__content",onScroll:v},r.a.createElement(Me,{value:i,index:0},r.a.createElement(Ie,null)),r.a.createElement(Me,{value:i,index:1},r.a.createElement(Ae,null)),r.a.createElement(Me,{value:i,index:2},r.a.createElement(Je,{foodState:b,setFoodState:E})),r.a.createElement(Me,{value:i,index:3},r.a.createElement(Be,{foodState:b,setFoodState:E}))),We.map((function(e,t){return r.a.createElement(_,{key:t,fab:e,value:i,index:t})})))}var Ge=function(){return r.a.createElement(u.a,null,"This is my Recipe Page")},He=function(){return r.a.createElement(u.a,{className:"my-profile"},r.a.createElement("div",{className:"my-profile__head"},r.a.createElement(E,null),r.a.createElement("h1",{className:"my-profile__username"},"Sophia Jia")),r.a.createElement("div",{className:"my-profile__body"},r.a.createElement(Ce,null),r.a.createElement(Ee,null)))},Ue=function(){var e=Object(c.f)();return r.a.createElement("div",{className:"intro-page"},r.a.createElement(se,{url:"./images/animations/carrot-rocket.json"}),r.a.createElement("h2",{className:"intro-page__title"},"V\xedtej Na Cholify!"),r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/create-recipe")}},"Vytvo\u0159it Recept"))},Ye=a(311),$e=a(123),Qe=a.n($e),Xe=function(e){var t=e.passRef;return r.a.createElement(s.a,{ref:t,className:"header",position:"absolute"},r.a.createElement(Ye.a,null,r.a.createElement(k.b,{to:"/my-profile"},r.a.createElement("img",{className:"header__logo",src:Qe.a,alt:"Cholify header logo"}))))},qe=a(312),et=a(313),tt=a(314),at=a(315),nt=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],o=t[1];return r.a.createElement(qe.a,{className:"bottom-nav",value:a,onChange:function(e,t){o(t)}},r.a.createElement(S,{label:"M\u016fj Profil",value:"my-profile",icon:r.a.createElement(et.a,null)}),r.a.createElement(S,{label:"P\u0159idat Recept",value:"create-recipe",icon:r.a.createElement(tt.a,null)}),r.a.createElement(S,{label:"Moje Recepty",value:"my-recipes",icon:r.a.createElement(at.a,null)}))};var rt=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useRef)(),u=Object(c.g)();return Object(n.useEffect)((function(){"/"!==u.pathname?o(!1):o(!0)}),[u.pathname]),r.a.createElement("div",{className:"app"},r.a.createElement(Xe,{passRef:i}),r.a.createElement("div",{className:"app__content"},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/my-profile",exact:!0},r.a.createElement(He,null)),r.a.createElement(c.a,{path:"/create-recipe"},r.a.createElement(Ze,{header:i})),r.a.createElement(c.a,{path:"/my-recipes"},r.a.createElement(Ge,null)))),a&&r.a.createElement(Ue,null),r.a.createElement(nt,null))},ot=a(124),it=a(316),lt=Object(ot.a)({palette:{primary:{main:"#43a047"},secondary:{main:"#ff5722"}}});i.a.render(r.a.createElement(B,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(it.a,{theme:lt},r.a.createElement(k.a,null,r.a.createElement(rt,null))))),document.getElementById("root"))},99:function(e,t){}},[[141,1,2]]]);
//# sourceMappingURL=main.f7195e9b.chunk.js.map