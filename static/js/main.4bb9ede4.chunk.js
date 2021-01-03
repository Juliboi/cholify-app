/*! For license information please see main.4bb9ede4.chunk.js.LICENSE.txt */
(this["webpackJsonpcholify-app"]=this["webpackJsonpcholify-app"]||[]).push([[0],{118:function(e,t,a){e.exports=a(148)},123:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=a(14),i=(a(123),a(203)),m=a(180),u=a(184),s=a(185),d=a(186),p=a(187),f=a(183),g=a(11),E=a(40),h=function(e){var t=e.label,a=e.value,n=e.icon,o=Object(g.g)();return r.a.createElement(m.a,{component:E.b,className:"bottom-nav__link",to:"/".concat(a),selected:!0},r.a.createElement(f.a,{className:o.pathname==="/".concat(a)?"Mui-selected":void 0,showLabel:o.pathname==="/".concat(a)?"Mui-selected":void 0,label:t,value:a,icon:n}))},b=function(){var e=Object(n.useState)(),t=Object(c.a)(e,2),a=t[0],o=t[1];return r.a.createElement(u.a,{className:"bottom-nav",value:a,onChange:function(e,t){o(t)}},r.a.createElement(h,{label:"M\u016fj Profil",value:"my-profile",icon:r.a.createElement(s.a,null)}),r.a.createElement(h,{label:"P\u0159idat Recept",value:"create-recipe",icon:r.a.createElement(d.a,null)}),r.a.createElement(h,{label:"Moje Recepty",value:"my-recipes",icon:r.a.createElement(p.a,null)}))},v=a(188),y=a(189),k=a(86),j=a.n(k),x=function(){return r.a.createElement(v.a,{className:"header",position:"absolute"},r.a.createElement(y.a,null,r.a.createElement(E.b,{to:"/my-profile"},r.a.createElement("img",{className:"header__logo",src:j.a,alt:""}))))},O=a(87),S=a.n(O),C=function(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){S.a.loadAnimation({container:e.current,renderer:"svg",loop:!0,autoplay:!0,path:"./images/animations/moving-food.json"})}),[]),r.a.createElement("div",{ref:e,className:"moving-food"})},N=a(88),F=a.n(N),w=a(218),_=a(211),T=a(212),P=a(213),L=a(91),M=a(191),V=a(192),z=a(193),K=a(194),D=a(96),I=a(195),B=Object(n.createContext)(),R=function(e){var t=e.children,a=Object(n.useState)([]),o=Object(c.a)(a,2),l=o[0],i=o[1];return r.a.createElement(B.Provider,{value:{foodState:l,setFoodState:i}},t)},W=function(){return Object(n.useContext)(B)},G=a(190),J=a(89),A=a.n(J),H=Object(G.a)((function(e){return{flex:{display:"flex",alignItems:"center"},checkMark:{width:"1.3rem",height:"1.3rem",color:"#1976d2",marginLeft:"1rem"}}})),U=function(e){var t=e.title,a=e.imgSrc,o=e.nutrition,l=H(),i=W(),u=i.foodState,s=i.setFoodState,d=Object(n.useState)(!1),p=Object(c.a)(d,2),f=p[0],g=p[1];Object(n.useEffect)((function(){u.some((function(e){return e.title===t}))?(console.log("no"),g(!0)):(g(!1),console.log("yes")),console.log(u)}),[]);var E=function(){if(f){var e=u.findIndex((function(e){return e.title===t}));u.splice(e,1),g(!1)}else g(!0),s([].concat(Object(L.a)(u),[{title:t,nutrition:o,imgSrc:a,grammage:{value:"",unit:"",default:""}}])),console.log("refresh",u)};return r.a.createElement(M.a,{className:"food-card"},r.a.createElement(V.a,{onClick:function(){return E()}},r.a.createElement(z.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:a,title:"Contemplative Reptile"}),r.a.createElement(K.a,{className:l.flex},r.a.createElement(D.a,{variant:"h6",component:"h5"},t),f&&r.a.createElement(A.a,{className:l.checkMark}))),r.a.createElement(I.a,null,r.a.createElement(m.a,{size:"small",color:"primary"},"Info"),r.a.createElement(m.a,{size:"small",color:"primary",onClick:function(){return E()}},f?"Odebrat":"P\u0159idat")))},Z=function(e){var t=e.title,a=e.children;return r.a.createElement("div",{className:"create-recipe__row"},r.a.createElement(D.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),r.a.createElement("div",{className:"create-recipe__slider"},a))},$=[{title:"Maso",foodList:[{title:"Ku\u0159ec\xed Prsa",category:"Maso",nutrition:{calories:165,protein:31,carbohydrate:0,sugar:0,totalFat:3.6,saturatedFat:1,monosaturatedFat:1.2,polysaturatedFat:.7,cholesterol:85,fiber:0,iron:1,sodium:74,calcium:0,phe:1.05},imgSrc:"https://image.freepik.com/free-photo/delicious-roasted-chicken-breast-white-background_1112-6651.jpg"}]},{title:"Zeleniny",foodList:[{title:"Brokolice",category:"Zeleniny",nutrition:{calories:38,protein:3,carbohydrate:6,sugar:2,totalFat:.2,saturatedFat:0,monosaturatedFat:0,polysaturatedFat:0,cholesterol:0,fiber:3,iron:.7,sodium:0,calcium:105,phe:165},imgSrc:"https://image.freepik.com/free-photo/fresh-broccoli-blocks-cooking-isolated-white-background_33736-2451.jpg"}]},{title:"Ovoce",foodList:[{title:"Jablko",category:"Ovoce",nutrition:{calories:52,protein:.3,carbohydrate:14,sugar:10,totalFat:.2,saturatedFat:0,monosaturatedFat:0,polysaturatedFat:.1,cholesterol:0,fiber:2.4,iron:.19,sodium:0,calcium:6,phe:.06},imgSrc:"https://image.freepik.com/free-photo/close-up-view-single-red-apple-isolated-white-background_69593-1575.jpg"}]},{title:"Lu\u0161t\u011bniny",foodList:[{title:"Vla\u0161sk\xe9 O\u0159echy",category:"Lu\u0161t\u011bniny",nutrition:{calories:691,protein:16,carbohydrate:18,sugar:4,totalFat:63,saturatedFat:7,monosaturatedFat:12,polysaturatedFat:45,cholesterol:0,fiber:6,iron:2.9,sodium:0,calcium:96,phe:788},imgSrc:"https://www.vimcojim.cz/files/lide-ilustrace/2017%20obrazky/7.11.%20vlasky%20orech%20shutterstock_680681407_1000x667.jpg"}]},{title:"Pe\u010divo",foodList:[{title:"Celozrn\xe9 Housky",category:"Pe\u010divo",nutrition:{calories:246,protein:7,carbohydrate:50,sugar:2,totalFat:1,saturatedFat:0,monosaturatedFat:0,polysaturatedFat:0,cholesterol:0,fiber:5,iron:0,sodium:0,calcium:0,phe:350},imgSrc:"https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/717953/717953-1498808178.jpg"}]}],q=function(){return r.a.createElement(r.a.Fragment,null,$.map((function(e){return r.a.createElement(Z,{title:e.title},e.foodList.map((function(e,t){return r.a.createElement(U,{key:t,title:e.title,imgSrc:e.imgSrc,nutrition:e.nutrition})})))})))},Q=a(19),X=a(220),Y=a(202),ee=a(197),te=a(196),ae=a(221),ne=a(199),re=a(198),oe=a(223),le=a(217),ce=a(201),ie=a(3),me=Object(G.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},marginTop:{marginTop:"2rem"}}}));function ue(e){var t=e.title,a=me(),o=Object(n.useState)(!1),l=Object(c.a)(o,2),i=l[0],u=l[1],s=Object(n.useState)(""),d=Object(c.a)(s,2),p=d[0],f=d[1],g=Object(n.useState)("Gramy"),E=Object(c.a)(g,2),h=E[0],b=E[1],v=W(),y=v.foodState,k=(v.setFoodSate,function(){var e;return y.find((function(a){a.title===t&&(e=a.grammage.value)})),e}),j=""===p?k():p,x=function(){u(!1),y.forEach((function(e){e.title===t&&(e.grammage.value=Number(j),e.grammage.unit=O())})),console.log(y)},O=function(){return"Kilogramy"===h?"kg":"Gramy"===h?"g":"Kus"===h?"ks":""};return Object(n.useEffect)((function(){console.log("grammage",p),console.log("foodState",y),console.log("Grammage Value",j),console.log("function",k())}),[i,p]),r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){u(!0)}},"Upravit"),r.a.createElement(X.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:i,onClose:x},r.a.createElement(te.a,null,t),r.a.createElement(ee.a,null,r.a.createElement("form",{className:a.container},r.a.createElement(re.a,{className:a.formControl},r.a.createElement(ae.a,{htmlFor:"demo-dialog-native"},"Jednotka"),r.a.createElement(le.a,{native:!0,value:h,onChange:function(e){b(e.target.value||""),console.log("target value",e.target.value)},input:r.a.createElement(ne.a,{id:"demo-dialog-native"})},r.a.createElement("option",{value:"Kilogramy"},"Kilogramy"),r.a.createElement("option",{value:"Gramy"},"Gramy"),r.a.createElement("option",{value:"Kus"},"Kus"))),r.a.createElement(oe.a,{onClick:function(){return e=document.getElementById("outlined-start-adornment"),t=function(e){return/^-?\d*$/.test(e)},console.log(e),void["input","keydown","keyup","mousedown","mouseup","select","contextmenu","drop"].forEach((function(a){e.addEventListener(a,(function(){t(this.value)?(this.oldValue=this.value,this.oldSelectionStart=this.selectionStart,this.oldSelectionEnd=this.selectionEnd):this.hasOwnProperty("oldValue")?(this.value=this.oldValue,this.setSelectionRange(this.oldSelectionStart,this.oldSelectionEnd)):this.value=""}))}));var e,t},onInput:function(e){f(e.target.value)},label:"With normal TextField",id:"outlined-start-adornment",className:Object(ie.a)(a.marginTop,a.textField),InputProps:{startAdornment:r.a.createElement(ce.a,{position:"start"},O())},value:j,variant:"outlined"}))),r.a.createElement(Y.a,null,r.a.createElement(m.a,{onClick:x,color:"primary"},"Cancel"),r.a.createElement(m.a,{onClick:x,color:"primary"},"Ok"))))}var se=Object(G.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",marginBottom:"1.5rem"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}}}));function de(e){e.setFoodState;var t=e.title,a=e.category,n=(e.nutrition,e.imgSrc),o=se();Object(Q.a)();return r.a.createElement(M.a,{className:o.root},r.a.createElement("div",{className:o.details},r.a.createElement(K.a,{className:o.content},r.a.createElement(D.a,{component:"h6",variant:"h6"},t),r.a.createElement(D.a,{variant:"subtitle1",color:"textSecondary"},a)),r.a.createElement("div",{className:o.controls},r.a.createElement(ue,{title:t}))),r.a.createElement(z.a,{className:o.cover,image:n,title:""}))}var pe=function(){var e=W(),t=e.foodState,a=e.setFoodState;return r.a.createElement(i.a,{className:"my-profile"},t.map((function(e){var t=e.title,n=e.category,o=e.nutrition,l=e.imgSrc;return r.a.createElement(de,{setFoodState:a,title:t,category:n,nutrition:o,imgSrc:l})})),r.a.createElement(de,{setFoodState:a,title:"Ku\u0159ec\xed Prsa",category:"Maso",nutrition:{calories:165,protein:31,carbohydrate:0,sugar:0,totalFat:3.6,saturatedFat:1,monosaturatedFat:1.2,polysaturatedFat:.7,cholesterol:85,fiber:0,iron:1,sodium:74,calcium:0,phe:1.05},imgSrc:"https://image.freepik.com/free-photo/delicious-roasted-chicken-breast-white-background_1112-6651.jpg"}))},fe=a(4),ge=a(207),Ee=a(209),he=a(204),be=a(206),ve=a(208),ye=a(205),ke=a(95),je=Object(fe.a)((function(e){return{head:{backgroundColor:"#43a047",color:e.palette.common.white},body:{fontSize:14}}}))(he.a),xe=Object(fe.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(ye.a),Oe=Object(G.a)({table:{maxWidth:389},tableRow:{display:"flex",flexDirection:"column",width:"100%"},tableColumn:{flex:1},upperCase:{fontWeight:"bold",textTransform:"uppercase"},paddingVertical:{marginTop:"2rem",marginBottom:"2rem"}}),Se=function(){var e=Oe(),t=W(),a=t.foodState;t.setFoodState;function n(e,t){return{title:e,myData:t}}var o=function(e){var t=0;if(a.length>0)return a.forEach((function(a){var n=a.nutrition;t+=n[e]})),t.toFixed(2)},l=[n("Kalorie",o("calories")),n("Proteiny",o("protein")),n("Sacharidy",o("carbohydrate")),n("Cukry",o("sugar")),n("Celkov\xe9 Tuky",o("totalFat")),n("Nasycen\xe9 Mastn\xe9 Kyseliny",o("saturatedFat")),n("Trans Mastn\xe9 Kyseliny",o("monosaturatedFat")),n("Polynenasycen\xe9",o("polysaturatedFat")),n("Cholesterol",o("cholesterol")),n("Vl\xe1knina",o("fiber")),n("\u017delezo",o("iron")),n("S\u016fl",o("sodium")),n("V\xe1pn\xedk",o("calcium")),n("PHE",o("phe"))];return r.a.createElement(be.a,{className:e.paddingVertical,component:ke.a},r.a.createElement(ge.a,{className:e.table,"aria-label":"customized table"},r.a.createElement(ve.a,null,r.a.createElement(ye.a,null,r.a.createElement(je,{className:e.upperCase,align:"left"},"Moje \u017diviny"),r.a.createElement(je,{align:"right"}),r.a.createElement(je,{align:"right"}))),r.a.createElement(Ee.a,null,l.map((function(e){return r.a.createElement(xe,{key:e.name},r.a.createElement(je,{component:"th",scope:"row"},e.title),r.a.createElement(je,{align:"right"}),r.a.createElement(je,{align:"right"},e.myData))})))))},Ce=function(){return r.a.createElement(i.a,{className:"my-profile"},r.a.createElement(Se,null))},Ne=a(92),Fe=a(216);function we(e){var t=e.children,a=e.value,n=e.index,o=Object(Ne.a)(e,["children","value","index"]);return r.a.createElement(D.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"action-tabpanel-".concat(n),"aria-labelledby":"action-tab-".concat(n)},o),a===n&&r.a.createElement(Fe.a,{p:3},t))}var _e=a(67),Te=a(210);function Pe(e){return{id:"action-tab-".concat(e),"aria-controls":"action-tabpanel-".concat(e)}}var Le=Object(G.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:500,position:"relative",minHeight:200},fab:{position:"fixed",bottom:e.spacing(13),right:e.spacing(4)},fabGreen:{color:e.palette.common.white,backgroundColor:_e.a[500],"&:hover":{backgroundColor:_e.a[600]}}}}));function Me(){var e=Le(),t=Object(Q.a)(),a=r.a.useState(0),o=Object(c.a)(a,2),l=o[0],m=o[1],u={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},s=[{color:"primary",className:e.fab,icon:r.a.createElement(Te.a,null),label:"Nutrition"},{color:"primary",className:e.fab,icon:r.a.createElement(Te.a,null),label:"Nutrition"},{color:"primary",className:e.fab,icon:r.a.createElement(Te.a,null),label:"Nutrition"}],d=W(),p=d.foodState,f=d.setFoodState;return Object(n.useEffect)((function(){console.log(p)}),[p]),r.a.createElement(i.a,{className:"create-recipe"},r.a.createElement(v.a,{position:"static",color:"default"},r.a.createElement(w.a,{value:l,onChange:function(e,t){m(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example"},r.a.createElement(_.a,Object.assign({label:"J\xeddla"},Pe(0))),r.a.createElement(_.a,Object.assign({label:"Menu"},Pe(1))),r.a.createElement(_.a,Object.assign({label:"\u017diviny"},Pe(2))))),r.a.createElement(F.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:l,onChangeIndex:function(e){m(e)}},r.a.createElement(we,{value:l,index:0},r.a.createElement(q,null)),r.a.createElement(we,{value:l,index:1},r.a.createElement(pe,null)),r.a.createElement(we,{value:l,index:2},r.a.createElement(Ce,{foodState:p,setFoodState:f}))),s.map((function(e,t){return r.a.createElement(T.a,{key:t,in:l===t,timeout:u,style:{transitionDelay:"".concat(l===t?u.exit:0,"ms")},unmountOnExit:!0},r.a.createElement(P.a,{"aria-label":e.label,className:e.className,color:e.color},e.icon))})))}var Ve=function(){return r.a.createElement(i.a,null,"This is my Recipe Page")},ze=a(214),Ke=a(224),De=Object(fe.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",width:"11px",height:"11px",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),borderRadius:"50%","&::after":{position:"absolute",top:"-1px",left:"-1px",width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(ze.a),Ie=Object(G.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},large:{width:"55px",height:"55px"}}}));function Be(){var e=Ie();return r.a.createElement("div",{className:e.root},r.a.createElement(De,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},r.a.createElement(Ke.a,{alt:"Sophia Jia",src:"/images/avatar/sofia.jpg",className:e.large})))}var Re=a(225),We=Object(G.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120}}}));function Ge(){var e=We(),t=r.a.useState(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],l=r.a.useState(""),i=Object(c.a)(l,2),u=i[0],s=i[1],d=function(e){s(Number(e.target.value)||"")},p=function(){o(!1)};return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){o(!0)}},"Upravit"),r.a.createElement(X.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:n,onClose:p},r.a.createElement(te.a,null,"Upravte Informace"),r.a.createElement(ee.a,null,r.a.createElement("form",{className:e.container},r.a.createElement(re.a,{className:e.formControl},r.a.createElement(ae.a,{htmlFor:"demo-dialog-native"},"Age"),r.a.createElement(le.a,{native:!0,value:u,onChange:d,input:r.a.createElement(ne.a,{id:"demo-dialog-native"})},r.a.createElement("option",{"aria-label":"None",value:""}),r.a.createElement("option",{value:10},"Ten"),r.a.createElement("option",{value:20},"Twenty"),r.a.createElement("option",{value:30},"Thirty"))),r.a.createElement(re.a,{className:e.formControl},r.a.createElement(ae.a,{id:"demo-dialog-select-label"},"Age"),r.a.createElement(le.a,{labelId:"demo-dialog-select-label",id:"demo-dialog-select",value:u,onChange:d,input:r.a.createElement(ne.a,null)},r.a.createElement(Re.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(Re.a,{value:10},"Ten"),r.a.createElement(Re.a,{value:20},"Twenty"),r.a.createElement(Re.a,{value:30},"Thirty"))))),r.a.createElement(Y.a,null,r.a.createElement(m.a,{onClick:p,color:"primary"},"Cancel"),r.a.createElement(m.a,{onClick:p,color:"primary"},"Ok"))))}var Je=Object(fe.a)((function(e){return{head:{backgroundColor:"#43a047",color:e.palette.common.white},body:{fontSize:14}}}))(he.a),Ae=Object(fe.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(ye.a);function He(e,t){return{title:e,myData:t}}var Ue=[He("V\u011bk",61),He("Pohlav\xed","\u017dena"),He("V\xfd\u0161ka",162),He("V\xe1ha",56),He("HC",6.46),He("LDL",4.56),He("HDL",1.28),He("TG",1.37),He("Aktivita","?")],Ze=Object(G.a)({table:{maxWidth:389},tableRow:{display:"flex",flexDirection:"column",width:"100%"},tableColumn:{flex:1},upperCase:{fontWeight:"bold",textTransform:"uppercase"},paddingVertical:{marginTop:"2rem",marginBottom:"2rem"}}),$e=function(){var e=Ze();return r.a.createElement(be.a,{className:e.paddingVertical,component:ke.a},r.a.createElement(ge.a,{className:e.table,"aria-label":"customized table"},r.a.createElement(ve.a,null,r.a.createElement(ye.a,null,r.a.createElement(Je,{className:e.upperCase,align:"left"},"Moje Biometrika"),r.a.createElement(Je,{align:"right"}),r.a.createElement(Je,{align:"right"}))),r.a.createElement(Ee.a,null,Ue.map((function(e){return r.a.createElement(Ae,{key:e.name},r.a.createElement(Je,{component:"th",scope:"row"},e.title),r.a.createElement(Je,{align:"right"},e.myData),r.a.createElement(Je,{align:"right"}))})))))},qe=function(){return r.a.createElement(i.a,{className:"my-profile"},r.a.createElement("div",{className:"my-profile__head"},r.a.createElement(Be,null),r.a.createElement("h2",null,"Sophia Jia")),r.a.createElement("div",{className:"my-profile__body"},r.a.createElement($e,null),r.a.createElement(Ge,null)))};var Qe=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(g.g)(),u=Object(g.f)();return Object(n.useEffect)((function(){"/"!==l.pathname?o(!1):o(!0)}),[l.pathname]),r.a.createElement("div",{className:"app"},r.a.createElement(x,null),r.a.createElement(i.a,{className:"app__content"},r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/my-profile",exact:!0},r.a.createElement(qe,null)),r.a.createElement(g.a,{path:"/create-recipe"},r.a.createElement(Me,null)),r.a.createElement(g.a,{path:"/my-recipes"},r.a.createElement(Ve,null)))),a&&r.a.createElement("div",{className:"intro-page"},r.a.createElement(C,null),r.a.createElement("h2",{className:"intro-page__title"},"V\xedtej Na Cholify!"),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return u.push("/create-recipe")}},"Poj\u010fme na to")),r.a.createElement(b,null))},Xe=a(90),Ye=a(215),et=Object(Xe.a)({palette:{primary:{main:"#43a047"},secondary:{main:"#00e676"}}});l.a.render(r.a.createElement(R,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ye.a,{theme:et},r.a.createElement(E.a,null,r.a.createElement(Qe,null))))),document.getElementById("root"))},86:function(e,t,a){e.exports=a.p+"static/media/cholify-inline-logo-dark.ba622f97.svg"}},[[118,1,2]]]);
//# sourceMappingURL=main.4bb9ede4.chunk.js.map