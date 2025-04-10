import{d as Y,m as I,b as x,Z as ee,r as D,o as le,g as i,y as v,v as u,e as r,C as o,t as b,x as W,u as g,h as B,B as ae,f as a,H as j,A as O}from"./vue.esm-bundler-BiAlgFmf.js";import{S as T}from"./Button-CxIFeNFW.js";import{S as te}from"./Icon-C-Sturzh.js";import{S as oe}from"./Collapse-BNiXmgF_.js";import{S as z}from"./Picture-Bv3IzpnC.js";import{f as re}from"./generateId-CVaf2GGW.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";var F=(l=>(l.brandAccent="brand-accent",l.brandDefault="brand-default",l.neutral="neutral",l.additionalPink="additional-pink",l.additionalPurple="additional-purple",l.additionalTurquoise="additional-turquoise",l))(F||{}),S=(l=>(l.default="default",l.alt="alt",l.colored="colored",l))(S||{}),d=(l=>(l.collapsible="collapsible",l.default="default",l.closable="closable",l))(d||{}),U=(l=>(l.h1="h1",l.h2="h2",l.h3="h3",l.h4="h4",l.h5="h5",l.h6="h6",l.p="p",l))(U||{});const ue={class:"lp-callout__container"},ne={key:2,class:"lp-callout__header-picture"},ie=["id"],de={class:"lp-callout__body"},ce={class:"lp-callout__body-main"},pe={key:0,class:"lp-callout__footer"},Z=Y({__name:"Callout",props:I({ariaLabel:{default:"Masquer le message"},borderLeft:{type:Boolean,default:!0},componentStyle:{default:F.brandAccent},componentStyleBackground:{default:S.default},componentType:{default:d.default},containerBorder:{type:Boolean,default:!0},description:{},icon:{},pictureBodyRight:{},pictureHeader:{},title:{},titleTag:{default:U.h3}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:I(["close","collapse"],["update:modelValue"]),setup(l,{emit:G}){const t=l,_=G,s=x(l,"modelValue"),c=ee(),m=D(!0),h=D(""),y=()=>t.componentType===d.closable,n=()=>t.componentType===d.collapsible,k=()=>t.componentStyleBackground===S.colored,J=()=>t.icon||t.title||t.pictureHeader||c.head||y()||n(),q=()=>(t.description||c.body||t.pictureBodyRight)&&(s.value||!n()),K=()=>{_("close"),m.value=!m.value},Q=()=>{_("collapse"),s.value=!s.value},X=()=>{if(t.description&&t.description.indexOf("<")===0)return"div";if(t.description)return"p"};return le(()=>{h.value=re("lp-callout--")}),(e,p)=>{var V,w,H,C,$,R,M;return m.value?(a(),i("div",{key:0,class:u(["lp-callout",{[`lp-callout--bg-${e.componentStyleBackground}`]:!k(),[`lp-callout--bg-colored-${e.componentStyle}`]:k(),[`lp-callout--border-left-${e.componentStyle}`]:e.borderLeft,[`lp-callout--border-${e.componentStyle}`]:e.containerBorder,"lp-callout--collapse":n(),"lp-callout--isActive":s.value}])},[v("div",ue,[J()?(a(),i("div",{key:0,class:u(["lp-callout__header",{"lp-callout__header-actions":y()||n()}])},[e.icon?(a(),r(te,{key:0,class:u(["lp-callout__icon",`lp-callout__icon--${e.componentStyle}`]),name:e.icon},null,8,["class","name"])):o("",!0),e.title?(a(),r(W(e.titleTag),{key:1,class:u(["lp-callout__title",`lp-callout__title--${e.componentStyle}`])},{default:b(()=>[j(O(e.title),1)]),_:1},8,["class"])):o("",!0),e.componentType===g(d).default&&(e.pictureHeader||g(c).head)?(a(),i("div",ne,[e.pictureHeader?(a(),r(z,{key:0,class:u(["lp-callout__picture",{"lp-callout__picture--fullwidth":(V=e.pictureHeader)==null?void 0:V.fullWidth}]),"default-source":(w=e.pictureHeader)==null?void 0:w.defaultSource,"full-width":(H=e.pictureHeader)==null?void 0:H.fullWidth,height:(C=e.pictureHeader)==null?void 0:C.height,"other-source":($=e.pictureHeader)==null?void 0:$.otherSources,width:(R=e.pictureHeader)==null?void 0:R.width},null,8,["class","default-source","full-width","height","other-source","width"])):o("",!0),B(e.$slots,"head",{},void 0,!0)])):o("",!0),n()?(a(),r(T,{key:3,"aria-label":`${s.value?"Réduire le contenu":"Voir le contenu"}`,"aria-expanded":(M=s.value)==null?void 0:M.toString(),"aria-controls":h.value,class:"lp-callout__header-action",icon:"arrow-bottom",type:"ghost",onClick:p[0]||(p[0]=f=>Q())},null,8,["aria-label","aria-expanded","aria-controls"])):y()?(a(),r(T,{key:4,class:"lp-callout__header-action lp-callout__header-action--close","aria-label":e.ariaLabel?e.ariaLabel:"Masquer le message",icon:"action-close",type:"ghost",onClick:p[1]||(p[1]=f=>K())},null,8,["aria-label"])):o("",!0)],2)):o("",!0),ae(oe,null,{default:b(()=>{var f,L,P,N,A,E;return[q()?(a(),i("div",{key:0,id:h.value,class:"lp-callout__content"},[v("div",de,[v("div",ce,[e.description?(a(),r(W(X()),{key:0,class:"lp-callout__description"},{default:b(()=>[j(O(e.description),1)]),_:1})):o("",!0),B(e.$slots,"body",{},void 0,!0)]),e.pictureBodyRight&&q()?(a(),r(z,{key:0,class:u(["lp-callout__picture",["lp-callout__picture",{"lp-callout__picture--fullwidth":(f=e.pictureBodyRight)==null?void 0:f.fullWidth}]]),"default-source":(L=e.pictureBodyRight)==null?void 0:L.defaultSource,"full-width":(P=e.pictureBodyRight)==null?void 0:P.fullWidth,height:(N=e.pictureBodyRight)==null?void 0:N.height,"other-source":(A=e.pictureBodyRight)==null?void 0:A.otherSources,width:(E=e.pictureBodyRight)==null?void 0:E.width},null,8,["class","default-source","full-width","height","other-source","width"])):o("",!0)]),g(c).footer?(a(),i("div",pe,[B(e.$slots,"footer",{},void 0,!0)])):o("",!0)],8,ie)):o("",!0)]}),_:3})])],2)):o("",!0)}}}),Be=se(Z,[["__scopeId","data-v-7114345f"]]);Z.__docgenInfo={exportName:"default",displayName:"Callout",description:"",tags:{},props:[{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Masquer le message'"}},{name:"borderLeft",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"componentStyle",required:!1,type:{name:"CalloutStyle"},defaultValue:{func:!1,value:"CalloutStyle.brandAccent"}},{name:"componentStyleBackground",required:!1,type:{name:"CalloutStyleBackground"},defaultValue:{func:!1,value:"CalloutStyleBackground.default"}},{name:"componentType",required:!1,type:{name:"CalloutType"},defaultValue:{func:!1,value:"CalloutType.default"}},{name:"containerBorder",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"description",required:!1,type:{name:"string"}},{name:"icon",required:!1,type:{name:"string"}},{name:"pictureBodyRight",required:!1,type:{name:"SolarisPictureProps"}},{name:"pictureHeader",required:!1,type:{name:"SolarisPictureProps"}},{name:"title",required:!1,type:{name:"string"}},{name:"titleTag",required:!1,type:{name:"CalloutTitleTag"},defaultValue:{func:!1,value:"CalloutTitleTag.h3"}}],events:[{name:"close"},{name:"collapse"}],slots:[{name:"head"},{name:"body"},{name:"footer"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/solaris/vue3/src/components/molecules/Callout/Callout.vue"]};export{F as C,Be as S,S as a,d as b,U as c};
