(this["webpackJsonpla-nush"]=this["webpackJsonpla-nush"]||[]).push([[0],{127:function(e,t,a){e.exports=a.p+"static/media/rrs.41ff1d4b.jpg"},128:function(e,t,a){e.exports=a.p+"static/media/slide1.517f6ec5.jpg"},129:function(e,t,a){e.exports=a.p+"static/media/slide3.b8572d0c.jpg"},130:function(e,t,a){e.exports=a.p+"static/media/slide4.4b9426fc.jpg"},131:function(e,t,a){e.exports=a.p+"static/media/slide5.4aeb1e99.jpg"},132:function(e,t,a){e.exports=a.p+"static/media/slide6.b54e470b.jpg"},133:function(e,t,a){e.exports=a.p+"static/media/slide7.9b6ee247.jpg"},134:function(e,t,a){e.exports=a.p+"static/media/slide2.63ef7c45.jpg"},198:function(e,t,a){},207:function(e,t,a){e.exports=a(477)},231:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},288:function(e,t,a){},289:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){},39:function(e,t,a){},476:function(e,t,a){},477:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(36),c=a.n(r),i=a(89),s=a(30),o={servicePages:[],schedules:[],services:[],sliders:[],workers:[],texts:[]},m=a(7),u=a.n(m),E={getServicePages:function(e){var t,a,n;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.state,l.next=3,u.a.awrap(fetch("/api/public/service-pages",{method:"GET",headers:{"Content-Type":"application/json"}}));case 3:if((a=l.sent).ok){l.next=6;break}return l.abrupt("return",t.servicePages);case 6:return l.next=8,u.a.awrap(a.json());case 8:return n=l.sent,l.abrupt("return",t.servicePages=n);case 10:case"end":return l.stop()}}))},getSchedules:function(e){var t,a,n;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.state,l.next=3,u.a.awrap(fetch("/api/public/schedules",{method:"GET",headers:{"Content-Type":"application/json"}}));case 3:if((a=l.sent).ok){l.next=6;break}return l.abrupt("return",t.schedules);case 6:return l.next=8,u.a.awrap(a.json());case 8:return n=l.sent,l.abrupt("return",t.schedules=n);case 10:case"end":return l.stop()}}))},getServices:function(e){var t,a,n;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.state,l.next=3,u.a.awrap(fetch("/api/public/services",{method:"GET",headers:{"Content-Type":"application/json"}}));case 3:if((a=l.sent).ok){l.next=6;break}return l.abrupt("return",t.services);case 6:return l.next=8,u.a.awrap(a.json());case 8:return n=l.sent,l.abrupt("return",t.services=n);case 10:case"end":return l.stop()}}))},addSchedule:function(e,t){var a,n,l;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.state,r.next=3,u.a.awrap(fetch("/api/public/schedules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 3:if((n=r.sent).ok){r.next=6;break}return r.abrupt("return",a.schedules);case 6:return r.next=8,u.a.awrap(n.json());case 8:return l=r.sent,r.abrupt("return",a.schedules=l);case 10:case"end":return r.stop()}}))},getWorkers:function(e){var t,a,n;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.state,l.next=3,u.a.awrap(fetch("/api/public/workers",{method:"GET",headers:{"Content-Type":"application/json"}}));case 3:if((a=l.sent).ok){l.next=6;break}return l.abrupt("return",t.workers);case 6:return l.next=8,u.a.awrap(a.json());case 8:return n=l.sent,l.abrupt("return",t.workers=n);case 10:case"end":return l.stop()}}))},getSliders:function(e){var t,a,n;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.state,l.next=3,u.a.awrap(fetch("/api/public/sliders",{method:"GET",headers:{"Content-Type":"application/json"}}));case 3:if((a=l.sent).ok){l.next=6;break}return l.abrupt("return",t.sliders);case 6:return l.next=8,u.a.awrap(a.json());case 8:return n=l.sent,l.abrupt("return",t.sliders=n);case 10:case"end":return l.stop()}}))},getTexts:function(e){var t,a,n;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.state,l.next=3,u.a.awrap(fetch("/api/public/texts",{method:"GET",headers:{"Content-Type":"application/json"}}));case 3:if((a=l.sent).ok){l.next=6;break}return l.abrupt("return",t.texts);case 6:return l.next=8,u.a.awrap(a.json());case 8:return n=l.sent,l.abrupt("return",t.texts=n);case 10:case"end":return l.stop()}}))}},d=Object(s.c)({state:o,actions:E}),p=Object(i.b)(),f=a(4),N=a(20),v=a(91),b=a.n(v),T=a(10),x=a(199),h=a.n(x),g=(a(229),a(230),a(231),a(127)),O=a.n(g),C=a(128),_=a.n(C),y=a(129),j=a.n(y),S=a(130),I=a.n(S),k=a(131),w=a.n(k),A=a(132),B=a.n(A),M=a(133),R=a.n(M),L=a(134),P=a.n(L),D=a(92),X=a(2),G=a.n(X),H=function(e){var t=e.src,a=e.alt,n=e.width,r=e.height,c=e.className,i=Object(D.a)(e,["src","alt","width","height","className"]);return l.a.createElement("img",Object.assign({style:{width:n,height:r},className:G()("Image",c),src:t,alt:a},i))},K=([{image:_.a,id:1,text:"WIMPERNVERL\xc4NGERUNG"},{image:P.a,id:2,text:"WIMPERNLIFTING"},{image:j.a,id:3,text:"DAUERHAFTE HAARENTFERNUNG"},{image:I.a,id:4,text:"NADEL ELEKTRO  EPILATION"},{image:w.a,id:5,text:"DAUERHAFTE HAARENTFERNUNG"},{image:B.a,id:6,text:"NAGELDESIGN"},{image:R.a,id:7,text:"MICROBLADING"}].map((function(e){return l.a.createElement("div",{key:e.id,className:"flexible vertical jCenter itemParent"},l.a.createElement(H,{className:"carousel-item",src:e.image}),l.a.createElement("div",{className:"item-text flexible jCenter"},l.a.createElement("span",null,e.text)))})),function(e){return l.a.createElement("div",{className:"AppWrapper"},l.a.createElement(h.a,{settings:{infinite:!0,speed:2e3,slidesToShow:1,slidesToScroll:1,arrows:!0,responsive:[{breakpoint:320,settings:{arrows:!1}}]}},e.sliders.map((function(e){return e.isSlide?e.link?l.a.createElement(T.b,{to:e.link},l.a.createElement("div",null,l.a.createElement("div",{key:e._id,className:"flexible vertical jCenter itemParent"},l.a.createElement(H,{className:"carousel-item",src:"http://localhost:8080/".concat(e.image)}),l.a.createElement("div",{className:"item-text flexible jCenter"},l.a.createElement("span",null,e.text))))):l.a.createElement("div",null,l.a.createElement("div",{key:e._id,className:"flexible vertical jCenter itemParent"},l.a.createElement(H,{className:"carousel-item",src:"http://localhost:8080/".concat(e.image)}),l.a.createElement("div",{className:"item-text flexible jCenter"},l.a.createElement("span",null,e.text)))):null}))))}),F=(a(235),a(39),function(e){return l.a.createElement(K,e)}),U=(a(236),function(){var e=p().state,t=e.texts,a=e.sliders,n=function(e){return t.find((function(t){return t.key===e})).text},r=a.find((function(e){return!e.isSlide}));return l.a.createElement("div",{className:"Main"},l.a.createElement("div",{className:"main-first flexible aCenter jCenter vertical leis",style:{backgroundImage:"url(".concat(r?"http://localhost:8080/".concat(r.image):O.a,")")}},l.a.createElement("span",{className:"italic-text",style:{maxWidth:500,textAlign:"center"}},n("HOME_HEADER_TEXT"))),l.a.createElement("div",{className:"main-second size"},l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement(T.b,{to:"/contact"},l.a.createElement("button",{className:"button"},n("HOME_CONTACT_BUTTON_TEXT")))),l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement("span",{className:"second-title"},n("HOME_DESCRIPTION_LABEL"))),l.a.createElement("span",{className:"second-text flexible jCenter",id:"leistungen"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:n("HOME_DESCRIPTION")}}))),l.a.createElement("div",null,l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement("span",{className:"title"},n("HOME_SLIDER_LABEL"))),l.a.createElement("div",{className:"flexible aCenter jCenter"},l.a.createElement(F,{sliders:a})),l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement(T.b,{to:"/DateBooking"},l.a.createElement("button",{className:"button"},n("HOME_BOOKING_BUTTON_TEXT"))))))}),z=a(6),W=(a(237),a(202),a(238),a(239),a(240),a(65)),Y=function(e){var t=e.service,a=e.persone,r=e.price,c=e.onClick,i=Object(n.useState)(!1),s=Object(f.a)(i,2),o=s[0],m=s[1];return l.a.createElement("div",{className:G()("BookItem flexible aCenter jBetween",{actBook:o}),onClick:function(e){return c(e),m(!o)}},l.a.createElement("div",{className:"flexible aCenter"},l.a.createElement("div",{className:G()("itemIcon flexible aCenter jCenter",{activeItemIcon:o})},o?l.a.createElement(W.a,{fill:"ghostWhite"}):null),l.a.createElement("span",{className:G()("itemFont flexible aCenter",{activeItemFont:o})},t||a)),l.a.createElement("p",{className:G()({activeBookPrice:o})},r))},V=(a(241),function(e){var t=e.width,a=e.headTitle,n=e.textTitleLeft,r=e.textTitleRight,c=e.lineStyle,i=e.textColor,s=e.flexName,o=e.className;return l.a.createElement("div",{style:{width:t,borderBottom:c},className:"LineText"},l.a.createElement("div",{className:G()("textInner",o)},a?l.a.createElement("h3",{style:{color:i}},a):l.a.createElement("div",{className:G()("textTitle",s)},l.a.createElement("div",{className:"textTitleLeft"},l.a.createElement("p",{style:{lineHeight:"35px",padding:"20px 0"}},n)),l.a.createElement("p",null,r))))}),J=(a(242),function(e){var t=e.onClick;e.open;return l.a.createElement("div",{className:"BurgerMenu",onClick:function(){if(void 0===t)return null;t()}},l.a.createElement("div",{className:"menuToggle"},l.a.createElement("label",{htmlFor:"test"},l.a.createElement("input",{id:"test",type:"checkbox"}),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))))}),Z=function(e){var t=e.className,a=e.onClick,r=e.opened,c=e.texts,i=void 0===c?[]:c,s=e.whenResize,o=e.options,m=Object(n.useState)(""),u=Object(f.a)(m,2),E=u[0],d=u[1],p=function(e){a()},N=function(e){return i.find((function(t){return t.key===e}))?i.find((function(t){return t.key===e})).text:""},v=function(){d("close")};return l.a.createElement(l.a.Fragment,null,s?l.a.createElement("ul",{className:G()({dropdownMenu:r,whenResize:t})},l.a.createElement("li",{onClick:p},l.a.createElement(T.c,{exact:!0,to:"/"},N("HOME_MENU_TEXT"))),l.a.createElement("li",{onClick:p},l.a.createElement("a",{href:"#leistungen"},N("SERVICE_MENU_TEXT"))),o.map((function(e){return l.a.createElement("li",{className:"child",onClick:p},l.a.createElement(T.c,{to:"/services/".concat(e.alias)},e.title))})),l.a.createElement("li",{onClick:p},l.a.createElement(T.c,{to:"/contact"},N("CONTACT_MENU_TEXT"))),l.a.createElement("li",{onClick:p},l.a.createElement(T.c,{to:"/booking"},N("BOOKING_MENU_TEXT"))),l.a.createElement("li",{onClick:p},l.a.createElement(T.c,{to:"/confidentiality"},N("DATA_PROTECTION_MENU_TEXT"))),l.a.createElement(J,null)):l.a.createElement("ul",{onMouseLeave:function(e){d("")},className:G()("dropdownMenu",E)},o.map((function(e){return l.a.createElement("li",{onClick:v},l.a.createElement(T.c,{to:"/services/".concat(e.alias)},e.title))})),l.a.createElement(J,null)))},$=(a(243),a(244),a(203)),q=function(e){var t=e.bgColor,a=e.textData,n=e.listStyle,r=e.className;return l.a.createElement($.Animated,{animationIn:"zoomIn",animationOut:"zoomOut",isVisible:!0,className:"inforCardContent"},l.a.createElement("div",{className:G()("InfoCard",r)}),l.a.createElement("ul",{style:{backgroundColor:t,listStyleType:n||"none",paddingLeft:n?"15px":"0"}},l.a.createElement("div",{className:"info_content",dangerouslySetInnerHTML:{__html:a}})))},Q=a(37),ee=a(53),te=a.n(ee),ae=(a(288),function(){var e=p().state,t=e.texts,a=e.servicePages,r=Object(n.useState)(!1),c=Object(f.a)(r,2),i=c[0],s=c[1],o=Object(n.useState)(!1),m=Object(f.a)(o,2),u=m[0],E=m[1],d=function(e){return t.find((function(t){return t.key===e})).text},N=function(){s(!i)},v=function(){window.scrollY>10?E(!0):E(!1)};return Object(n.useEffect)((function(){window.addEventListener("scroll",v)})),l.a.createElement("div",{className:G()("flexible jBetween Header pageContent aCenter",{showOrNot:u})},l.a.createElement(T.b,{to:"/"},l.a.createElement("div",null,l.a.createElement(H,{src:te.a,className:"headerLogo"}))),l.a.createElement("div",{className:"container purple topBotomBordersIn flexible aCenter"},l.a.createElement("ul",{className:"flexible"},l.a.createElement("div",{className:"contentSecondLi"},l.a.createElement("li",null,l.a.createElement(T.c,{exact:!0,to:"/"},d("HOME_MENU_TEXT")))),l.a.createElement("div",{className:"contentSecondLi"},l.a.createElement("li",null,l.a.createElement("a",{href:"#leistungen"},d("SERVICE_MENU_TEXT"),l.a.createElement(Q.a,{className:"FaChevronDown"})),l.a.createElement(Z,{texts:t,options:a,onClick:N,opened:i,show:!0}))),l.a.createElement("div",{className:"contentSecondLi"},l.a.createElement("li",null,l.a.createElement(T.c,{to:"/contact"},d("CONTACT_MENU_TEXT")))),l.a.createElement("div",{className:"contentSecondLi"},l.a.createElement("li",null,l.a.createElement(T.c,{to:"/booking"},d("BOOKING_MENU_TEXT")))),l.a.createElement("div",{className:"contentSecondLi"},l.a.createElement("li",null,l.a.createElement(T.c,{to:"/confidentiality"},d("DATA_PROTECTION_MENU_TEXT"))))),l.a.createElement(J,{onClick:N}),l.a.createElement(Z,{texts:t,onClick:N,opened:!0,whenResize:!0,options:a,className:i})))}),ne=(a(289),function(){var e=p().state.texts,t=function(t){return e.find((function(e){return e.key===t})).text};return l.a.createElement("div",{className:"Footer"},l.a.createElement("div",{className:"size"},l.a.createElement("div",{className:"flexible jBetween footResp"},l.a.createElement("div",{className:"flexible vertical footRight aCenter"},l.a.createElement(H,{src:te.a,className:"footerImage"}),l.a.createElement("div",{className:"flexible footIconParent jCenter"},l.a.createElement("a",{href:"mailto:info@lanush.de"},l.a.createElement(Q.b,{className:"envelopeIcon"})),l.a.createElement("a",{href:"https://www.facebook.com/lanushmuc/"},l.a.createElement(Q.c,{className:"faceIcon"})),l.a.createElement("a",{href:"https://www.instagram.com/explore/locations/736888283166177/lanush-haarentfernung-laser-beauty-center/"},l.a.createElement(Q.d,{className:"instaIcon"})))),l.a.createElement("div",{className:"flexible aCenter jCenter grow footLeft"},l.a.createElement("div",{className:"flexible vertical footerText",style:{textAlign:"center"}},l.a.createElement("span",null,t("CONTACT_ADDRESS_TEXT")),l.a.createElement("span",null,t("CONTACT_TELEPHONE_TEXT")),l.a.createElement("span",null,t("CONTACT_MOBILE_TEXT")),l.a.createElement("a",{href:"mailto:info@lanush.de"},t("CONTACT_EMAIL_TEXT"))))),l.a.createElement("div",{className:"flexible jCenter lastText"},l.a.createElement("p",{style:{marginTop:"20px"}},"\xa9 Copyright \u2013 La\u2018Nush"))))}),le=(a(290),function(e){var t=e.selected,a=e.disabled,r=e.onChange,c=Object(n.useState)(!1),i=Object(f.a)(c,2);i[0],i[1];return l.a.createElement("div",{onClick:function(e){a||r(e)}},l.a.createElement("div",{className:G()("radio flexible jCenter aCenter",{radioDisabled:a,radioCheck:t})},l.a.createElement("div",{className:G()("radioContent",{radioContentDisabled:a,checkRadioContent:t})})))}),re=(a(291),function(e){var t=e.selected,a=e.time,n=e.disabled,r=e.onChange;return l.a.createElement("div",{className:G()("date flexible jCenter",{dateOpacity:n})},l.a.createElement(le,{disabled:n,selected:t,onChange:r}),l.a.createElement("span",null,a,l.a.createElement("div",{className:G()({timeLine:n})})))}),ce=function(e){var t=e.page,a=t.title,n=t.subTitle,r=t.description,c=t.image,i=t.points,s=t.prices;return l.a.createElement("article",{className:"ElectricEpilation"},l.a.createElement("section",{className:"size"},l.a.createElement("div",{className:"sectionsTitleBlock"},l.a.createElement("p",{className:"sectionsGoldStyle"},a),l.a.createElement("p",{className:"sectionsTitleSmallGold"},n),l.a.createElement("p",{className:"secondaryGrey",dangerouslySetInnerHTML:{__html:r}})),c&&"undefined"!==c&&l.a.createElement("div",{className:"imageContent flexible jCenter"},l.a.createElement(H,{src:c,width:"100%",height:"250px"})),Object(z.a)(i).sort((function(e,t){return t.order-e.order})).map((function(e){return l.a.createElement("div",{className:"row flexible aStart jBetween"},l.a.createElement(V,{lineStyle:"1px solid rgb(166, 129, 91)",headTitle:e.title,className:"lineTextWidth",width:""}),l.a.createElement(q,{textData:e.description,bgColor:"rgba(236,204,164,0.41)"}))})),l.a.createElement("div",{className:"shelackPrices"},Object(z.a)(s).sort((function(e,t){return t.order-e.order})).map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(V,{lineStyle:"1px solid",headTitle:e.title,textColor:" rgb(166, 129, 91)",flexName:"flexible grow ",width:"100%"}),Object(z.a)(e.data).sort((function(e,t){return t.order-e.order})).map((function(e){return l.a.createElement(V,{lineStyle:"1px dashed",textTitleLeft:l.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.description}}),textTitleRight:e.price>0?"".concat(e.price," \u20ac"):null,flexName:"flexible jBetween aCenter",width:"100%"})})))})))))},ie=(a(292),function(){var e=p().state.texts;return l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement("div",{className:"dataParent"},l.a.createElement("div",{className:"conf-title-parent flexible vertical aCenter jCenter"},l.a.createElement("span",{className:"title"},"Datenschutz")),l.a.createElement("div",{className:"text-container",dangerouslySetInnerHTML:{__html:e.find((function(e){return"DATA_PROTECTION_DESCRIPTION"===e.key})).text}})))}),se=a(8),oe=a(9),me=a(66),ue=a(63),Ee=a(64),de=a(62),pe=a(67),fe=Object(de.compose)(Object(de.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA2VEv31f9riUUSVUz1S8tWITJl-0yp_9U&v=3.exp&libraries=geometry,drawing,places",loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"100%"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}})}),pe.withScriptjs,pe.withGoogleMap)((function(e){return l.a.createElement(pe.GoogleMap,{defaultZoom:16,defaultCenter:{lat:40.1816633,lng:44.5125112}},e.isMarkerShown&&l.a.createElement(pe.Marker,{position:{lat:40.1816633,lng:44.5125112}}))})),Ne=function(e){function t(){return Object(se.a)(this,t),Object(me.a)(this,Object(ue.a)(t).apply(this,arguments))}return Object(Ee.a)(t,e),Object(oe.a)(t,[{key:"render",value:function(){return l.a.createElement(fe,{isMarkerShown:!0,className:"google-map"})}}]),t}(n.Component),ve=(a(476),function(){var e=p().state.texts,t=function(t){return e.find((function(e){return e.key===t})).text};return l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement("div",{className:"dataParent flexible jBetween vertical"},l.a.createElement("div",{className:"flexible jBetween contactParent"},l.a.createElement("div",{className:"map-parent"},l.a.createElement(Ne,null)),l.a.createElement("div",{className:"flexible vertical  grow aCenter"},l.a.createElement("span",{className:"contact-title"},t("CONTACT_HEADER_TEXT")),l.a.createElement(H,{className:"contactImage",src:te.a}),l.a.createElement("div",{className:"flexible vertical contact-info"},l.a.createElement("span",null,t("CONTACT_ADDRESS_TEXT")),l.a.createElement("span",null,t("CONTACT_TELEPHONE_TEXT")),l.a.createElement("span",null,t("CONTACT_MOBILE_TEXT")),l.a.createElement("a",{href:"mailto:info@lanush.de"},t("CONTACT_EMAIL_TEXT"))),l.a.createElement("div",{className:"flexible vertical  infoMiddleParent"},l.a.createElement("span",{className:"info-middle"},t("CONTACT_ARRIVAL_TITLE")),l.a.createElement("span",{dangerouslySetInnerHTML:{__html:t("CONTACT_ARRIVAL_DESCRIPTION_TEXT")}})))),l.a.createElement("div",{className:"flexible jCenter vertical aCenter"},l.a.createElement("span",{className:"title"},t("CONTACT_FORM_TITLE")),l.a.createElement("div",{className:"user-contact-block flexible vertical aCenter"},l.a.createElement("input",{type:"text",placeholder:t("CONTACT_FORM_NAME_TEXT"),className:"user-contact-info"}),l.a.createElement("input",{type:"email",placeholder:t("CONTACT_FORM_EMAIL_TEXT"),className:"user-contact-info"}),l.a.createElement("input",{type:"text",placeholder:t("CONTACT_FORM_PHONE_TEXT"),className:"user-contact-info"}),l.a.createElement("input",{type:"text",placeholder:t("CONTACT_FORM_MESSAGE_TEXT"),className:"user-contact-info"}),l.a.createElement("div",{className:"flexible jEnd button-parent"},l.a.createElement("button",{className:"button"},"Send"))))))}),be=function(e){return e.loading?l.a.createElement("div",{style:{flex:1,display:"flex",height:"100%",justifyContent:"center",flexDirection:"column",paddingTop:"30px",width:"100%",textAlign:"center",alignItems:"center",backgroundColor:"#666"}},l.a.createElement(b.a,{size:120,spinnerColor:"#a6815b",spinnerWidth:2,visible:!0})):l.a.createElement("div",{style:{paddingTop:"30px"}},l.a.createElement("p",null,"Vielen Dank! Ihre Buchung ist abgeschlossen. Sie haben eine E-Mail mit Details zu Ihrer Buchung erhalten."))},Te=a(31),xe=a.n(Te),he=a(206),ge=a.n(he);a(198);function Oe(e,t){var a=!1;return t.forEach((function(t){var n=t.startDate,l=t.endDate,r=xe()(n),c=xe()(l);e.isBetween(r,c)&&(a=!0)})),a}xe.a.extend(ge.a);var Ce=function(e){var t=e.onChange,a=e.services,r=e.toggleService,c=e.total,i=e.subTotal,s=e.schedules,o=e.workers,m=e.serviceIds,u=e.changeTime,E=e.changeWorker,d=e.texts,p=Object(n.useState)(null),N=Object(f.a)(p,2),v=N[0],b=N[1],T=Object(n.useState)(null),x=Object(f.a)(T,2),h=x[0],g=x[1],O=function(e){return d.find((function(t){return t.key===e})).text},C=function(e){var t=[],a=!0,n=30,r=e.hour(9).minute(30).second(0),c=function(){var e=xe()(r.add(n,"m").format());t.push(l.a.createElement(re,{onChange:function(){return function(e){g(e),u(e)}(e)},selected:h&&h.format()===r.add(n,"m").format(),disabled:Oe(r.add(n,"m"),s),time:r.add(n,"m").format("HH:mm")})),19===r.add(n,"m").hour()&&(a=!1),6===r.day()&&14===r.add(n,"m").hour()&&(a=!1),n+=30};do{c()}while(a);return t},_=Object(n.useMemo)((function(){for(var e=[],t=xe()(),a=0;a<8;a++)0===t.day()?a--:e.push(t),t=t.add(1,"d");return e}),[]);return l.a.createElement("div",{className:"booking-select-service"},l.a.createElement("div",{style:{paddingTop:"30px"}},l.a.createElement("span",{className:"booking-service-title"},O("BOOKING_SELECT_SERVICE_TEXT"),":")),a.map((function(e){return e.services.length>0&&l.a.createElement("div",{className:"category"},l.a.createElement("div",null,l.a.createElement("p",{className:"active-color"},e._doc.title),e.services.map((function(e){return l.a.createElement(Y,{onClick:function(){return r(e._id)},service:e.title,price:"".concat(e.price," \u20ac")})}))))})),l.a.createElement("div",{className:"category"},l.a.createElement("div",null,l.a.createElement("p",{className:"active-color"},O("BOOKING_TOTAL_TEXT"),":",l.a.createElement("span",{style:{float:"right"}},l.a.createElement("span",{style:{textDecoration:"line-through",fontSize:16}},i," \u20ac "),c," \u20ac")))),l.a.createElement("div",{className:"category"},l.a.createElement("div",null,l.a.createElement("p",{className:"active-color"},O("BOOKING_EMPLOYEE_TEXT")),l.a.createElement("div",{className:G()("BookItem flexible aCenter jBetween",{actBook:null===v}),onClick:function(){return b(null)}},l.a.createElement("div",{className:"flexible aCenter"},l.a.createElement("div",{className:G()("itemIcon flexible aCenter jCenter",{activeItemIcon:null===v})},null===v?l.a.createElement(W.a,{fill:"ghostWhite"}):null),l.a.createElement("span",{className:G()("itemFont flexible aCenter",{activeItemFont:null===v})},O("BOOKING_ANY_EMPLOYEE_TEXT")))),o.map((function(e){var t=e._id===v;return m.every((function(t){return e.serviceIds.indexOf(t)>-1}))?l.a.createElement("div",{className:G()("BookItem flexible aCenter jBetween",{actBook:t}),onClick:function(){return t=e._id,b(t),void E(t);var t}},l.a.createElement("div",{className:"flexible aCenter"},l.a.createElement("div",{className:G()("itemIcon flexible aCenter jCenter",{activeItemIcon:t})},t?l.a.createElement(W.a,{fill:"ghostWhite"}):null),l.a.createElement("span",{className:G()("itemFont flexible aCenter",{activeItemFont:t})},e.name))):null})))),l.a.createElement("div",{className:"book-second-step"},l.a.createElement("div",{className:"row flexible jBetween"},_.map((function(e){return l.a.createElement("div",{className:"column flexible vertical"},l.a.createElement("div",{className:"dateBlock active-block"},l.a.createElement("span",{className:"dateText"},e.format("ddd, MMM DD"))),C(e))}))),l.a.createElement("div",{style:{borderTop:"1px solid #666"},className:"flexible jEnd"},l.a.createElement("button",{className:G()("bookButton",{disabled:!m.length||!h}),onClick:t},O("BOOKING_NEXT_BUTTON_TEXT")))))},_e=a(3),ye=a(94),je=["January","February","March","April","May","June","July","August","September","October","November","December"],Se=Object(z.a)(Array(31).keys()),Ie=Object(z.a)(Array(101).keys()),ke=Number(xe()().year()),we=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Ae=function(e){var t=e.texts,a=e.onChange,r=e.onSubmit,c=e.worker,i=e.total,s=e.time,o=e.services,m=Object(n.useState)({name:"",lastName:"",phone:"",email:"",confirmEmail:"",post:"",city:"",address:"",homeNumber:"",additionalAddress:"",note:"",month:"",day:"",year:""}),u=Object(f.a)(m,2),E=u[0],d=u[1],p=Object(n.useState)({name:!1,lastName:!1,phone:!1,email:!1,confirmEmail:!1,post:!1,city:!1,address:!1,homeNumber:!1,additionalAddress:!1,note:!1,month:!1,day:!1,year:!1}),N=Object(f.a)(p,2),v=N[0],b=N[1],T=function(e){return t.find((function(t){return t.key===e})).text},x=function(e,t){d(Object(ye.a)({},E,Object(_e.a)({},e,t)))},h=T("BOOKING_SECOND_STEP_DESCRIPTION").split("{separator}");return l.a.createElement("div",{className:"flexible vertical",style:{paddingTop:"30px"}},l.a.createElement("div",{className:"flexible vertical"},l.a.createElement("p",null,h[0],h[0]&&l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,o.join(", "))," ",l.a.createElement("b",null,c?" by ":""," ",c)),h[1],h[1]&&l.a.createElement("b",null,s.format("HH:mm")," auf ",s.format("MMMM MM, YYYY")),h[2],h[2]&&l.a.createElement("b",null,"\u20ac",i),h[3]),l.a.createElement("div",{className:"flexible vertical"},l.a.createElement("form",null,l.a.createElement("div",{className:"flexible jBetween inputParent"},l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText "},T("BOOKING_FIRST_NAME_TEXT")),l.a.createElement("input",{name:"name",type:"text",className:G()("nameSname inputStyle mRight",{error:v.name}),value:E.name,onChange:function(e){return x("name",e.target.value)}})),l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_LAST_NAME_TEXT")),l.a.createElement("input",{name:"lastName",type:"text",className:G()("nameSname inputStyle",{error:v.lastName}),value:E.lastName,onChange:function(e){return x("lastName",e.target.value)}}))),l.a.createElement("div",{className:"inputParent flexible"},l.a.createElement("div",{className:"flexible grow vertical mRight"},l.a.createElement("p",{className:"inputText"},T("BOOKING_PHONE_TEXT")),l.a.createElement("input",{name:"phone",className:G()("logContacts inputStyle",{error:v.phone}),value:E.phone,onChange:function(e){return x("phone",e.target.value)}})),l.a.createElement("div",{className:"flexible grow vertical mRight"},l.a.createElement("p",{className:"inputText"},T("BOOKING_EMAIL_TEXT")),l.a.createElement("input",{name:"email",className:G()("logContacts inputStyle",{error:v.email}),value:E.email,onChange:function(e){return x("email",e.target.value)}})),l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_EMAIL_CONFIRM_TEXT")),l.a.createElement("input",{name:"confirmEmail",className:G()("logContacts inputStyle",{error:v.confirmEmail}),value:E.confirmEmail,onChange:function(e){return x("confirmEmail",e.target.value)}}))),l.a.createElement("p",{className:"booking-service-title"},T("BOOKING_ADDRESS_TEXT")),l.a.createElement("div",{className:"inputParent flexible"},l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_POST_TEXT")),l.a.createElement("input",{name:"post",type:"text",className:G()("geo inputStyle",{error:v.post}),value:E.post,onChange:function(e){return x("post",e.target.value)}}))),l.a.createElement("div",{className:"inputParent flexible"},l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_CITY_TEXT")),l.a.createElement("input",{name:"city",type:"text",className:G()("geo inputStyle",{error:v.city}),value:E.city,onChange:function(e){return x("city",e.target.value)}}))),l.a.createElement("div",{className:"inputParent flexible"},l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_ADDRESS_TEXT")),l.a.createElement("input",{name:"address",type:"text",className:G()("geo inputStyle",{error:v.address}),value:E.address,onChange:function(e){return x("address",e.target.value)}}))),l.a.createElement("div",{className:"inputParent flexible"},l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_HOME_NUMBER_TEXT")),l.a.createElement("input",{name:"homeNumber",type:"text",className:G()("geo inputStyle",{error:v.homeNumber}),value:E.homeNumber,onChange:function(e){return x("homeNumber",e.target.value)}}))),l.a.createElement("div",{className:"inputParent flexible"},l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_ADDITIONAL_ADDRESS_TEXT")),l.a.createElement("input",{name:"additionalAddress",type:"text",className:G()("geo inputStyle",{error:v.additionalAddress}),value:E.additionalAddress,onChange:function(e){return x("additionalAddress",e.target.value)}}))),l.a.createElement("div",{className:"inputParent flexible aEnd"},l.a.createElement("div",{className:"flexible grow vertical mRight"},l.a.createElement("p",{className:"inputText"},T("BOOKING_BIRTHDAY_TEXT")),l.a.createElement("select",{className:G()("selectStyle",{error:v.month}),style:{marginRight:"15px"},value:E.month,onChange:function(e){return x("month",e.target.value)}},l.a.createElement("option",{value:""},T("BOOKING_CHOOSE_MONTH_TEXT")),je.map((function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement("div",{className:"flexible grow vertical mRight"},l.a.createElement("select",{className:G()("selectStyle",{error:v.day}),style:{marginRight:"15px"},value:E.day,onChange:function(e){return x("day",e.target.value)}},l.a.createElement("option",{value:""},T("BOOKING_SELECT_DAY_TEXT")),Se.map((function(e){return l.a.createElement("option",{value:e+1},e+1)})))),l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("select",{className:G()("selectStyle",{error:v.year}),value:E.year,onChange:function(e){return x("year",e.target.value)}},l.a.createElement("option",{value:""}," ",T("BOOKING_SELECT_YEAR_TEXT")),Ie.map((function(e){return l.a.createElement("option",{value:ke-e},ke-e)}))))),l.a.createElement("div",{className:"inputParent"},l.a.createElement("p",{className:"inputText"},T("BOOKING_NOTE_TEXT")),l.a.createElement("textarea",{name:"note",className:G()("bookTextArea",{error:v.note}),value:E.note,onChange:function(e){return x("note",e.target.value)}})),l.a.createElement("div",{className:"buttonsParent flexible jBetween"},l.a.createElement("button",{className:"bookButton",onClick:function(){return a("dec")}},T("BOOKING_BACK_BUTTON_TEXT")),l.a.createElement("button",{className:"bookButton",onClick:function(e){e.stopPropagation(),e.preventDefault();var t=Object(ye.a)({},v),a=!0;for(var n in E)"note"===n||"additionalAddress"===n||E[n]||(t[n]=!0,a=!1),"email"!==n||we.test(E[n].toLowerCase())||(t.email=!0,a=!1),E.email&&"confirmEmail"===n&&E[n]!==E.email&&(t.confirmEmail=!0,a=!1);if(a){E.confirmEmail;var l=E.day,c=E.year,i=E.month,s=Object(D.a)(E,["confirmEmail","day","year","month"]),o=xe()("".concat(i,"-").concat(l,"-").concat(c)).toDate();r(Object(ye.a)({},s,{birthday:o}))}else b(t)}},T("BOOKING_NEXT_BUTTON_TEXT")))))))},Be={2:15,3:20,4:25,5:30,6:40};var Me=function(){var e=p(),t=e.state,a=t.texts,r=t.services,c=t.schedules,i=t.workers,s=e.actions.addSchedule,o=Object(n.useState)(!1),m=Object(f.a)(o,2),u=m[0],E=m[1],d=Object(n.useState)(1),N=Object(f.a)(d,2),v=N[0],b=N[1],T=Object(n.useState)([]),x=Object(f.a)(T,2),h=x[0],g=x[1],O=Object(n.useState)(null),C=Object(f.a)(O,2),_=C[0],y=C[1],j=Object(n.useState)(null),S=Object(f.a)(j,2),I=S[0],k=S[1],w=function(e){return a.find((function(t){return t.key===e})).text},A=function(e){var t=h.some((function(t){return t===e}));g(t?function(t){return t.filter((function(t){return t!==e}))}:[].concat(Object(z.a)(h),[e]))},B=function(e){return b("dec"===e?v-1:v+1)},M=function(e){E(!0),B(),s({user:e,total:L,serviceIds:h,worker:I,time:_.toJSON()}).then((function(){E(!1)})).catch(console.log)},R=h.reduce((function(e,t){var a=0;return r.forEach((function(e){e.services.forEach((function(e){e._id===t&&(a=e.price)}))})),e+a}),0),L=h.length<2?R:function(e,t){return Be[e]?Math.ceil(t-t*Be[e]/100):Math.ceil(t-t*Be[6]/100)}(h.length,R),P=i.find((function(e){return e._id===I})),D=[];r.forEach((function(e){e.services.forEach((function(e){h.includes(e._id)&&D.push(e.title)}))}));return l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement("div",{className:"dataParent"},l.a.createElement("div",{className:"data-services flexible jBetween"},l.a.createElement("div",{className:"flexible vertical jCenter grow active-block "},l.a.createElement("span",{className:"middle-text"},"1. ",w("BOOKING_FIRST_STEP")),l.a.createElement("div",{className:G()("bookStep",{activeStep:1===v})})),l.a.createElement("div",{className:"flexible vertical jCenter grow active-block"},l.a.createElement("span",{className:"middle-text"},"2. ",w("BOOKING_SECOND_STEP")),l.a.createElement("div",{className:G()("bookStep",{activeStep:2===v})})),l.a.createElement("div",{className:"flexible vertical jCenter grow active-block"},l.a.createElement("span",{className:"middle-text"},"3. ",w("BOOKING_THIRD_STEP")),l.a.createElement("div",{className:G()("bookStep",{activeStep:3===v})}))),1===v?l.a.createElement(Ce,{texts:a,serviceIds:h,workers:i,schedules:c,total:L,subTotal:R,onChange:B,changeTime:y,changeWorker:k,services:r,toggleService:A}):2===v?l.a.createElement(Ae,{texts:a,worker:P?P.name:null,services:D,time:_,total:L,onChange:B,onSubmit:M}):l.a.createElement(be,{loading:u,texts:a})))};function Re(){var e=p(),t=e.state.servicePages,a=e.actions,r=a.getSliders,c=a.getTexts,i=a.getServices,s=a.getWorkers,o=a.getSchedules,m=a.getServicePages,u=Object(n.useState)(!0),E=Object(f.a)(u,2),d=E[0],v=E[1];return Object(n.useEffect)((function(){v(!0),Promise.all([r(),c(),i(),s(),o(),m()]).then((function(){return v(!1)}))}),[r,c,i,s,m]),d?l.a.createElement("div",{style:{flex:1,display:"flex",height:"100%",justifyContent:"center",flexDirection:"column",width:"100%",textAlign:"center",alignItems:"center",backgroundColor:"#666"}},l.a.createElement(b.a,{size:120,spinnerColor:"#a6815b",spinnerWidth:2,visible:!0})):l.a.createElement(l.a.Fragment,null,l.a.createElement(ae,null),l.a.createElement(N.c,null,l.a.createElement(N.a,{exact:!0,path:"/",component:U}),l.a.createElement(N.a,{exact:!0,path:"/booking",component:Me}),l.a.createElement(N.a,{exact:!0,path:"/contact",component:ve}),l.a.createElement(N.a,{exact:!0,path:"/confidentiality",component:ie}),t.map((function(e){return l.a.createElement(N.a,{exact:!0,path:"/services/".concat(e.alias),component:function(t){return l.a.createElement(ce,Object.assign({page:e},t))}})}))),l.a.createElement(ne,null))}var Le=function(){return l.a.createElement(i.a,{value:d},l.a.createElement(Re,null))};c.a.render(l.a.createElement(T.a,null,l.a.createElement(Le,null)),document.getElementById("root"))},53:function(e,t,a){e.exports=a.p+"static/media/logo.61a48cdc.png"}},[[207,1,2]]]);
//# sourceMappingURL=main.9a2cba85.chunk.js.map