(this.webpackJsonpmessage=this.webpackJsonpmessage||[]).push([[0],{112:function(A,e,t){A.exports={chat:"Users_chat__1X262"}},119:function(A,e,t){},17:function(A,e,t){A.exports={header:"Header_header__1VCKf",form:"Header_form__1yuui",button:"Header_button__3kSo_",link:"Header_link__2wI74"}},244:function(A,e,t){"use strict";t.r(e);var s=t(1),n=t(0),a=t.n(n),c=t(52),i=t.n(c),r=(t(119),t(25)),o=t(26),g=t(30),h=t(29),u=t(16),l=t(8),B=t(32),I=t.n(B),j=t(20),Q=t(9),p=t(23),d=t.n(p),C=t(12),b="ADD_FROM_SERVER",m="ADD_MESSAGE",E="SET_MESSAGE",k="DEL_MESSAGE",w={message:[]},O=function(A,e){return{type:m,newText:A,name:e}},x=function(A){return{type:E,newMessage:A}},M=t(246),S=t(245),J=Object(S.a)({form:"message"})((function(A){return Object(s.jsx)("form",{onSubmit:A.handleSubmit,children:Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:Object(s.jsx)(M.a,{placeholder:"Enter your message",className:I.a.input,name:"messageText",component:"input"})}),Object(s.jsx)("span",{children:Object(s.jsx)("button",{className:I.a.button,children:"SEND"})})]})})})),F=t(112),G=t.n(F),y=function(A){Object(g.a)(t,A);var e=Object(h.a)(t);function t(){return Object(r.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){for(var A=this.props.users.users.map((function(A){return Object(s.jsx)("div",{children:Object(C.a)(A.login)},A._id)})),e=0;e<A.length;e++);return Object(s.jsxs)("div",{children:["Users:",Object(s.jsx)("div",{className:G.a.chat,children:A})]})}}]),t}(a.a.Component),K=Object(u.b)((function(A){return{users:A.reducerHeader}}),{})(y),R=t(55),H=t.n(R),Y=(t(240),t(28)),v=function(){return Object(s.jsx)("div",{style:{textAlign:"center"},children:Object(s.jsx)("img",{src:"data:image/gif;base64,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"})})},D=function(A){Object(g.a)(t,A);var e=Object(h.a)(t);function t(){return Object(r.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"click",value:function(A){this.props.delMess(this.props.location.pathname)}},{key:"render",value:function(){var A=this,e=!1;return this.props.messageName.length<1&&(e=!0),Object(s.jsxs)("div",{id:"chat",children:[e&&Object(s.jsx)(v,{}),Object(s.jsx)("div",{className:H.a.chat,children:this.props.messageName.map((function(e){return Object(s.jsx)(Y.b,{to:"/"+e._id,className:H.a.navlink,children:Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:Object(C.a)(e.name)+": "}),Object(s.jsx)("span",{children:Object(C.a)(e.message)}),Object(s.jsx)("div",{className:H.a.del,onClick:A.click.bind(A),children:"x"})]},e.id)})}))})]})}}]),t}(a.a.PureComponent),f=Object(l.e)(D),q=t(7),U=function(A){Object(g.a)(t,A);var e=Object(h.a)(t);function t(){return Object(r.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getMessagesThunk()}},{key:"message",value:function(A){this.props.postMessageThunk(A.messageText,this.props.user),A.messageText=""}},{key:"delMessage",value:function(A){d.a.delete("https://chatmessages.herokuapp.com/api/messages"+A,{data:{id:""}})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:I.a.body,children:[Object(s.jsx)("div",{className:I.a.chat,children:Object(s.jsx)(f,{messageName:this.props.message,delMess:this.delMessage.bind(this)})}),Object(s.jsx)("div",{className:I.a.people,children:Object(s.jsx)(K,{})}),Object(s.jsx)("div",{className:I.a.mess,children:Object(s.jsx)(J,{onSubmit:this.message.bind(this)})})]})}}]),t}(a.a.Component),V=Object(q.d)(l.e,Object(u.b)((function(A){return{message:A.MessageReducer.message,user:A.reducerStateName.name}}),{addMessage:O,setMessages:x,delMessages:function(A){return{type:k,delMessage:A}},getMessagesThunk:function(){return function(A){d.a.get("https://chatmessages.herokuapp.com/api/messages").then((function(e){for(var t=e.data,s=0;s<t.length;s++)A(x(t[s]))}))}},postMessageThunk:function(A,e){return function(t){var s={name:Object(C.b)(e),message:Object(C.b)(A)};d.a.post("https://chatmessages.herokuapp.com/api/messages",s),t(O(A,e)),A=""}}}))(U),N=t(17),L=t.n(N),W=Object(S.a)({form:"header"})((function(A){return Object(s.jsxs)("form",{onSubmit:A.handleSubmit,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:L.a.form,children:Object(s.jsx)(M.a,{placeholder:"login",name:"login",component:"input"})}),Object(s.jsx)("div",{className:L.a.form,children:Object(s.jsx)(M.a,{placeholder:"password",name:"pass",component:"input",type:"password"})})]}),Object(s.jsx)("span",{children:Object(s.jsx)("button",{className:L.a.button,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})})),T="ADD_USERS",z="SET_USERS",Z="CHECK",X={users:[]},P=function(A){return{type:z,usersServ:A}},_=Object(S.a)({form:"header"})((function(A){return Object(s.jsxs)("form",{onSubmit:A.handleSubmit,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:L.a.form,children:Object(s.jsx)(M.a,{placeholder:"login",name:"login",component:"input"})}),Object(s.jsx)("div",{className:L.a.form,children:Object(s.jsx)(M.a,{placeholder:"password",name:"pass",component:"input",type:"password"})})]}),Object(s.jsx)("span",{children:Object(s.jsx)("button",{className:L.a.button,children:"\u0412\u0445\u043e\u0434"})})]})})),$="NAME",AA={name:"Unknow"},eA=function(A){Object(g.a)(t,A);var e=Object(h.a)(t);function t(){var A;Object(r.a)(this,t);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(A=e.call.apply(e,[this].concat(n))).state={login:""},A.Exit=function(){A.setState({login:""});A.props.users.map((function(A){return A._id}))},A}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunk()}},{key:"submitRegistr",value:function(A){this.props.setUsersThunk(A)}},{key:"componentWillMount",value:function(){}},{key:"submitSigin",value:function(A){this.props.users.map((function(A){return A._id}));for(var e=this.props.users.map((function(A){return A.login})),t=this.props.users.map((function(A){return A.pass})),s=0;s<e.length;s++)if(Object(C.b)(A.login)===e[s]&&Object(C.b)(A.pass)===t[s]){this.setState({login:A.login}),this.props.Name(A.login)}}},{key:"render",value:function(){var A=this;return Object(s.jsxs)("div",{className:L.a.header,children:[Object(s.jsxs)("h1",{children:["Welcom to chat ",this.state.login]}),!this.state.login&&Object(s.jsxs)("div",{children:[Object(s.jsx)(Y.b,{to:"/reg",className:L.a.link,children:"Register"}),Object(s.jsx)("span",{children:" "}),Object(s.jsx)(Y.b,{to:"/sigin",className:L.a.link,children:"Sigin"}),Object(s.jsx)(l.a,{exact:!0,path:"/reg",render:function(){return Object(s.jsx)(W,{onSubmit:A.submitRegistr.bind(A)})}}),Object(s.jsx)(l.a,{exact:!0,path:"/sigin",render:function(){return Object(s.jsx)(_,{onSubmit:A.submitSigin.bind(A)})}})]}),this.state.login&&Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:this.Exit,children:"Exit"})})]})}}]),t}(a.a.PureComponent),tA=Object(q.d)(l.e,Object(u.b)((function(A){return{users:A.reducerHeader.users,isAuth:A.reducerHeader.isAuth}}),{addUsers:function(A,e){return{type:T,login:A,pass:e}},Name:function(A){return{type:$,name:A}},setUsers:P,getUsersThunk:function(){return function(A){d.a.get("https://chatmessages.herokuapp.com/api/users").then((function(e){for(var t=e.data,s=0;s<t.length;s++)A(P(t[s]))}))}},setUsersThunk:function(A){return function(e){if(console.log(A.login),A.login.length>=3&&A.pass.length>=6){var t={login:Object(C.b)(A.login),pass:Object(C.b)(A.pass),isAuth:!1};d.a.post("https://chatmessages.herokuapp.com/api/users",t)}}},checkIsAuth:function(A){return{type:Z,isAuth:A}}}))(eA);var sA=function(A){return Object(s.jsxs)("div",{children:[Object(s.jsx)(tA,{}),Object(s.jsx)(V,{})]})},nA=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,248)).then((function(e){var t=e.getCLS,s=e.getFID,n=e.getFCP,a=e.getLCP,c=e.getTTFB;t(A),s(A),n(A),a(A),c(A)}))},aA=t(247),cA=t(113),iA=Object(q.c)({MessageReducer:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:var t={id:3,name:e.name,message:e.newText};return Object(Q.a)(Object(Q.a)({},A),{},{message:[].concat(Object(j.a)(A.message),[t])});case E:return console.log(),Object(Q.a)(Object(Q.a)({},A),{},{message:[].concat(Object(j.a)(A.message),[e.newMessage])});case b:case k:return Object(Q.a)(Object(Q.a)({},A),{},{message:Object(j.a)(A.message)});default:return A}},reducerHeader:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T:for(var t=A.users.map((function(A){return A.login})),s=0;s<t.length;s++)if(e.login===t[s])return A;if(e.pass.length<=6)return A;var n={_id:3,login:e.login,pass:e.pass};return Object(Q.a)(Object(Q.a)({},A),{},{users:[].concat(Object(j.a)(A.users),[n])});case z:return Object(Q.a)(Object(Q.a)({},A),{},{users:[].concat(Object(j.a)(A.users),[e.usersServ])});case Z:return Object(Q.a)(Object(Q.a)({},A),{},{users:Object(j.a)(A.users),isAuth:e.isAuth});default:return A}},reducerStateName:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:AA,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case $:return Object(Q.a)(Object(Q.a)({},A),{},{name:e.name});default:return A}},form:aA.a}),rA=Object(q.e)(iA,Object(q.a)(cA.a));i.a.render(Object(s.jsx)(Y.a,{children:Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(u.a,{store:rA,children:Object(s.jsx)(sA,{})})})}),document.getElementById("root")),nA()},32:function(A,e,t){A.exports={body:"Body_body__7Uf9z",chat:"Body_chat__10QVh",people:"Body_people__3g_1N",mess:"Body_mess__3ebwQ",input:"Body_input__28ubP",button:"Body_button__fsVq7"}},55:function(A,e,t){A.exports={chat:"windowChat_chat__22Syl",del:"windowChat_del__3gdXu",show:"windowChat_show__-otDD",navlink:"windowChat_navlink__21kL9"}}},[[244,1,2]]]);
//# sourceMappingURL=main.a1931558.chunk.js.map