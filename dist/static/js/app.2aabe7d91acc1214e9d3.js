webpackJsonp([1],{"7MiC":function(e,a,t){e.exports=t.p+"static/img/patac_simple.a282049.png"},AiOI:function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("7+uW"),s={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"app"}},[a("img",{staticStyle:{width:"500px"},attrs:{src:t("7MiC")}}),this._v(" "),a("router-view")],1)},staticRenderFns:[]};var r=t("VU/8")({name:"App"},s,!1,function(e){t("AiOI")},null,null).exports,o=t("/ocq"),p=t("mtWM"),i=t.n(p);function u(e){return i.a.create({baseURL:"http://10.203.71.4:8089",timeout:5e3})(e)}var c={name:"app",data:function(){return{message:"Opengrok密码修改系统!",username:"",oldpasswd:"",newpasswd:"",user:["yangfei","wangbin","liqiang"]}},methods:{changePasswd:function(){this.checkoutUser()},checkoutUser:function(){var e=this;return u({url:"/url",method:"GET"}).then(function(a){console.log(a),a.data[e.username]==e.oldpasswd?e.oldpasswd==e.newpasswd?alert("新旧密码不能相同或不能为空！"):u({url:"/url",method:"POST",data:{name:e.username,passwd:e.newpasswd}}).then(function(a){console.log(a),alert(e.username+":密码修改成功")}).catch(function(e){console.log(e),alert("修改密码失败！")}):alert("用户名或密码错误，请重新输入！")}).catch(function(e){console.log(e),alert("服务器请求失败，请重试！")}),-1}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("h1",[e._v(e._s(e.message))]),e._v(" "),t("image",{attrs:{src:"image/logo.png"}}),t("br"),e._v(" "),t("p",[e._v("用户名:"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"请输入用户名"},domProps:{value:e.username},on:{input:function(a){a.target.composing||(e.username=a.target.value)}}})]),t("p",[e._v("旧密码:"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.oldpasswd,expression:"oldpasswd"}],attrs:{type:"password",placeholder:"请输入旧密码"},domProps:{value:e.oldpasswd},on:{input:function(a){a.target.composing||(e.oldpasswd=a.target.value)}}})]),t("p",[e._v("新密码:"),t("br"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newpasswd,expression:"newpasswd"}],attrs:{type:"password",placeholder:"请输入新密码"},domProps:{value:e.newpasswd},on:{input:function(a){a.target.composing||(e.newpasswd=a.target.value)}}})]),e._v(" "),t("button",{on:{click:e.changePasswd}},[e._v("提交")]),e._v(" "),t("p",[e._v("如果您点击提交，密码将会被立即修改。")])])},staticRenderFns:[]};var d=t("VU/8")(c,l,!1,function(e){t("NJfQ")},"data-v-0bad6a7c",null).exports;n.a.use(o.a);var m=new o.a({routes:[{path:"/",name:"app",component:d}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:m,components:{App:r},template:"<App/>"})},NJfQ:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.2aabe7d91acc1214e9d3.js.map