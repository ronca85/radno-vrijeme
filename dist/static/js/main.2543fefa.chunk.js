(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,a,t){e.exports=t(413)},221:function(e,a,t){},413:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(212),c=t.n(i),l=(t(221),t(6)),o=t(32),s=t(8),u=Object(s.b)(null,function(e){return{odjava:function(){return e(function(e,a,t){(0,t.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/unesi"},"Unesi radno vrijeme")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/izmjeni"},"Izmjeni radno vrijeme")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.odjava},"Odjava")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/profil",className:"btn btn-floating blue lighten-2"},e.profile.inicijali)))}),m=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/registracija"},"Registracija")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/prijava"},"Prijava")))},d=Object(s.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var a=e.auth,t=e.profile,n=a.uid?r.a.createElement(u,{profile:t}):r.a.createElement(m,null);return r.a.createElement("nav",{className:"wrapper grey darken-2"},r.a.createElement("div",{className:"container"},r.a.createElement(l.b,{to:"/",className:"brand-logo"},"Radno vrijeme"),n))}),h=t(26),p=t(27),E=t(30),f=t(28),b=t(31),v=t(41),g=t.n(v),j=function(e){var a=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},a&&a.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},g()(e.time.toDate()).fromNow()))})))))};t(227);function N(e){var a=e.ducan;return r.a.createElement("div",null,r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},a.imeDucana),r.a.createElement("p",null,"Unio: ",a.autorIme," ",a.autorPrezime),r.a.createElement("p",{className:"grey-text"},g()(a.datumUnosa.toDate()).calendar()))))}var O=function(e){var a=e.ducani;return r.a.createElement("div",{className:"project-list section"},a&&a.map(function(e){return r.a.createElement(l.b,{to:"/ducan/"+e.id,key:e.id},r.a.createElement(N,{ducan:e}))}))},y=t(22),S=t(17),C=function(e){function a(){return Object(h.a)(this,a),Object(E.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.ducani,t=e.auth,n=e.notifications;return t.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(O,{ducani:a})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(j,{notifications:n})))):r.a.createElement(o.a,{to:"/prijava"})}}]),a}(n.Component),I=Object(S.d)(Object(s.b)(function(e){return console.log(e),{ducani:e.firestore.ordered.ducani,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(y.firestoreConnect)([{collection:"ducani",orderBy:["datumUnosa","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(C),w=Object(S.d)(Object(s.b)(function(e,a){var t=a.match.params.id,n=e.firestore.data.ducani;return{ducan:n?n[t]:null,auth:e.firebase.auth}}),Object(y.firestoreConnect)([{collection:"ducani"}]))(function(e){var a=e.ducan;return e.auth.uid?a?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},a.imeDucana),r.a.createElement("p",null,a.sadrzajDucana)),r.a.createElement("div",{className:"card-action grey lighten-4 grey/text"},r.a.createElement("div",null,"Unio: ",a.autorIme," ",a.autorPrezime),r.a.createElement("div",null,g()(a.datumUnosa.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Dohva\u0107am du\u0107an...")):r.a.createElement(o.a,{to:"/prijava"})}),D=t(29),z=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(E.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:""},t.handleChange=function(e){t.setState(Object(D.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.prijava(t.state)},t}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.authError;return e.auth.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Prijavi se"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"E-mail"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Lozinka"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Prijava"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}}]),a}(n.Component),U=Object(s.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{prijava:function(a){return e((t=a,function(e,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(t.email,t.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(a){e({type:"LOGIN_ERROR",err:a})})}));var t}}})(z),A=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(E.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:"",autorIme:"",autorPrezime:""},t.handleChange=function(e){t.setState(Object(D.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.registracija(t.state)},t}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.auth,t=e.authError;return a.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Registriraj se"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"E-mail"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Lozinka"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"autorIme"},"Ime"),r.a.createElement("input",{type:"text",id:"autorIme",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"autorPrezime"},"Prezime"),r.a.createElement("input",{type:"text",id:"autorPrezime",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Registriraj se"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),a}(n.Component),k=Object(s.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{registracija:function(a){return e(function(e){return function(a,t,n){var r=n.getFirebase,i=n.getFirestore,c=r(),l=i();c.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(a){return l.collection("users").doc(a.user.uid).set({autorIme:e.autorIme,autorPrezime:e.autorPrezime,inicijali:e.autorIme[0]+e.autorPrezime[0]})}).then(function(){a({type:"REGISTRACIJA_USPJELA"})}).catch(function(e){a({type:"REGISTRACIJA_NIJE_USPJELA",err:e})})}}(a))}}})(A),R=t(42),x=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(E.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={imeDucana:"",sadrzajDucana:""},t.handleChange=function(e){t.setState(Object(D.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.unesiNoviDucan(t.state),t.props.history.push("/")},t}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Unesi du\u0107an"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"imeDucana"},"Ime du\u0107ana"),r.a.createElement("input",{type:"text",id:"imeDucana",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"sadrzajDucana"},"Sadr\u017eaj du\u0107ana"),r.a.createElement("textarea",{className:"materialize-textarea",id:"sadrzajDucana",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Unesi")))):r.a.createElement(o.a,{to:"/prijava"})}}]),a}(n.Component),P=Object(s.b)(function(e){return{auth:e.firebase.auth}},function(e){return{unesiNoviDucan:function(a){return e(function(e){return function(a,t,n){n.getFirebase;var r=(0,n.getFirestore)(),i=t().firebase.profile,c=t().firebase.auth.uid;r.collection("ducani").add(Object(R.a)({},e,{autorIme:i.autorIme,autorPrezime:i.autorPrezime,autorID:c,datumUnosa:new Date})).then(function(){a({type:"UNESI_DUCAN",ducan:e})}).catch(function(e){a({type:"UNESI_DUCAN_GRESKA",err:e})})}}(a))}}})(x);var F=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:I}),r.a.createElement(o.b,{path:"/ducan/:id",component:w}),r.a.createElement(o.b,{path:"/prijava",component:U}),r.a.createElement(o.b,{path:"/registracija",component:k}),r.a.createElement(o.b,{path:"/unesi",component:P}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _={authError:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN_ERROR":return console.log("login error"),Object(R.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(R.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"REGISTRACIJA_USPJELA":return console.log("registracija uspjela"),Object(R.a)({},e,{authError:null});case"REGISTRACIJA_NIJE_USPJELA":return console.log("registracija nije uspjela"),Object(R.a)({},e,{authError:a.err.message});default:return e}},J={ducanStuff:[{id:"1",imeDucana:"Deak-Tehna",sadrzajDucana:"bijela tehnika"},{id:"2",imeDucana:"Bic",sadrzajDucana:"bicikl servis"},{id:"3",imeDucana:"Scout",sadrzajDucana:"pija\u010da"}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UNESI_DUCAN":return console.log("du\u0107an unesen",a.ducan),e;case"UNESI_DUCAN_GRESKA":return console.log("gre\u0161ka kod unosa du\u0107ana",a.err),e;default:return e}},B=t(63),T=Object(S.c)({auth:G,ducanProperty:L,firestore:B.firestoreReducer,firebase:y.firebaseReducer}),K=t(215),W=t(92),X=t.n(W);t(407),t(411);X.a.initializeApp({apiKey:"AIzaSyDVvmtXehpb0ZKNBxv7UX8-OjhGKbhNwqg",authDomain:"radno-vrijeme-8e960.firebaseapp.com",databaseURL:"https://radno-vrijeme-8e960.firebaseio.com",projectId:"radno-vrijeme-8e960",storageBucket:"",messagingSenderId:"93396542669",appId:"1:93396542669:web:e627aa43fc7c9630"}),X.a.firestore().settings({});var q=X.a,V=Object(S.e)(T,Object(S.d)(Object(S.a)(K.a.withExtraArgument({getFirebase:y.getFirebase,getFirestore:B.getFirestore})),Object(B.reduxFirestore)(q),Object(y.reactReduxFirebase)(q,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));V.firebaseAuthIsReady.then(function(){c.a.render(r.a.createElement(s.a,{store:V},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[216,1,2]]]);
//# sourceMappingURL=main.2543fefa.chunk.js.map