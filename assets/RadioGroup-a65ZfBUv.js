import{l as A,E,G as D,r as n,a as F,o as O,m as U,b as s,d as l,p as h,H as V,u as M,s as S,t as i,y as k,F as $,C as T,x as H,L as P,z as q}from"./vue.esm-bundler-DD7xIM0D.js";import{g as J}from"./generateId-DPOzJEtM.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Q={class:"radio-group"},W=["role","aria-describedby","aria-labelledby"],X={class:"radio-group__labelOption"},G=A({__name:"RadioGroup",props:E({colorStyle:{},dataError:{},options:{},disabled:{type:Boolean},layout:{default:"vertical"},readonly:{type:Boolean},type:{default:"emphasis"}},{modelValue:{},modelModifiers:{}}),emits:E(["input"],["update:modelValue"]),setup(u,{emit:N}){const a=u,d=D(u,"modelValue"),R=N,p=J,m=n(null),c=n(""),g=n(""),v=n(null),L=e=>{R("input",e),d.value=e},z=()=>{var e,r,t;return a.dataError&&((e=a.dataError)==null?void 0:e.active)&&((t=(r=a.dataError)==null?void 0:r.message)==null?void 0:t.length)},B=()=>{var e;return(e=a.dataError)!=null&&e.active?"group":void 0},y=()=>{const e=m.value;c.value=e&&e.id?e.id:"error-message"},C=()=>{var e,r;return(e=a.dataError)!=null&&e.active&&((r=a.dataError)!=null&&r.message)?c.value:void 0},I=()=>a.options.legend||a.options.groupName?g.value:void 0,j=()=>a.options.legend?a.options.legend:a.options.groupName,f=()=>{const e=v.value;g.value=e&&e.id?e.id:"legend"};return F(()=>{y(),f()}),O(()=>{y(),f()}),(e,r)=>{var _;const t=U("SolarisRadio");return s(),l("div",Q,[h("fieldset",{class:q(["radio-group__wrapper",[{"radio-group--error":e.dataError&&e.dataError.active}]]),role:B(),"aria-describedby":C(),"aria-labelledby":I()},[e.options.legend||e.options.groupName?V((s(),l("legend",{key:0,class:"radio-group__name",ref_key:"legend",ref:v},[S(i(j()),1)])),[[M(p),"legend--"]]):k("",!0),(s(!0),l($,null,T(e.options.optionsList,(o,w)=>(s(),H(t,{key:`${o.id}-${w}`,id:o.id,name:o.name,modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=b=>d.value=b),value:o.value,type:e.colorStyle||e.type,disabled:e.disabled||o.disabled,readonly:e.readonly,error:e.dataError&&e.dataError.active,class:q(["radio-group__option",{"radio-group__option--vertical":e.layout==="vertical","radio-group__option--horizontal":e.layout==="horizontal"}]),onInput:b=>L(o)},{default:P(()=>[h("span",X,i(o.value),1)]),_:2},1032,["id","name","modelValue","value","type","disabled","readonly","error","class","onInput"]))),128)),z()?V((s(),l("p",{key:1,class:"radio-group__error-message",ref_key:"errorMessage",ref:m,"aria-live":"polite"},[S(i((_=e.dataError)==null?void 0:_.message),1)])),[[M(p),"radio-group-error-message--"]]):k("",!0)],10,W)])}}}),Y=K(G,[["__scopeId","data-v-67ef59e8"]]);G.__docgenInfo={exportName:"default",displayName:"RadioGroup",description:"",tags:{},props:[{name:"colorStyle",required:!1,type:{name:"union",elements:[{name:'"emphasis"'},{name:'"quiet"'},{name:'"default"'},{name:'"vsmp"'}]}},{name:"dataError",required:!1,type:{name:"DataError"}},{name:"options",required:!0,type:{name:"Group"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"layout",required:!1,type:{name:"union",elements:[{name:'"vertical"'},{name:'"horizontal"'}]},defaultValue:{func:!1,value:"'vertical'"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"emphasis"'},{name:'"quiet"'},{name:'"default"'},{name:'"vsmp"'}]},defaultValue:{func:!1,value:"'emphasis'"}}],events:[{name:"input"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue-solaris/src/components/atoms/Radio/Group/RadioGroup.vue"]};const ae=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{Y as S,ae as _};
