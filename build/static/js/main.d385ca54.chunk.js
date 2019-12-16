(this["webpackJsonpreact-102"]=this["webpackJsonpreact-102"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(3),l=t.n(i),c=(t(15),t(4)),u=t(5),s=t(9),o=t(6),m=t(1),h=t(8);t(16);var g=function(e){var a=e.error,t=e.images.length,n=e.usernameQuery.length?"hasSidebar":"";if(""!==a)return r.a.createElement("main",null,r.a.createElement("p",null,"Error: ",e.error));if(0===t)return r.a.createElement("main",null,r.a.createElement("p",null,"No giphies yet! Search for something interesting above."));var i=e.images.map((function(a,t){var n="https://i.giphy.com/media/".concat(a.id,"/100.gif"),i="giphy from search phase: ".concat(e.executedQuery);return r.a.createElement("div",{key:"div"+t,className:"imageBox"},r.a.createElement("img",{key:t,src:n,alt:i}),a.username.length?r.a.createElement("p",{key:"a"+t},r.a.createElement("a",{href:"/",title:"See more by this creator","data-username":a.username,onClick:function(a){return e.handleUsernameClick(a)}},a.username)):r.a.createElement("p",{className:"anonymous",key:"b"+t},"No attribution"))}));return r.a.createElement("main",{className:n},r.a.createElement("p",null,'Your Giphy search for "',e.executedQuery,'" returned ',t," results."),i)};t(17);var d=function(e){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Giphy Madness!"),r.a.createElement("form",{onClick:e.handleSubmit},r.a.createElement("label",{htmlFor:"queryInput"},"Search:"),r.a.createElement("input",{type:"text",id:"queryInput",value:e.inputValue,onChange:e.handleInput}),r.a.createElement("input",{type:"submit",value:"Submit",className:"submit_btn"})))};t(18);var p=function(e){return r.a.createElement("section",{className:"filterContainer"},r.a.createElement("div",{className:"filter"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"limit"},"Limit:"),r.a.createElement("select",{value:e.limit,onChange:e.handleLimitChange,id:"limit"},r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"25"},"25"),r.a.createElement("option",{value:"50"},"50"))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"rating"},"Rating:"),r.a.createElement("select",{value:e.rating,onChange:e.handleRatingChange,id:"rating"},r.a.createElement("option",{value:"G"},"G"),r.a.createElement("option",{value:"PG"},"PG"),r.a.createElement("option",{value:"PG-13"},"PG-13"),r.a.createElement("option",{value:"R"},"R"))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"language"},"Language:"),r.a.createElement("select",{value:e.language,onChange:e.handleLangChange,id:"language"},r.a.createElement("option",{value:"en"},"English"),r.a.createElement("option",{value:"fr"},"French"),r.a.createElement("option",{value:"de"},"German"),r.a.createElement("option",{value:"Russian"},"Russian")))))},y=t(7),E=(t(19),function(e){var a=Object(n.useState)({query:"",queryError:"",executedQuery:"",images:[]}),t=Object(y.a)(a,2),i=t[0],l=t[1];Object(n.useEffect)((function(){var a="",t=e.api,n=t.key,r=t.baseUrl,i=t.rating,c=t.lang,u="@".concat(e.usernameQuery),s="".concat(r,"?api_key=").concat(n,"&q=").concat(u,"&limit=").concat(5,"&offset=0&rating=").concat(i,"&lang=").concat(c);fetch(s).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText)})).then((function(e){var t=e.data.map((function(e){return{id:e.id,username:e.username}}));l({images:t,executedQuery:u,query:"",queryError:a})})).catch((function(e){console.log(e),l({executedQuery:u,query:"",queryError:a="There was a problem with your query. Please try again."})}))}));var c=e.usernameQuery.length?"hasSidebar":"",u=i.images.map((function(e,a){var t="https://i.giphy.com/media/".concat(e.id,"/100.gif");return r.a.createElement("img",{key:a,src:t,alt:"giphy"})}));return r.a.createElement("aside",{className:c},r.a.createElement("a",{href:"/",className:"closeBox",onClick:function(a){return e.handleUsernameResetClick(a)}},"X"),r.a.createElement("h2",null,"Giphies by ",e.usernameQuery),u)}),v=(t(20),function(e){function a(e){var t;return Object(c.a)(this,a),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_KEY:"BqnQXS5pPdROPIUiaHIAKMNBd7roCny7"})),(t=Object(s.a)(this,Object(o.a)(a).call(this,e))).state={query:"",queryError:"",executedQuery:"",images:[],api:{key:"BqnQXS5pPdROPIUiaHIAKMNBd7roCny7",baseUrl:"https://api.giphy.com/v1/gifs/search",limit:5,rating:"G",lang:"en"},usernameQuery:""},t.handleInput=t.handleInput.bind(Object(m.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(m.a)(t)),t.handleLimitChange=t.handleLimitChange.bind(Object(m.a)(t)),t.handleLangChange=t.handleLangChange.bind(Object(m.a)(t)),t.handleRatingChange=t.handleRatingChange.bind(Object(m.a)(t)),t.handleUsernameClick=t.handleUsernameClick.bind(Object(m.a)(t)),t.handleUsernameResetClick=t.handleUsernameResetClick.bind(Object(m.a)(t)),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"handleUsernameClick",value:function(e){e.preventDefault(),this.setState({usernameQuery:e.target.dataset.username})}},{key:"handleUsernameResetClick",value:function(e){e.preventDefault(),console.log("clicked"),this.setState({usernameQuery:""})}},{key:"handleLimitChange",value:function(e){var a=Object.assign({},this.state.api);a.limit=e.target.value,this.setState({api:a})}},{key:"handleLangChange",value:function(e){var a=Object.assign({},this.state.api);a.lang=e.target.value,this.setState({api:a})}},{key:"handleRatingChange",value:function(e){var a=Object.assign({},this.state.api);a.rating=e.target.value,this.setState({api:a})}},{key:"handleInput",value:function(e){var a=e.target.value;this.setState({query:a})}},{key:"handleSubmit",value:function(e){var a=this;if(e.preventDefault(),0!==this.state.query.length){this.setState({images:[]});var t="",n=this.state.api,r=n.key,i=n.baseUrl,l=n.limit,c=n.rating,u=n.lang,s=this.state.query,o="".concat(i,"?api_key=").concat(r,"&q=").concat(s,"&limit=").concat(l,"&offset=0&rating=").concat(c,"&lang=").concat(u);fetch(o).then((function(e){if(e.status>=200&&e.status<=299)return e.json();throw Error(e.statusText)})).then((function(e){var n=e.data.map((function(e){return{id:e.id,username:e.username}}));a.setState({images:n,executedQuery:s,query:"",queryError:t})})).catch((function(e){console.log(e),t="There was a problem with your query. Please try again.",a.setState({executedQuery:s,query:"",queryError:t})}))}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{handleInput:this.handleInput,handleSubmit:this.handleSubmit,inputValue:this.state.query}),r.a.createElement(p,{handleLimitChange:this.handleLimitChange,handleLangChange:this.handleLangChange,handleRatingChange:this.handleRatingChange}),r.a.createElement("section",null,r.a.createElement(g,{images:this.state.images,executedQuery:this.state.executedQuery,error:this.state.queryError,usernameQuery:this.state.usernameQuery,handleUsernameClick:this.handleUsernameClick}),r.a.createElement(E,{api:this.state.api,usernameQuery:this.state.usernameQuery,handleUsernameResetClick:this.handleUsernameResetClick})))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d385ca54.chunk.js.map