(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{14:function(e,t,a){e.exports=a(40)},19:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(10),r=a.n(o),l=(a(19),a(3)),s=a(4),c=a(2),u=a(6),d=a(5),h=a(13),m=(a(34),a(12)),v=a(11);var g=function(e){return i.a.createElement("div",{className:"article"},i.a.createElement("p",{className:"article-title"},e.data.title),i.a.createElement(v.a,{className:"delete",onClick:function(){return e.deleteArticle(e.data.id)},icon:m.a}),i.a.createElement("p",{className:"article-author"},e.data.author),i.a.createElement("p",{className:"article-content "},e.data.content))},p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={title:"",author:"",content:""},n}return Object(s.a)(a,[{key:"reset",value:function(){this.setState({title:"",author:"",content:""})}},{key:"handleChange",value:function(e,t){1!=t?2!=t?this.setState({content:e.target.value}):this.setState({author:e.target.value}):this.setState({title:e.target.value})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"add",key:"add",className:"article-t"},i.a.createElement("textarea",{onChange:function(){return e.handleChange(event,1)},value:this.state.title,className:"article-title",placeholder:"Title"}),i.a.createElement("textarea",{onChange:function(){return e.handleChange(event,2)},value:this.state.author,className:"article-author article-author-t",placeholder:"Author Name"}),i.a.createElement("textarea",{onChange:function(){return e.handleChange(event,3)},value:this.state.content,className:"article-content article-conetent-t",placeholder:"Content"}),i.a.createElement("button",{id:"addButton",onClick:function(){e.reset(),e.props.addArticle(e.state)}},"Add article"))}}]),a}(i.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);var n=(e=t.call(this)).getCacheData();return e.state={loaded:!1,items:n},setTimeout((function(){e.setState({loaded:!0})}),700),e.addArticle=e.addArticle.bind(Object(c.a)(e)),e.deleteArticle=e.deleteArticle.bind(Object(c.a)(e)),e}return Object(s.a)(a,[{key:"getCacheData",value:function(){var e,t=localStorage.getItem("items");if(0==(e=t?JSON.parse(t):[]).length){var a={id:0,title:"How To Attract Women",author:"Vanilla",content:"There\u2019s a lot of advice on attracting women out there. And what most of it misses is that attraction, seduction, intimacy, sex, whatever you want to call it \u2014 is an emotional process, not a physical or social one. You can say the \u201cwrong\u201d things and still attract a woman. You can say all of the \u201cright\u201d things and repel her. What matters is the intention, the motivation, the authenticity. To improve your dating life, you must improve your emotional life \u2014 how you feel about yourself and others, how you express yourself to others, etc."};(e=[]).push(a),a={id:1,title:"What is Lorem Ipsum",author:"Vanilla",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},e.push(a)}return e}},{key:"isEmpty",value:function(e){return""==e.title||(""==e.content||""==e.author)}},{key:"addArticle",value:function(e){var t=e.title,a=e.author,n=e.content,i={};if(i.title=t.trim(),i.author=a.trim(),i.content=n.trim(),i.id=Date.now(),!this.isEmpty(i)){console.log("called add"),console.log(i);var o=this.state.items;o.push(i),this.setState({items:o}),localStorage.setItem("items",JSON.stringify(this.state.items))}}},{key:"deleteArticle",value:function(e){console.log(e);for(var t=this.state.items,a=0;a<t.length;a++)if(t[a].id==e){t.splice(a,1);break}this.setState({items:t}),localStorage.setItem("items",JSON.stringify(this.state.items))}},{key:"createItems",value:function(){var e=this;return this.state.items.map((function(t){return i.a.createElement(g,{key:t.id,data:t,deleteArticle:e.deleteArticle})}))}},{key:"render",value:function(){if(!this.state.loaded)return i.a.createElement("div",{id:"body"},i.a.createElement("div",{className:"title-box"},i.a.createElement("h1",{id:"title"},"Vanilla's Blog")),i.a.createElement("div",{id:"loading-box"},i.a.createElement(h.a,{color:"green",size:"300"})));var e=this.createItems();return i.a.createElement("div",{id:"body"},i.a.createElement("div",{className:"title-box"},i.a.createElement("h1",{id:"title"},"Vanilla's Blog")),i.a.createElement("span",{id:"article-box"},e,i.a.createElement(p,{addArticle:this.addArticle})))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.d060447c.chunk.js.map