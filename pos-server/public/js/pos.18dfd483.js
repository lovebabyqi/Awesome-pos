(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pos"],{"0692":function(t,e,r){"use strict";var n=r("7c40"),o=r.n(n);o.a},"13d5":function(t,e,r){"use strict";var n=r("23e7"),o=r("d58f").left,i=r("a640"),s=r("ae40"),a=i("reduce"),c=s("reduce",{1:0});n({target:"Array",proto:!0,forced:!a||!c},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,i,s){try{var a=t[i](s),c=a.value}catch(u){return void r(u)}a.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var s=t.apply(e,r);function a(t){n(s,o,i,a,c,"next",t)}function c(t){n(s,o,i,a,c,"throw",t)}a(void 0)}))}}},"35c5":function(t,e,r){},"365c":function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"h",(function(){return i})),r.d(e,"d",(function(){return s})),r.d(e,"j",(function(){return a})),r.d(e,"a",(function(){return c})),r.d(e,"e",(function(){return u})),r.d(e,"f",(function(){return l})),r.d(e,"g",(function(){return d})),r.d(e,"i",(function(){return f})),r.d(e,"c",(function(){return p}));r("d3b7");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get";return new Promise((function(n){var o=null;o="get"===r?axios.get(t,{params:e}):axios.post(t,e),o.then((function(t){n(t)}))}))}axios.interceptors.response.use((function(t){return t.data}));var o=function(t){return n("/product/add",t,"post")},i=function(){return n("/product/getList")},s=function(t){return n("/product/deleteOne",t,"post")},a=function(t){return n("/product/updateOne",t,"post")},c=function(t){return n("/order/addAccount",t,"post")},u=function(){return n("/order/getAllAccount")},l=function(){return n("/order/getAllOrderList")},d=function(t){return n("/order/getOneDayOrderList",t,"get")},f=function(t){return n("/order/saveTodoList",t,"post")},p=function(t){return n("/img/delete",t,"post")}},"45fc":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").some,i=r("a640"),s=r("ae40"),a=i("some"),c=s("some");n({target:"Array",proto:!0,forced:!a||!c},{some:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"498a":function(t,e,r){"use strict";var n=r("23e7"),o=r("58a8").trim,i=r("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return o(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),o=r("5899"),i="["+o+"]",s=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"7a0c":function(t,e,r){"use strict";var n=r("c96a"),o=r.n(n);o.a},"7c40":function(t,e,r){},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=L;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",v={},m={};m[s]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(N([])));y&&y!==n&&o.call(y,s)&&(m=y);var b=C.prototype=_.prototype=Object.create(m);x.prototype=b.constructor=C,C.constructor=x,C[c]=x.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},O(k.prototype),k.prototype[a]=function(){return this},l.AsyncIterator=k,l.async=function(t,e,r,n){var o=new k(L(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},O(b),b[c]="Generator",b[s]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var c=o.call(s,"catchLoc"),u=o.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function L(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),s=new T(n||[]);return i._invoke=P(t,r,s),i}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function _(){}function x(){}function C(){}function O(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t){function e(r,n,i,s){var a=w(t[r],t,n);if("throw"!==a.type){var c=a.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,s)}),(function(t){e("throw",t,i,s)})):Promise.resolve(u).then((function(t){c.value=t,i(c)}),s)}s(a.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function P(t,e,r){var n=d;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return $()}r.method=o,r.arg=i;while(1){var s=r.delegate;if(s){var a=j(s,r);if(a){if(a===v)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=w(t,e,r);if("normal"===c.type){if(n=r.done?h:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=w(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var e=t[s];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:$}}function $(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},"9bb4":function(t,e,r){},a434:function(t,e,r){"use strict";var n=r("23e7"),o=r("23cb"),i=r("a691"),s=r("50c4"),a=r("7b0b"),c=r("65f0"),u=r("8418"),l=r("1dde"),d=r("ae40"),f=l("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var r,n,l,d,f,p,y=a(this),b=s(y.length),L=o(t,b),w=arguments.length;if(0===w?r=n=0:1===w?(r=0,n=b-L):(r=w-2,n=v(h(i(e),0),b-L)),b+r-n>m)throw TypeError(g);for(l=c(y,n),d=0;d<n;d++)f=L+d,f in y&&u(l,d,y[f]);if(l.length=n,r<n){for(d=L;d<b-n;d++)f=d+n,p=d+r,f in y?y[p]=y[f]:delete y[p];for(d=b;d>b-n+r;d--)delete y[d-1]}else if(r>n)for(d=b-n;d>L;d--)f=d+n-1,p=d+r-1,f in y?y[p]=y[f]:delete y[p];for(d=0;d<r;d++)y[d+L]=arguments[d+2];return y.length=b-n+r,l}})},a5e2:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"pos"}},[r("div",{staticClass:"left-pos"},[r("div",{staticClass:"pos-bar"},[r("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"点餐",name:"first"}},[r("pos-order")],1),r("el-tab-pane",{attrs:{label:"出单",name:"second"}},[r("pos-record")],1),r("el-tab-pane",{attrs:{label:"备忘录",name:"third"}},[r("todo-list")],1)],1)],1)]),r("div",{staticClass:"right-pos"},[r("div",{staticClass:"right-pos-top"},[r("activity-product",{attrs:{"activity-list":t.activeList}})],1),r("div",{staticClass:"right-pos-bottom"},[r("order-product-list",{attrs:{"product-list":t.productList}})],1)])])},o=[],i=(r("96cf"),r("1da1")),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pos-order"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.orderList,border:"","empty-text":"暂无商品"}},[r("el-table-column",{attrs:{prop:"productName",label:"商品名称"}}),r("el-table-column",{attrs:{prop:"productCount",label:"数量",width:"80"}}),r("el-table-column",{attrs:{prop:"productPrice",label:"单价",width:"80"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return t.addCount(e.row)}}},[t._v(" 添加 ")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return t.deleteCount(e.row,e.$index)}}},[t._v(" 移除 ")])]}}])})],1),r("div",{staticClass:"total"},[r("span",[t._v("数量:"+t._s(t.countTotal))]),r("span",[t._v("总计: ¥"+t._s(t.priceTotal))])]),r("el-button",{staticClass:"add-btn",attrs:{type:"primary"},on:{click:t.addAccount}},[t._v("结算出单")])],1)},a=[],c=(r("4de4"),r("13d5"),r("45fc"),r("a434"),r("365c")),u=r("5f72"),l={name:"PosOrder",data:function(){return{orderList:[]}},mounted:function(){var t=this;this.$bus.$on("addProductToPos",(function(e,r,n){if(t.hasProduct(e)){var o=t.orderList.filter((function(t){return t.productName===e}));o[0].productCount++}else t.orderList.push({productName:e,productPrice:r,productType:n,productCount:1})}))},computed:{priceTotal:function(){return this.orderList.reduce((function(t,e){return t+ +e.productPrice*e.productCount}),0)},countTotal:function(){return this.orderList.reduce((function(t,e){return t+ +e.productCount}),0)}},methods:{hasProduct:function(t){return this.orderList.some((function(e){return e.productName===t}))},addCount:function(t){t.productCount++},deleteCount:function(t,e){1===t.productCount?this.orderList.splice(e,1):t.productCount--},addAccount:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0===t.priceTotal){e.next=14;break}return r={},r.orderList=t.orderList,r.priceTotal=t.priceTotal,r.timeDate=(new Date).toLocaleDateString(),r.time=Date.now(),t.$bus.$emit("addPosRecord",r),e.next=9,Object(c["a"])(r);case 9:n=e.sent,o=n.status,i=n.msg,0===o?(Object(u["Message"])({message:i,type:"success"}),t.orderList=[]):Object(u["Message"])({message:i,type:"error"}),e.next=15;break;case 14:Object(u["Message"])({message:"未添加商品,无需结算",type:"info"});case 15:case"end":return e.stop()}}),e)})))()}}},d=l,f=(r("ebd4"),r("2877")),p=Object(f["a"])(d,s,a,!1,null,"aad8eee2",null),h=p.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pos-record"},[0===t.recordList.length?r("h3",{staticClass:"record-title"},[t._v("今日暂未出单")]):r("h3",{staticClass:"record-title"},[t._v("今日出单")]),r("el-button",{staticClass:"record-btn",attrs:{type:"danger"},on:{click:t.clearRecoed}},[t._v("清除今日出单")]),t._l(t.recordList,(function(e,n){return r("el-card",{key:e.index,staticClass:"box-card"},[r("h3",{staticClass:"title"},[t._v(t._s(t._f("stringTime")(e.time)))]),t._l(e.orderList,(function(e,n){return r("div",{key:n,staticClass:"text item"},[t._v(" "+t._s(e.productName)+" "),r("span",{staticClass:"item-count"},[t._v("数量:"+t._s(e.productCount))]),r("span",{staticClass:"item-price"},[t._v("¥:"+t._s(e.productPrice))])])})),r("span",{staticClass:"price-total"},[t._v("总计: ¥"+t._s(e.priceTotal))])],2)}))],2)},m=[],g={name:"PosRecord",data:function(){return{recordList:[]}},created:function(){this.recordList=JSON.parse(localStorage.getItem("posRecord"))||[]},mounted:function(){var t=this;this.$bus.$on("addPosRecord",(function(e){t.recordList.push(e),localStorage.setItem("posRecord",JSON.stringify(t.recordList))}))},filters:{stringTime:function(t){var e=new Date(JSON.parse(t));return e.toLocaleString()}},methods:{clearRecoed:function(){this.isAfterWork()?(localStorage.removeItem("posRecord"),this.recordList=[]):Object(u["Message"])({message:"请在每天下班6:00时确认记录后操作,休息时间请勿操作",type:"error"})},isAfterWork:function(){var t=(new Date).getHours();return t>18}}},y=g,b=(r("f681"),Object(f["a"])(y,v,m,!1,null,"0690c45f",null)),L=b.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"activity-product select-disabled"},[r("h3",{staticClass:"title"},[t._v("热销单品")]),t._l(t.activityList,(function(e){return r("el-tag",{key:e.product_name,staticClass:"product-tag select-disabled",attrs:{type:t.items[e.type].type,effect:"plain"},on:{click:function(r){return t.addProduct(e.product_name,e.price,e.type)}}},[t._v(" "+t._s(e.product_name)+" "),r("span",{staticClass:"price"},[t._v("¥"+t._s(e.price))])])}))],2)},_=[],x={name:"ActivityProduct",props:{activityList:{type:Array,default:function(){return[]}}},data:function(){return{items:[{type:""},{type:"success"},{type:"info"},{type:"danger"},{type:"warning"}]}},methods:{addProduct:function(t,e,r){this.$bus.$emit("addProductToPos",t,e,r)}}},C=x,O=(r("f9e4"),Object(f["a"])(C,w,_,!1,null,"fdd0fbb8",null)),k=O.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"todo-list"},[r("h3",{staticClass:"title"},[t._v("备忘录todoList")]),r("el-input",{staticClass:"todo-input",attrs:{placeholder:"请记录下每天特殊事宜,输入内容后回车"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodoList(e)}},model:{value:t.serverInputVal,callback:function(e){t.serverInputVal=e},expression:"serverInputVal"}}),r("div",{staticClass:"showList"},[0!==t.serverList.length?r("div",t._l(t.serverList,(function(e,n){return r("div",{key:n,staticClass:"showList-item"},[t._v(t._s(e))])})),0):r("div",{staticClass:"showList-item"},[t._v("今日暂未添加事件,输入内容后回车")])]),r("el-button",{staticClass:"todo-btn",attrs:{type:"primary"},on:{click:t.submitTodoList}},[t._v("提交并清除今日记录")])],1)},j=[],E=(r("498a"),{name:"TodoList",data:function(){return{serverList:[],serverInputVal:""}},mounted:function(){var t=JSON.parse(localStorage.getItem("todoList"));t&&(this.serverList=t)},methods:{addTodoList:function(){this.serverInputVal.trim()?(this.serverList.unshift(this.serverInputVal),this.serverInputVal="",localStorage.setItem("todoList",JSON.stringify(this.serverList))):Object(u["Message"])({message:"未输入正确内容",type:"error"})},submitTodoList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isAfterWork()){e.next=11;break}return r={},r.dataList=t.serverList,r.timeDate=(new Date).toLocaleDateString(),e.next=6,Object(c["i"])(r);case 6:n=e.sent,o=n.status,i=n.msg,0===o||1===o?(localStorage.removeItem("todoList"),t.serverList=[],Object(u["Message"])({message:i,type:"success"})):Object(u["Message"])({message:i,type:"error"}),e.next=12;break;case 11:Object(u["Message"])({message:"请在每天下班6:00时确认记录后操作,休息时间请勿操作",type:"error"});case 12:case"end":return e.stop()}}),e)})))()},isAfterWork:function(){var t=(new Date).getHours();return t>18}}}),S=E,T=(r("7a0c"),Object(f["a"])(S,P,j,!1,null,"fb4dd03e",null)),N=T.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"order-product-list"}},[r("h3",{staticClass:"title"},[t._v("所有商品")]),r("div",{staticClass:"product-nav"},t._l(t.types,(function(e){return r("el-button",{key:e.type,attrs:{label:e.value},on:{click:function(r){return t.toggleList(e.value)}}},[t._v(t._s(e.type)+" ")])})),1),0!==t.showList.length?r("div",{staticClass:"card-list select-disabled"},t._l(t.showList,(function(e){return r("el-card",{key:e._id,nativeOn:{click:function(r){return r.stopPropagation(),t.addProduct(e.product_name,e.price,e.type)}}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgUrl,expression:"item.imgUrl"}],staticClass:"image"}),r("span",{staticClass:"product-name"},[t._v(t._s(e.product_name))]),r("span",{staticClass:"price"},[t._v("¥"+t._s(e.price))])])})),1):r("el-card",[r("div",[r("h2",[t._v("未检索到商品,请检查检索条件")])])])],1)},R=[],A={name:"OrderProductList",props:["productList"],data:function(){return{selectType:"product_name",typeList:[],showList:[],types:[{type:"显示所有",value:"5"},{type:"汉堡",value:"0"},{type:"小食",value:"1"},{type:"饮品",value:"2"},{type:"套餐",value:"3"}]}},filters:{stringTime:function(t){var e=new Date(JSON.parse(t));return e.toLocaleString()}},methods:{toggleList:function(t){this.showList="5"===t?this.productList:this.typeList=this.productList.filter((function(e){return e.type===t}))},addProduct:function(t,e,r){this.$bus.$emit("addProductToPos",t,e,r)}},watch:{productList:function(){this.showList=this.$props.productList}}},I=A,M=(r("0692"),Object(f["a"])(I,$,R,!1,null,"1e09663e",null)),D=M.exports,G={name:"Pos",components:{PosOrder:h,ActivityProduct:k,OrderProductList:D,TodoList:N,PosRecord:L},data:function(){return{activeName:"first"}},computed:{activeList:function(){return this.$store.getters.activityList},productList:function(){return this.$store.state.productList}},created:function(){this.getProducts()},mounted:function(){var t=this;this.$bus.$on("productInfoChanged",(function(){t.getProducts()}))},methods:{getProducts:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["h"])();case 2:r=e.sent,n=r.status,o=r.msg,i=r.data,0===n?(t.$store.commit("initState",i),Object(u["Message"])({message:o,type:"success"})):Object(u["Message"])({message:o,type:"error"});case 5:case"end":return e.stop()}}),e)})))()}}},J=G,V=(r("e184"),Object(f["a"])(J,n,o,!1,null,"51fdc48d",null));e["default"]=V.exports},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},c20d:function(t,e,r){},c8d2:function(t,e,r){var n=r("d039"),o=r("5899"),i="​᠎";t.exports=function(t){return n((function(){return!!o[t]()||i[t]()!=i||o[t].name!==t}))}},c96a:function(t,e,r){},d58f:function(t,e,r){var n=r("1c0b"),o=r("7b0b"),i=r("44ad"),s=r("50c4"),a=function(t){return function(e,r,a,c){n(r);var u=o(e),l=i(u),d=s(u.length),f=t?d-1:0,p=t?-1:1;if(a<2)while(1){if(f in l){c=l[f],f+=p;break}if(f+=p,t?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:d>f;f+=p)f in l&&(c=r(c,l[f],f,u));return c}};t.exports={left:a(!1),right:a(!0)}},da42:function(t,e,r){},e184:function(t,e,r){"use strict";var n=r("da42"),o=r.n(n);o.a},ebd4:function(t,e,r){"use strict";var n=r("c20d"),o=r.n(n);o.a},f681:function(t,e,r){"use strict";var n=r("35c5"),o=r.n(n);o.a},f9e4:function(t,e,r){"use strict";var n=r("9bb4"),o=r.n(n);o.a}}]);
//# sourceMappingURL=pos.18dfd483.js.map