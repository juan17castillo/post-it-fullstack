(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{370:function(e,t,a){},371:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(18),c=a.n(r),s=a(15),i=a(76),o=a(185),l=a(21),u=a(7),d="CREATE",j="UPDATE",p="DELETE",b="FETCH_ALL",m="FETCH_POST",O="FETCH_POSTS_BY_USER",h="FETCH_BY_SEARCH",x="LIKE",g="START_LOADING",f="END_LOADING",v="AUTH",y="RESET_PASSWORD",C="GET_USERS",w="AUTH_ERROR",S="DELETE_USER",k="LOGOUT",N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null,message:null,users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return localStorage.setItem("profile",JSON.stringify(Object(u.a)({},null===t||void 0===t?void 0:t.data))),Object(u.a)(Object(u.a)({},e),{},{authData:t.data});case w:return Object(u.a)(Object(u.a)({},e),{},{message:t.errorMessage});case C:return Object(u.a)(Object(u.a)({},e),{},{users:t.payload});case S:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.data.filter((function(e){return e._id!==t.payload}))});case y:return Object(u.a)(Object(u.a)({},e),{},{authData:t.data,message:null});case k:return localStorage.clear(),Object(u.a)(Object(u.a)({},e),{},{authData:null,message:null,users:null});default:return e}},I=Object(i.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[],postsByUser:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0});case f:return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1});case b:return Object(u.a)(Object(u.a)({},e),{},{posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages});case h:return Object(u.a)(Object(u.a)({},e),{},{posts:t.payload});case O:return Object(u.a)(Object(u.a)({},e),{},{postsByUser:t.payload.data});case m:return Object(u.a)(Object(u.a)({},e),{},{post:t.payload});case x:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case d:return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(l.a)(e.posts),[t.payload])});case j:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case p:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload}))});default:return e}},auth:N}),_=a(410),E=a(29),T=a(22),D=a(13),B=a(400),A=a(401),R=a(430),L=a(136),P=a(402),F=a(186),W=a(12),H=a(397),U=a(399),J=Object(H.a)((function(e){return{appBar:Object(W.a)({borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},e.breakpoints.down("sm"),{flexDirection:"column"}),heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"10px",marginTop:"5px"},toolbar:Object(W.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:Object(W.a)({display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center"},e.breakpoints.down("sm"),{width:"auto",marginTop:20,justifyContent:"center"}),logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(U.a[500]),backgroundColor:U.a[500]}}})),M=a.p+"static/media/PostItLogo.816d0e33.png",z=a.p+"static/media/PostItBrand.bf9b584a.png",G=a(2),q=function(){var e=J(),t=Object(s.b)(),a=Object(T.g)(),r=Object(T.h)(),c=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),i=Object(D.a)(c,2),o=i[0],l=i[1];Object(n.useEffect)((function(){var e=null===o||void 0===o?void 0:o.token;e&&(1e3*Object(F.a)(e).exp<(new Date).getTime()&&d());l(JSON.parse(localStorage.getItem("profile")))}),[r]);var u=function(){a.push("/user/".concat(o.result._id))},d=function(){t({type:"LOGOUT"}),a.push("/"),l(null)};return Object(G.jsxs)(B.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(G.jsxs)(E.b,{to:"/",className:e.brandContainer,children:[Object(G.jsx)("img",{className:e.image,src:M,alt:"icon",height:"65px"}),Object(G.jsx)("img",{src:z,alt:"icon",height:"60px"})]}),Object(G.jsx)(A.a,{className:e.toolbar,children:o?Object(G.jsxs)("div",{className:e.profile,children:[Object(G.jsx)(R.a,{className:e.purple,alt:o.result.name,src:o.result.imageUrl,onClick:u,children:o.result.name.charAt(0)}),Object(G.jsx)(L.a,{className:e.userName,variant:"h6",onClick:u,children:o.result.name}),Object(G.jsx)(P.a,{variant:"contained",className:e.logout,color:"secondary",onClick:d,children:"Cerrar sesi\xf3n"})]}):Object(G.jsx)(P.a,{component:E.b,to:"/auth",variant:"contained",color:"primary",children:"Iniciar sesi\xf3n"})})]})},V=a(409),Q=a(408),K=a(426),X=a(205),Y=a(191),Z=a.n(Y),$=a(11),ee=a.n($),te=a(24),ae=a(192),ne=a.n(ae).a.create({baseURL:"https://postit-juan17castillo.herokuapp.com/"});ne.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var re=function(e){return ne.get("/posts?page=".concat(e))},ce=function(e){return ne.get("posts/".concat(e))},se=function(e){return ne.get("/posts/creator/".concat(e))},ie=function(e){return ne.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags))},oe=function(e){return ne.patch("/posts/".concat(e,"/likePost"))},le=function(e,t){return ne.patch("/posts/".concat(e),t)},ue=function(e){return ne.delete("/posts/".concat(e))},de=function(e){return ne.post("/user/signin",e)},je=function(e){return ne.post("/user/signup",e)},pe=function(e,t){return ne.put("/user/".concat(e),t)},be=function(e){return ne.delete("/user/".concat(e))},me=function(e){return function(){var t=Object(te.a)(ee.a.mark((function t(a){var n,r;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:g}),t.next=4,ie(e);case 4:n=t.sent,r=n.data.data,a({type:h,payload:r}),a({type:f}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},Oe=function(e,t){return function(){var a=Object(te.a)(ee.a.mark((function a(n){var r,c;return ee.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:g}),a.next=4,s=e,ne.post("/posts",s);case 4:r=a.sent,c=r.data,t.push("/posts/".concat(c._id)),n({type:d,payload:c}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}var s}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},he=function(e,t){return function(){var a=Object(te.a)(ee.a.mark((function a(n){var r,c;return ee.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,le(e,t);case 3:r=a.sent,c=r.data,n({type:j,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},xe=a(407),ge=a(403),fe=a(207),ve=a(404),ye=a(405),Ce=a(406),we=a(193),Se=a.n(we),ke=a(106),Ne=a.n(ke),Ie=a(194),_e=a.n(Ie),Ee=a(134),Te=a.n(Ee),De=a(54),Be=a.n(De),Ae=Object(H.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}}),Re=function(e){var t,a,n,r,c=e.post,i=e.setCurrentId,o=Object(s.b)(),l=Ae(),u=JSON.parse(localStorage.getItem("profile")),d=Object(T.g)(),j=function(){var e;return(null===c||void 0===c||null===(e=c.likes)||void 0===e?void 0:e.length)>0?c.likes.find((function(e){var t,a;return e===((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)||(null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a._id))}))?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(Se.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"T\xfa y ".concat(c.likes.length-1," otros"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")]}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(Te.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"ME GUSTA":"Likes"]}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(Te.a,{fontSize:"small"}),"\xa0Me gusta"]})};return Object(G.jsxs)(ge.a,{className:l.card,raised:!0,elevation:6,children:[Object(G.jsxs)(fe.a,{component:"span",name:"test",className:l.cardAction,onClick:function(){d.push("/posts/".concat(c._id))},children:[Object(G.jsx)(ve.a,{className:l.media,image:c.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:c.title}),Object(G.jsxs)("div",{className:l.overlay,children:[Object(G.jsx)(L.a,{variant:"h6",children:c.name}),Object(G.jsx)(L.a,{variant:"body2",children:Be()(c.createdAt).fromNow()})]}),((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a._id)===(null===c||void 0===c?void 0:c.creator))&&Object(G.jsx)("div",{className:l.overlay2,name:"edit",children:Object(G.jsx)(P.a,{onClick:function(e){e.stopPropagation(),i(c._id)},style:{color:"white"},size:"small",children:Object(G.jsx)(_e.a,{fontSize:"default"})})}),Object(G.jsx)("div",{className:l.details,children:Object(G.jsx)(L.a,{variant:"body2",color:"textSecondary",component:"h2",children:c.tags.map((function(e){return"#".concat(e," ")}))})}),Object(G.jsx)(L.a,{className:l.title,gutterBottom:!0,variant:"h5",component:"h2",children:c.title}),Object(G.jsx)(ye.a,{children:Object(G.jsxs)(L.a,{variant:"body2",color:"textSecondary",component:"p",children:[c.message.split(" ").splice(0,20).join(" "),"..."]})})]}),Object(G.jsxs)(Ce.a,{className:l.cardActions,children:[Object(G.jsx)(P.a,{size:"small",color:"primary",disabled:!(null===u||void 0===u?void 0:u.result),onClick:function(){return o((e=c._id,function(){var t=Object(te.a)(ee.a.mark((function t(a){var n,r,c;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,oe(e,null===n||void 0===n||n.token);case 4:r=t.sent,c=r.data,a({type:x,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(G.jsx)(j,{})}),((null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(r=u.result)||void 0===r?void 0:r._id)===(null===c||void 0===c?void 0:c.creator))&&Object(G.jsxs)(P.a,{size:"small",color:"secondary",onClick:function(){return o((e=c._id,function(){var t=Object(te.a)(ee.a.mark((function t(a){return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ue(e);case 3:a({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(G.jsx)(Ne.a,{fontSize:"small"})," \xa0 Eliminar"]})]})]})},Le=Object(H.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),Pe=function(e){var t=e.setCurrentId,a=Object(s.c)((function(e){return e.posts})),n=a.posts,r=a.isLoading,c=Le();return n.length||r?r?Object(G.jsx)(xe.a,{}):Object(G.jsx)(Q.a,{className:c.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(G.jsx)(Q.a,{item:!0,xs:12,sm:12,md:6,lg:3,children:Object(G.jsx)(Re,{post:e,setCurrentId:t})},e._id)}))}):Object(G.jsx)(L.a,{variant:"h6",color:"primary",children:"No se encontraron posts"})},Fe=a(195),We=a.n(Fe),He=Object(H.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2),borderRadius:"15px"},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Ue=function(e){var t,a=e.currentId,r=e.setCurrentId,c=Object(n.useState)({title:"",message:"",tags:[],selectedFile:""}),i=Object(D.a)(c,2),o=i[0],l=i[1],d=Object(s.c)((function(e){return a?e.posts.posts.find((function(e){return e._id===a})):null})),j=Object(s.b)(),p=He(),b=JSON.parse(localStorage.getItem("profile")),m=Object(T.g)(),O=function(){r(0),l({title:"",message:"",tags:[],selectedFile:""})};Object(n.useEffect)((function(){(null===d||void 0===d?void 0:d.title)||O(),d&&l(d)}),[d]);var h=function(){var e=Object(te.a)(ee.a.mark((function e(t){var n,r;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(j(Oe(Object(u.a)(Object(u.a)({},o),{},{name:null===b||void 0===b||null===(n=b.result)||void 0===n?void 0:n.name}),m)),O()):(j(he(a,Object(u.a)(Object(u.a)({},o),{},{name:null===b||void 0===b||null===(r=b.result)||void 0===r?void 0:r.name}))),O());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===b||void 0===b||null===(t=b.result)||void 0===t?void 0:t.name)?Object(G.jsx)(X.a,{className:p.paper,elevation:6,children:Object(G.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:h,children:[Object(G.jsx)(L.a,{variant:"h6",children:a?'Editando "'.concat(d.title,'"'):"Comparte un mensaje"}),Object(G.jsx)(K.a,{name:"title",variant:"outlined",label:"Ponle un titulo",fullWidth:!0,value:o.title,onChange:function(e){return l(Object(u.a)(Object(u.a)({},o),{},{title:e.target.value}))}}),Object(G.jsx)(K.a,{name:"message",variant:"outlined",label:"\xbfEn qu\xe9 est\xe1s pensando?",fullWidth:!0,multiline:!0,rows:4,value:o.message,onChange:function(e){return l(Object(u.a)(Object(u.a)({},o),{},{message:e.target.value}))}}),Object(G.jsx)(K.a,{name:"tags",variant:"outlined",label:"Tags (separalos con coma)",fullWidth:!0,value:o.tags,onChange:function(e){return l(Object(u.a)(Object(u.a)({},o),{},{tags:e.target.value.split(",")}))}}),Object(G.jsx)("div",{className:p.fileInput,children:Object(G.jsx)(We.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(u.a)(Object(u.a)({},o),{},{selectedFile:t}))}})}),Object(G.jsx)(P.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:a?"Editar":"Postear"}),Object(G.jsx)(P.a,{variant:"contained",color:"secondary",size:"small",onClick:O,fullWidth:!0,children:"Limpiar"})]})}):Object(G.jsx)(X.a,{className:p.paper,elevation:6,children:Object(G.jsx)(L.a,{variant:"h6",align:"center",children:"Inicia sesi\xf3n para interactuar y ser parte de Post it!"})})},Je=a(431),Me=a(428),ze=Object(H.a)((function(){return{ul:{justifyContent:"space-around"}}})),Ge=function(e){var t=e.page,a=Object(s.c)((function(e){return e.posts})).numberOfPages,r=Object(s.b)(),c=ze();return Object(n.useEffect)((function(){t&&r(function(e){return function(){var t=Object(te.a)(ee.a.mark((function t(a){var n,r;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:g}),t.next=4,re(e);case 4:n=t.sent,r=n.data,a({type:b,payload:r}),a({type:f}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[r,t]),Object(G.jsx)(Je.a,{classes:{ul:c.ul},count:a,page:Number(t)||1,variant:"outlined",color:"primary",renderItem:function(e){return Object(G.jsx)(Me.a,Object(u.a)(Object(u.a)({},e),{},{component:E.b,to:"/posts?page=".concat(e.page)}))}})},qe=Object(H.a)((function(e){return{appBarSearch:{borderRadius:"15px",marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:"15px",marginTop:"1rem",padding:"16px"},gridContainer:Object(W.a)({},e.breakpoints.down("xs"),{flexDirection:"column-reverse"})}}));var Ve=function(){var e=qe(),t=new URLSearchParams(Object(T.h)().search),a=t.get("page")||1,r=t.get("searchQuery"),c=Object(n.useState)(0),i=Object(D.a)(c,2),o=i[0],u=i[1],d=Object(s.b)(),j=Object(n.useState)(""),p=Object(D.a)(j,2),b=p[0],m=p[1],O=Object(n.useState)([]),h=Object(D.a)(O,2),x=h[0],g=h[1],f=Object(T.g)(),v=function(){b.trim()||x?(d(me({search:b,tags:x.join(",")})),f.push("/posts/search?searchQuery=".concat(b||"none","&tags=").concat(x.join(",")))):f.push("/")};return Object(G.jsx)(V.a,{in:!0,children:Object(G.jsx)(_.a,{maxWidth:"xl",children:Object(G.jsxs)(Q.a,{className:e.gridContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(G.jsx)(Q.a,{item:!0,xs:12,sm:6,md:9,children:Object(G.jsx)(Pe,{setCurrentId:u})}),Object(G.jsxs)(Q.a,{item:!0,xs:12,sm:6,md:3,children:[Object(G.jsxs)(B.a,{className:e.appBarSearch,position:"static",color:"inherit",children:[Object(G.jsx)(K.a,{name:"search",variant:"outlined",label:"Buscar posts",fullWidth:!0,value:b,onChange:function(e){return m(e.target.value)},onKeyPress:function(e){13===e.keyCode&&v()}}),Object(G.jsx)(Z.a,{style:{margin:"10px 0"},value:x,label:"Buscar tags",variant:"outlined",onAdd:function(e){return t=e,g([].concat(Object(l.a)(x),[t]));var t},onDelete:function(e){return t=e,g(x.filter((function(e){return e!==t})));var t}}),Object(G.jsx)(P.a,{onClick:v,className:e.searchButton,color:"primary",variant:"contained",children:"Buscar"})]}),Object(G.jsx)(Ue,{currentId:o,setCurrentId:u}),!r&&!x.length&&Object(G.jsx)(X.a,{className:e.pagination,elevation:6,children:Object(G.jsx)(Ge,{page:a})})]})]})})})},Qe=a(199),Ke=a.n(Qe),Xe=a(196),Ye=function(e,t){return function(){var a=Object(te.a)(ee.a.mark((function a(n){var r,c;return ee.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,pe(e,t);case 3:r=a.sent,c=r.data,n({type:y,data:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),n({type:w,errorMessage:a.t0.response.data.message});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},Ze=Object(H.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),$e=a(411),et=a(412),tt=a(197),at=a.n(tt),nt=a(198),rt=a.n(nt),ct=function(e){var t=e.name,a=e.handleChange,n=e.handleShowPassword,r=e.autoFocus,c=e.type,s=e.half,i=e.label;return Object(G.jsx)(Q.a,{item:!0,xs:12,sm:s?6:12,children:Object(G.jsx)(K.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:i,autoFocus:r,type:c,InputProps:"password"===t?{endAdornment:Object(G.jsx)($e.a,{position:"end",children:Object(G.jsx)(et.a,{onClick:n,children:"password"===c?Object(G.jsx)(at.a,{}):Object(G.jsx)(rt.a,{})})})}:null})})},st=function(){return Object(G.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(G.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},it={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},ot=function(){var e=Ze(),t=Object(n.useState)(!1),a=Object(D.a)(t,2),r=a[0],c=a[1],i=Object(s.c)((function(e){return e.auth.message})),o=Object(n.useState)(i),l=Object(D.a)(o,2),d=l[0],j=l[1],p=Object(n.useState)(!1),b=Object(D.a)(p,2),m=b[0],O=b[1],h=Object(n.useState)(it),x=Object(D.a)(h,2),g=x[0],f=x[1],y=Object(T.g)(),C=Object(s.b)();Object(n.useEffect)((function(){j(i)}),[i]);var S=function(e){f(Object(u.a)(Object(u.a)({},g),{},Object(W.a)({},e.target.name,e.target.value)))},k=function(){var e=Object(te.a)(ee.a.mark((function e(t){var a,n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null===t||void 0===t?void 0:t.profileObj,n=null===t||void 0===t?void 0:t.tokenId;try{C({type:"AUTH",data:{result:a,token:n}}),y.push("/")}catch(r){console.log("Google sign in was unsuccessful. Try again later")}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(G.jsx)(_.a,{component:"main",maxWidth:"xs",children:Object(G.jsxs)(X.a,{className:e.paper,elevation:3,children:[Object(G.jsx)(R.a,{className:e.avatar,children:Object(G.jsx)(Ke.a,{})}),Object(G.jsx)(L.a,{variant:"h5",children:m?"Crea una cuenta":"Iniciar sesi\xf3n"}),Object(G.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),C(m?function(e,t){return function(){var a=Object(te.a)(ee.a.mark((function a(n){var r,c;return ee.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,je(e);case 3:r=a.sent,c=r.data,n({type:v,data:c}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:w,errorMessage:a.t0.response.data.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(g,y):function(e,t){return function(){var a=Object(te.a)(ee.a.mark((function a(n){var r,c;return ee.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,de(e);case 3:r=a.sent,c=r.data,n({type:v,data:c}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:w,errorMessage:a.t0.response.data.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(g,y))},children:[Object(G.jsxs)(Q.a,{container:!0,spacing:2,children:[m&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(ct,{name:"firstName",label:"Nombre",handleChange:S,autoFocus:!0,half:!0}),Object(G.jsx)(ct,{name:"lastName",label:"Apellido",handleChange:S,half:!0})]}),Object(G.jsx)(ct,{name:"email",label:"Correo",handleChange:S,type:"email"}),Object(G.jsx)(ct,{name:"password",label:"Contrase\xf1a",handleChange:S,type:r?"text":"password",handleShowPassword:function(){return c((function(e){return!e}))}}),m&&Object(G.jsx)(ct,{name:"confirmPassword",label:"Confirma tu contrase\xf1a",handleChange:S,type:"password"})]}),d&&Object(G.jsx)(Q.a,{container:!0,spacing:2,style:{padding:"8px",paddingLeft:"90px"},children:Object(G.jsx)(L.a,{variant:"h6",color:"error",children:d})}),Object(G.jsx)(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:m?"Crear cuenta":"Iniciar sesi\xf3n"}),Object(G.jsx)(Xe.GoogleLogin,{clientId:"665372540588-i130mmeduir2vlg9clm5jmae9smibrpn.apps.googleusercontent.com",render:function(t){return Object(G.jsx)(P.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:Object(G.jsx)(st,{}),variant:"contained",children:"Inicia sesi\xf3n con Google"})},onSuccess:k,onFailure:function(e){console.log("Google sign in was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),Object(G.jsx)(Q.a,{container:!0,justify:"flex-end",children:Object(G.jsx)(Q.a,{item:!0,children:Object(G.jsx)(P.a,{onClick:function(){O((function(e){return!e})),j(null)},children:m?"\xbfTienes una cuenta? Inicia sesi\xf3n":"Crea una cuenta"})})})]})]})})},lt=a(413),ut=Object(H.a)((function(e){return{media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"600px"},card:Object(W.a)({display:"flex",width:"100%"},e.breakpoints.down("sm"),{flexWrap:"wrap",flexDirection:"column"}),section:{borderRadius:"20px",margin:"10px"},imageSection:Object(W.a)({marginLeft:"20px"},e.breakpoints.down("sm"),{marginLeft:0}),recommendedPosts:Object(W.a)({display:"flex"},e.breakpoints.down("sm"),{flexDirection:"column"}),loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"}}})),dt=function(){var e=Object(s.c)((function(e){return e.posts})),t=e.post,a=e.posts,r=e.isLoading,c=Object(s.b)(),i=Object(T.g)(),o=Object(T.i)().id,l=ut();if(Object(n.useEffect)((function(){c(function(e){return function(){var t=Object(te.a)(ee.a.mark((function t(a){var n,r;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:g}),t.next=4,ce(e);case 4:n=t.sent,r=n.data,a({type:m,payload:r}),a({type:f}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(o))}),[o]),Object(n.useEffect)((function(){t&&c(me({search:"none",tags:null===t||void 0===t?void 0:t.tags.join(",")}))}),[t]),!t)return null;if(r)return Object(G.jsx)(X.a,{elevation:6,className:l.loadingPaper,children:Object(G.jsx)(xe.a,{size:"7em"})});var u=a.filter((function(e){return e._id!==t._id}));return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(X.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6,children:Object(G.jsxs)("div",{className:l.card,children:[Object(G.jsxs)("div",{className:l.section,children:[Object(G.jsx)(L.a,{variant:"h4",component:"h2",children:t.title}),Object(G.jsx)(L.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2",children:t.tags.map((function(e){return"#".concat(e," ")}))}),Object(G.jsx)(L.a,{gutterBottom:!0,variant:"h6",component:"p",children:t.message}),Object(G.jsxs)(L.a,{color:"textSecondary",variant:"h6",children:["Posteado por: ",t.name]}),Object(G.jsx)(L.a,{color:"textSecondary",variant:"body1",children:Be()(t.createdAt).fromNow()}),Object(G.jsx)(lt.a,{style:{margin:"20px 0"}}),Object(G.jsx)(L.a,{variant:"body1",children:Object(G.jsx)("strong",{children:"Comentarios"})}),Object(G.jsx)(lt.a,{style:{margin:"20px 0"}})]}),Object(G.jsx)("div",{className:l.imageSection,children:Object(G.jsx)("img",{className:l.media,src:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:t.title})})]})}),u.length?Object(G.jsx)(X.a,{style:{padding:"20px",marginTop:"20px",borderRadius:"15px"},elevation:6,children:Object(G.jsxs)("div",{className:l.section,children:[Object(G.jsx)(L.a,{glutterBottom:!0,variant:"h5",children:"Tambi\xe9n podr\xeda interesarte:"}),Object(G.jsx)(lt.a,{}),Object(G.jsx)("div",{className:l.recommendedPosts,children:u.map((function(e){var t=e.title,a=e.message,n=e.name,r=e.likes,c=e.selectedFile,s=e._id;return Object(G.jsxs)("div",{style:{margin:"20px",cursor:"pointer"},onClick:function(){return function(e){return i.push("/posts/".concat(e))}(s)},children:[Object(G.jsx)(L.a,{gutterBottom:!0,variant:"h6",children:t}),Object(G.jsx)(L.a,{gutterBottom:!0,color:"textSecondary",variant:"subtitle2",children:n}),Object(G.jsx)(L.a,{gutterBottom:!0,color:"textSecondary",variant:"subtitle2",children:a}),Object(G.jsxs)(L.a,{gutterBottom:!0,color:"primary",variant:"subtitle1",children:[r.length," ",r.length>1||0===r.length?"likes":"like"]}),Object(G.jsx)("img",{style:{borderRadius:"15px"},src:c,width:"200px"})]},s)}))})]})}):null]})},jt=a(424),pt=a(425),bt=a(429),mt=a(417),Ot=a(415),ht=a(416),xt=a(414),gt=Object(H.a)((function(e){return{card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative",alignItems:"center",padding:"30px"},appBar:Object(W.a)({borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},e.breakpoints.down("sm"),{flexDirection:"column"}),heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"10px",marginTop:"5px"},toolbar:Object(W.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:Object(W.a)({display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center"},e.breakpoints.down("sm"),{width:"auto",marginTop:20,justifyContent:"center"}),logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(U.a[500]),backgroundColor:U.a[500]}}})),ft=function(){var e=gt(),t=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),a=Object(D.a)(t,2),r=a[0];a[1];return Object(G.jsx)(Q.a,{container:!0,spacing:0,direction:"column",alignItems:"center",children:Object(G.jsxs)(ge.a,{className:e.card,children:[Object(G.jsx)(R.a,{style:{width:"100px",height:"100px"},className:e.purple,alt:r.result.name,src:r.result.imageUrl,children:r.result.name.charAt(0)}),Object(G.jsx)(L.a,{style:{padding:"10px"},variant:"h4",color:"primary",children:r.result.name}),Object(G.jsx)(L.a,{variant:"h6",children:r.result.email}),Object(G.jsxs)(L.a,{variant:"h6",children:["Rol: ","common"===r.result.role?"Com\xfan":"Administrador"]}),Object(G.jsx)(L.a,{variant:"h6",children:"\xdaltima conexi\xf3n:"}),Object(G.jsx)(L.a,{variant:"h6",color:"textSecondary",children:Be()(r.result.lastConnectionDate).fromNow()})]})})},vt=Object(H.a)((function(e){return{container:{padding:e.spacing(3,2),display:"grid",flexDirection:"column",justifyContent:"center"},table:{minWidth:650}}})),yt=a(418),Ct=a(419),wt=a(420),St=a(421),kt=a(422),Nt=a(423),It=a(200),_t=a.n(It),Et=Object(H.a)((function(e){return{table:{minWidth:650}}})),Tt=function(){var e,t=Et(),a=Object(n.useState)(!1),r=Object(D.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),l=Object(D.a)(o,2),u=l[0],d=(l[1],Object(n.useState)("")),j=Object(D.a)(d,2),p=j[0],b=j[1],m=Object(n.useState)(""),O=Object(D.a)(m,2),h=O[0],x=O[1],g=Object(n.useState)(!1),f=Object(D.a)(g,2),v=f[0],y=f[1],k=Object(n.useState)(!1),N=Object(D.a)(k,2),I=N[0],_=N[1],E=Object(s.c)((function(e){return e.auth})).users,T=Object(s.b)();Object(n.useEffect)((function(){"admin"===u.result.role&&T(function(){var e=Object(te.a)(ee.a.mark((function e(t){var a,n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.get("user/users");case 3:a=e.sent,n=a.data,t({type:C,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:w,errorMessage:e.t0.response.data.message});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[T,u.result.role]);var B=null===E||void 0===E||null===(e=E.data)||void 0===e?void 0:e.filter((function(e){return e._id!==u.result._id})),A=function(){i(!1)},R=function(){""!==p.trim()?(T(Ye(h,{password:p})),i(!1)):_(!0)},F=function(){var e;T((e=h,function(){var t=Object(te.a)(ee.a.mark((function t(a){return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,be(e);case 3:a({type:S,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a({type:w,errorMessage:t.t0.response.data.message});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}())),i(!1),window.location.reload(!1)};return Object(G.jsxs)(G.Fragment,{children:[B?Object(G.jsxs)("div",{children:[Object(G.jsx)(L.a,{style:{textAlign:"center",paddingBottom:20},color:"secondary",children:"DASHBOARD"}),Object(G.jsx)(yt.a,{component:X.a,children:Object(G.jsxs)(Ct.a,{className:t.table,size:"small","aria-label":"a dense table",children:[Object(G.jsx)(wt.a,{children:Object(G.jsxs)(St.a,{children:[Object(G.jsx)(kt.a,{align:"center",style:{width:200},children:Object(G.jsx)(L.a,{color:"primary",children:Object(G.jsx)("strong",{children:"Nombre"})})}),Object(G.jsx)(kt.a,{align:"center",style:{width:200},children:Object(G.jsx)(L.a,{color:"primary",children:Object(G.jsx)("strong",{children:"Email"})})}),Object(G.jsx)(kt.a,{align:"center",style:{width:200},children:Object(G.jsx)(L.a,{color:"primary",children:Object(G.jsx)("strong",{children:"Rol"})})}),Object(G.jsx)(kt.a,{align:"center",style:{width:200},children:Object(G.jsx)(L.a,{color:"primary",children:Object(G.jsx)("strong",{children:"\xdaltima conexi\xf3n"})})}),Object(G.jsx)(kt.a,{align:"center",style:{width:200},children:Object(G.jsx)(L.a,{color:"primary",children:Object(G.jsx)("strong",{children:"Acciones"})})})]})}),Object(G.jsx)(Nt.a,{children:B.map((function(e){return Object(G.jsxs)(St.a,{children:[Object(G.jsx)(kt.a,{align:"center",children:e.name}),Object(G.jsx)(kt.a,{align:"center",children:e.email}),Object(G.jsx)(kt.a,{align:"center",children:"common"===e.role?"Com\xfan":"Administrador"}),Object(G.jsx)(kt.a,{align:"center",children:Be()(e.lastConnectionDate).fromNow()}),Object(G.jsxs)(kt.a,{align:"center",children:[Object(G.jsx)(P.a,{onClick:function(){return t=e._id,y(!0),x(t),void i(!0);var t},children:Object(G.jsx)(_t.a,{color:"primary"})}),Object(G.jsx)(P.a,{onClick:function(){return t=e._id,y(!1),x(t),void i(!0);var t},children:Object(G.jsx)(Ne.a,{color:"secondary"})})]})]},e._id)}))})]})})]}):null,c&&Object(G.jsx)("div",{children:Object(G.jsxs)(bt.a,{open:c,onClose:A,"aria-labelledby":"form-dialog-title",children:[Object(G.jsx)(xt.a,{id:"form-dialog-title",children:v?"Cambiar contrase\xf1a":"Eliminar usuario"}),Object(G.jsxs)(Ot.a,{children:[Object(G.jsx)(ht.a,{children:v?"Recuerda usar una contrase\xf1a que contenga como m\xednimo 6 car\xe1cteres, mayusculas, minusculas y numeros":"Esta acci\xf3n es irreversible. \xbfDeseas eliminar permanentemente el usuario?"}),v?Object(G.jsx)(K.a,{autoFocus:!0,margin:"dense",id:"name",label:"Nueva contrase\xf1a",type:"password",value:p,onChange:function(e){return b(e.target.value)},fullWidth:!0}):null]}),I&&Object(G.jsx)(ht.a,{color:"secondary",style:{paddingLeft:"20px"},children:"La nueva contrase\xf1a es inv\xe1lida"}),Object(G.jsxs)(mt.a,{children:[Object(G.jsx)(P.a,{onClick:A,color:"primary",children:"Cancelar"}),v?Object(G.jsx)(P.a,{onClick:R,color:"primary",children:"Cambiar"}):Object(G.jsx)(P.a,{onClick:F,color:"secondary",children:"Eliminar"})]})]})})]})},Dt=a(17),Bt=a(203),At=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(D.a)(e,2),a=t[0],r=(t[1],Object(s.b)()),c=Object(s.c)((function(e){return e.posts})).postsByUser,i=Object(n.useState)([]),o=Object(D.a)(i,2),l=o[0],u=o[1],d=[0,0,0,0,0,0,0];Object(n.useEffect)((function(){var e;r((e=a.result._id,function(){var t=Object(te.a)(ee.a.mark((function t(a){var n,r;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:g}),t.next=4,se(e);case 4:n=t.sent,r=n.data,a({type:O,payload:r}),console.log("Fetched actions: ",r),a({type:f}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}())),function(){var e,t=Object(Dt.a)(c);try{for(t.s();!(e=t.n()).done;){var a=e.value,n=new Date(a.createdAt).getDay();0===n?d[0]++:1===n?d[1]++:2===n?d[2]++:3===n?d[3]++:4===n?d[4]++:5===n?d[5]++:d[6]++}}catch(r){t.e(r)}finally{t.f()}u(d)}()}),[r,a.result._id]);var j={labels:["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","S\xe1bado"],datasets:[{label:"Dias que m\xe1s publicas posts",fill:!0,lineTension:.2,backgroundColor:"rgba(63,81,181,0.4)",borderColor:"rgba(63,81,181,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(245,0,87,1)",pointBackgroundColor:"#fff",pointBorderWidth:5,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(245,0,87,0.4)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:l}]};return Object(G.jsx)("div",{style:{paddingLeft:30},children:Object(G.jsx)(Bt.a,{data:j,width:950,height:480,options:{maintainAspectRatio:!1}})})},Rt=function(){vt();var e=Object(n.useState)(!1),t=Object(D.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(D.a)(c,2),o=i[0],l=i[1],u=Object(n.useState)(!1),d=Object(D.a)(u,2),j=d[0],p=d[1],b=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),m=Object(D.a)(b,2),O=m[0],h=(m[1],Object(s.b)()),x=function(){r(!1)},g=function(){if(""!==o.trim()){var e=O.result._id;h(Ye(e,{password:o})),r(!1)}else p(!0)};return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(jt.a,{cellHeight:480,cols:2,children:[Object(G.jsx)(pt.a,{children:Object(G.jsx)(At,{})}),Object(G.jsxs)(pt.a,{style:{marginTop:80},children:[Object(G.jsx)(ft,{}),Object(G.jsx)(Q.a,{style:{display:"grid"},children:Object(G.jsx)(P.a,{color:"secondary",onClick:function(){r(!0)},children:"Cambiar contrase\xf1a"})}),a&&Object(G.jsx)("div",{children:Object(G.jsxs)(bt.a,{open:a,onClose:x,"aria-labelledby":"form-dialog-title",children:[Object(G.jsx)(xt.a,{id:"form-dialog-title",children:"Cambiar contrase\xf1a"}),Object(G.jsxs)(Ot.a,{children:[Object(G.jsx)(ht.a,{children:"Recuerda usar una contrase\xf1a que contenga como m\xednimo 6 car\xe1cteres, mayusculas, minusculas y numeros"}),Object(G.jsx)(K.a,{autoFocus:!0,margin:"dense",id:"name",label:"Nueva contrase\xf1a",type:"password",value:o,onChange:function(e){return l(e.target.value)},fullWidth:!0})]}),j&&Object(G.jsx)(ht.a,{color:"secondary",style:{paddingLeft:"20px"},children:"Tu nueva contrase\xf1a es inv\xe1lida"}),Object(G.jsxs)(mt.a,{children:[Object(G.jsx)(P.a,{onClick:x,color:"primary",children:"Cancelar"}),Object(G.jsx)(P.a,{onClick:g,color:"primary",children:"Cambiar"})]})]})})]})]}),Object(G.jsx)(Tt,{})]})},Lt=function(){var e=JSON.parse(localStorage.getItem("profile"));return Object(G.jsx)(E.a,{children:Object(G.jsxs)(_.a,{maxWidth:"xl",children:[Object(G.jsx)(q,{}),Object(G.jsxs)(T.d,{children:[Object(G.jsx)(T.b,{path:"/",exact:!0,component:function(){return Object(G.jsx)(T.a,{to:"/posts"})}}),Object(G.jsx)(T.b,{path:"/posts",exact:!0,component:Ve}),Object(G.jsx)(T.b,{path:"/posts/search",exact:!0,component:Ve}),Object(G.jsx)(T.b,{path:"/posts/:id",component:dt}),Object(G.jsx)(T.b,{path:"/user/:id",component:Rt}),Object(G.jsx)(T.b,{path:"/auth",exact:!0,component:function(){return e?Object(G.jsx)(T.a,{to:"/posts"}):Object(G.jsx)(ot,{})}})]})]})})},Pt=(a(370),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c),Ft=Object(i.d)(I,Pt(Object(i.a)(o.a)));c.a.render(Object(G.jsx)(s.a,{store:Ft,children:Object(G.jsx)(Lt,{})}),document.getElementById("root"))}},[[371,1,2]]]);
//# sourceMappingURL=main.2c6b6451.chunk.js.map