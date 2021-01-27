/*! For license information please see main.8978b081.chunk.js.LICENSE.txt */
(this["webpackJsonpcholify-app"]=this["webpackJsonpcholify-app"]||[]).push([[0],{124:function(e,a,t){e.exports=t.p+"static/media/cholify-inline-logo-dark.ba622f97.svg"},141:function(e,a,t){e.exports=t(251)},146:function(e,a,t){},251:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(10),o=t.n(r),c=t(11),l=(t(146),t(12)),m=t(308),s=t(309),u=t(319),d=t(310),v=t(284),p=t(323),g=t(4),f=t(285),h=Object(g.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",width:"11px",height:"11px",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),borderRadius:"50%","&::after":{position:"absolute",top:"-1px",left:"-1px",width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(v.a),b=Object(f.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},large:{width:"55px",height:"55px"}}}));function y(){var e=b();return i.a.createElement("div",{className:e.root},i.a.createElement(h,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},i.a.createElement(p.a,{alt:"Sophia Jia",src:"/images/avatar/sofia.jpg",className:e.large})))}var E=t(286),F=t(287),k=t(35),S=function(e){var a=e.label,t=e.value,n=e.icon,r=Object(l.g)();return i.a.createElement(E.a,{component:k.b,className:"bottom-nav__link",to:"/".concat(t),selected:!0},i.a.createElement(F.a,{className:r.pathname==="/".concat(t)?"Mui-selected":void 0,showLabel:r.pathname==="/".concat(t),label:a,value:t,icon:n}))},j=t(21),_=t(288),N=t(289),w=t(118),O=t.n(w),C=Object(f.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(13),right:e.spacing(4)},icon:{width:"30px",height:"30px"}}})),x=function(e){var a=e.fab,t=e.value,n=e.index,r=Object(j.a)(),o=C(),c={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen};return i.a.createElement(_.a,{key:n,in:t===n,timeout:c,style:{transitionDelay:"".concat(t===n?c.exit:0,"ms")},unmountOnExit:!0},i.a.createElement(N.a,{"aria-label":a.label,className:o.fab,color:a.color},i.a.createElement(O.a,{className:o.icon})))},z=t(290),A=t(291),B=t(292),K=t(293),D=t(131),R=t(294),T=t(119),V=t.n(T),L=t(126),M=Object(n.createContext)(),I=function(e){var a=e.children,t=Object(n.useState)([]),r=Object(c.a)(t,2),o=r[0],l=r[1];return i.a.createElement(M.Provider,{value:{foodState:o,setFoodState:l}},a)},P=function(){return Object(n.useContext)(M)},J=function(e){var a=P().foodState;return{isFoodStateEmpty:0===a.length,isFoodAvailable:function(){return a.some((function(a){return a.title===e}))},getAvailableFood:function(){return a.find((function(a){return a.title===e}))},getAvailableFoodIndex:function(){return a.findIndex((function(a){return a.title===e}))},calculateFoodValue:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;return a.length>0&&a.forEach((function(a){var r=a.grammage,o=a.nutrition,c=r.value/100,l=n?o[t][e]:o[e];i+=l*c})),i%1!==0?i.toFixed(1):i}}},W=function(e,a,t){var n=P(),i=n.foodState,r=n.setFoodState,o=J(e).isFoodAvailable;return{addFoodToState:function(){o()?console.log("".concat(e," is already included!")):(r([].concat(Object(L.a)(i),[{title:e,nutrition:t,imgSrc:a,grammage:{value:0,unit:"g",default:""}}])),console.log("%c No ".concat(e," copy, I have added it!"),"font-size: 20px;font-weight: bold;color:red;"))},removeFoodFromState:function(){if(o()){var a=i.filter((function(a){return a.title!==e}));r(a),console.log("%c ".concat(e," is included, I have removed it!"),"font-size: 20px;font-weight: bold;color:red;")}else console.log("".concat(e," is not included!"))}}},Z=Object(f.a)((function(e){return{checkMark:{width:"1.3rem",height:"1.3rem",color:"#1976d2",marginLeft:"1rem"},fitImage:{objectFit:"contain"}}})),H=function(e){var a=e.title,t=e.imgSrc,r=e.nutrition,o=J(a).isFoodAvailable,l=W(a,t,r),m=l.addFoodToState,s=l.removeFoodFromState,u=Object(n.useState)(!1),d=Object(c.a)(u,2),v=d[0],p=d[1],g=Z(),f=function(){v?(p(!1),s()):(p(!0),m())};return Object(n.useEffect)((function(){o()?p(!0):p(!1)}),[]),i.a.createElement(z.a,{className:"food-card"},i.a.createElement(A.a,{onClick:function(){return f()}},i.a.createElement(B.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:t,title:"Contemplative Reptile",className:g.fitImage}),i.a.createElement(K.a,{className:"food-card__content"},i.a.createElement(D.a,{variant:"h6",component:"h5"},a),v&&i.a.createElement(V.a,{className:g.checkMark}))),i.a.createElement(R.a,null,i.a.createElement(E.a,{size:"small",color:"primary"},"Info"),i.a.createElement(E.a,{size:"small",variant:"contained",color:v?"secondary":"primary",onClick:function(){return f()}},v?"Odebrat":"P\u0159idat")))},G=function(e){var a=e.title,t=e.children;return i.a.createElement("div",{className:"create-recipe__row"},i.a.createElement("h3",{className:"create-recipe__title"},a),i.a.createElement("div",{className:"create-recipe__slider"},t))},U=t(58),Y=function(e){return"Kilogramy"===e?"kg":"Gramy"===e?"g":"Kus"===e?"ks":""},$=t(321),Q=t(295),X=t(296),q=t(297),ee=t(324),ae=t(318),te=t(298),ne=t(326),ie=t(300),re=t(301),oe=t(3),ce=Object(f.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},marginTop:{marginTop:"2rem"},marginRight:{marginRight:"0.5rem"}}}));function le(e){var a=e.title,t=e.content,r=ce(),o=Object(n.useState)(!1),l=Object(c.a)(o,2),m=l[0],s=l[1],u=Object(n.useState)(""),d=Object(c.a)(u,2),v=d[0],p=d[1],g=Object(n.useState)("Gramy"),f=Object(c.a)(g,2),h=f[0],b=f[1],y=P().setFoodState,F=J(a),k=F.getAvailableFood,S=F.getAvailableFoodIndex,j=function(){return k().grammage.value};return Object(n.useEffect)((function(){0!==j()&&p(j())}),[]),i.a.createElement("div",null,i.a.createElement(E.a,{className:r.marginRight,variant:"contained",color:"primary",onClick:function(){return s(!0)}},t),i.a.createElement($.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:m,onClose:function(){return s(!1)}},i.a.createElement(Q.a,null,a),i.a.createElement(X.a,null,i.a.createElement("form",{className:r.container},i.a.createElement(q.a,{className:r.formControl},i.a.createElement(ee.a,{htmlFor:"demo-dialog-native"},"Jednotka"),i.a.createElement(ae.a,{native:!0,value:h,onChange:function(e){return b(e.target.value||"")},input:i.a.createElement(te.a,{id:"demo-dialog-native"})},i.a.createElement("option",{value:"Kilogramy"},"Kilogramy"),i.a.createElement("option",{value:"Gramy"},"Gramy"),i.a.createElement("option",{value:"Kus"},"Kus"))),i.a.createElement(ne.a,{onClick:function(){return e=document.getElementById("outlined-start-adornment"),a=function(e){return/^-?\d*$/.test(e)},void["input","keydown","keyup","mousedown","mouseup","select","contextmenu","drop"].forEach((function(t){e.addEventListener(t,(function(){a(this.value)?(this.oldValue=this.value,this.oldSelectionStart=this.selectionStart,this.oldSelectionEnd=this.selectionEnd):this.hasOwnProperty("oldValue")?(this.value=this.oldValue,this.setSelectionRange(this.oldSelectionStart,this.oldSelectionEnd)):this.value=""}))}));var e,a},onInput:function(e){p(e.target.value)},label:"With normal TextField",id:"outlined-start-adornment",className:Object(oe.a)(r.marginTop,r.textField),InputProps:{startAdornment:i.a.createElement(ie.a,{position:"start"},Y(h))},value:v,variant:"outlined"}))),i.a.createElement(re.a,null,i.a.createElement(E.a,{onClick:function(){return s(!1)},color:"primary"},"Cancel"),i.a.createElement(E.a,{onClick:function(){y((function(e){return e.map((function(a,t){return t===S()?Object(U.a)(Object(U.a)({},e[t]),{},{grammage:Object(U.a)(Object(U.a)({},e[t].grammage),{},{value:Number(v),unit:Y(h)})}):a}))})),s(!1)},color:"primary"},"Ok"))))}var me=t(120),se=t.n(me),ue=function(e){var a=e.url,t=Object(n.useRef)();return Object(n.useEffect)((function(){se.a.loadAnimation({container:t.current,renderer:"svg",loop:!0,autoplay:!0,path:a})}),[a]),i.a.createElement("div",{ref:t,className:"lottie-animation"})},de=t(122),ve=t.n(de),pe=t(121),ge=t.n(pe),fe=Object(f.a)((function(e){return{details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151,backgroundSize:"contain"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}}}));function he(e){var a=e.title,t=e.category,n=e.grammage,r=e.imgSrc,o=fe(),c=W(a).removeFoodFromState;return i.a.createElement(z.a,{className:"menu-card"},i.a.createElement("div",{className:o.details},i.a.createElement(K.a,{className:o.content},i.a.createElement(D.a,{component:"h6",variant:"h6"},a),i.a.createElement(D.a,{className:"grammage-text",component:"h6",variant:"h6"},"".concat(n.value," ").concat(n.unit)),i.a.createElement(D.a,{variant:"subtitle1",color:"textSecondary"},t)),i.a.createElement("div",{className:o.controls},i.a.createElement(le,{title:a,content:i.a.createElement(ge.a,null)}),i.a.createElement(E.a,{variant:"contained",color:"secondary",onClick:c},i.a.createElement(ve.a,null)))),i.a.createElement(B.a,{className:o.cover,image:r,title:""}))}var be=t(327),ye=Object(f.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120}}}));function Ee(){var e=ye(),a=i.a.useState(!1),t=Object(c.a)(a,2),n=t[0],r=t[1],o=i.a.useState(""),l=Object(c.a)(o,2),m=l[0],s=l[1],u=function(e){s(Number(e.target.value)||"")};return i.a.createElement("div",null,i.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){return r(!0)}},"Upravit"),i.a.createElement($.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:n,onClose:function(){return r(!1)}},i.a.createElement(Q.a,null,"Upravte Informace"),i.a.createElement(X.a,null,i.a.createElement("form",{className:e.container},i.a.createElement(q.a,{className:e.formControl},i.a.createElement(ee.a,{htmlFor:"demo-dialog-native"},"Age"),i.a.createElement(ae.a,{native:!0,value:m,onChange:u,input:i.a.createElement(te.a,{id:"demo-dialog-native"})},i.a.createElement("option",{"aria-label":"None",value:""}),i.a.createElement("option",{value:10},"Ten"),i.a.createElement("option",{value:20},"Twenty"),i.a.createElement("option",{value:30},"Thirty"))),i.a.createElement(q.a,{className:e.formControl},i.a.createElement(ee.a,{id:"demo-dialog-select-label"},"Age"),i.a.createElement(ae.a,{labelId:"demo-dialog-select-label",id:"demo-dialog-select",value:m,onChange:u,input:i.a.createElement(te.a,null)},i.a.createElement(be.a,{value:""},i.a.createElement("em",null,"None")),i.a.createElement(be.a,{value:10},"Ten"),i.a.createElement(be.a,{value:20},"Twenty"),i.a.createElement(be.a,{value:30},"Thirty"))))),i.a.createElement(re.a,null,i.a.createElement(E.a,{onClick:function(){return r(!1)},color:"primary"},"Cancel"),i.a.createElement(E.a,{onClick:function(){return r(!1)},color:"primary"},"Ok"))))}var Fe=t(302),ke=t(130),Se=t(303),je=t(304),_e=t(305),Ne=t(306),we=t(307),Oe=[{type:"V\u011bk",value:61},{type:"Pohlav\xed",value:"\u017dena"},{type:"V\xfd\u0161ka",value:162},{type:"V\xe1ha",value:56},{type:"HC",value:6.46},{type:"LDL",value:4.56},{type:"HDL",value:1.28},{type:"TG",value:1.37},{type:"Aktivita",value:"?"}];function Ce(e,a,t){return{title:e,value:a,secondaryValue:t}}function xe(e){return{id:"action-tab-".concat(e),"aria-controls":"action-tabpanel-".concat(e)}}var ze=function(){var e=Object(n.useState)([]),a=Object(c.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){var e=Oe.map((function(e){return Ce(e.type,e.value)}));r(e)}),[]),i.a.createElement(Fe.a,{className:"table",component:ke.a},i.a.createElement(Se.a,{"aria-label":"customized table"},i.a.createElement(je.a,{className:"table__head"},i.a.createElement(_e.a,null,i.a.createElement(Ne.a,null,"Moje Biometrika"),i.a.createElement(Ne.a,{align:"right"}),i.a.createElement(Ne.a,{align:"right"}))),i.a.createElement(we.a,{className:"table__body"},t.map((function(e){return i.a.createElement(_e.a,{key:e.title},i.a.createElement(Ne.a,{component:"th",scope:"row"},e.title),i.a.createElement(Ne.a,{align:"right"},e.value),i.a.createElement(Ne.a,{align:"right"}))})))))},Ae=(t(99),Object(f.a)({table:{maxWidth:389},tableRow:{display:"flex",flexDirection:"column",width:"100%"},tableColumn:{flex:1},upperCase:{fontWeight:"bold",textTransform:"uppercase"},paddingVertical:{marginTop:"2rem",marginBottom:"2rem"}}),t(127)),Be=t(317);function Ke(e){var a=e.children,t=e.value,n=e.index,r=Object(Ae.a)(e,["children","value","index"]);return i.a.createElement(D.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"action-tabpanel-".concat(n),"aria-labelledby":"action-tab-".concat(n)},r),t===n&&i.a.createElement(Be.a,{p:3},a))}var De=[{title:"Libov\xe9 Masa",foodList:[{title:"Ku\u0159ec\xed Prso",category:"Maso",nutrition:{calories:142,macro:{protein:26.7,carbohydrate:0,sugar:0,fiber:0,totalFat:3.1,saturatedFat:.9,monounsaturatedFat:1.1,polyunsaturatedFat:.7,transFat:.1,cholesterol:73},minerals:{sodium:74,calcium:13,potassium:220,magnesium:29,iron:1},vitamins:{vitaminA:6.8,vitaminB:.3,vitaminC:0,vitaminD:.11,vitaminE:.31,vitaminK:.34}},imgSrc:"https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1307145/1307145-1532681017.jpg"},{title:"Krut\xed Prso",category:"Maso",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1353733/1353733-1582105345.jpg"},{title:"Vep\u0159ov\xe1 Panenka",category:"Maso",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://data.labuznik.cz/labuznik/images/640x480/14445.jpg?3"},{title:"Hov\u011bz\xed Panenka",category:"Maso",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://embed.widencdn.net/img/beef/wa7zkwrlc1/800x600px/Tenderloin%20Roast_Chateaubriand.psd?keep=c&u=7fueml"}]},{title:"Tu\u010dn\xe9 Ryby",foodList:[{title:"Losos",category:"Tu\u010dn\xe9 Ryby",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://www.svetbedynek.cz/userfiles_cs/product-images/2670/94d3a9ef8e931aed7dead1f34915699d.jpg"},{title:"Tu\u0148\xe1k",category:"Tu\u010dn\xe9 Ryby",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1347509/1347509-1542704557.jpg"},{title:"Sardinky",category:"Tu\u010dn\xe9 Ryby",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://cdn.myshoptet.com/usr/www.cerstveryby.cz/user/shop/big/2087_sardine3.jpg?5be6f478"}]},{title:"Zeleniny",foodList:[{title:"Brokolice",category:"Zeleniny",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://image.freepik.com/free-photo/fresh-broccoli-blocks-cooking-isolated-white-background_33736-2451.jpg"},{title:"Mrkev",category:"Zeleniny",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://5.imimg.com/data5/QU/CV/MY-6171882/carrot-500x500.jpg"},{title:"Sladk\xe1 Brambora",category:"Zeleniny",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1350677/1350677-1567345962.jpg"},{title:"Brambora",category:"Zeleniny",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1326173/1326173-1528784439.jpg"},{title:"Lilek",category:"Zeleniny",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://bloximages.chicago2.vip.townnews.com/thesouthern.com/content/tncms/assets/v3/editorial/e/63/e630fcfd-216a-54f0-9652-2eb1860ada14/5f57d16b9989f.image.jpg?resize=1200%2C1141"}]},{title:"Ovoce",foodList:[{title:"Jablko",category:"Ovoce",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://image.freepik.com/free-photo/close-up-view-single-red-apple-isolated-white-background_69593-1575.jpg"},{title:"Pomeran\u010d",category:"Ovoce",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://www.ekofood.cz/fotky81864/fotos/_vyr_385_pomerance-z-farmy.jpg"},{title:"Jahody",category:"Ovoce",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://www.ordinace.cz/img/articles/16b9/jahody.jpg"},{title:"Hroznov\xe9 V\xedno",category:"Ovoce",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://m.actve.net/frekvence1/edee/clanky/23957/shutterstock_64629709-610x405.jpg"}]},{title:"Lu\u0161t\u011bniny",foodList:[{title:"\u010cerven\xe9 Fazole",category:"Lu\u0161t\u011bniny",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://5.imimg.com/data5/JX/AB/MY-14534935/red-kidney-beans-500x500.jpg"},{title:"Cizrna",category:"Lu\u0161t\u011bniny",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://data.labuznik.cz/labuznik/images/640x480/14262.jpg?3"},{title:"\u010co\u010dka",category:"Lu\u0161t\u011bniny",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://data.labuznik.cz/labuznik/images/640x480/14265.jpg?3"}]},{title:"O\u0159echy",foodList:[{title:"Vla\u0161sk\xe9 O\u0159echy",category:"O\u0159echy",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://www.vimcojim.cz/files/lide-ilustrace/2017%20obrazky/7.11.%20vlasky%20orech%20shutterstock_680681407_1000x667.jpg"},{title:"Mandle",category:"O\u0159echy",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://www.ochutnejorech.cz/obrazky/original/407.jpg"},{title:"Pist\xe1cie",category:"O\u0159echy",nutrition:{calories:0,macro:{protein:0,carbohydrate:0,sugar:0,fiber:0,totalFat:0,saturatedFat:0,monounsaturatedFat:0,polyunsaturatedFat:0,transFat:0,cholesterol:0},minerals:{sodium:0,calcium:0,potassium:0,magnesium:0,iron:0},vitamins:{vitaminA:0,vitaminB:0,vitaminC:0,vitaminD:0,vitaminE:0,vitaminK:0}},imgSrc:"https://cdn.myshoptet.com/usr/www.nutiva.cz/user/shop/big/1625-2_pistacie-prazene-solene.jpg?5e9e82c0"}]}],Re=function(){return i.a.createElement(i.a.Fragment,null,De.map((function(e,a){return i.a.createElement(G,{key:a,title:e.title},e.foodList.map((function(e,a){return i.a.createElement(H,{key:a,title:e.title,imgSrc:e.imgSrc,nutrition:e.nutrition})})))})))},Te=function(){var e=P(),a=e.foodState,t=e.setFoodState,n=J().isFoodStateEmpty;return i.a.createElement(m.a,{className:"menu"},n?i.a.createElement("div",{className:"menu__default"},i.a.createElement(ue,{url:"./images/animations/empty-bag4.json"}),i.a.createElement("h3",null,"PR\xc1ZDNO")):a.map((function(e){var a=e.title,n=e.category,r=e.grammage,o=e.nutrition,c=e.imgSrc;return i.a.createElement(he,{key:a,setFoodState:t,title:a,category:n,grammage:r,nutrition:o,imgSrc:c})})))},Ve=t(123),Le=[{title:"B\xedlkoviny",name:"protein",subSection:[]},{title:"Sacharidy",name:"carbohydrate",subSection:[{title:"Vl\xe1knina",name:"fiber"},{title:"Cukr",name:"sugar"}]},{title:"Tuky",name:"totalFat",subSection:[{title:"Nasycen\xe9 mastn\xe9 kyseliny",name:"saturatedFat"},{title:"Mononenasycen\xe9 mastn\xe9 kyseliny",name:"monounsaturatedFat"},{title:"Polynenasycen\xe9 mastn\xe9 kyseliny",name:"polyunsaturatedFat"},{title:"Trans mastn\xe9 kyseliny",name:"transFat"}]}],Me=[{title:"Vitamin A",name:"vitaminA"},{title:"Vitamin B",name:"vitaminB"},{title:"Vitamin C",name:"vitaminC",subSection:[]},{title:"Vitamin D",name:"vitaminD"},{title:"Vitamin E",name:"vitaminE"},{title:"Vitamin K",name:"vitaminK"}],Ie=[{title:"S\u016fl",name:"sodium"},{title:"V\xe1pn\xedk",name:"calcium"},{title:"Drasl\xedk",name:"potassium"},{title:"Ho\u0159\u010d\xedk",name:"magnesium"},{title:"\u017delezo",name:"iron"}],Pe=function(){P().foodState;var e=J(),a=e.calculateFoodValue,t=(e.isFoodStateEmpty,{datasets:[{data:Le.map((function(e){var t=e.name;e.type;return 0==a(t,"macro")?.1:a(t,"macro")})),backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 206, 86)"]}],labels:["B\xedlkoviny","Sacharidy","Tuky"]});return i.a.createElement(m.a,{className:"recipe-nutrition"},i.a.createElement("div",{className:"recipe-nutrition__dougnut"},i.a.createElement(Ve.Doughnut,{data:t,width:240,height:240,options:{maintainAspectRatio:!1}})),i.a.createElement("div",{className:"recipe-nutrition__data"},i.a.createElement("div",{className:"data-section"},i.a.createElement("h3",{className:"data-section__title "},"Kalorie"),i.a.createElement("div",{className:"data-section__row"},i.a.createElement("p",{className:"data-section__data"},"Celkem:",i.a.createElement("span",{className:"data-section__value"},a("calories",null,!1)," kcal")))),Le.map((function(e){var t=e.title,n=e.name,r=e.subSection;return i.a.createElement("div",{className:"data-section"},i.a.createElement("h3",{className:"data-section__title"},t),i.a.createElement("div",{className:"data-section__content"},i.a.createElement("p",{className:"data-section__data"},"Celkem:",i.a.createElement("span",{className:"data-section__value"},a(n,"macro")," g")),r.map((function(e){var t=e.title,n=e.name;return i.a.createElement("p",{className:"data-section__data"},t,":",i.a.createElement("span",{className:"data-section__value"},a(n,"macro")," g"))}))))})),i.a.createElement("div",{className:"recipe-nutrition__micro"},i.a.createElement("div",{className:"data-section"},i.a.createElement("h3",{className:"data-section__title"},"Vitam\xedny"),i.a.createElement("div",{className:"data-section__content"},Me.map((function(e){var t=e.title,n=e.name;return i.a.createElement("p",{className:"data-section__data"},t,i.a.createElement("span",{className:"data-section__value"},a(n,"vitamins")," mg"))}))))),i.a.createElement("div",{className:"recipe-nutrition__micro"},i.a.createElement("div",{className:"data-section"},i.a.createElement("h3",{className:"data-section__title"},"Miner\xe1ly"),i.a.createElement("div",{className:"data-section__content"},Ie.map((function(e){var t=e.title,n=e.name;return i.a.createElement("p",{className:"data-section__data"},t,i.a.createElement("span",{className:"data-section__value"},a(n,"minerals")," mg"))})))))))},Je=[{color:"primary",className:"fab",label:"Nutrition"},{color:"primary",className:"fab",label:"Nutrition"},{color:"primary",className:"fab",label:"Nutrition"}];function We(e){var a=e.header,t=Object(n.useState)(0),r=Object(c.a)(t,2),o=r[0],l=r[1],v=Object(n.useState)(!1),p=Object(c.a)(v,2),g=p[0],f=p[1],h=P(),b=h.foodState,y=h.setFoodState,E=function(){var e=window.scrollY,t=a.current.offsetHeight;f(e>=t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",E),function(){window.removeEventListener("scroll",E)}}),[g]),i.a.createElement(m.a,{className:"create-recipe"},i.a.createElement("div",{className:"create-recipe__header"},i.a.createElement(s.a,{position:g?"fixed":"static",color:"default"},i.a.createElement(u.a,{value:o,onChange:function(e,a){return l(a)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example"},i.a.createElement(d.a,Object.assign({label:"J\xeddla"},xe(0))),i.a.createElement(d.a,Object.assign({label:"Recept"},xe(1))),i.a.createElement(d.a,Object.assign({label:"\u017diviny"},xe(2)))))),i.a.createElement("div",{className:"create-recipe__content",onScroll:E},i.a.createElement(Ke,{value:o,index:0},i.a.createElement(Re,null)),i.a.createElement(Ke,{value:o,index:1},i.a.createElement(Te,null)),i.a.createElement(Ke,{value:o,index:2},i.a.createElement(Pe,{foodState:b,setFoodState:y}))),Je.map((function(e,a){return i.a.createElement(x,{key:a,fab:e,value:o,index:a})})))}var Ze=function(){return i.a.createElement(m.a,null,"This is my Recipe Page")},He=function(){return i.a.createElement(m.a,{className:"my-profile"},i.a.createElement("div",{className:"my-profile__head"},i.a.createElement(y,null),i.a.createElement("h1",{className:"my-profile__username"},"Sophia Jia")),i.a.createElement("div",{className:"my-profile__body"},i.a.createElement(ze,null),i.a.createElement(Ee,null)))},Ge=function(){var e=Object(l.f)();return i.a.createElement("div",{className:"intro-page"},i.a.createElement(ue,{url:"./images/animations/carrot-rocket.json"}),i.a.createElement("h2",{className:"intro-page__title"},"V\xedtej Na Cholify!"),i.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/create-recipe")}},"Vytvo\u0159it Recept"))},Ue=t(311),Ye=t(124),$e=t.n(Ye),Qe=function(e){var a=e.passRef;return i.a.createElement(s.a,{ref:a,className:"header",position:"absolute"},i.a.createElement(Ue.a,null,i.a.createElement(k.b,{to:"/my-profile"},i.a.createElement("img",{className:"header__logo",src:$e.a,alt:"Cholify header logo"}))))},Xe=t(312),qe=t(313),ea=t(314),aa=t(315),ta=function(){var e=Object(n.useState)(),a=Object(c.a)(e,2),t=a[0],r=a[1];return i.a.createElement(Xe.a,{className:"bottom-nav",value:t,onChange:function(e,a){r(a)}},i.a.createElement(S,{label:"M\u016fj Profil",value:"my-profile",icon:i.a.createElement(qe.a,null)}),i.a.createElement(S,{label:"P\u0159idat Recept",value:"create-recipe",icon:i.a.createElement(ea.a,null)}),i.a.createElement(S,{label:"Moje Recepty",value:"my-recipes",icon:i.a.createElement(aa.a,null)}))};var na=function(){var e=Object(n.useState)(!0),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useRef)(),m=Object(l.g)();return Object(n.useEffect)((function(){"/"!==m.pathname?r(!1):r(!0)}),[m.pathname]),i.a.createElement("div",{className:"app"},i.a.createElement(Qe,{passRef:o}),i.a.createElement("div",{className:"app__content"},i.a.createElement(l.c,null,i.a.createElement(l.a,{path:"/my-profile",exact:!0},i.a.createElement(He,null)),i.a.createElement(l.a,{path:"/create-recipe"},i.a.createElement(We,{header:o})),i.a.createElement(l.a,{path:"/my-recipes"},i.a.createElement(Ze,null)))),t&&i.a.createElement(Ge,null),i.a.createElement(ta,null))},ia=t(125),ra=t(316),oa=Object(ia.a)({palette:{primary:{main:"#43a047"},secondary:{main:"#ff5722"}}});o.a.render(i.a.createElement(I,null,i.a.createElement(i.a.StrictMode,null,i.a.createElement(ra.a,{theme:oa},i.a.createElement(k.a,null,i.a.createElement(na,null))))),document.getElementById("root"))},99:function(e,a){}},[[141,1,2]]]);
//# sourceMappingURL=main.8978b081.chunk.js.map