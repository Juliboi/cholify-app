(this["webpackJsonpcholify-app"]=this["webpackJsonpcholify-app"]||[]).push([[0],{122:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),o=(t(99),t(178)),i=t(28),m=t(165),s=t(166),u=t(167),p=t(168),d=t(161),E=t(164),b=t(11),f=t(41),g=function(e){var a=e.label,t=e.value,n=e.icon,r=Object(b.f)();return l.a.createElement(d.a,{component:f.b,className:"bottom-nav__link",to:"/".concat(t),selected:!0},l.a.createElement(E.a,{className:r.pathname==="/".concat(t)?"Mui-selected":void 0,showLabel:r.pathname==="/".concat(t)?"Mui-selected":void 0,label:a,value:t,icon:n}))},h=function(){var e=Object(n.useState)(),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement(m.a,{className:"bottom-nav",value:t,onChange:function(e,a){r(a)}},l.a.createElement(g,{label:"M\u016fj Profil",value:"my-profile",icon:l.a.createElement(s.a,null)}),l.a.createElement(g,{label:"P\u0159idat Recept",value:"create-recipe",icon:l.a.createElement(u.a,null)}),l.a.createElement(g,{label:"Moje Recepty",value:"my-recipes",icon:l.a.createElement(p.a,null)}))},v=t(169),y=t(170),k=t(78),x=t.n(k),j=function(){return l.a.createElement(v.a,{className:"header",position:"absolute"},l.a.createElement(y.a,null,l.a.createElement(f.b,{to:"/my-profile"},l.a.createElement("img",{className:"header__logo",src:x.a,alt:""}))))},N=t(79),O=t.n(N),C=t(191),w=t(179),S=t(180),_=t(181),T=t(81),F=t(171),P=t(172),z=t(173),L=t(174),R=t(124),J=t(175),M=Object(n.createContext)(),B=function(e){var a=e.children,t=Object(n.useState)([]),r=Object(i.a)(t,2),c=r[0],o=r[1];return l.a.createElement(M.Provider,{value:{foodState:c,setFoodState:o}},a)},I=function(){return Object(n.useContext)(M)},W=function(e){var a=e.title,t=e.imgSrc,n=I(),r=n.foodState,c=n.setFoodState;return l.a.createElement(F.a,{className:"food-card"},l.a.createElement(P.a,{onClick:function(){c([].concat(Object(T.a)(r),[{food:a,imgSrc:t}]))}},l.a.createElement(z.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:t,title:"Contemplative Reptile"}),l.a.createElement(L.a,null,l.a.createElement(R.a,{gutterBottom:!0,variant:"h6",component:"h5"},a))),l.a.createElement(J.a,null,l.a.createElement(d.a,{size:"small",color:"primary"},"Info"),l.a.createElement(d.a,{size:"small",color:"primary"},"P\u0159idat")))},A=function(e){var a=e.title,t=e.children;return l.a.createElement("div",{className:"create-recipe__row"},l.a.createElement(R.a,{gutterBottom:!0,variant:"h5",component:"h2"},a),l.a.createElement("div",{className:"create-recipe__slider"},t))},D=[{title:"Maso",foodList:[{title:"Ku\u0159ec\xed Prsa",nutrition:{calories:165,protein:31,totalFat:3.6,saturatedFat:1,monosaturatedFat:1.2,polysaturatedFat:.7,cholesterol:85,sodium:74,iron:1,phe:1.05,fiber:0},imgSrc:"https://image.freepik.com/free-photo/delicious-roasted-chicken-breast-white-background_1112-6651.jpg"}]},{title:"Zeleniny",foodList:[{title:"Brokolice",imgSrc:"https://image.freepik.com/free-photo/fresh-broccoli-blocks-cooking-isolated-white-background_33736-2451.jpg"}]},{title:"Ovoce",foodList:[{title:"Jablko",imgSrc:"https://image.freepik.com/free-photo/close-up-view-single-red-apple-isolated-white-background_69593-1575.jpg"}]},{title:"Lu\u0161t\u011bniny",foodList:[{title:"Vla\u0161sk\xe9 O\u0159echy",imgSrc:"https://www.vimcojim.cz/files/lide-ilustrace/2017%20obrazky/7.11.%20vlasky%20orech%20shutterstock_680681407_1000x667.jpg"}]},{title:"Pe\u010divo",foodList:[{title:"Celozrn\xe9 Housky",imgSrc:"https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/717953/717953-1498808178.jpg"}]}],H=function(){return l.a.createElement(l.a.Fragment,null,D.map((function(e){return l.a.createElement(A,{title:e.title},e.foodList.map((function(e,a){return l.a.createElement(W,{key:a,title:e.title,imgSrc:e.imgSrc})})))})))},K=t(82),U=t(189);function G(e){var a=e.children,t=e.value,n=e.index,r=Object(K.a)(e,["children","value","index"]);return l.a.createElement(R.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"action-tabpanel-".concat(n),"aria-labelledby":"action-tab-".concat(n)},r),t===n&&l.a.createElement(U.a,{p:3},a))}var V=t(176),Z=t(17),$=t(61),q=t(177);function Q(e){return{id:"action-tab-".concat(e),"aria-controls":"action-tabpanel-".concat(e)}}var X=Object(V.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:500,position:"relative",minHeight:200},fab:{position:"fixed",bottom:e.spacing(10),right:e.spacing(4)},fabGreen:{color:e.palette.common.white,backgroundColor:$.a[500],"&:hover":{backgroundColor:$.a[600]}}}}));function Y(){var e=X(),a=Object(Z.a)(),t=l.a.useState(0),r=Object(i.a)(t,2),c=r[0],m=r[1],s={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},u=[{color:"primary",className:e.fab,icon:l.a.createElement(q.a,null),label:"Nutrition"},{color:"primary",className:e.fab,icon:l.a.createElement(q.a,null),label:"Nutrition"},{color:"primary",className:e.fab,icon:l.a.createElement(q.a,null),label:"Nutrition"}],p=I(),d=p.foodState;p.setFoodState;return Object(n.useEffect)((function(){console.log(d)}),[d]),l.a.createElement(o.a,{className:"create-recipe"},l.a.createElement(v.a,{position:"static",color:"default"},l.a.createElement(C.a,{value:c,onChange:function(e,a){m(a)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example"},l.a.createElement(w.a,Object.assign({label:"J\xeddla"},Q(0))),l.a.createElement(w.a,Object.assign({label:"Nutrice"},Q(1))),l.a.createElement(w.a,Object.assign({label:"Tabulky"},Q(2))))),l.a.createElement(O.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:c,onChangeIndex:function(e){m(e)}},l.a.createElement(G,{value:c,index:0},l.a.createElement(H,null)),l.a.createElement(G,{value:c,index:1},"Page Two"),l.a.createElement(G,{value:c,index:2},"Page Three")),u.map((function(e,a){return l.a.createElement(S.a,{key:a,in:c===a,timeout:s,style:{transitionDelay:"".concat(c===a?s.exit:0,"ms")},unmountOnExit:!0},l.a.createElement(_.a,{"aria-label":e.label,className:e.className,color:e.color},e.icon))})))}var ee=function(){return l.a.createElement(o.a,null,"This is my Recipe Page")},ae=t(182),te=t(194),ne=t(4),le=Object(ne.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",width:"11px",height:"11px",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),borderRadius:"50%","&::after":{position:"absolute",top:"-1px",left:"-1px",width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(ae.a),re=Object(V.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},large:{width:"55px",height:"55px"}}}));function ce(){var e=re();return l.a.createElement("div",{className:e.root},l.a.createElement(le,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},l.a.createElement(te.a,{alt:"Sophia Jia",src:"/static/images/avatar/1.jpg",className:e.large})))}var oe=t(193),ie=t(187),me=t(184),se=t(183),ue=t(195),pe=t(186),de=t(196),Ee=t(185),be=t(190),fe=Object(V.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120}}}));function ge(){var e=fe(),a=l.a.useState(!1),t=Object(i.a)(a,2),n=t[0],r=t[1],c=l.a.useState(""),o=Object(i.a)(c,2),m=o[0],s=o[1],u=function(e){s(Number(e.target.value)||"")},p=function(){r(!1)};return l.a.createElement("div",null,l.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){r(!0)}},"Upravit"),l.a.createElement(oe.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:n,onClose:p},l.a.createElement(se.a,null,"Upravte Informace"),l.a.createElement(me.a,null,l.a.createElement("form",{className:e.container},l.a.createElement(Ee.a,{className:e.formControl},l.a.createElement(ue.a,{htmlFor:"demo-dialog-native"},"Age"),l.a.createElement(be.a,{native:!0,value:m,onChange:u,input:l.a.createElement(pe.a,{id:"demo-dialog-native"})},l.a.createElement("option",{"aria-label":"None",value:""}),l.a.createElement("option",{value:10},"Ten"),l.a.createElement("option",{value:20},"Twenty"),l.a.createElement("option",{value:30},"Thirty"))),l.a.createElement(Ee.a,{className:e.formControl},l.a.createElement(ue.a,{id:"demo-dialog-select-label"},"Age"),l.a.createElement(be.a,{labelId:"demo-dialog-select-label",id:"demo-dialog-select",value:m,onChange:u,input:l.a.createElement(pe.a,null)},l.a.createElement(de.a,{value:""},l.a.createElement("em",null,"None")),l.a.createElement(de.a,{value:10},"Ten"),l.a.createElement(de.a,{value:20},"Twenty"),l.a.createElement(de.a,{value:30},"Thirty"))))),l.a.createElement(ie.a,null,l.a.createElement(d.a,{onClick:p,color:"primary"},"Cancel"),l.a.createElement(d.a,{onClick:p,color:"primary"},"Ok"))))}var he=function(){return l.a.createElement(o.a,{className:"my-profile"},l.a.createElement("div",{className:"my-profile__head"},l.a.createElement(ce,null),l.a.createElement("h2",null,"Sophia Jia")),l.a.createElement("div",{className:"my-profile__body"},l.a.createElement(ge,null)))};var ve=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(f.a,null,l.a.createElement(j,null),l.a.createElement(o.a,{className:"app__content"},l.a.createElement(b.c,null,l.a.createElement(b.a,{path:"/my-profile",exact:!0},l.a.createElement(he,null)),l.a.createElement(b.a,{path:"/create-recipe"},l.a.createElement(Y,null)),l.a.createElement(b.a,{path:"/my-recipes"},l.a.createElement(ee,null)))),l.a.createElement(h,null)))},ye=t(80),ke=t(188),xe=Object(ye.a)({palette:{primary:{main:"#43a047"},secondary:{main:"#00e676"}}});c.a.render(l.a.createElement(B,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(ke.a,{theme:xe},l.a.createElement(ve,null)))),document.getElementById("root"))},78:function(e,a,t){e.exports=t.p+"static/media/cholify-inline-logo-dark.ba622f97.svg"},94:function(e,a,t){e.exports=t(122)},99:function(e,a,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.24990c9b.chunk.js.map