(this["webpackJsonpemployer-directory"]=this["webpackJsonpemployer-directory"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(2),r=s.n(c),a=s(12),i=s.n(a),l=(s(23),s(13)),o=s(14),h=s(17),d=s(16);s(24),s(25);var j=function(e){return Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("h1",{className:"title",children:e.children})})};s(26);var u=function(e){return Object(n.jsx)("div",{className:"filter",children:Object(n.jsx)("div",{className:"form-group form-inline",children:Object(n.jsx)("input",{type:"search",className:"form-control",id:"searchForm",placeholder:"Search Users",onChange:e.handleInputChange})})})};s(27);var m=function(e){return Object(n.jsx)("div",{className:"container",children:e.children})};s(28);var f=function(e){return Object(n.jsxs)("div",{className:"row d-flex p-2 bd-highlight",children:[Object(n.jsx)("div",{className:"col-sm-2",children:Object(n.jsx)("h4",{children:"PROFILE PIC"})}),Object(n.jsx)("div",{className:"col-sm-2",children:Object(n.jsxs)("h4",{onClick:e.sortByName,children:["NAME",Object(n.jsx)("br",{}),"(click to sort)"]})}),Object(n.jsx)("div",{className:"col-sm-2",children:Object(n.jsx)("h4",{children:"EMAIL"})}),Object(n.jsx)("div",{className:"col-sm-2",children:Object(n.jsx)("h4",{children:"AGE"})}),Object(n.jsx)("div",{className:"col-sm-2",children:Object(n.jsx)("h4",{children:"PHONE"})})]})};s(29);var b=function(e){return Object(n.jsxs)("div",{className:"row d-flex p-2 bd-highlight",children:[Object(n.jsx)("div",{className:"col-sm-2",children:Object(n.jsx)("img",{alt:e.name,className:"img-fluid",src:e.src,style:{margin:"0 auto"}})}),Object(n.jsx)("div",{className:"col-sm-2",children:Object(n.jsxs)("p",{children:[e.firstName," ",e.lastName]})}),Object(n.jsx)("div",{className:"col-sm-2",children:Object(n.jsx)("p",{children:e.email})}),Object(n.jsx)("div",{className:"col-sm-2",children:Object(n.jsxs)("p",{children:["Age: ",e.age]})}),Object(n.jsx)("div",{className:"col-sm-2",children:Object(n.jsx)("p",{children:e.phone})})]})},O=s(15),x=s.n(O),g=function(){return x.a.get("https://randomuser.me/api/?results=30")},v=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={users:[],searchUsers:[],search:"",sorted:"ascending"},e.generateRandomUsers=function(){g().then((function(t){console.log(t),e.setState({users:t.data.results,searchUsers:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var s=t.target.value;""===e.state.search&&e.setState({users:e.state.users});var n=e.state.users.filter((function(e){var t=e.name,n=t.first,c=t.last;return"".concat(n," ").concat(c).toLowerCase().includes(s.toLowerCase().trim())}));e.setState({searchUsers:n,search:s})},e.handleSortByName=function(){var t=e.state.searchUsers;if("ascending"===e.state.sorted){var s=t.sort((function(e,t){return e.name.first>t.name.first?1:-1}));e.setState({searchUsers:s,sorted:"descending"})}else{var n=t.sort((function(e,t){return e.name.first>t.name.first?-1:1}));e.setState({searchUsers:n,sorted:"ascending"})}},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.generateRandomUsers()}},{key:"render",value:function(){return Object(n.jsxs)(m,{children:[Object(n.jsxs)(j,{children:["Employee Directory",Object(n.jsx)(u,{handleInputChange:this.handleInputChange})]}),Object(n.jsx)(f,{sortByName:this.handleSortByName}),this.state.searchUsers.map((function(e){return Object(n.jsx)(b,{firstName:e.name.first,lastName:e.name.last,email:e.email,age:e.dob.age,phone:e.phone,src:e.picture.large},e.login.username)}))]})}}]),s}(c.Component),p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,49)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),p()}},[[48,1,2]]]);
//# sourceMappingURL=main.32dcc4dd.chunk.js.map