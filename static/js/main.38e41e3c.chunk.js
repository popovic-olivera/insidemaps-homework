(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i=n(6),o=n(9),r=n.n(o),s=n(12),a=n.n(s),c=(n(20),n(13)),l=n(0),d=n(4),u=n(7),h=n(2),b=n(3),w=n(1),x=n(14),p=function(){function e(t){Object(l.a)(this,e),this.originalBox=void 0;var n=new w.b(t,t,t),i=new w.i({color:1401481,shininess:50,flatShading:!0});e.counter+=1,n.name="Box".concat(e.counter),this.originalBox=new w.g(n,i)}return Object(d.a)(e,[{key:"setPosition",value:function(e){this.originalBox.position.set(e.x,e.y,e.z)}},{key:"getOriginalBox",get:function(){return this.originalBox}}]),e}();p.BOX_SIZE=70,p.counter=0;var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16776960;Object(l.a)(this,e),this.width=t,this.height=n,this.color=i,this.originalPlane=void 0;var o=new w.k(this.width,this.height),r=new w.h({color:this.color});this.originalPlane=new w.g(o,r)}return Object(d.a)(e,[{key:"setPosition",value:function(e){this.originalPlane.position.set(e.x,e.y,e.z)}},{key:"rotate",value:function(e){this.originalPlane.rotateX(e.x),this.originalPlane.rotateY(e.y),this.originalPlane.rotateZ(e.z)}},{key:"getOriginalPlane",get:function(){return this.originalPlane}}]),e}(),j=(n(21),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).nameEnter=i.nameEnter.bind(Object(u.a)(i)),i.sizeEnter=i.sizeEnter.bind(Object(u.a)(i)),i.colorEnter=i.colorEnter.bind(Object(u.a)(i)),i}return Object(d.a)(n,[{key:"exit",value:function(){document.querySelector(".popup").style.display="none"}},{key:"nameEnter",value:function(e){"Enter"===e.key&&(this.props.box.geometry.name=e.target.value,e.target.value="")}},{key:"sizeEnter",value:function(e){if("Enter"===e.key){var t,n=new w.s(0,0,0);this.props.box.geometry.computeBoundingBox(),null===(t=this.props.box.geometry.boundingBox)||void 0===t||t.getSize(n);var i=n.x,o=parseInt(e.target.value)/i;this.props.box.scale.x=o,this.props.box.scale.y=o,this.props.box.scale.z=o,e.target.value="",this.forceUpdate()}}},{key:"colorEnter",value:function(e){"Enter"===e.key&&(this.props.box.material.color=new w.c(e.target.value),e.target.value="")}},{key:"render",value:function(){var e=this.props.box.scale.x*p.BOX_SIZE,t=this.props.box.material.color;return Object(i.jsxs)("div",{className:"popup",style:{top:this.props.y,left:this.props.x},children:[Object(i.jsx)("span",{className:"close",onClick:this.exit,children:"x"}),Object(i.jsx)("p",{id:"heading",children:Object(i.jsx)("strong",{children:"Info"})}),Object(i.jsxs)("label",{htmlFor:"name",children:["Name: ",this.props.box.geometry.name,Object(i.jsx)("br",{}),"Enter new name:",Object(i.jsx)("br",{})]}),Object(i.jsx)("input",{id:"name",name:"name",type:"text",onKeyDown:this.nameEnter}),Object(i.jsxs)("label",{htmlFor:"size",children:["Size: ",e,Object(i.jsx)("br",{}),"Enter new size:",Object(i.jsx)("br",{})]}),Object(i.jsx)("input",{id:"size",name:"size",type:"number",onKeyDown:this.sizeEnter}),Object(i.jsxs)("label",{htmlFor:"color",children:["Color: ",t.getHexString(),Object(i.jsx)("br",{}),"Enter new color:",Object(i.jsx)("br",{})]}),Object(i.jsx)("input",{id:"color",color:"name",type:"text",onKeyDown:this.colorEnter})]})}}]),n}(o.Component));n(22);var g=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).mount=null,i.state={x2D:0,y2D:0,box:new w.g},i.setWindowListeners=i.setWindowListeners.bind(Object(u.a)(i)),i.onMouseClick=i.onMouseClick.bind(Object(u.a)(i)),i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=new w.o;!function(e){e.background=new w.c(13421772),e.fog=new w.e(13421772,.002);var t=new w.l(16777215,1,0);t.position.set(0,1e3,0),e.add(t);var n=new w.a(16777215,1);n.position.set(1e3,1e3,1e3),e.add(n)}(e);var t=new w.t({antialias:!0});!function(e){e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.setClearColor(13421772,1)}(t),this.mount.appendChild(t.domElement);var n=new w.j(60,window.innerWidth/window.innerHeight,1,1e3);!function(e){e.position.set(400,300,0)}(n);var i=new x.a(n,t.domElement);!function(e){e.enableDamping=!0,e.dampingFactor=.1,e.screenSpacePanning=!1,e.minDistance=100,e.maxDistance=250,e.maxPolarAngle=Math.PI/2}(i);var o=new v;o.setPosition(new w.s(0,-p.BOX_SIZE/2,0)),o.rotate(new w.s(-Math.PI/2)),e.add(o.getOriginalPlane);for(var r=0;r<3;r++){var s=new p(p.BOX_SIZE),a=2*Math.PI/3*r;s.setPosition(new w.s(150*Math.cos(a),0,150*Math.sin(a))),e.add(s.getOriginalBox)}this.setWindowListeners(n,t,e,i),function o(){requestAnimationFrame(o),i.update(),t.render(e,n)}()}},{key:"setWindowListeners",value:function(e,t,n,i){var o=this;window.addEventListener("resize",(function(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}),!1),document.getElementsByClassName("resetBtn")[0].addEventListener("click",(function(){i.reset(),e.position.set(400,300,0)}));var r=t.domElement;r.addEventListener("pointerdown",(function(i){o.onMouseClick(i,e,n,t)}),!1),r.addEventListener("mousedown",(function(i){o.onMouseClick(i,e,n,t)}),!1),r.addEventListener("touchstart",(function(i){o.onMouseClick(i,e,n,t)}),!1)}},{key:"onMouseClick",value:function(e,t,n,i){var o=new w.n,r=new w.r,s=i.domElement;e instanceof MouseEvent?(r.x=e.clientX/s.width*2-1,r.y=-e.clientY/s.height*2+1,o.setFromCamera(r,t),r.x=Math.round((.5+r.x/2)*(s.width/window.devicePixelRatio)),r.y=Math.round((.5-r.y/2)*(s.height/window.devicePixelRatio))):(r.x=e.touches[0].clientX/window.innerWidth*2-1,r.y=-e.touches[0].clientY/window.innerHeight*2+1,o.setFromCamera(r,t),r.x=Math.round((.5+r.x/2)*(window.innerWidth/window.devicePixelRatio)),r.y=Math.round((.5-r.y/2)*(window.innerHeight/window.devicePixelRatio)));var a=o.intersectObjects(n.children),c=document.querySelector(".popup");if(a.length>0){var l=a[0].object;l.geometry.type.includes("Box")&&"none"===c.style.display?(this.setState((function(){return{x2D:r.x,y2D:r.y,box:l}})),c.style.display="block"):c.style.display="none"}else c.style.display="none"}},{key:"render",value:function(){var e=this,t={x:this.state.x2D,y:this.state.y2D,box:this.state.box};return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{ref:function(t){return e.mount=t},id:"scene",children:[Object(i.jsx)("button",{className:"resetBtn",children:"Reset view"}),Object(i.jsx)(j,Object(c.a)({},t))]})})}}]),n}(o.Component);a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.38e41e3c.chunk.js.map