import{d as p,r as m,e as o,v as f,x as g,f as t,t as y,C as b,h as B}from"./vue.esm-bundler-BiAlgFmf.js";import{S}from"./Icon-C-Sturzh.js";import{e as v,c as _,B as T,d as e}from"./types-BTVVhIqi.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const r=p({__name:"Badge",props:{componentStyle:{},componentType:{default:v.square},icon:{},size:{default:_.default},strong:{type:Boolean},tag:{default:T.span},color:{default:"cobalt"}},setup(s){const a=s,l=m(null),d={pink:e.additionalPink,grey:e.neutral,yellow:e.brandAccent,green:e.additionalTurquoise,purple:e.additionalPurple,maroon:e.neutral,"dark-blue":e.brandPrimary,"dodger-blue":e.brandAccent,supernova:e.brandAccent,promo:e.error,success:e.success,neutral:e.neutral,cobalt:e.brandPrimary,info:e.info},u=()=>{let n="badge--neutral";return a.componentStyle&&Object.values(e).includes(a.componentStyle)&&(n=`badge--${a.componentStyle}`),!a.componentStyle&&a.color&&(n=`badge--${d[a.color]}`),a.strong?`${n}--strong`:n},c=()=>`badge--${a.componentType}`,i=()=>a.size==="default"?"medium":a.size==="compact"?"small":a.size;return(n,q)=>(t(),o(g(n.tag),{ref_key:"badgeContent",ref:l,class:f(["badge",[`badge--${i()}`,u(),c()]])},{default:y(()=>[n.icon?(t(),o(S,{key:0,class:"badge__icon",name:n.icon},null,8,["name"])):b("",!0),B(n.$slots,"default",{},void 0,!0)]),_:3},8,["class"]))}}),V=C(r,[["__scopeId","data-v-5aa3444f"]]);r.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"componentStyle",required:!1,type:{name:"BadgeStyle"}},{name:"componentType",required:!1,type:{name:"BadgeType"},defaultValue:{func:!1,value:"BadgeType.square"}},{name:"icon",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"BadgeSize"},defaultValue:{func:!1,value:"BadgeSize.default"}},{name:"strong",required:!1,type:{name:"boolean"}},{name:"tag",required:!1,type:{name:"BadgeTag"},defaultValue:{func:!1,value:"BadgeTag.span"}},{name:"color",required:!1,type:{name:"BadgeColor"},defaultValue:{func:!1,value:"'cobalt'"}}],slots:[{name:"default"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/solaris/vue3/src/components/atoms/Badge/Badge/Badge.vue"]};export{V as S};
