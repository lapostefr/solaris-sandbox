import{l as r,r as u,a as p,b as d,d as c,e as i,z as f,$ as l}from"./vue.esm-bundler-DD7xIM0D.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";const o=r({__name:"AccordionGroup",props:{accordionStyle:{default:"transparent"},oneOpenOnly:{type:Boolean,default:!1},paddingLeftRight:{type:Boolean,default:!0},size:{default:"small"},spaceBetween:{type:Boolean,default:!1},titleLevel:{},type:{default:"default"}},setup(t){const a=t,n=u(null),s=e=>{a.oneOpenOnly&&(n.value=e)};return p(()=>{a.oneOpenOnly||(n.value=null)}),l("openAccordionId",n),l("setOpenAccordion",s),(e,_)=>(d(),c("div",{class:f(["lp-accordionGroup",["lp-accordionGroup--"+(e.spaceBetween?"space-between":"no-space")]])},[i(e.$slots,"default",{oneOpenOnly:a.oneOpenOnly},void 0,!0)],2))}}),y=m(o,[["__scopeId","data-v-effa0607"]]);o.__docgenInfo={exportName:"default",displayName:"AccordionGroup",description:"",tags:{},props:[{name:"accordionStyle",required:!1,type:{name:"union",elements:[{name:'"transparent"'},{name:'"white"'}]},defaultValue:{func:!1,value:"'transparent'"}},{name:"oneOpenOnly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"paddingLeftRight",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'}]},defaultValue:{func:!1,value:"'small'"}},{name:"spaceBetween",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"titleLevel",required:!1,type:{name:"union",elements:[{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"brand"'}]},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"oneOpenOnly",title:"binding"}]}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue-solaris/src/components/molecules/AccordionNew/Group/AccordionGroup.vue"]};const b=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"}));export{y as S,b as _};
