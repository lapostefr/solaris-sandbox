import{d as m,c as _,f as e,g as s,F as o,z as a,A as i,e as p,v as l,H as k}from"./vue.esm-bundler-BiAlgFmf.js";import{S as f}from"./Icon-C-Sturzh.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h={key:0,class:"list__ordered"},v={key:1,class:"list__unordered"},L={key:1,class:"list__unordered__item--bullet"},c=m({__name:"List",props:{items:{},orderedList:{type:Boolean},size:{default:"responsive"},icon:{}},setup(d){const t=d,u=_(()=>t.icon==="action-check-surrounded"||t.icon==="action-check");return(r,g)=>(e(),s("div",{class:l(["list",`list--${r.size}`])},[r.orderedList?(e(),s("ol",h,[(e(!0),s(o,null,a(r.items,n=>(e(),s("li",{key:`orderedlist-${n}`,class:"list__ordered__item"},i(n),1))),128))])):(e(),s("ul",v,[(e(!0),s(o,null,a(r.items,n=>(e(),s("li",{key:`unorderedlist-${n}`,class:"list__unordered__item"},[u.value?(e(),p(f,{key:0,name:"action-check",type:"light",size:"small",class:l({"list__unordered__item--surrounded":r.icon==="action-check-surrounded"})},null,8,["class"])):(e(),s("span",L,"•")),k(" "+i(n),1)]))),128))]))],2))}}),B=y(c,[["__scopeId","data-v-4a821ee4"]]);c.__docgenInfo={exportName:"default",displayName:"List",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"orderedList",required:!0,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"responsive"'},{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'responsive'"}},{name:"icon",required:!1,type:{name:"union",elements:[{name:'"action-check-surrounded"'},{name:'"action-check"'},{name:'"bullet"'}]}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/solaris/vue3/src/components/atoms/List/List.vue"]};export{B as S};
