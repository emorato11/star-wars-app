(function(t){function e(e){for(var n,r,l=e[0],o=e[1],c=e[2],d=0,f=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,l=1;l<s.length;l++){var o=s[l];0!==a[o]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},i=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},1010:function(t,e,s){},"1e26":function(t,e,s){},4042:function(t,e,s){"use strict";s("da96")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header"),s("Home"),s("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"py-4 main"},[s("div",{staticClass:"search-section"},[s("p",{staticClass:"description"},[t._v("Let's looking for cool stuff!")]),s("b-button",{staticClass:"mx-2 default-button",on:{click:function(e){return t.getDataByType("people")}}},[t._v("People")]),s("b-button",{staticClass:"mx-2 default-button",on:{click:function(e){return t.getDataByType("starships")}}},[t._v("Starships")]),s("b-button",{staticClass:"mx-2 default-button",on:{click:function(e){return t.getDataByType("planets")}}},[t._v("Planets")])],1),s("Table",{attrs:{items:t.tableItems,isBusy:t.loadingData,totalRows:t.tableRows},on:{selectedDetails:t.getSelectedDetails,updatedPage:function(e){return t.getDataByType(t.currentType,e)}}}),s("b-sidebar",{attrs:{id:"details-sidebar","backdrop-variant":"dark","no-header":"",backdrop:"",right:""}},[t.selectedDetails?s("Details",{attrs:{details:t.selectedDetails}}):t._e()],1),s("Alert",{attrs:{show:t.alert.show,variant:t.alert.variant,dismissible:t.alert.dismissible,fade:t.alert.fade,title:t.alert.title,dismissSecs:t.alert.dismissSecs},on:{updatealert:function(e){t.alert.show=!1}}})],1)},l=[],o=s("5530"),c=(s("caad"),s("2532"),s("d81d"),s("2f62")),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"d-flex flex-column align-items-center"},[s("div",{staticClass:"d-flex my-3"},[s("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Filter by name"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),s("b-button",{staticClass:"default-button",attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear ")])],1),s("b-table",{staticClass:"w-50 my-3",attrs:{items:t.items,busy:t.isBusy,fields:t.fields,"per-page":t.perPage,"empty-text":"No data to show","empty-filtered-text":"No data matching your request",filter:t.filter,"label-sort-asc":"","label-sort-desc":"","label-sort-clear":"","filter-included-fields":t.filterOn,"sort-direction":"asc",stacked:"md","show-empty":"",small:""},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[s("b-button",{staticClass:"mr-1 medium-button",attrs:{size:"sm"},on:{click:function(s){return t.info(e.item)}}},[t._v(" Go to detail ")])]}},{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center spinner my-4"},[s("b-spinner",{staticClass:"align-middle"}),s("strong",{staticClass:"mx-4"},[t._v("Loading...")])],1)]},proxy:!0}])}),s("div",{staticClass:"my-3 d-flex"},[s("b-pagination",{staticClass:"my-0 mx-2",attrs:{"total-rows":t.getRows(),"per-page":t.perPage,align:"center",pills:""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)])},d=[],f=(s("a9e3"),s("4de4"),{props:{items:{type:Array,default:function(){return[]}},isBusy:{type:Boolean,default:!1},totalRows:{type:Number,default:0}},data:function(){return{fields:[{key:"name",label:"Name",sortable:!0},{key:"actions",label:""}],currentPage:1,perPage:10,filter:null,filteredItems:null,filterOn:[]}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){},methods:{info:function(t){this.$emit("selectedDetails",t),this.$root.$emit("bv::toggle::collapse","details-sidebar")},getRows:function(){var t;return null!==(t=this.filter)&&void 0!==t&&t.length?this.filteredItems:this.totalRows},onFiltered:function(t){this.filteredItems=t.length,this.currentPage=1}},watch:{currentPage:function(t){this.$emit("updatedPage",t)}}}),p=f,b=(s("f9ff"),s("2877")),m=Object(b["a"])(p,u,d,!1,null,null,null),v=m.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-alert",{class:t.getClass(),attrs:{show:t.dismissCountDown,variant:t.variant,dismissible:t.dismissible,fade:t.fade},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.title))])},g=[],_={props:{show:Boolean,variant:{type:String,required:!0},title:{type:String,required:!0},dismissible:Boolean,fade:Boolean,dismissSecs:Number,dismissed:{type:Function,default:function(){return 1}}},data:function(){return{dismissCountDown:0,showDismissibleAlert:!1}},watch:{show:function(t){t&&this.showAlert()}},methods:{countDownChanged:function(t){this.dismissCountDown=t,0===t&&this.$emit("updatealert",!1)},showAlert:function(){this.dismissCountDown=this.dismissSecs},getClass:function(){return"danger"===this.variant?"error-alert":""}}},y=_,w=(s("b4bd"),Object(b["a"])(y,h,g,!1,null,null,null)),C=w.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",{staticClass:"py-4 details-title"},[t._v(t._s(t.details.name))]),s("div",{staticClass:"p-4"},["people"===t.details.type?s("ul",{staticClass:"list"},[s("li",[t._v("Gender: "),s("strong",[t._v(t._s(t.details.gender))])]),s("li",[t._v("Birth year: "),s("strong",[t._v(t._s(t.details.birth_year))])]),s("li",[t._v("Eyes color: "),s("strong",[t._v(t._s(t.details.eye_color))])]),s("li",[t._v("Hair color: "),s("strong",[t._v(t._s(t.details.hair_color))])]),s("li",[t._v("Skin color: "),s("strong",[t._v(t._s(t.details.skin_color))])]),s("li",[t._v("Weight: "),s("strong",[t._v(t._s(t.details.mass))])]),s("li",[t._v("Height: "),s("strong",[t._v(t._s(t.details.height))])])]):t._e(),"starships"===t.details.type?s("ul",{staticClass:"list"},[s("li",[t._v("Manufacturer: "),s("strong",[t._v(t._s(t.details.manufacturer))])]),s("li",[t._v("MGLT: "),s("strong",[t._v(t._s(t.details.MGLT))])]),s("li",[t._v("Class: "),s("strong",[t._v(t._s(t.details.starship_class))])]),s("li",[t._v("Model: "),s("strong",[t._v(t._s(t.details.model))])]),s("li",[t._v("Max speed: "),s("strong",[t._v(t._s(t.details.max_atmosphering_speed))])]),s("li",[t._v("Crew: "),s("strong",[t._v(t._s(t.details.crew))])]),s("li",[t._v("Cost: "),s("strong",[t._v(t._s(t.details.cost_in_credits))])])]):t._e(),"planets"===t.details.type?s("ul",{staticClass:"list"},[s("li",[t._v("Terrain Type/s: "),s("strong",[t._v(t._s(t.details.terrain))])]),s("li",[t._v("Population: "),s("strong",[t._v(t._s(t.details.population))])]),s("li",[t._v("Gravity: "),s("strong",[t._v(t._s(t.details.gravity))])]),s("li",[t._v("Diameter: "),s("strong",[t._v(t._s(t.details.diameter))])]),s("li",[t._v("Climate: "),s("strong",[t._v(t._s(t.details.climate))])]),s("li",[t._v("Orbital Period: "),s("strong",[t._v(t._s(t.details.orbital_period))])]),s("li",[t._v("Rotation Period: "),s("strong",[t._v(t._s(t.details.rotation_period))])])]):t._e()]),s("b-button",{staticClass:"default-button",on:{click:t.hide}},[t._v("Close")])],1)},D=[],O={props:{details:{type:Object,default:null}},methods:{hide:function(){this.$root.$emit("bv::toggle::collapse","details-sidebar")}}},P=O,j=(s("57f4"),Object(b["a"])(P,x,D,!1,null,"5afd3f81",null)),T=j.exports;s("99af"),s("d3b7");function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s="".concat("https://swapi.dev/api/").concat(t,"?page=").concat(e);return fetch(s).then((function(t){return t.json()})).then((function(t){var e=t.results,s=t.count;return{results:e,count:s}}))}var k={components:{Table:v,Details:T,Alert:C},data:function(){return{tableItems:null,tableRows:0,loadingData:!1,currentType:"",selectedDetails:null,alert:{title:"",show:!1,fade:!0,variant:"",dismissible:!0}}},computed:Object(o["a"])(Object(o["a"])({},Object(c["d"])(["pages","count"])),Object(c["b"])(["getPartialStuff"])),methods:Object(o["a"])(Object(o["a"])({},Object(c["c"])(["setPage","setTypeData","setCount"])),{},{getDataByType:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.currentType=t,this.loadingData=!0,this.pages[t].includes(s)?(this.tableItems=this.getPartialStuff({type:this.currentType,page:s}),this.tableRows=this.count[this.currentType],this.loadingData=!1):(this.setPage({type:t,page:s}),S(this.currentType,s).then((function(t){var s=t.results,n=t.count;e.tableItems=s.map((function(t){return Object(o["a"])(Object(o["a"])({},t),{},{type:e.currentType})})),e.setTypeData({data:e.tableItems,type:e.currentType}),0===e.count[e.currentType]&&e.setCount({count:n,type:e.currentType}),e.tableRows=n,e.loadingData=!1})).catch((function(){e.loadingData=!1;var t={variant:"danger",title:"There was an error during the request. Please, try again",dismissSecs:3};e.showAlert(t)})))},getSelectedDetails:function(t){this.selectedDetails=t},showAlert:function(t){var e=t.variant,s=t.title,n=t.dismissSecs;this.alert={title:s,variant:e,dismissSecs:n,show:!0,fade:!0,dismissible:!0}}})},$=k,B=(s("4042"),Object(b["a"])($,r,l,!1,null,null,null)),I=B.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header p-3"},[n("img",{attrs:{alt:"star wars logo",height:"100",width:"200",src:s("fbe9")}}),n("h3",{staticClass:"title"},[t._v("Star Wars App")])])}],M={methods:{greeting:function(t){return"Hola ".concat(t)}}},R=M,H=(s("d1c5"),Object(b["a"])(R,A,E,!1,null,"9317810e",null)),F=H.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer py-2"},[s("p",{staticClass:"description"},[t._v("May the force be with you!")])])}],q={},L=q,J=(s("9b86"),Object(b["a"])(L,G,N,!1,null,"2159a254",null)),W=J.exports,z={name:"App",components:{Home:I,Header:F,Footer:W}},K=z,Q=(s("034f"),Object(b["a"])(K,a,i,!1,null,null,null)),U=Q.exports,V=s("2909");s("c740"),s("fb6a");n["a"].use(c["a"]);var X=new c["a"].Store({state:{stuff:{people:[],starships:[],planets:[]},pages:{people:[],starships:[],planets:[]},count:{people:0,starships:0,planets:0}},getters:{getPageIndex:function(t){return function(e){var s=e.type,n=e.page;return t.pages[s].findIndex((function(t){return t===n}))}},getPartialStuff:function(t,e){return function(s){var n=s.type,a=e.getPageIndex(s),i=10*(a+1);return t.stuff[n].slice(i-10,i)}}},mutations:{setPage:function(t,e){var s=e.page,n=e.type;t.pages[n].push(s)},setTypeData:function(t,e){var s,n=e.data,a=e.type;(s=t.stuff[a]).push.apply(s,Object(V["a"])(n))},setCount:function(t,e){var s=e.count,n=e.type;t.count[n]=s}}}),Y=X,Z=s("29a1"),tt=s("5fda"),et=s("26d2"),st=s("baa4"),nt=s("01e3"),at=s("4797"),it=s("1947");s("f9e3"),s("2dd8");n["a"].component("b-table",Z["a"]),n["a"].component("b-alert",tt["a"]),n["a"].component("b-pagination",et["a"]),n["a"].component("b-sidebar",st["a"]),n["a"].component("b-spinner",nt["a"]),n["a"].component("b-form-input",at["a"]),n["a"].component("b-button",it["a"]),n["a"].config.productionTip=!1,new n["a"]({store:Y,render:function(t){return t(U)}}).$mount("#app")},"57f4":function(t,e,s){"use strict";s("f754")},"85ec":function(t,e,s){},"9b86":function(t,e,s){"use strict";s("1010")},"9d1b":function(t,e,s){},b4bd:function(t,e,s){"use strict";s("9d1b")},d1c5:function(t,e,s){"use strict";s("f2d0")},da96:function(t,e,s){},f2d0:function(t,e,s){},f754:function(t,e,s){},f9ff:function(t,e,s){"use strict";s("1e26")},fbe9:function(t,e,s){t.exports=s.p+"img/main-logo.5d100186.png"}});
//# sourceMappingURL=app.55375b2f.js.map