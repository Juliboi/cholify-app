/*! For license information please see main.830863d5.chunk.js.LICENSE.txt */
(this["webpackJsonpcholify-app"]=this["webpackJsonpcholify-app"]||[]).push([[0],{105:function(e,a,t){e.exports=t(135)},110:function(e,a,t){},135:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),o=t.n(l),c=(t(110),t(197)),i=t(29),m=t(180),s=t(181),u=t(182),p=t(183),d=t(176),f=t(179),E=t(11),g=t(43),h=function(e){var a=e.label,t=e.value,n=e.icon,l=Object(E.f)();return r.a.createElement(d.a,{component:g.b,className:"bottom-nav__link",to:"/".concat(t),selected:!0},r.a.createElement(f.a,{className:l.pathname==="/".concat(t)?"Mui-selected":void 0,showLabel:l.pathname==="/".concat(t)?"Mui-selected":void 0,label:a,value:t,icon:n}))},b=function(){var e=Object(n.useState)(),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement(m.a,{className:"bottom-nav",value:t,onChange:function(e,a){l(a)}},r.a.createElement(h,{label:"M\u016fj Profil",value:"my-profile",icon:r.a.createElement(s.a,null)}),r.a.createElement(h,{label:"P\u0159idat Recept",value:"create-recipe",icon:r.a.createElement(u.a,null)}),r.a.createElement(h,{label:"Moje Recepty",value:"my-recipes",icon:r.a.createElement(p.a,null)}))},v=t(184),y=t(185),k=t(82),x=t.n(k),N=function(){return r.a.createElement(v.a,{className:"header",position:"absolute"},r.a.createElement(y.a,null,r.a.createElement(g.b,{to:"/my-profile"},r.a.createElement("img",{className:"header__logo",src:x.a,alt:""}))))},j=t(83),C=t.n(j),S=t(212),O=t(205),w=t(206),F=t(207),_=t(86),L=t(187),M=t(188),T=t(189),z=t(190),P=t(137),D=t(191),V=Object(n.createContext)(),B=function(e){var a=e.children,t=Object(n.useState)([]),l=Object(i.a)(t,2),o=l[0],c=l[1];return r.a.createElement(V.Provider,{value:{foodState:o,setFoodState:c}},a)},R=function(){return Object(n.useContext)(V)},I=t(186),W=t(84),J=t.n(W),H=Object(I.a)((function(e){return{flex:{display:"flex",alignItems:"center"},checkMark:{width:"1.3rem",height:"1.3rem",color:"#1976d2",marginLeft:"1rem"}}})),K=function(e){var a=e.title,t=e.imgSrc,n=e.nutrition,l=H(),o=R(),c=o.foodState,i=o.setFoodState,m=function(){return!!c.some((function(e){return e.title===a}))};return r.a.createElement(L.a,{className:"food-card"},r.a.createElement(M.a,{onClick:function(){!m()&&i([].concat(Object(_.a)(c),[{title:a,nutrition:n,imgSrc:t}]))}},r.a.createElement(T.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:t,title:"Contemplative Reptile"}),r.a.createElement(z.a,{className:l.flex},r.a.createElement(P.a,{variant:"h6",component:"h5"},a),m()&&r.a.createElement(J.a,{className:l.checkMark}))),r.a.createElement(D.a,null,r.a.createElement(d.a,{size:"small",color:"primary"},"Info"),r.a.createElement(d.a,{size:"small",color:"primary"},"P\u0159idat")))},A=function(e){var a=e.title,t=e.children;return r.a.createElement("div",{className:"create-recipe__row"},r.a.createElement(P.a,{gutterBottom:!0,variant:"h5",component:"h2"},a),r.a.createElement("div",{className:"create-recipe__slider"},t))},G=[{title:"Maso",foodList:[{title:"Ku\u0159ec\xed Prsa",category:"Maso",nutrition:{calories:165,protein:31,carbohydrate:69,sugar:69,totalFat:3.6,saturatedFat:1,monosaturatedFat:1.2,polysaturatedFat:.7,cholesterol:85,fiber:0,iron:1,sodium:74,calcium:0,phe:1.05},imgSrc:"https://image.freepik.com/free-photo/delicious-roasted-chicken-breast-white-background_1112-6651.jpg"}]},{title:"Zeleniny",foodList:[{title:"Brokolice",category:"Zeleniny",nutrition:{calories:25,protein:"",totalFat:"",saturatedFat:"",monosaturatedFat:"",polysaturatedFat:"",cholesterol:"",sodium:"",iron:"",phe:"",fiber:""},imgSrc:"https://image.freepik.com/free-photo/fresh-broccoli-blocks-cooking-isolated-white-background_33736-2451.jpg"}]},{title:"Ovoce",foodList:[{title:"Jablko",category:"Ovoce",nutrition:{calories:"",protein:"",totalFat:"",saturatedFat:"",monosaturatedFat:"",polysaturatedFat:"",cholesterol:"",sodium:"",iron:"",phe:"",fiber:""},imgSrc:"https://image.freepik.com/free-photo/close-up-view-single-red-apple-isolated-white-background_69593-1575.jpg"}]},{title:"Lu\u0161t\u011bniny",foodList:[{title:"Vla\u0161sk\xe9 O\u0159echy",category:"Lu\u0161t\u011bniny",nutrition:{calories:"",protein:"",totalFat:"",saturatedFat:"",monosaturatedFat:"",polysaturatedFat:"",cholesterol:"",sodium:"",iron:"",phe:"",fiber:""},imgSrc:"https://www.vimcojim.cz/files/lide-ilustrace/2017%20obrazky/7.11.%20vlasky%20orech%20shutterstock_680681407_1000x667.jpg"}]},{title:"Pe\u010divo",foodList:[{title:"Celozrn\xe9 Housky",category:"Pe\u010divo",nutrition:{calories:"",protein:"",totalFat:"",saturatedFat:"",monosaturatedFat:"",polysaturatedFat:"",cholesterol:"",sodium:"",iron:"",phe:"",fiber:""},imgSrc:"https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/717953/717953-1498808178.jpg"}]}],U=function(){return r.a.createElement(r.a.Fragment,null,G.map((function(e){return r.a.createElement(A,{title:e.title},e.foodList.map((function(e,a){return r.a.createElement(K,{key:a,title:e.title,imgSrc:e.imgSrc,nutrition:e.nutrition})})))})))},Z=t(18),$=t(214),q=t(196),Q=t(193),X=t(192),Y=t(215),ee=t(195),ae=t(216),te=t(194),ne=t(211),re=Object(I.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120}}}));function le(){var e=re(),a=r.a.useState(!1),t=Object(i.a)(a,2),n=t[0],l=t[1],o=r.a.useState(""),c=Object(i.a)(o,2),m=c[0],s=c[1],u=function(e){s(Number(e.target.value)||"")},p=function(){l(!1)};return r.a.createElement("div",null,r.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){l(!0)}},"Upravit"),r.a.createElement($.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:n,onClose:p},r.a.createElement(X.a,null,"Upravte Informace"),r.a.createElement(Q.a,null,r.a.createElement("form",{className:e.container},r.a.createElement(te.a,{className:e.formControl},r.a.createElement(Y.a,{htmlFor:"demo-dialog-native"},"Age"),r.a.createElement(ne.a,{native:!0,value:m,onChange:u,input:r.a.createElement(ee.a,{id:"demo-dialog-native"})},r.a.createElement("option",{"aria-label":"None",value:""}),r.a.createElement("option",{value:10},"Ten"),r.a.createElement("option",{value:20},"Twenty"),r.a.createElement("option",{value:30},"Thirty"))),r.a.createElement(te.a,{className:e.formControl},r.a.createElement(Y.a,{id:"demo-dialog-select-label"},"Age"),r.a.createElement(ne.a,{labelId:"demo-dialog-select-label",id:"demo-dialog-select",value:m,onChange:u,input:r.a.createElement(ee.a,null)},r.a.createElement(ae.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(ae.a,{value:10},"Ten"),r.a.createElement(ae.a,{value:20},"Twenty"),r.a.createElement(ae.a,{value:30},"Thirty"))))),r.a.createElement(q.a,null,r.a.createElement(d.a,{onClick:p,color:"primary"},"Cancel"),r.a.createElement(d.a,{onClick:p,color:"primary"},"Ok"))))}var oe=Object(I.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",marginBottom:"1.5rem"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}}}));function ce(e){e.setFoodState;var a=e.title,t=e.category,n=(e.nutrition,e.imgSrc),l=oe();Object(Z.a)();return r.a.createElement(L.a,{className:l.root},r.a.createElement("div",{className:l.details},r.a.createElement(z.a,{className:l.content},r.a.createElement(P.a,{component:"h6",variant:"h6"},a),r.a.createElement(P.a,{variant:"subtitle1",color:"textSecondary"},t)),r.a.createElement("div",{className:l.controls},r.a.createElement(le,null))),r.a.createElement(T.a,{className:l.cover,image:n,title:""}))}var ie=function(){var e=R(),a=e.foodState,t=e.setFoodState;return r.a.createElement(c.a,{className:"my-profile"},a.map((function(e){var a=e.title,n=e.category,l=e.nutrition,o=e.imgSrc;return r.a.createElement(ce,{setFoodState:t,title:a,category:n,nutrition:l,imgSrc:o})})))},me=t(4),se=t(201),ue=t(203),pe=t(198),de=t(200),fe=t(202),Ee=t(199),ge=t(90),he=Object(me.a)((function(e){return{head:{backgroundColor:"#43a047",color:e.palette.common.white},body:{fontSize:14}}}))(pe.a),be=Object(me.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(Ee.a),ve=Object(I.a)({table:{maxWidth:389},tableRow:{display:"flex",flexDirection:"column",width:"100%"},tableColumn:{flex:1},upperCase:{fontWeight:"bold",textTransform:"uppercase"},paddingVertical:{marginTop:"2rem",marginBottom:"2rem"}}),ye=function(){var e=ve(),a=R(),t=a.foodState;a.setFoodState;function n(e,a){return{title:e,myData:a}}var l=[n("Kalorie",function(e){var a=0;if(t.length>0)return t.forEach((function(t){var n=t.nutrition;a+=n[e]})),a}("calories")),n("Proteiny",""),n("Sacharidy",""),n("Cukry",""),n("Celkov\xe9 Tuky",""),n("Nasycen\xe9 Mastn\xe9 Kyseliny",""),n("Trans Mastn\xe9 Kyseliny",""),n("Polynenasycen\xe9",""),n("Cholesterol",""),n("Vl\xe1knina",""),n("\u017delezo",""),n("S\u016fl",""),n("V\xe1pn\xedk",""),n("PHE","")];return r.a.createElement(de.a,{className:e.paddingVertical,component:ge.a},r.a.createElement(se.a,{className:e.table,"aria-label":"customized table"},r.a.createElement(fe.a,null,r.a.createElement(Ee.a,null,r.a.createElement(he,{className:e.upperCase,align:"left"},"Moje \u017diviny"),r.a.createElement(he,{align:"right"}),r.a.createElement(he,{align:"right"}))),r.a.createElement(ue.a,null,l.map((function(e){return r.a.createElement(be,{key:e.name},r.a.createElement(he,{component:"th",scope:"row"},e.title),r.a.createElement(he,{align:"right"}),r.a.createElement(he,{align:"right"},e.myData))})))))},ke=function(){return r.a.createElement(c.a,{className:"my-profile"},r.a.createElement(ye,null))},xe=t(87),Ne=t(210);function je(e){var a=e.children,t=e.value,n=e.index,l=Object(xe.a)(e,["children","value","index"]);return r.a.createElement(P.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"action-tabpanel-".concat(n),"aria-labelledby":"action-tab-".concat(n)},l),t===n&&r.a.createElement(Ne.a,{p:3},a))}var Ce=t(66),Se=t(204);function Oe(e){return{id:"action-tab-".concat(e),"aria-controls":"action-tabpanel-".concat(e)}}var we=Object(I.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:500,position:"relative",minHeight:200},fab:{position:"fixed",bottom:e.spacing(10),right:e.spacing(4)},fabGreen:{color:e.palette.common.white,backgroundColor:Ce.a[500],"&:hover":{backgroundColor:Ce.a[600]}}}}));function Fe(){var e=we(),a=Object(Z.a)(),t=r.a.useState(0),l=Object(i.a)(t,2),o=l[0],m=l[1],s={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},u=[{color:"primary",className:e.fab,icon:r.a.createElement(Se.a,null),label:"Nutrition"},{color:"primary",className:e.fab,icon:r.a.createElement(Se.a,null),label:"Nutrition"},{color:"primary",className:e.fab,icon:r.a.createElement(Se.a,null),label:"Nutrition"}],p=R(),d=p.foodState,f=p.setFoodState;return Object(n.useEffect)((function(){console.log(d)}),[d]),r.a.createElement(c.a,{className:"create-recipe"},r.a.createElement(v.a,{position:"static",color:"default"},r.a.createElement(S.a,{value:o,onChange:function(e,a){m(a)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example"},r.a.createElement(O.a,Object.assign({label:"J\xeddla"},Oe(0))),r.a.createElement(O.a,Object.assign({label:"Menu"},Oe(1))),r.a.createElement(O.a,Object.assign({label:"\u017diviny"},Oe(2))))),r.a.createElement(C.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:o,onChangeIndex:function(e){m(e)}},r.a.createElement(je,{value:o,index:0},r.a.createElement(U,null)),r.a.createElement(je,{value:o,index:1},r.a.createElement(ie,null)),r.a.createElement(je,{value:o,index:2},r.a.createElement(ke,{foodState:d,setFoodState:f}))),u.map((function(e,a){return r.a.createElement(w.a,{key:a,in:o===a,timeout:s,style:{transitionDelay:"".concat(o===a?s.exit:0,"ms")},unmountOnExit:!0},r.a.createElement(F.a,{"aria-label":e.label,className:e.className,color:e.color},e.icon))})))}var _e=function(){return r.a.createElement(c.a,null,"This is my Recipe Page")},Le=t(208),Me=t(217),Te=Object(me.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",width:"11px",height:"11px",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),borderRadius:"50%","&::after":{position:"absolute",top:"-1px",left:"-1px",width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(Le.a),ze=Object(I.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},large:{width:"55px",height:"55px"}}}));function Pe(){var e=ze();return r.a.createElement("div",{className:e.root},r.a.createElement(Te,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},r.a.createElement(Me.a,{alt:"Sophia Jia",src:"/images/avatar/sofia.jpg",className:e.large})))}var De=Object(me.a)((function(e){return{head:{backgroundColor:"#43a047",color:e.palette.common.white},body:{fontSize:14}}}))(pe.a),Ve=Object(me.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(Ee.a);function Be(e,a){return{title:e,myData:a}}var Re=[Be("V\u011bk",61),Be("Pohlav\xed","\u017dena"),Be("V\xfd\u0161ka",162),Be("V\xe1ha",56),Be("HC",6.46),Be("LDL",4.56),Be("HDL",1.28),Be("TG",1.37),Be("Aktivita","?")],Ie=Object(I.a)({table:{maxWidth:389},tableRow:{display:"flex",flexDirection:"column",width:"100%"},tableColumn:{flex:1},upperCase:{fontWeight:"bold",textTransform:"uppercase"},paddingVertical:{marginTop:"2rem",marginBottom:"2rem"}}),We=function(){var e=Ie();return r.a.createElement(de.a,{className:e.paddingVertical,component:ge.a},r.a.createElement(se.a,{className:e.table,"aria-label":"customized table"},r.a.createElement(fe.a,null,r.a.createElement(Ee.a,null,r.a.createElement(De,{className:e.upperCase,align:"left"},"Moje Biometrika"),r.a.createElement(De,{align:"right"}),r.a.createElement(De,{align:"right"}))),r.a.createElement(ue.a,null,Re.map((function(e){return r.a.createElement(Ve,{key:e.name},r.a.createElement(De,{component:"th",scope:"row"},e.title),r.a.createElement(De,{align:"right"},e.myData),r.a.createElement(De,{align:"right"}))})))))},Je=function(){return r.a.createElement(c.a,{className:"my-profile"},r.a.createElement("div",{className:"my-profile__head"},r.a.createElement(Pe,null),r.a.createElement("h2",null,"Sophia Jia")),r.a.createElement("div",{className:"my-profile__body"},r.a.createElement(We,null),r.a.createElement(le,null)))};var He=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(g.a,null,r.a.createElement(N,null),r.a.createElement(c.a,{className:"app__content"},r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/my-profile",exact:!0},r.a.createElement(Je,null)),r.a.createElement(E.a,{path:"/create-recipe"},r.a.createElement(Fe,null)),r.a.createElement(E.a,{path:"/my-recipes"},r.a.createElement(_e,null)))),r.a.createElement(b,null)))},Ke=t(85),Ae=t(209),Ge=Object(Ke.a)({palette:{primary:{main:"#43a047"},secondary:{main:"#00e676"}}});o.a.render(r.a.createElement(B,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ae.a,{theme:Ge},r.a.createElement(He,null)))),document.getElementById("root"))},82:function(e,a,t){e.exports=t.p+"static/media/cholify-inline-logo-dark.ba622f97.svg"}},[[105,1,2]]]);
//# sourceMappingURL=main.830863d5.chunk.js.map