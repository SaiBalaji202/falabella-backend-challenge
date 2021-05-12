(this["webpackJsonpfalabella-frontend-challenge"]=this["webpackJsonpfalabella-frontend-challenge"]||[]).push([[0],{126:function(e,t,a){},148:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(39),s=a.n(c),i=(a(126),a(15)),o=a(7),l=a(8),u=a(9),j=a.n(u),d=a(23),b=a(115),m=a.n(b).a.create({baseURL:"https://vast-mesa-50889.herokuapp.com/api",headers:{"Content-Type":"application/json"}}),h=a(253),p="SET_ALERT",O="REMOVE_ALERT",f="REGISTER_SUCCESS",x="REGISTER_FAIL",g="LOGIN_SUCCESS",v="LOGIN_FAIL",y="LOGOUT",N="USER_LOADED",S="AUTH_ERROR",w=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3500;return function(n){var r=Object(h.a)();n({type:p,payload:{id:r,message:e,alertType:t}}),setTimeout((function(){n({type:O,payload:r})}),a)}},A=function(e){e?(m.defaults.headers.common.Authorization="Bearer "+e,localStorage.setItem("token",e)):(delete m.defaults.headers.common.Authorization,localStorage.removeItem("token"))},E=function(){return function(){var e=Object(d.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!localStorage.token){e.next=7;break}return A(localStorage.token),e.next=5,m.get("/auth/me");case 5:a=e.sent,t({type:N,payload:a.data});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:S});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},_=(a(148),a(0)),k=Object(l.b)((function(e){return{auth:e.auth}}),{logout:function(){return{type:y}}})((function(e){var t=e.auth,a=t.isAuthenticated,n=t.loading,r=t.user,c=e.logout,s=Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)(i.c,{to:"/notify-subscribers",children:"Send Notification"})}),Object(_.jsx)("li",{children:Object(_.jsxs)("a",{onClick:c,href:"?#",children:[Object(_.jsx)("i",{className:"fas fa-sign-out-alt"})," ",Object(_.jsx)("span",{className:"hide-sm",children:"Logout"})]})})]}),o=Object(_.jsx)("ul",{children:Object(_.jsx)("li",{children:Object(_.jsxs)("a",{onClick:c,href:"?#",children:[Object(_.jsx)("i",{className:"fas fa-sign-out-alt"})," ",Object(_.jsx)("span",{className:"hide-sm",children:"Logout"})]})})}),l=Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)(i.c,{to:"/register",children:"Register"})}),Object(_.jsx)("li",{children:Object(_.jsx)(i.c,{to:"/login",children:"Login"})})]});return Object(_.jsxs)("nav",{className:"navbar",children:[Object(_.jsx)("h1",{children:Object(_.jsxs)(i.b,{to:"/",children:[Object(_.jsx)("i",{className:"fas fa-code"})," Falabella"]})}),!n&&((null===r||void 0===r?void 0:r.isAdmin)?s:a?o:l)]})})),C=a(33),L=a(116),I=a(117),R=a(120),F=[];var T=a(6),P={token:localStorage.getItem("token"),isAuthenticated:!1,loading:!1,user:null};var D=Object(C.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case p:return[].concat(Object(R.a)(e),[n]);case O:return e.filter((function(e){return e.id!==n}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case N:return Object(T.a)(Object(T.a)({},e),{},{user:n,loading:!1,isAuthenticated:!0});case f:case g:return localStorage.setItem("token",n.token),Object(T.a)(Object(T.a)(Object(T.a)({},e),n),{},{loading:!1,isAuthenticated:!0});case x:case S:case v:case y:return localStorage.removeItem("token"),Object(T.a)(Object(T.a)(Object(T.a)({},e),n),{},{loading:!1,isAuthenticated:!1});default:return e}}}),G=[I.a],U=Object(C.createStore)(D,{},Object(L.composeWithDevTools)(C.applyMiddleware.apply(void 0,G))),B=(a(151),a(121));var Y=Object(l.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.render,n=e.auth,r=n.isAuthenticated,c=n.loading,s=n.user,i=Object(B.a)(e,["component","render","auth"]);return Object(_.jsx)(o.b,Object(T.a)(Object(T.a)({},i),{},{render:function(e){if(!c)return r&&(null===s||void 0===s?void 0:s.isAdmin)?t?Object(_.jsx)(t,Object(T.a)({},e)):a(e):Object(_.jsx)(o.a,{to:"/"})}}))})),M=a(27),q=a(25);a(152);var z=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(d.a)(j.a.mark((function a(n){var r,c,s;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={email:e,password:t},a.prev=1,a.next=4,m.post("/auth",r);case 4:c=a.sent,n({type:g,payload:c.data}),n(E()),a.next=14;break;case 9:a.prev=9,a.t0=a.catch(1),(s=a.t0.response.data.errors)&&s.forEach((function(e){return n(w(e.msg,"danger"))})),n({type:v});case 14:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.isAuthenticated,a=e.login,r=Object(n.useState)({email:"",password:""}),c=Object(q.a)(r,2),s=c[0],l=c[1],u=function(e){return l(Object(T.a)(Object(T.a)({},s),{},Object(M.a)({},e.target.name,e.target.value)))};if(t)return Object(_.jsx)(o.a,{to:"/"});var j=s.email,d=s.password;return Object(_.jsxs)("section",{className:"login text-center",children:[Object(_.jsx)("h1",{className:"text-primary mg-sm",children:"Login to Falabella!"}),Object(_.jsxs)("p",{className:"lead",children:[Object(_.jsx)("i",{className:"fas fa-user"})," Sign Into Your Account"]}),Object(_.jsxs)("form",{className:"form login-form mg-sm",onSubmit:function(e){e.preventDefault(),a(j,d)},children:[Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"email",children:"Email"}),Object(_.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",id:"email",value:j,onChange:u,required:!0})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"password",children:"Password"}),Object(_.jsx)("input",{type:"password",placeholder:"Your Password...",name:"password",id:"password",value:d,onChange:u,minLength:"4"})]}),Object(_.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})]}),Object(_.jsxs)("p",{className:"info",children:["Don't have an account? ",Object(_.jsx)(i.b,{to:"/register",children:"Sign Up"})]})]})}));a(153);var J=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:w,register:function(e){return function(){var t=Object(d.a)(j.a.mark((function t(a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.post("/user",e);case 3:n=t.sent,a({type:f,payload:n.data}),a(E()),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),(r=t.t0.response.data.errors)&&r.forEach((function(e){return a(w(e.msg,"danger"))})),a({type:x});case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,a=e.register,r=e.isAuthenticated,c=Object(n.useState)({name:"",email:"",password:"",confirmationPassword:""}),s=Object(q.a)(c,2),l=s[0],u=s[1],b=l.name,m=l.email,h=l.password,p=l.confirmationPassword,O=function(e){return u(Object(T.a)(Object(T.a)({},l),{},Object(M.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),h!==p?t("Passwords do not match","danger"):(a({name:b,email:m,password:h}),console.log(l));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r?Object(_.jsx)(o.a,{to:"/"}):Object(_.jsxs)("section",{className:"register text-center",children:[Object(_.jsx)("h1",{className:"mg-sm text-primary",children:"Sign Up"}),Object(_.jsxs)("p",{className:"lead",children:[Object(_.jsx)("i",{className:"fas fa-user"})," Create Your Account"]}),Object(_.jsxs)("form",{className:"form register-form mg-sm",onSubmit:f,children:[Object(_.jsx)("div",{className:"form-group",children:Object(_.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:b,onChange:O})}),Object(_.jsx)("div",{className:"form-group",children:Object(_.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",value:m,onChange:O})}),Object(_.jsx)("div",{className:"form-group",children:Object(_.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:h,onChange:O})}),Object(_.jsx)("div",{className:"form-group",children:Object(_.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"confirmationPassword",value:p,onChange:O})}),Object(_.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Register"})]}),Object(_.jsxs)("p",{className:"info",children:["Already have an account? ",Object(_.jsx)(i.b,{to:"/login",children:"Sign In"})]})]})})),Q=a(67),V=a.n(Q);var H=Object(l.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return(null===t||void 0===t?void 0:t.length)>0&&Object(_.jsx)("ul",{children:t.map((function(e){return Object(_.jsx)("li",{className:"".concat(V.a.alert," ").concat(V.a["alert-"+e.alertType]),children:e.message},e.id)}))})}));a(154);function K(e,t){return m.post("/subscriber",{name:e,email:t})}var W=Object(l.b)(null,{setAlert:w})((function(e){var t=e.setAlert,a=Object(n.useState)({name:"",email:""}),r=Object(q.a)(a,2),c=r[0],s=r[1],i=function(e){return s(Object(T.a)(Object(T.a)({},c),{},Object(M.a)({},e.target.name,e.target.value)))},o=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,K(l,u);case 3:t("Added Subscriber!","success"),s({email:"",name:""});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=c.name,u=c.email;return Object(_.jsxs)("section",{className:"landing text-center",children:[Object(_.jsx)("h1",{className:"mg-sm text-primary",children:"Subscribe to our Newsletter!"}),Object(_.jsxs)("p",{className:"lead",children:[Object(_.jsx)("i",{className:"far fa-envelope"})," Get Notified about our daily feed!"]}),Object(_.jsxs)("form",{className:"form landing-form",onSubmit:o,children:[Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"username",children:"Name"}),Object(_.jsx)("input",{type:"text",placeholder:"Your Name...",name:"name",id:"name",value:l,onChange:i,minLength:"3"})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"email",children:"Email"}),Object(_.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",id:"email",value:u,onChange:i,required:!0})]}),Object(_.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Subscribe!"})]})]})})),X=a(42),Z=a(118),$=a(119),ee=a.n($);a(249),a(250);var te=Object(l.b)(null,{setAlert:w})((function(e){var t=e.setAlert,a=Object(n.useState)(""),r=Object(q.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(X.EditorState.createEmpty()),o=Object(q.a)(i,2),l=o[0],u=o[1],b=function(){var e=Object(d.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n=ee()(Object(X.convertToRaw)(l.getCurrentContent())),(null===c||void 0===c?void 0:c.trim())&&(null===n||void 0===n?void 0:n.trim())&&"<p></p>"!==n){e.next=4;break}return e.abrupt("return",t("Invalid Data","danger"));case 4:return e.next=6,r=c,i=n,m.post("/subscriber/notify-all",{emailSubject:r,emailBody:i});case 6:s(""),u(X.EditorState.createEmpty()),t("Sent Mail","success");case 8:case"end":return e.stop()}var r,i}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)("section",{className:"notify-subscribers text-center",children:[Object(_.jsx)("h1",{className:"text-primary mg-sm",children:"Send News Letter to your Subscribers!"}),Object(_.jsxs)("p",{className:"lead",children:[Object(_.jsx)("i",{className:"far fa-envelope"})," Notify your daily update to your Subscribers!"]}),Object(_.jsxs)("form",{className:"form notify-form mg-sm",onSubmit:b,children:[Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"subject",children:"Subject"}),Object(_.jsx)("input",{type:"text",placeholder:"Subject",name:"subject",id:"subject",value:c,onChange:function(e){return s(e.target.value)},required:!0})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"boxy",children:"Body"}),Object(_.jsx)(Z.Editor,{editorState:l,onEditorStateChange:u,toolbarClassName:"editor-tool-bar",editorClassName:"editor-content"})]}),Object(_.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send"})]})]})}));var ae=function(){return Object(n.useEffect)((function(){U.dispatch(E())}),[]),Object(_.jsx)(l.a,{store:U,children:Object(_.jsx)(i.a,{children:Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(k,{}),Object(_.jsxs)("section",{className:"container",children:[Object(_.jsx)(H,{}),Object(_.jsxs)(o.d,{children:[Object(_.jsx)(o.b,{path:"/login",component:z}),Object(_.jsx)(o.b,{path:"/register",component:J}),Object(_.jsx)(Y,{path:"/notify-subscribers",component:te}),Object(_.jsx)(o.b,{path:"/",exact:!0,component:W}),Object(_.jsx)(o.a,{to:"/"})]})]})]})})})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,254)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(ae,{})}),document.getElementById("root")),ne()},67:function(e,t,a){e.exports={alert:"Alert_alert__3SuYg","alert-primary":"Alert_alert-primary__3uX5P","alert-light":"Alert_alert-light__vNzoO","alert-dark":"Alert_alert-dark__xnNah","alert-danger":"Alert_alert-danger__3yGKQ","alert-success":"Alert_alert-success__3VGCO","alert-white":"Alert_alert-white__2Qjeo"}}},[[251,1,2]]]);
//# sourceMappingURL=main.c69966c9.chunk.js.map