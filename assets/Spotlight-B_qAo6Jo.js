import{d as V,r as u,c as v,o as q,f as a,g as d,B as f,t as r,y as n,A as _,F,z as I,v as S,e as y,H as b,J as E,h as K,u as $}from"./vue.esm-bundler-BiAlgFmf.js";import{S as k}from"./Button-CxIFeNFW.js";import{S as j}from"./Icon-C-Sturzh.js";import{C as A,S as L}from"./Tooltip-BdO2vyV2.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";const H=["aria-expanded"],J={id:"content",class:"spotlight__contentWrapper"},M={class:"spotlight__title"},O={class:"spotlight__description"},P=["onKeydown"],U={class:"spotlight__bulletContainer"},W=["onClick"],w=V({__name:"Spotlight",props:{forceShow:{type:Boolean},placement:{default:"top"},size:{default:"responsive"},spotlights:{}},setup(C){const i=C,t=u(0),s=u(!1),l=u(-1),m=v(()=>i.spotlights.find((e,o)=>o===t.value)),x=v(()=>t.value===i.spotlights.length-1),T=()=>{t.value=0,s.value=!s.value,l.value=s.value?0:-1},B=()=>{t.value<i.spotlights.length-1&&(t.value+=1)},z=e=>{t.value=e},N=()=>{l.value=-1,s.value=!1};return q(()=>{i.forceShow&&(l.value=0)}),(e,o)=>(a(),d("div",{role:"button","aria-expanded":s.value?"true":"false",class:S(["spotlight",`spotlight--${e.size}`])},[f(L,{trigger:"clickToToggle",type:"empty",color:$(A).spotlight,placement:e.placement,"force-show":e.forceShow,class:"spotlight__popover",onTriggerEvent:T},{tooltip:r(({closed:c})=>{var g,h;return[n("div",J,[n("div",M,_((g=m.value)==null?void 0:g.title),1),n("div",O,_((h=m.value)==null?void 0:h.description),1)]),n("div",{class:"spotlight__bottom",onKeydown:E(c,["tab","esc"]),onFocusout:N},[n("div",U,[(a(!0),d(F,null,I(e.spotlights,(G,p)=>(a(),d("div",{key:p,class:S(["spotlight__bullet",{"spotlight__bullet--current":t.value===p}]),onClick:Q=>z(p)},null,10,W))),128))]),x.value?(a(),y(k,{key:1,tabindex:l.value,color:"white",onClick:c},{default:r(()=>o[1]||(o[1]=[b(" Terminer ")])),_:2},1032,["tabindex","onClick"])):(a(),y(k,{key:0,tabindex:l.value,"aria-describedby":"content",color:"white",onClick:B},{default:r(()=>o[0]||(o[0]=[b(" Suivant ")])),_:1},8,["tabindex"])),f(j,{name:"action-close",size:"small",class:"spotlight__closer",onClick:c},null,8,["onClick"])],40,P)]}),trigger:r(()=>[K(e.$slots,"trigger",{},void 0,!0)]),_:3},8,["color","placement","force-show"])],10,H))}}),te=D(w,[["__scopeId","data-v-040abc30"]]);w.__docgenInfo={exportName:"default",displayName:"Spotlight",description:"",tags:{},props:[{name:"forceShow",required:!1,type:{name:"boolean"}},{name:"placement",required:!1,type:{name:"TooltipPlacement"},defaultValue:{func:!1,value:"'top'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"responsive"'},{name:'"compact"'}]},defaultValue:{func:!1,value:"'responsive'"}},{name:"spotlights",required:!0,type:{name:"Array",elements:[{name:"SpotlightType"}]}}],slots:[{name:"trigger"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/solaris/vue3/src/components/molecules/Spotlight/Spotlight.vue"]};export{te as S};
