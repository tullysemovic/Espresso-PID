(function(e){function t(t){for(var n,c,i=t[0],s=t[1],l=t[2],u=0,p=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("1da1"),a=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("96cf"),r("7a23")),o={class:"box"},c={class:"row text-center"},i={class:"col"},s={class:"text-center fontHeader"},l={class:"row content justify-center"},d={ref:"graph",class:"graph col-xs-12 col-sm-12 col-md-9 col-lg-6 col-xl-6 q-pa-sm"},u={class:"info col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-3 q-pa-sm"};function p(e,t,r,n,p,m){var f=Object(a["resolveComponent"])("Graph"),h=Object(a["resolveComponent"])("Info"),b=Object(a["resolveComponent"])("q-page"),g=Object(a["resolveComponent"])("q-page-container"),O=Object(a["resolveComponent"])("q-layout");return Object(a["openBlock"])(),Object(a["createBlock"])(O,{view:"hHh lpR fFf",class:"bg-image"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(g,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(b,null,{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("h1",s," GAGGIA CONTROLLER "+Object(a["toDisplayString"])(m.settings),1)])]),Object(a["createElementVNode"])("div",l,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(m.settings.VUE_SOCKET_ENDPOINT),1),Object(a["createElementVNode"])("div",d,[Object(a["createVNode"])(f,{temperature:e.temperatureData,time:e.timestampData,dataArray:p.dataArray,chartHeight:p.chartHeight},null,8,["temperature","time","dataArray","chartHeight"])],512),Object(a["createElementVNode"])("div",u,[Object(a["createVNode"])(h,{P:p.P,I:p.I,D:p.D,targetTemperature:p.targetTemperature,currentTemperature:p.currentTemperature,pidRecieved:p.pidRecieved,onSetPID:t[0]||(t[0]=function(e){return m.setPID(e)})},null,8,["P","I","D","targetTemperature","currentTemperature","pidRecieved"])])])])]})),_:1})]})),_:1})]})),_:1})}r("b680"),r("33d1"),r("ea98");function m(e,t,r,n,o,c){var i=Object(a["resolveComponent"])("apexchart"),s=Object(a["resolveComponent"])("q-card-section"),l=Object(a["resolveComponent"])("q-card");return Object(a["openBlock"])(),Object(a["createBlock"])(l,{class:"rounded graph-container bg-white text-black"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,{class:"graph-card"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,{class:"graph-graph",width:"100%",ref:"chart",options:e.chartOptions,series:e.series},null,8,["options","series"])]})),_:1})]})),_:1})}var f=r("ae27"),h=r.n(f),b=(r("5923"),{name:"LineExample",components:{apexchart:h.a},props:["temperature","time","chartHeight","dataArray"],data:function(){return{chartData:[],labelColor:"592D1D",intervalid1:null,chartOptions:{chart:{id:"realtime",type:"line",grid:{padding:{left:0,right:0}},redrawOnWindowResize:!0,animations:{enabled:!0,easing:"linear",dynamicAnimation:{speed:500},animateGradually:{enabled:!0,delay:2}},toolbar:{show:!1},zoom:{enabled:!1}},colors:["#D95448","#66DA26","#546E7A","#E91E63","#FF9800"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},title:{align:"left"},markers:{size:0},tooltip:{enabled:!0,followCursor:!0,fillSeriesColor:!0,x:{show:!1}},xaxis:{type:"datetime",tickAmount:3,range:3e4,labels:{style:{colors:"#592D1D"},formatter:function(e){var t=new Date,r="";return e>=t.getTime()-31e3&&(r="T-30"),e>=t.getTime()-21e3&&(r="T-20"),e>=t.getTime()-11e3&&(r="T-10"),e>=t.getTime()-1e3&&(r="Now"),r}}},yaxis:{labels:{style:{colors:"#592D1D"}},title:{text:"TEMPERATURE (°C)",rotate:-90,offsetX:-5,offsetY:0,style:{color:"#592D1D",fontSize:"12px",fontFamily:"customfont2",fontWeight:600}}},legend:{show:!1}},series:[{name:"Temperature",data:this.temperature}]}},mounted:function(){this.updateChart()},watch:{chartHeight:function(){this.resize()}},methods:{resize:function(){var e=this;setTimeout((function(){return e.chartOptions={chart:{height:"100%"}}}),3e3)},initChart:function(){this.chartData=this.dataArray},updateChart:function(){var e=this,t=this;this.intervalid1=setInterval((function(){e.chartData.length<25&&e.initChart(),e.chartData.length>360&&(e.chartData=e.dataArray),e.dict={x:e.dataArray[e.dataArray.length-1].x,y:e.dataArray[e.dataArray.length-1].y},e.chartData.push(e.dict),t.$refs.chart.updateSeries([{data:e.chartData}])}),500)}}}),g=r("6b0d"),O=r.n(g),j=r("f09f"),v=r("a370"),V=r("93dc"),x=r.n(V);const w=O()(b,[["render",m]]);var N=w;x()(b,"components",{QCard:j["a"],QCardSection:v["a"]});var D={class:"info-container"},y={class:"row items-center no-wrap"},T={class:"col"},E=Object(a["createElementVNode"])("div",{class:"text-subtitle1"},"TEMPERATURE",-1),C={class:"text-h3"},_={class:"row items-center no-wrap"},P={class:"col"},I=Object(a["createElementVNode"])("div",{class:"text-subtitle1"},"TARGET TEMPERATURE",-1),S={class:"text-h3"},A={class:"row items-center no-wrap"},k={class:"col"},R=Object(a["createElementVNode"])("div",{class:"text-subtitle1"},"Settings",-1),q={class:"pid-container"},H={class:"text-h5 text-weight-bold pid-item"},F=Object(a["createTextVNode"])(" P:"),Q={class:"text-h5"},U={class:"text-h5 text-weight-bold pid-item"},z=Object(a["createTextVNode"])(" I:"),M={class:"text-h5"},B={class:"text-h5 text-weight-bold pid-item"},G=Object(a["createTextVNode"])(" D:"),L={class:"text-h5"},$=Object(a["createElementVNode"])("div",{class:"text-h5"},"PID Settings",-1),K={class:"settings-container"},J={class:"settings-item"},W={class:"settings-item"},X={class:"settings-item"},Y={class:"settings-item2"};function Z(e,t,r,n,o,c){var i=Object(a["resolveComponent"])("q-card-section"),s=Object(a["resolveComponent"])("q-card"),l=Object(a["resolveComponent"])("q-btn"),d=Object(a["resolveComponent"])("q-card-actions"),u=Object(a["resolveComponent"])("q-space"),p=Object(a["resolveComponent"])("q-input"),m=Object(a["resolveComponent"])("q-dialog"),f=Object(a["resolveDirective"])("close-popup");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",D,[Object(a["createVNode"])(s,{flat:"",bordered:"",class:"rounded info-temperature bg-white text-primary no-margin"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,null,{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",y,[Object(a["createElementVNode"])("div",T,[E,Object(a["createElementVNode"])("div",C,Object(a["toDisplayString"])(r.currentTemperature),1)])])]})),_:1})]})),_:1}),Object(a["createVNode"])(s,{flat:"",bordered:"",class:"rounded info-targetTemperature bg-white text-primary no-margin"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,null,{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",_,[Object(a["createElementVNode"])("div",P,[I,Object(a["createElementVNode"])("div",S,Object(a["toDisplayString"])(r.targetTemperature),1)])])]})),_:1})]})),_:1}),Object(a["createVNode"])(s,{flat:"",bordered:"",class:"rounded info-pid bg-white text-primary no-margin"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,null,{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",A,[Object(a["createElementVNode"])("div",k,[R,Object(a["createElementVNode"])("div",q,[Object(a["createElementVNode"])("div",H,[F,Object(a["createElementVNode"])("span",Q,Object(a["toDisplayString"])(r.P),1)]),Object(a["createElementVNode"])("div",U,[z,Object(a["createElementVNode"])("span",M,Object(a["toDisplayString"])(r.I),1)]),Object(a["createElementVNode"])("div",B,[G,Object(a["createElementVNode"])("span",L,Object(a["toDisplayString"])(r.D),1)])])])])]})),_:1}),Object(a["createVNode"])(d,{class:"justify-center"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(l,{color:"red",size:"22px",icon:"settings",label:"Settings",class:"full-width rounded",onClick:t[0]||(t[0]=function(t){c.updateForm(),e.settings=!0})})]})),_:1})]})),_:1}),Object(a["createVNode"])(m,{modelValue:e.settings,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.settings=t}),persistent:"","transition-show":"flip-down","transition-hide":"flip-up"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,{class:"rounded"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,{class:"row items-center q-pb-none bg-white text-primary"},{default:Object(a["withCtx"])((function(){return[$,Object(a["createVNode"])(u),Object(a["withDirectives"])(Object(a["createVNode"])(l,{icon:"close",flat:"",round:"",dense:""},null,512),[[f]]),Object(a["withDirectives"])(Object(a["createVNode"])(l,{icon:"done",flat:"",round:"",dense:"",onClick:t[1]||(t[1]=function(e){return c.passEvent()})},null,512),[[f]])]})),_:1}),Object(a["createVNode"])(i,null,{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",K,[Object(a["createElementVNode"])("div",J,[Object(a["createVNode"])(p,{rounded:"",standout:"bg-red text-white",modelValue:e.form_P,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form_P=t}),label:"P",dense:e.dense},null,8,["modelValue","dense"])]),Object(a["createElementVNode"])("div",W,[Object(a["createVNode"])(p,{rounded:"",standout:"bg-red text-white",modelValue:e.form_I,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.form_I=t}),label:"I",dense:e.dense},null,8,["modelValue","dense"])]),Object(a["createElementVNode"])("div",X,[Object(a["createVNode"])(p,{rounded:"",standout:"bg-red text-white",modelValue:e.form_D,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.form_D=t}),label:"D",dense:e.dense},null,8,["modelValue","dense"])]),Object(a["createElementVNode"])("div",Y,[Object(a["createVNode"])(p,{rounded:"",standout:"bg-red text-white",modelValue:e.form_targetTemperature,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.form_targetTemperature=t}),label:"Target Temperature",dense:e.dense},null,8,["modelValue","dense"])])])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])])}var ee={name:"Info",props:["P","I","D","targetTemperature","currentTemperature","pidRecieved"],data:function(){return{displayTemperature:0,form_P:this.P,form_I:this.I,form_D:this.D,form_targetTemperature:this.targetTemperature}},methods:{passEvent:function(){var e=this,t={P:this.form_P,I:this.form_I,D:this.form_D,targetTemperature:this.form_targetTemperature};this.$emit("setPID",t),setTimeout((function(){return e.showNotification()}),100)},updateForm:function(){this.form_P=this.P,this.form_I=this.I,this.form_D=this.D,this.form_targetTemperature=this.targetTemperature},showNotification:function(){1==this.pidRecieved&&this.$q.notify({icon:null,color:"green",position:"top",message:"PID settings updated successfully!",timeout:3e3})}}},te=r("4b7e"),re=r("9c40"),ne=r("24e8"),ae=r("2c91"),oe=r("27f9"),ce=r("7f67");const ie=O()(ee,[["render",Z]]);var se=ie;x()(ee,"components",{QCard:j["a"],QCardSection:v["a"],QCardActions:te["a"],QBtn:re["a"],QDialog:ne["a"],QSpace:ae["a"],QInput:oe["a"]}),x()(ee,"directives",{ClosePopup:ce["a"]});var le=r("daa8"),de=null,ue={setup:function(){de=le["a"].connect(this.settings.VUE_SOCKET_ENDPOINT)},inject:["settings"],components:{Graph:N,Info:se},data:function(){return{P:"",I:"",D:"",targetTemperature:"",currentTemperature:"",dataArray:[],vueSocketEndpoint:"",chartHeight:null,pidRecieved:!1}},created:function(){this.getTemperature(),this.getPID()},beforeMount:function(){this.getPID()},mounted:function(){alert(this.$config.FLASK_PORT),this.askForTemperature(),this.askForPID(),this.$nextTick((function(){window.addEventListener("resize",this.updateChartHeight),this.updateChartHeight()}))},methods:{getTemperature:function(){var e=this;de.on("recieve_temperature",(function(t){e.dataArray=t,e.currentTemperature=t.at(-1).y.toFixed(2)}))},getPID:function(){var e=this;de.on("give_PID",(function(t){e.P=t["PID"]["P"],e.I=t["PID"]["I"],e.D=t["PID"]["D"],e.targetTemperature=t["TargetTemperature"],e.pidRecieved=!0,setTimeout((function(){return e.pidRecieved=!1}),3e3)}))},askForTemperature:function(){setInterval((function(){de.emit("send_temperature")}),500)},askForPID:function(){de.emit("get_PID")},setPID:function(e){de.emit("send_PID",e)},updateChartHeight:function(){this.chartHeight=this.$refs.graph.clientHeight}}},pe=(r("7195"),r("4d5a")),me=r("09e3"),fe=r("9989");const he=O()(ue,[["render",p],["__scopeId","data-v-1d7ee710"]]);var be=he;x()(ue,"components",{QLayout:pe["a"],QPageContainer:me["a"],QPage:fe["a"]});var ge=r("b05d"),Oe=r("2a19"),je=(r("c867"),r("e54f"),{config:{},plugins:{}}),ve=r("bc3a"),Ve=r.n(ve);function xe(){return we.apply(this,arguments)}function we(){return we=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ve.a.get("/settings");case 2:return t=e.sent,e.next=5,t.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),we.apply(this,arguments)}xe().then((function(e){Object(a["createApp"])(be).use(ge["a"],{plugins:{Notify:Oe["a"]},config:{notify:{}}},je).provide("settings",e).mount("#app")}))},5923:function(e,t,r){},7195:function(e,t,r){"use strict";r("c639")},c639:function(e,t,r){},c867:function(e,t,r){}});
//# sourceMappingURL=app.0f2c3986.js.map