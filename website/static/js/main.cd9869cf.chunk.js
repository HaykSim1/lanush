(this["webpackJsonpla-nush"]=this["webpackJsonpla-nush"]||[]).push([[0],{164:function(e,t,a){e.exports=a.p+"static/media/rrs.41ff1d4b.jpg"},165:function(e,t,a){e.exports=a.p+"static/media/slide1.517f6ec5.jpg"},166:function(e,t,a){e.exports=a.p+"static/media/slide3.b8572d0c.jpg"},167:function(e,t,a){e.exports=a.p+"static/media/slide4.4b9426fc.jpg"},168:function(e,t,a){e.exports=a.p+"static/media/slide5.4aeb1e99.jpg"},169:function(e,t,a){e.exports=a.p+"static/media/slide6.b54e470b.jpg"},170:function(e,t,a){e.exports=a.p+"static/media/slide7.9b6ee247.jpg"},171:function(e,t,a){e.exports=a.p+"static/media/slide2.63ef7c45.jpg"},234:function(e,t,a){},244:function(e,t,a){e.exports=a(569)},288:function(e,t){},323:function(e,t,a){},326:function(e,t,a){},328:function(e,t,a){},329:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){},332:function(e,t,a){},333:function(e,t,a){},334:function(e,t,a){},335:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){},381:function(e,t,a){},382:function(e,t,a){},383:function(e,t,a){},384:function(e,t,a){},568:function(e,t,a){},569:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(33),c=a.n(r),i=a(96),s=a(32),o={servicePages:[],schedules:[],services:[],sliders:[],workers:[],texts:[]},m=a(7),u=a.n(m),E={getServicePages:function(e){var t,a,n;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.state,l.next=3,u.a.awrap(fetch("/api/public/service-pages",{method:"GET",headers:{"Content-Type":"application/json"}}));case 3:if((a=l.sent).ok){l.next=6;break}return l.abrupt("return",t.servicePages);case 6:return l.next=8,u.a.awrap(a.json());case 8:return n=l.sent,l.abrupt("return",t.servicePages=n);case 10:case"end":return l.stop()}}))},getSchedules:function(e){var t,a,n;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.state,l.next=3,u.a.awrap(fetch("/api/public/schedules",{method:"GET",headers:{"Content-Type":"application/json"}}));case 3:if((a=l.sent).ok){l.next=6;break}return l.abrupt("return",t.schedules);case 6:return l.next=8,u.a.awrap(a.json());case 8:return n=l.sent,l.abrupt("return",t.schedules=n);case 10:case"end":return l.stop()}}))},getServices:function(e){var t,a,n;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.state,l.next=3,u.a.awrap(fetch("/api/public/services",{method:"GET",headers:{"Content-Type":"application/json"}}));case 3:if((a=l.sent).ok){l.next=6;break}return l.abrupt("return",t.services);case 6:return l.next=8,u.a.awrap(a.json());case 8:return n=l.sent,l.abrupt("return",t.services=n);case 10:case"end":return l.stop()}}))},addSchedule:function(e,t){var a,n,l;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.state,r.next=3,u.a.awrap(fetch("/api/public/schedules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 3:if((n=r.sent).ok){r.next=6;break}return r.abrupt("return",a.schedules);case 6:return r.next=8,u.a.awrap(n.json());case 8:return l=r.sent,r.abrupt("return",a.schedules=l);case 10:case"end":return r.stop()}}))},getWorkers:function(e){var t,a,n;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.state,l.next=3,u.a.awrap(fetch("/api/public/workers",{method:"GET",headers:{"Content-Type":"application/json"}}));case 3:if((a=l.sent).ok){l.next=6;break}return l.abrupt("return",t.workers);case 6:return l.next=8,u.a.awrap(a.json());case 8:return n=l.sent,l.abrupt("return",t.workers=n);case 10:case"end":return l.stop()}}))},getSliders:function(e){var t,a,n;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.state,l.next=3,u.a.awrap(fetch("/api/public/sliders",{method:"GET",headers:{"Content-Type":"application/json"}}));case 3:if((a=l.sent).ok){l.next=6;break}return l.abrupt("return",t.sliders);case 6:return l.next=8,u.a.awrap(a.json());case 8:return n=l.sent,l.abrupt("return",t.sliders=n);case 10:case"end":return l.stop()}}))},getTexts:function(e){var t,a,n;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.state,l.next=3,u.a.awrap(fetch("/api/public/texts",{method:"GET",headers:{"Content-Type":"application/json"}}));case 3:if((a=l.sent).ok){l.next=6;break}return l.abrupt("return",t.texts);case 6:return l.next=8,u.a.awrap(a.json());case 8:return n=l.sent,l.abrupt("return",t.texts=n);case 10:case"end":return l.stop()}}))}},d=Object(s.c)({state:o,actions:E}),p=Object(i.b)(),f=a(5),v=a(20),N=a(98),b=a.n(N),T=a(10),h=a(56),x=a.n(h),g=a(30),O=a.n(g),C=a(235),_=a(236),y=a.n(_),j=(a(321),a(322),a(323),a(99)),S=a(2),w=a.n(S),k=function(e){var t=e.src,a=e.alt,n=e.width,r=e.height,c=e.className,i=Object(j.a)(e,["src","alt","width","height","className"]);return l.a.createElement("img",Object.assign({style:{width:n,height:r},className:w()("Image",c),src:t,alt:a},i))},I=function(e){return l.a.createElement("div",{className:"AppWrapper"},l.a.createElement(y.a,{settings:{infinite:!0,speed:2e3,slidesToShow:1,slidesToScroll:1,arrows:!0,responsive:[{breakpoint:320,settings:{arrows:!1}}]}},e.sliders.map((function(e){return e.isSlide?e.link?l.a.createElement(T.b,{to:e.link},l.a.createElement("div",null,l.a.createElement("div",{key:e._id,className:"flexible vertical jCenter itemParent"},l.a.createElement(k,{className:"carousel-item",src:"/".concat(e.image)}),l.a.createElement("div",{className:"item-text flexible jCenter"},l.a.createElement("span",null,e.text))))):l.a.createElement("div",null,l.a.createElement("div",{key:e._id,className:"flexible vertical jCenter itemParent"},l.a.createElement(k,{className:"carousel-item",src:"/".concat(e.image)}),l.a.createElement("div",{className:"item-text flexible jCenter"},l.a.createElement("span",null,e.text)))):null}))))},B=(a(326),function(e){return l.a.createElement(I,e)}),A=a(164),M=a.n(A),L=(a(165),a(166),a(167),a(168),a(169),a(170),a(171),a(327),a(328),new x.a.Parser),P=function(){var e=p().state,t=e.texts,a=e.sliders,n=function(e){return t.find((function(t){return t.key===e})).text},r=L.parse(n("HOME_DESCRIPTION")).map((function(e){return"p"!==e.type||e.props.children?e:l.a.createElement("p",null," \xa0 ")})),c=a.filter((function(e){return!e.isSlide}));return l.a.createElement("div",{className:"Main"},l.a.createElement(O.a,null,l.a.createElement("title",null,"La Nush | Laser & Beauty center")),l.a.createElement(C.Carousel,{stopOnHover:!1,infiniteLoop:!0,interval:4e3,showArrows:!1,showIndicators:!1,showStatus:!1,showThumbs:!1,autoPlay:!0},c.map((function(e){return l.a.createElement("div",{className:"main-first flexible aCenter jCenter vertical leis",style:{backgroundImage:"url(".concat(e?"/".concat(e.image):M.a,")")}},e.text&&l.a.createElement("span",{className:"italic-text",style:{maxWidth:800,textAlign:"center",backgroundColor:"rgba(256, 356, 256, 0.3)"}},e.text))}))),l.a.createElement("div",{className:"main-second size"},l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement(T.b,{to:"/contact"},l.a.createElement("button",{className:"button"},n("HOME_CONTACT_BUTTON_TEXT")))),l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement("span",{className:"second-title"},n("HOME_DESCRIPTION_LABEL"))),l.a.createElement("span",{className:"second-text flexible jCenter",id:"leistungen"},l.a.createElement("div",null,r))),l.a.createElement("div",null,l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement("span",{className:"title"},n("HOME_SLIDER_LABEL"))),l.a.createElement("div",{className:"flexible aCenter jCenter"},l.a.createElement(B,{sliders:a})),l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement(T.b,{to:"/DateBooking"},l.a.createElement("button",{className:"button"},n("HOME_BOOKING_BUTTON_TEXT"))))))},X=a(6),R=(a(239),a(329),a(61),a(330),a(331),a(71)),D=function(e){var t=e.service,a=e.persone,r=e.price,c=e.onClick,i=Object(n.useState)(!1),s=Object(f.a)(i,2),o=s[0],m=s[1];return l.a.createElement("div",{className:w()("BookItem flexible aCenter jBetween",{actBook:o}),onClick:function(e){return c(e),m(!o)}},l.a.createElement("div",{className:"flexible aCenter"},l.a.createElement("div",{className:w()("itemIcon flexible aCenter jCenter",{activeItemIcon:o})},o?l.a.createElement(R.a,{fill:"ghostWhite"}):null),l.a.createElement("span",{className:w()("itemFont flexible aCenter",{activeItemFont:o})},t||a)),l.a.createElement("p",{className:w()({activeBookPrice:o})},r))},G=a(58),K=(a(332),function(e){var t=e.width,a=e.headTitle,n=e.textTitleLeft,r=e.textTitleRight,c=e.lineStyle,i=e.textColor,s=e.heading,o=e.style,m=e.flexName,u=e.className,E=!1===s;return l.a.createElement("div",{style:Object(G.a)({width:t,borderBottom:!E&&c},o),className:"LineText"},l.a.createElement("div",{className:w()("textInner",u,{isHeading:E})},a?l.a.createElement("h3",{style:{color:i},className:"head-title"},a):l.a.createElement("div",{className:w()("textTitle",m)},l.a.createElement("div",{className:"textTitleLeft"},l.a.createElement("p",{style:{lineHeight:"35px",padding:"20px 0 0"}},n)),l.a.createElement("p",{style:{paddingBottom:0}},r))))}),H=(a(333),function(e){var t=e.onClick;e.open;return l.a.createElement("div",{className:"BurgerMenu",onClick:function(){if(void 0===t)return null;t()}},l.a.createElement("div",{className:"menuToggle"},l.a.createElement("label",{htmlFor:"test"},l.a.createElement("input",{id:"test",type:"checkbox"}),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))))}),F=function(e){var t=e.className,a=e.onClick,r=e.opened,c=e.texts,i=void 0===c?[]:c,s=e.whenResize,o=e.options,m=Object(n.useState)(""),u=Object(f.a)(m,2),E=u[0],d=u[1],p=function(e){a()},v=function(e){return i.find((function(t){return t.key===e}))?i.find((function(t){return t.key===e})).text:""},N=function(){d("close")};return l.a.createElement(l.a.Fragment,null,s?l.a.createElement("ul",{className:w()({dropdownMenu:r,whenResize:t})},l.a.createElement("li",{onClick:p},l.a.createElement(T.c,{exact:!0,to:"/"},v("HOME_MENU_TEXT"))),l.a.createElement("li",{onClick:p},l.a.createElement("a",{href:"#leistungen"},v("SERVICE_MENU_TEXT"))),o.map((function(e){return l.a.createElement("li",{className:"child",onClick:p},l.a.createElement(T.c,{to:"/services/".concat(e.alias)},e.title))})),l.a.createElement("li",{onClick:p},l.a.createElement(T.c,{to:"/contact"},v("CONTACT_MENU_TEXT"))),l.a.createElement("li",{onClick:p},l.a.createElement(T.c,{to:"/booking"},v("BOOKING_MENU_TEXT"))),l.a.createElement("li",{onClick:p},l.a.createElement(T.c,{to:"/confidentiality"},v("DATA_PROTECTION_MENU_TEXT"))),l.a.createElement(H,null)):l.a.createElement("ul",{onMouseLeave:function(e){d("")},className:w()("dropdownMenu",E)},o.map((function(e){return l.a.createElement("li",{onClick:N},l.a.createElement(T.c,{to:"/services/".concat(e.alias)},e.title))})),l.a.createElement(H,null)))},U=(a(334),a(335),a(240)),z=function(e){var t=e.bgColor,a=e.textData,n=e.listStyle,r=e.className;return l.a.createElement(U.Animated,{animationIn:"zoomIn",animationOut:"zoomOut",isVisible:!0,className:"inforCardContent"},l.a.createElement("div",{className:w()("InfoCard",r)}),l.a.createElement("ul",{style:{backgroundColor:t,listStyleType:n||"none",paddingLeft:n?"15px":"0"}},l.a.createElement("div",{className:"info_content"},a)))},W=a(40),Y=a(57),V=a.n(Y),J=(a(379),function(){var e=p().state,t=e.texts,a=e.servicePages,r=Object(n.useState)(!1),c=Object(f.a)(r,2),i=c[0],s=c[1],o=Object(n.useState)(!1),m=Object(f.a)(o,2),u=m[0],E=m[1],d=function(e){return t.find((function(t){return t.key===e})).text},v=function(){s(!i)},N=function(){window.scrollY>10?E(!0):E(!1)};return Object(n.useEffect)((function(){window.addEventListener("scroll",N)})),l.a.createElement("div",{className:w()("flexible jBetween Header pageContent aCenter",{showOrNot:u})},l.a.createElement(T.b,{to:"/"},l.a.createElement("div",null,l.a.createElement(k,{src:V.a,className:"headerLogo"}))),l.a.createElement("div",{className:"container purple topBotomBordersIn flexible aCenter"},l.a.createElement("ul",{className:"flexible"},l.a.createElement("div",{className:"contentSecondLi"},l.a.createElement("li",null,l.a.createElement(T.c,{exact:!0,to:"/"},d("HOME_MENU_TEXT")))),l.a.createElement("div",{className:"contentSecondLi"},l.a.createElement("li",null,l.a.createElement("a",{href:"#leistungen"},d("SERVICE_MENU_TEXT"),l.a.createElement(W.a,{className:"FaChevronDown"})),l.a.createElement(F,{texts:t,options:a,onClick:v,opened:i,show:!0}))),l.a.createElement("div",{className:"contentSecondLi"},l.a.createElement("li",null,l.a.createElement(T.c,{to:"/contact"},d("CONTACT_MENU_TEXT")))),l.a.createElement("div",{className:"contentSecondLi"},l.a.createElement("li",null,l.a.createElement(T.c,{to:"/booking"},d("BOOKING_MENU_TEXT")))),l.a.createElement("div",{className:"contentSecondLi"},l.a.createElement("li",null,l.a.createElement(T.c,{to:"/confidentiality"},d("DATA_PROTECTION_MENU_TEXT"))))),l.a.createElement(H,{onClick:v}),l.a.createElement(F,{texts:t,onClick:v,opened:!0,whenResize:!0,options:a,className:i})))}),Z=(a(380),function(){var e=p().state.texts,t=function(t){return e.find((function(e){return e.key===t})).text};return l.a.createElement("div",{className:"Footer"},l.a.createElement("div",{className:"size"},l.a.createElement("div",{className:"flexible jBetween footResp"},l.a.createElement("div",{className:"flexible vertical footRight aCenter"},l.a.createElement(k,{src:V.a,className:"footerImage"}),l.a.createElement("div",{className:"flexible footIconParent jCenter"},l.a.createElement("a",{href:"mailto:info@lanush.de"},l.a.createElement(W.b,{className:"envelopeIcon"})),l.a.createElement("a",{href:"https://www.facebook.com/lanushmuc/"},l.a.createElement(W.c,{className:"faceIcon"})),l.a.createElement("a",{href:"https://www.instagram.com/explore/locations/736888283166177/lanush-haarentfernung-laser-beauty-center/"},l.a.createElement(W.d,{className:"instaIcon"})))),l.a.createElement("div",{className:"flexible aCenter jCenter grow footLeft"},l.a.createElement("div",{className:"flexible vertical footerText",style:{textAlign:"center"}},l.a.createElement("span",null,t("CONTACT_ADDRESS_TEXT")),l.a.createElement("span",null,t("CONTACT_TELEPHONE_TEXT")),l.a.createElement("span",null,t("CONTACT_MOBILE_TEXT")),l.a.createElement("a",{href:"mailto:info@lanush.de"},t("CONTACT_EMAIL_TEXT"))))),l.a.createElement("div",{className:"flexible jCenter lastText"},l.a.createElement("p",{style:{marginTop:"20px"}},"\xa9 Copyright \u2013 La\u2018Nush"))))}),$=(a(381),function(e){var t=e.selected,a=e.disabled,r=e.onChange,c=Object(n.useState)(!1),i=Object(f.a)(c,2);i[0],i[1];return l.a.createElement("div",{onClick:function(e){a||r(e)}},l.a.createElement("div",{className:w()("radio flexible jCenter aCenter",{radioDisabled:a,radioCheck:t})},l.a.createElement("div",{className:w()("radioContent",{radioContentDisabled:a,checkRadioContent:t})})))}),q=(a(382),function(e){var t=e.selected,a=e.time,n=e.disabled,r=e.onChange;return l.a.createElement("div",{className:w()("date flexible jCenter",{dateOpacity:n})},l.a.createElement($,{disabled:n,selected:t,onChange:r}),l.a.createElement("span",null,a,l.a.createElement("div",{className:w()({timeLine:n})})))}),Q=(a(383),new x.a.Parser),ee=function(e){var t=e.page,a=t.title,n=t.subTitle,r=t.description,c=t.image,i=t.points,s=t.prices,o=function(e){return Q.parse(e).map((function(e){return"p"!==e.type||e.props.children?e:l.a.createElement("p",null," \xa0 ")}))};return l.a.createElement("article",{className:"ElectricEpilation"},l.a.createElement(O.a,null,l.a.createElement("title",null,a," | Laser & Beauty center")),l.a.createElement("section",{className:"size"},l.a.createElement("div",{className:"sectionsTitleBlock"},l.a.createElement("p",{className:"sectionsGoldStyle"},a),l.a.createElement("p",{className:"sectionsTitleSmallGold"},n),l.a.createElement("p",{className:"secondaryGrey",dangerouslySetInnerHTML:{__html:r}})),c&&"undefined"!==c&&l.a.createElement("div",{className:"imageContent flexible jCenter"},l.a.createElement(k,{src:"/".concat(c),width:"100%",height:"250px"})),Object(X.a)(i).sort((function(e,t){return t.order-e.order})).map((function(e){return l.a.createElement("div",{className:"row flexible aStart jBetween"},l.a.createElement(K,{lineStyle:"1px solid rgb(166, 129, 91)",headTitle:e.title,className:"lineTextWidth",width:""}),l.a.createElement(z,{textData:o(e.description),bgColor:"rgba(236,204,164,0.41)"}))})),l.a.createElement("div",{className:"shelackPrices"},Object(X.a)(s).sort((function(e,t){return t.order-e.order})).map((function(e){return l.a.createElement("div",{style:{marginBottom:27,marginTop:27}},l.a.createElement(K,{heading:!!e.data.length,lineStyle:"1px solid",headTitle:e.title,textColor:" rgb(166, 129, 91)",flexName:"flexible grow ",style:{marginTop:20},width:"100%"}),Object(X.a)(e.data).sort((function(e,t){return t.order-e.order})).map((function(e){return l.a.createElement(K,{lineStyle:"1px dashed",textTitleLeft:o(e.description),textTitleRight:e.price>0?"".concat(e.price," \u20ac"):null,flexName:"flexible jBetween aCenter",width:"100%"})})))})))))},te=(a(384),new x.a.Parser),ae=function(){var e=p().state.texts,t=te.parse(e.find((function(e){return"DATA_PROTECTION_DESCRIPTION"===e.key})).text).map((function(e){return"p"!==e.type||e.props.children?e:l.a.createElement("p",null," \xa0 ")}));return l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement(O.a,null,l.a.createElement("title",null,"Datenschutz | Laser & Beauty center")),l.a.createElement("div",{className:"dataParent"},l.a.createElement("div",{className:"conf-title-parent flexible vertical aCenter jCenter"},l.a.createElement("span",{className:"title"},"Datenschutz")),l.a.createElement("div",{className:"text-container"},t)))},ne=a(8),le=a(9),re=a(72),ce=a(69),ie=a(70),se=a(68),oe=a(73),me=Object(se.compose)(Object(se.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA2VEv31f9riUUSVUz1S8tWITJl-0yp_9U&v=3.exp&libraries=geometry,drawing,places",loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"100%"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}})}),oe.withScriptjs,oe.withGoogleMap)((function(e){return l.a.createElement(oe.GoogleMap,{defaultZoom:18,defaultCenter:{lat:48.13768415070393,lng:11.52958550490439}},e.isMarkerShown&&l.a.createElement(oe.Marker,{position:{lat:48.13768415070393,lng:11.52958550490439}}))})),ue=function(e){function t(){return Object(ne.a)(this,t),Object(re.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(ie.a)(t,e),Object(le.a)(t,[{key:"render",value:function(){return l.a.createElement(me,{isMarkerShown:!0,className:"google-map"})}}]),t}(n.Component),Ee=(a(568),function(){var e=p().state.texts,t=function(t){return e.find((function(e){return e.key===t})).text};return l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement(O.a,null,l.a.createElement("title",null,t("CONTACT_HEADER_TEXT")," | La Nush | Laser & Beauty center")),l.a.createElement("div",{className:"dataParent flexible jBetween vertical"},l.a.createElement("div",{className:"flexible jBetween contactParent"},l.a.createElement("div",{className:"map-parent"},l.a.createElement(ue,null)),l.a.createElement("div",{className:"flexible vertical  grow aCenter"},l.a.createElement("span",{className:"contact-title"},t("CONTACT_HEADER_TEXT")),l.a.createElement(k,{className:"contactImage",src:V.a}),l.a.createElement("div",{className:"flexible vertical contact-info"},l.a.createElement("span",null,t("CONTACT_ADDRESS_TEXT")),l.a.createElement("span",null,t("CONTACT_TELEPHONE_TEXT")),l.a.createElement("span",null,t("CONTACT_MOBILE_TEXT")),l.a.createElement("a",{href:"mailto:info@lanush.de"},t("CONTACT_EMAIL_TEXT"))),l.a.createElement("div",{className:"flexible vertical  infoMiddleParent"},l.a.createElement("span",{className:"info-middle"},t("CONTACT_ARRIVAL_TITLE")),l.a.createElement("span",{dangerouslySetInnerHTML:{__html:t("CONTACT_ARRIVAL_DESCRIPTION_TEXT")}})))),l.a.createElement("div",{className:"flexible jCenter vertical aCenter"},l.a.createElement("span",{className:"title"},t("CONTACT_FORM_TITLE")),l.a.createElement("div",{className:"user-contact-block flexible vertical aCenter"},l.a.createElement("input",{type:"text",placeholder:t("CONTACT_FORM_NAME_TEXT"),className:"user-contact-info"}),l.a.createElement("input",{type:"email",placeholder:t("CONTACT_FORM_EMAIL_TEXT"),className:"user-contact-info"}),l.a.createElement("input",{type:"text",placeholder:t("CONTACT_FORM_PHONE_TEXT"),className:"user-contact-info"}),l.a.createElement("input",{type:"text",placeholder:t("CONTACT_FORM_MESSAGE_TEXT"),className:"user-contact-info"}),l.a.createElement("div",{className:"flexible jEnd button-parent"},l.a.createElement("button",{className:"button"},"Send"))))))}),de=function(e){return e.loading?l.a.createElement("div",{style:{flex:1,display:"flex",height:"100%",justifyContent:"center",flexDirection:"column",paddingTop:"30px",width:"100%",textAlign:"center",alignItems:"center",backgroundColor:"#666"}},l.a.createElement(b.a,{size:120,spinnerColor:"#a6815b",spinnerWidth:2,visible:!0})):l.a.createElement("div",{style:{paddingTop:"30px"}},l.a.createElement("p",null,"Vielen Dank! Ihre Buchung ist abgeschlossen. Sie haben eine E-Mail mit Details zu Ihrer Buchung erhalten."))},pe=a(34),fe=a.n(pe),ve=a(243),Ne=a.n(ve);a(234);function be(e,t){var a=!1;return t.forEach((function(t){var n=t.startDate,l=t.endDate,r=fe()(n),c=fe()(l);e.isBetween(r,c)&&(a=!0)})),a}fe.a.extend(Ne.a);var Te=function(e){var t=e.onChange,a=e.services,r=e.toggleService,c=e.total,i=e.subTotal,s=e.schedules,o=e.workers,m=e.serviceIds,u=e.changeTime,E=e.changeWorker,d=e.texts,p=Object(n.useState)(null),v=Object(f.a)(p,2),N=v[0],b=v[1],T=Object(n.useState)(null),h=Object(f.a)(T,2),x=h[0],g=h[1],O=function(e){return d.find((function(t){return t.key===e})).text},C=function(e){var t=[],a=!0,n=30,r=e.hour(9).minute(30).second(0),c=function(){var e=fe()(r.add(n,"m").format());t.push(l.a.createElement(q,{onChange:function(){return function(e){g(e),u(e)}(e)},selected:x&&x.format()===r.add(n,"m").format(),disabled:be(r.add(n,"m"),s),time:r.add(n,"m").format("HH:mm")})),19===r.add(n,"m").hour()&&(a=!1),6===r.day()&&14===r.add(n,"m").hour()&&(a=!1),n+=30};do{c()}while(a);return t},_=Object(n.useMemo)((function(){for(var e=[],t=fe()(),a=0;a<8;a++)0===t.day()?a--:e.push(t),t=t.add(1,"d");return e}),[]);return l.a.createElement("div",{className:"booking-select-service"},l.a.createElement("div",{style:{paddingTop:"30px"}},l.a.createElement("span",{className:"booking-service-title"},O("BOOKING_SELECT_SERVICE_TEXT"),":")),a.map((function(e){return e.services.length>0&&l.a.createElement("div",{className:"category"},l.a.createElement("div",null,l.a.createElement("p",{className:"active-color"},e._doc.title),e.services.map((function(e){return l.a.createElement(D,{onClick:function(){return r(e._id)},service:e.title,price:"".concat(e.price," \u20ac")})}))))})),l.a.createElement("div",{className:"category"},l.a.createElement("div",null,l.a.createElement("p",{className:"active-color"},O("BOOKING_TOTAL_TEXT"),":",l.a.createElement("span",{style:{float:"right"}},l.a.createElement("span",{style:{textDecoration:"line-through",fontSize:16}},i," \u20ac "),c," \u20ac")))),l.a.createElement("div",{className:"category"},l.a.createElement("div",null,l.a.createElement("p",{className:"active-color"},O("BOOKING_EMPLOYEE_TEXT")),l.a.createElement("div",{className:w()("BookItem flexible aCenter jBetween",{actBook:null===N}),onClick:function(){return b(null)}},l.a.createElement("div",{className:"flexible aCenter"},l.a.createElement("div",{className:w()("itemIcon flexible aCenter jCenter",{activeItemIcon:null===N})},null===N?l.a.createElement(R.a,{fill:"ghostWhite"}):null),l.a.createElement("span",{className:w()("itemFont flexible aCenter",{activeItemFont:null===N})},O("BOOKING_ANY_EMPLOYEE_TEXT")))),o.map((function(e){var t=e._id===N;return m.every((function(t){return e.serviceIds.indexOf(t)>-1}))?l.a.createElement("div",{className:w()("BookItem flexible aCenter jBetween",{actBook:t}),onClick:function(){return t=e._id,b(t),void E(t);var t}},l.a.createElement("div",{className:"flexible aCenter"},l.a.createElement("div",{className:w()("itemIcon flexible aCenter jCenter",{activeItemIcon:t})},t?l.a.createElement(R.a,{fill:"ghostWhite"}):null),l.a.createElement("span",{className:w()("itemFont flexible aCenter",{activeItemFont:t})},e.name))):null})))),l.a.createElement("div",{className:"book-second-step"},l.a.createElement("div",{className:"row flexible jBetween"},_.map((function(e){return l.a.createElement("div",{className:"column flexible vertical"},l.a.createElement("div",{className:"dateBlock active-block"},l.a.createElement("span",{className:"dateText"},e.format("ddd, MMM DD"))),C(e))}))),l.a.createElement("div",{style:{borderTop:"1px solid #666"},className:"flexible jEnd"},l.a.createElement("button",{className:w()("bookButton",{disabled:!m.length||!x}),onClick:t},O("BOOKING_NEXT_BUTTON_TEXT")))))},he=a(3),xe=["January","February","March","April","May","June","July","August","September","October","November","December"],ge=Object(X.a)(Array(31).keys()),Oe=Object(X.a)(Array(101).keys()),Ce=Number(fe()().year()),_e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,ye=function(e){var t=e.texts,a=e.onChange,r=e.onSubmit,c=e.worker,i=e.total,s=e.time,o=e.services,m=Object(n.useState)({name:"",lastName:"",phone:"",email:"",confirmEmail:"",post:"",city:"",address:"",homeNumber:"",additionalAddress:"",note:"",month:"",day:"",year:""}),u=Object(f.a)(m,2),E=u[0],d=u[1],p=Object(n.useState)({name:!1,lastName:!1,phone:!1,email:!1,confirmEmail:!1,post:!1,city:!1,address:!1,homeNumber:!1,additionalAddress:!1,note:!1,month:!1,day:!1,year:!1}),v=Object(f.a)(p,2),N=v[0],b=v[1],T=function(e){return t.find((function(t){return t.key===e})).text},h=function(e,t){d(Object(G.a)({},E,Object(he.a)({},e,t)))},x=T("BOOKING_SECOND_STEP_DESCRIPTION").split("{separator}");return l.a.createElement("div",{className:"flexible vertical",style:{paddingTop:"30px"}},l.a.createElement("div",{className:"flexible vertical"},l.a.createElement("p",null,x[0],x[0]&&l.a.createElement(l.a.Fragment,null,l.a.createElement("b",null,o.join(", "))," ",l.a.createElement("b",null,c?" by ":""," ",c)),x[1],x[1]&&l.a.createElement("b",null,s.format("HH:mm")," auf ",s.format("MMMM MM, YYYY")),x[2],x[2]&&l.a.createElement("b",null,"\u20ac",i),x[3]),l.a.createElement("div",{className:"flexible vertical"},l.a.createElement("form",null,l.a.createElement("div",{className:"flexible jBetween inputParent"},l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText "},T("BOOKING_FIRST_NAME_TEXT")),l.a.createElement("input",{name:"name",type:"text",className:w()("nameSname inputStyle mRight",{error:N.name}),value:E.name,onChange:function(e){return h("name",e.target.value)}})),l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_LAST_NAME_TEXT")),l.a.createElement("input",{name:"lastName",type:"text",className:w()("nameSname inputStyle",{error:N.lastName}),value:E.lastName,onChange:function(e){return h("lastName",e.target.value)}}))),l.a.createElement("div",{className:"inputParent flexible"},l.a.createElement("div",{className:"flexible grow vertical mRight"},l.a.createElement("p",{className:"inputText"},T("BOOKING_PHONE_TEXT")),l.a.createElement("input",{name:"phone",className:w()("logContacts inputStyle",{error:N.phone}),value:E.phone,onChange:function(e){return h("phone",e.target.value)}})),l.a.createElement("div",{className:"flexible grow vertical mRight"},l.a.createElement("p",{className:"inputText"},T("BOOKING_EMAIL_TEXT")),l.a.createElement("input",{name:"email",className:w()("logContacts inputStyle",{error:N.email}),value:E.email,onChange:function(e){return h("email",e.target.value)}})),l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_EMAIL_CONFIRM_TEXT")),l.a.createElement("input",{name:"confirmEmail",className:w()("logContacts inputStyle",{error:N.confirmEmail}),value:E.confirmEmail,onChange:function(e){return h("confirmEmail",e.target.value)}}))),l.a.createElement("p",{className:"booking-service-title"},T("BOOKING_ADDRESS_TEXT")),l.a.createElement("div",{className:"inputParent flexible"},l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_POST_TEXT")),l.a.createElement("input",{name:"post",type:"text",className:w()("geo inputStyle",{error:N.post}),value:E.post,onChange:function(e){return h("post",e.target.value)}}))),l.a.createElement("div",{className:"inputParent flexible"},l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_CITY_TEXT")),l.a.createElement("input",{name:"city",type:"text",className:w()("geo inputStyle",{error:N.city}),value:E.city,onChange:function(e){return h("city",e.target.value)}}))),l.a.createElement("div",{className:"inputParent flexible"},l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_ADDRESS_TEXT")),l.a.createElement("input",{name:"address",type:"text",className:w()("geo inputStyle",{error:N.address}),value:E.address,onChange:function(e){return h("address",e.target.value)}}))),l.a.createElement("div",{className:"inputParent flexible"},l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_HOME_NUMBER_TEXT")),l.a.createElement("input",{name:"homeNumber",type:"text",className:w()("geo inputStyle",{error:N.homeNumber}),value:E.homeNumber,onChange:function(e){return h("homeNumber",e.target.value)}}))),l.a.createElement("div",{className:"inputParent flexible"},l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("p",{className:"inputText"},T("BOOKING_ADDITIONAL_ADDRESS_TEXT")),l.a.createElement("input",{name:"additionalAddress",type:"text",className:w()("geo inputStyle",{error:N.additionalAddress}),value:E.additionalAddress,onChange:function(e){return h("additionalAddress",e.target.value)}}))),l.a.createElement("div",{className:"inputParent flexible aEnd"},l.a.createElement("div",{className:"flexible grow vertical mRight"},l.a.createElement("p",{className:"inputText"},T("BOOKING_BIRTHDAY_TEXT")),l.a.createElement("select",{className:w()("selectStyle",{error:N.month}),style:{marginRight:"15px"},value:E.month,onChange:function(e){return h("month",e.target.value)}},l.a.createElement("option",{value:""},T("BOOKING_CHOOSE_MONTH_TEXT")),xe.map((function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement("div",{className:"flexible grow vertical mRight"},l.a.createElement("select",{className:w()("selectStyle",{error:N.day}),style:{marginRight:"15px"},value:E.day,onChange:function(e){return h("day",e.target.value)}},l.a.createElement("option",{value:""},T("BOOKING_SELECT_DAY_TEXT")),ge.map((function(e){return l.a.createElement("option",{value:e+1},e+1)})))),l.a.createElement("div",{className:"flexible grow vertical"},l.a.createElement("select",{className:w()("selectStyle",{error:N.year}),value:E.year,onChange:function(e){return h("year",e.target.value)}},l.a.createElement("option",{value:""}," ",T("BOOKING_SELECT_YEAR_TEXT")),Oe.map((function(e){return l.a.createElement("option",{value:Ce-e},Ce-e)}))))),l.a.createElement("div",{className:"inputParent"},l.a.createElement("p",{className:"inputText"},T("BOOKING_NOTE_TEXT")),l.a.createElement("textarea",{name:"note",className:w()("bookTextArea",{error:N.note}),value:E.note,onChange:function(e){return h("note",e.target.value)}})),l.a.createElement("div",{className:"buttonsParent flexible jBetween"},l.a.createElement("button",{className:"bookButton",onClick:function(){return a("dec")}},T("BOOKING_BACK_BUTTON_TEXT")),l.a.createElement("button",{className:"bookButton",onClick:function(e){e.stopPropagation(),e.preventDefault();var t=Object(G.a)({},N),a=!0;for(var n in E)"note"===n||"additionalAddress"===n||E[n]||(t[n]=!0,a=!1),"email"!==n||_e.test(E[n].toLowerCase())||(t.email=!0,a=!1),E.email&&"confirmEmail"===n&&E[n]!==E.email&&(t.confirmEmail=!0,a=!1);if(a){E.confirmEmail;var l=E.day,c=E.year,i=E.month,s=Object(j.a)(E,["confirmEmail","day","year","month"]),o=fe()("".concat(i,"-").concat(l,"-").concat(c)).toDate();r(Object(G.a)({},s,{birthday:o}))}else b(t)}},T("BOOKING_NEXT_BUTTON_TEXT")))))))},je={2:15,3:20,4:25,5:30,6:40};var Se=function(){var e=p(),t=e.state,a=t.texts,r=t.services,c=t.schedules,i=t.workers,s=e.actions.addSchedule,o=Object(n.useState)(!1),m=Object(f.a)(o,2),u=m[0],E=m[1],d=Object(n.useState)(1),v=Object(f.a)(d,2),N=v[0],b=v[1],T=Object(n.useState)([]),h=Object(f.a)(T,2),x=h[0],g=h[1],C=Object(n.useState)(null),_=Object(f.a)(C,2),y=_[0],j=_[1],S=Object(n.useState)(null),k=Object(f.a)(S,2),I=k[0],B=k[1],A=function(e){return a.find((function(t){return t.key===e})).text},M=function(e){var t=x.some((function(t){return t===e}));g(t?function(t){return t.filter((function(t){return t!==e}))}:[].concat(Object(X.a)(x),[e]))},L=function(e){return b("dec"===e?N-1:N+1)},P=function(e){E(!0),L(),s({user:e,total:D,serviceIds:x,worker:I,time:y.toJSON()}).then((function(){E(!1)})).catch(console.log)},R=x.reduce((function(e,t){var a=0;return r.forEach((function(e){e.services.forEach((function(e){e._id===t&&(a=e.price)}))})),e+a}),0),D=x.length<2?R:function(e,t){return je[e]?Math.ceil(t-t*je[e]/100):Math.ceil(t-t*je[6]/100)}(x.length,R),G=i.find((function(e){return e._id===I})),K=[];r.forEach((function(e){e.services.forEach((function(e){x.includes(e._id)&&K.push(e.title)}))}));return l.a.createElement("div",{className:"flexible jCenter"},l.a.createElement(O.a,null,l.a.createElement("title",null,"Termin Buchen | La Nush | Laser & Beauty center")),l.a.createElement("div",{className:"dataParent"},l.a.createElement("div",{className:"data-services flexible jBetween"},l.a.createElement("div",{className:"flexible vertical jCenter grow active-block "},l.a.createElement("span",{className:"middle-text"},"1. ",A("BOOKING_FIRST_STEP")),l.a.createElement("div",{className:w()("bookStep",{activeStep:1===N})})),l.a.createElement("div",{className:"flexible vertical jCenter grow active-block"},l.a.createElement("span",{className:"middle-text"},"2. ",A("BOOKING_SECOND_STEP")),l.a.createElement("div",{className:w()("bookStep",{activeStep:2===N})})),l.a.createElement("div",{className:"flexible vertical jCenter grow active-block"},l.a.createElement("span",{className:"middle-text"},"3. ",A("BOOKING_THIRD_STEP")),l.a.createElement("div",{className:w()("bookStep",{activeStep:3===N})}))),1===N?l.a.createElement(Te,{texts:a,serviceIds:x,workers:i,schedules:c,total:D,subTotal:R,onChange:L,changeTime:j,changeWorker:B,services:r,toggleService:M}):2===N?l.a.createElement(ye,{texts:a,worker:G?G.name:null,services:K,time:y,total:D,onChange:L,onSubmit:P}):l.a.createElement(de,{loading:u,texts:a})))};function we(){var e=p(),t=e.state.servicePages,a=e.actions,r=a.getSliders,c=a.getTexts,i=a.getServices,s=a.getWorkers,o=a.getSchedules,m=a.getServicePages,u=Object(n.useState)(!0),E=Object(f.a)(u,2),d=E[0],N=E[1];return Object(n.useEffect)((function(){N(!0),Promise.all([r(),c(),i(),s(),o(),m()]).then((function(){return N(!1)}))}),[r,c,i,s,m]),d?l.a.createElement("div",{style:{flex:1,display:"flex",height:"100%",justifyContent:"center",flexDirection:"column",width:"100%",textAlign:"center",alignItems:"center",backgroundColor:"#666"}},l.a.createElement(b.a,{size:120,spinnerColor:"#a6815b",spinnerWidth:2,visible:!0})):l.a.createElement(l.a.Fragment,null,l.a.createElement(J,null),l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/",component:P}),l.a.createElement(v.a,{exact:!0,path:"/booking",component:Se}),l.a.createElement(v.a,{exact:!0,path:"/contact",component:Ee}),l.a.createElement(v.a,{exact:!0,path:"/confidentiality",component:ae}),t.map((function(e){return l.a.createElement(v.a,{exact:!0,path:"/services/".concat(e.alias),component:function(t){return l.a.createElement(ee,Object.assign({page:e},t))}})}))),l.a.createElement(Z,null))}var ke=function(){return l.a.createElement(i.a,{value:d},l.a.createElement(we,null))};c.a.render(l.a.createElement(T.a,null,l.a.createElement(ke,null)),document.getElementById("root"))},57:function(e,t,a){e.exports=a.p+"static/media/logo.53d0277e.png"},61:function(e,t,a){}},[[244,1,2]]]);
//# sourceMappingURL=main.cd9869cf.chunk.js.map