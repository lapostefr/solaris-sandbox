import{l as c,c as p,b as a,d as o,F as d,C as m,J as f,p as y,U as h,V as _}from"./vue.esm-bundler-DD7xIM0D.js";import"./lazysizes-C_krz_Ug.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const s=c({__name:"Picture",props:{defaultSource:{},height:{},lazyload:{type:Boolean,default:!0},otherSources:{},fetchPriority:{type:Boolean},width:{}},setup(u){const r=u,i=p(()=>{const e={width:r.width,height:r.height,alt:r.defaultSource.alt};return r.lazyload?(e.class="lazyload",e["data-src"]=r.defaultSource.url):e.src=r.defaultSource.url,e.fetchpriority=r.fetchPriority?"high":"low",e}),n=e=>{const t={media:e.device?`(min-width: ${e.device}px)`:null,type:e.mimeType};return r.lazyload?(t.class="lazyload",t["data-srcset"]=e.url):t.srcset=e.url,t};return(e,t)=>(a(),o("picture",null,[(a(!0),o(d,null,m(e.otherSources,l=>(a(),o("source",f({key:l.url},n(l)),null,16))),128)),y("img",h(_(i.value)),null,16)]))}}),S=g(s,[["__scopeId","data-v-e608df75"]]);s.__docgenInfo={exportName:"default",displayName:"Picture",description:"",tags:{},props:[{name:"defaultSource",required:!0,type:{name:"Source"}},{name:"height",required:!0,type:{name:"number"}},{name:"lazyload",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"otherSources",required:!1,type:{name:"Array",elements:[{name:"Source"}]}},{name:"fetchPriority",required:!1,type:{name:"boolean"}},{name:"width",required:!0,type:{name:"number"}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue-solaris/src/components/atoms/Picture/Picture.vue"]};const z=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));export{S,z as _};