(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(12),n(1)),s=n(2),i=n(4),u=n(3),m=(n(13),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.monster;return r.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-3"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:"https://robohash.org/".concat(e.id,"?set=set4&size=180x180"),alt:"monster"}),r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.email)))}}]),n}(r.a.Component)),h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.monsters.map((function(e){return r.a.createElement(m,{monster:e,key:e.id})})))}}]),n}(r.a.Component),p=(n(14),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"search",placeholder:"search cats",onChange:this.props.handlechange}))}}]),n}(r.a.Component)),f=(n(15),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("footer",null,"Made by\xa0",r.a.createElement("p",null,"Matei Mircea"),"\xa0@ ",(new Date).getFullYear())}}]),n}(r.a.Component)),d=(n(16),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={monsters:[],searchInput:""},e.handlechange=function(t){e.setState({searchInput:t.target.value})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchInput,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Cats Rolodex"),r.a.createElement(p,{handlechange:this.handlechange}),r.a.createElement("div",{className:"row"},r.a.createElement(h,{monsters:a}))),r.a.createElement(f,null))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c9172526.chunk.js.map