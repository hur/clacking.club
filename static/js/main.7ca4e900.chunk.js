(this["webpackJsonpclacking.club"]=this["webpackJsonpclacking.club"]||[]).push([[0],{1300:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(1),s=r.n(i),c=r(13),o=r.n(c),h=(r(22),r(2)),a=r(3),d=r(6),u=r(5),l=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(n.jsx)("div",{id:"header",children:Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("h3",{children:"clacking.club"})})})}}]),r}(s.a.Component),x=r(4),p=function(){return(new Date).getTime()},j=r(14),b=r.n(j);function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return new Array(e).fill("").map((function(e){return b.a.random.word().toLowerCase()})).join(" ")}var T=r(15),y=r.n(T),m=r(16),v=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(h.a)(this,r),(n=t.call(this,e)).state={},n.precision=1,n.previousText="",n.nextText=w(2*n.props.window),n.currentChar=n.nextText.charAt(0),n.nextText=n.nextText.slice(1),n.errorText="",n.wordCount=0,n.errors=0,n.keyPresses=0,n.startTime=null,n.wpm="0",n.accuracy=100..toFixed(n.precision),n.handleKeyDown=n.handleKeyDown.bind(Object(x.a)(n)),n}return Object(a.a)(r,[{key:"handleKeyDown",value:function(e){var t;this.startTime||(this.startTime=p()),this.keyPresses++,e.key===this.currentChar&&0===this.errorText.length?(" "===this.nextText.charAt(0)&&this.wordCount++,this.previousText+=this.currentChar,this.currentChar=this.nextText.charAt(0),this.nextText=this.nextText.slice(1),this.nextText.split(" ").length<=this.props.window&&(this.nextText+=" "+w(this.props.window))):"Backspace"===e.key||"Delete"===e.key?(this.errorText=this.errorText.substring(0,this.errorText.length-1),this.keyPresses--):1===e.key.length&&(this.errors++,this.errorText+=e.key),this.wpm=(this.wordCount/(t=this.startTime,(p()-t)/6e4)||0).toFixed(0),this.accuracy=(100*(1-this.errors/this.keyPresses)).toFixed(this.precision),this.setState({})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=!!m.isMobile&&Object(n.jsx)("p",{id:"mobilehelper",children:"Mobile keyboard not supported."});return Object(n.jsxs)("div",{className:"typing",children:[Object(n.jsx)("span",{id:"previousText",children:this.previousText.substring(this.previousText.length-Math.max(this.props.window-this.errorText.length,0)).padStart(Math.max(this.props.window-this.errorText.length,0))}),Object(n.jsx)("span",{id:"errorText",children:this.errorText.slice(-this.props.window)}),Object(n.jsx)("span",{id:"currentChar",children:this.currentChar}),Object(n.jsx)("span",{id:"nextText",children:this.nextText.substring(0,this.props.window)}),Object(n.jsxs)("div",{id:"stats",children:[Object(n.jsxs)("span",{id:"wpm",children:[this.wpm.padStart(3)," words/minute"]}),Object(n.jsxs)("span",{id:"accuracy",children:[this.accuracy," %"]})]}),e]})}}]),r}(s.a.Component),O=y()((function(e){return{window:e.width<600?10:20}}))(v);var k=function(){return Object(n.jsxs)("div",{className:"App unselectable",children:[Object(n.jsx)(l,{}),Object(n.jsx)(O,{})]})};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root"))},22:function(e,t,r){}},[[1300,1,2]]]);
//# sourceMappingURL=main.7ca4e900.chunk.js.map