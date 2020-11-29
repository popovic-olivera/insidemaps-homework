(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){},22:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var i=t(6),o=t(9),a=t.n(o),r=t(12),s=t.n(r),c=(t(20),t(13)),l=t(0),d=t(4),h=t(8),u=t(1),v=t(2),g=t(3),p=t(14),w=function(){function e(n){Object(l.a)(this,e),this.originalBox=void 0;var t=new g.b(n,n,n),i=new g.j({specular:14116145,color:15697972,emissive:9184023,shininess:50,flatShading:!0});e.counter+=1,t.name="Box".concat(e.counter),this.originalBox=new g.h(t,i)}return Object(d.a)(e,[{key:"setPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.originalBox.position.set(e,n,t)}},{key:"getOriginalBox",get:function(){return this.originalBox}}]),e}();w.counter=0;var b=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16776960;Object(l.a)(this,e),this.width=n,this.height=t,this.color=i,this.originalPlane=void 0;var o=new g.l(this.width,this.height),a=new g.i({color:this.color});this.originalPlane=new g.h(o,a)}return Object(d.a)(e,[{key:"setPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.originalPlane.position.set(e,n,t)}},{key:"rotate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.originalPlane.rotateX(e),this.originalPlane.rotateY(n),this.originalPlane.rotateZ(t)}},{key:"getOriginalPlane",get:function(){return this.originalPlane}}]),e}(),x=(t(21),function(e){Object(u.a)(t,e);var n=Object(v.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"exit",value:function(){document.querySelector(".popup").style.display="none"}},{key:"nameChanged",value:function(){}},{key:"render",value:function(){var e;this.props.box.geometry.computeBoundingBox();var n=new g.s(0,0,0);null===(e=this.props.box.geometry.boundingBox)||void 0===e||e.getSize(n);var t=this.props.box.material.color;return Object(i.jsxs)("div",{className:"popup",style:{top:this.props.y,left:this.props.x},children:[Object(i.jsx)("span",{id:"close",onClick:this.exit,children:"x"}),Object(i.jsx)("p",{style:{textAlign:"center"},children:Object(i.jsx)("strong",{children:"Info"})}),Object(i.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(i.jsx)("input",{id:"name",name:"name",value:this.props.box.geometry.name,onChange:this.nameChanged}),Object(i.jsx)("label",{htmlFor:"name",children:"Size:"}),Object(i.jsx)("input",{id:"size",name:"size",value:n.x,disabled:!0}),Object(i.jsx)("label",{htmlFor:"name",children:"Color:"}),Object(i.jsx)("input",{id:"color",name:"color",value:t.getHexString(),disabled:!0})]})}}]),t}(o.Component));t(22);var m=function(e){Object(u.a)(t,e);var n=Object(v.a)(t);function t(e){var i;return Object(l.a)(this,t),(i=n.call(this,e)).BOX_SIZE=70,i.mount=null,i.state={x:0,y:0,box:new g.h},i.setWindowListeners=i.setWindowListeners.bind(Object(h.a)(i)),i.onMouseClick=i.onMouseClick.bind(Object(h.a)(i)),i}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=new g.o;!function(e){e.background=new g.c(13421772),e.fog=new g.f(13421772,.002);var n=new g.d(16645629,2);n.position.set(400,500,0).normalize(),e.add(n);var t=new g.a(34);e.add(t)}(e);var n=new g.t({antialias:!0});!function(e){e.setSize(window.innerWidth,window.innerHeight)}(n),this.mount.appendChild(n.domElement);var t=new g.k(60,window.innerWidth/window.innerHeight,1,1e3);!function(e){e.position.set(400,100,0)}(t);var i=new p.a(t,n.domElement);!function(e){e.enableDamping=!0,e.dampingFactor=.1,e.screenSpacePanning=!1,e.minDistance=100,e.maxDistance=100,e.maxPolarAngle=Math.PI/2}(i);var o=new b;o.setPosition(0,-this.BOX_SIZE/2,0),o.rotate(-Math.PI/2),e.add(o.getOriginalPlane);for(var a=0;a<3;a++){var r=new w(this.BOX_SIZE),s=2*Math.PI/3*a;r.setPosition(150*Math.cos(s),0,150*Math.sin(s)),e.add(r.getOriginalBox)}this.setWindowListeners(t,n,e),function o(){requestAnimationFrame(o),i.update(),n.render(e,t)}()}},{key:"setWindowListeners",value:function(e,n,t){var i=this;window.addEventListener("resize",(function(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}),!1),window.addEventListener("keydown",(function(n){"r"===n.key&&e.position.set(400,100,0)})),n.domElement.addEventListener("click",(function(o){i.onMouseClick(o,e,t,n)}),!1)}},{key:"onMouseClick",value:function(e,n,t,i){var o=new g.n,a=new g.r,r=i.domElement;a.x=e.clientX/r.width*2-1,a.y=-e.clientY/r.height*2+1,o.setFromCamera(a,n);var s=o.intersectObjects(t.children);if(s.length>0){var c=s[0].object,l=document.querySelector(".popup");c.geometry.type.includes("Box")&&"none"===l.style.display?(a.x=Math.round((.5+a.x/2)*(r.width/window.devicePixelRatio)),a.y=Math.round((.5-a.y/2)*(r.height/window.devicePixelRatio)),this.setState((function(){return{x:a.x,y:a.y,box:c}})),l.style.display="block"):l.style.display="none"}}},{key:"render",value:function(){var e=this,n={x:this.state.x,y:this.state.y,box:this.state.box};return Object(i.jsx)("div",{children:Object(i.jsx)("div",{ref:function(n){return e.mount=n},id:"scene",children:Object(i.jsx)(x,Object(c.a)({},n))})})}}]),t}(o.Component);s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3bb0e859.chunk.js.map