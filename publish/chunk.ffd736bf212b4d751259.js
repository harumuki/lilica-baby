(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{238:function(t,i,e){var o=e(242);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e(166).default)("6cc07505",o,!0,{})},239:function(t,i,e){"use strict";var o={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:t,zIndex:i,transitionMs:e,opacity:o}=this;return{top:t,transition:"opacity ".concat(e,"ms linear"),opacity:o,zIndex:i}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth="".concat(document.body.offsetWidth,"px"),document.body.style.overflow="hidden"}},watch:{isVisible(t){t?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(t){0===t?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},s=(e(241),e(53)),a=Object(s.a)(o,(function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"backdrop",style:t.style,on:{click:t.hide}})}),[],!1,null,null,null);i.a=a.exports},241:function(t,i,e){"use strict";e(238)},242:function(t,i,e){(i=e(165)(!1)).push([t.i,".backdrop{position:fixed;top:-100vh;left:0;width:100vw;height:100vh;background-color:var(--dark);opacity:.65;cursor:pointer;z-index:-100}",""]),t.exports=i},280:function(t,i,e){var o=e(325);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e(166).default)("833eb96e",o,!0,{})},324:function(t,i,e){"use strict";e(280)},325:function(t,i,e){(i=e(165)(!1)).push([t.i,".product-quickview__box{z-index:1090;position:fixed;top:0;left:0;width:100vw;max-height:100vh;border-radius:0;overflow-y:auto}@media (min-width:576px){.product-quickview__box{width:90vw;margin-left:5vw;max-height:90vh;margin-top:5vh;border-radius:var(--border-radius)}}.product-quickview__loading{padding:var(--spacer-5);text-align:center}.product-quickview__loading .spinner-border{height:5rem;width:5rem}.product-quickview__btn-redirect{display:block;max-width:400px;margin:var(--spacer-4) auto var(--spacer-5)}",""]),t.exports=i},379:function(t,i,e){"use strict";e.r(i);var o=e(28),s=e(40),a=e(246),d=e(266),r=e(239),c={name:"ProductQuickView",components:{Portal:a.a,TheProduct:d.a,ABackdrop:r.a},props:{productId:String,product:Object,portalId:{type:String,default:"quickview"}},data:()=>({productName:"",productLink:"",isVisible:!1}),computed:{i19close:()=>Object(s.a)(o.H),i19seeMoreInfo:()=>Object(s.a)(o.hd)},methods:{setProduct({name:t,slug:i}){this.productName=t,this.productLink="/".concat(i)},hide(){this.isVisible=!1,setTimeout((()=>{this.isVisible||this.$destroy()}),450)}},created(){let t=document.getElementById(this.portalId);t?t.innerHTML="":(t=document.createElement("div"),t.setAttribute("id",this.portalId),document.body.appendChild(t)),this.product&&this.setProduct(this.product),this.isVisible=!0}},n=(e(324),e(53)),l=Object(n.a)(c,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("portal",{attrs:{selector:"#"+t.portalId}},[e("div",{staticClass:"product-quickview"},[e("a-backdrop",{attrs:{"is-visible":t.isVisible},on:{hide:t.hide}}),e("transition",{attrs:{"enter-active-class":"animated zoomIn","leave-active-class":"animated fadeOutUp slow"}},[t.isVisible?e("div",{staticClass:"product-quickview__box card"},[t._t("header",[e("div",{staticClass:"product-quickview__header card-header"},[t._v(" "+t._s(t.productName)+" "),e("button",{staticClass:"close",attrs:{type:"button","aria-label":t.i19close},on:{click:t.hide}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),e("div",{staticClass:"product-quickview__body card-body"},[t.productName?t._e():e("div",{staticClass:"product-quickview__loading"},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])]),e("div",{staticClass:"container"},[e("the-product",{attrs:{"is-quickview":"","product-id":t.productId,product:t.product},on:{"update:product":t.setProduct,buy:t.hide}})],1),t.productName?e("a",{staticClass:"product-quickview__btn-redirect btn btn-secondary",attrs:{href:t.productLink}},[t._v(" "+t._s(t.i19seeMoreInfo)+" ")]):t._e()])],2):t._e()])],1)])}),[],!1,null,null,null);i.default=l.exports}}]);
//# sourceMappingURL=chunk.ffd736bf212b4d751259.js.map