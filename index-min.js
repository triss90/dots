"use strict";!function(){var t=function t(o){function i(t,o){var i={},s=void 0;for(s in t)i[s]=t[s];for(s in o)i[s]=o[s];return i}this.options=i(t.defaults,o),this.dot_selector=document.getElementById(this.options.selectorId),this.dot_size_minimum=this.options.sizeMin,this.dot_size_maximum=this.options.sizeMax,this.dot_number=this.options.dots,this.dot_radius=this.options.radius,this.dot_opacity=this.options.opacity,this.dot_zIndex=this.options.zIndex,this.dot_colors=this.options.colors,this.dot_parent_position=this.options.opacity,this.generateDots()};t.prototype.generateDots=function(){for(var t=this.dot_colors,o=0;o<this.dot_number;o++){var i=t[Math.floor(Math.random()*t.length)],s=Math.floor(Math.random()*(this.dot_size_maximum-this.dot_size_minimum+1))+this.dot_size_minimum,e=Math.floor(101*Math.random())+0,n=Math.floor(101*Math.random())+0,r=document.createElement("span");this.dot_selector.style.position="relative",r.style.position="absolute",r.style.background=i,r.style.borderRadius=this.dot_radius+"%",r.style.opacity=this.dot_opacity,r.style.pointerEvents="none",r.style.zIndex=this.dot_zIndex,r.style.height=s+"px",r.style.width=s+"px",r.style.left=e+"%",r.style.top=n+"%",this.dot_selector.appendChild(r)}},t.defaults={selectorId:"",colors:["rgb(248, 231, 28)","rgb(126, 211, 33)","rgb(212, 56, 79)","rgb(128, 185, 254)","rgb(245, 166, 35)","rgb(212, 65, 208)"],parentPosition:"relative",sizeMin:3,sizeMax:8,dots:15,radius:50,opacity:1,zIndex:-1},window.dot=t}();