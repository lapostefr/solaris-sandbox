import{d as $,m as j,b as O,r as l,c as _,w as R,a as H,o as J,f as n,g as d,y as c,G as E,u as C,H as L,A as u,C as p,e as V,t as M,F as K,z as Q,v as q}from"./vue.esm-bundler-BiAlgFmf.js";import{S as B}from"./Checkbox-BV2bMv1f.js";import{g as W}from"./generateId-CVaf2GGW.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Y={class:"checkbox-group"},Z=["role","aria-describedby","aria-labelledby","aria-invalid"],ee={class:"checkbox-nesting__labelParent"},ae={class:"checkbox-nesting__labelOption"},G=$({__name:"CheckboxGroup",props:j({nesting:{type:Boolean},options:{},disabled:{type:Boolean},layout:{default:"vertical"},readonly:{type:Boolean},color:{default:"emphasis"},error:{type:Boolean},dataError:{}},{modelValue:{default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(m){const a=m,t=O(m,"modelValue"),i=l(!1),g=W,v=l(""),b=l(null),y=l(""),f=l(null),N=_(()=>({"checkbox-group__child":a.layout==="vertical nested"||a.nesting,"checkbox-group__option--horizontal":a.layout==="horizontal"&&!a.nesting,"checkbox-group__option--vertical":a.layout==="vertical"&&!a.nesting}));R(i,()=>{U()});const S=_(()=>{const e=a.options.optionsList.filter(s=>t.value.includes(s.id)).length;return e!=0&&e!==a.options.optionsList.length}),w=(e,s)=>a.error||a.dataError&&a.dataError.active&&!(e||s),x=()=>{var e,s;return(e=a.dataError)!=null&&e.active&&((s=a.dataError)!=null&&s.message)?v.value:void 0},A=()=>a.options.legend||a.options.groupName?y.value:void 0,I=()=>{var e;return(e=a.dataError)!=null&&e.active?!0:void 0},U=()=>{const e=a.options.optionsList.filter(o=>(o.disabled===!0||o.readonly===!0)&&!t.value.includes(o.id)).map(o=>o.id),s=a.options.optionsList.filter(o=>(o.disabled===!0||o.readonly===!0)&&t.value.includes(o.id)).map(o=>o.id);if(i.value)t.value=a.options.optionsList.filter(o=>!e.includes(o.id)).map(o=>o.id);else{const o=a.options.optionsList.filter(r=>!s.includes(r.id)).map(r=>r.id);t.value=a.options.optionsList.filter(r=>!o.includes(r.id)).map(r=>r.id)}},z=e=>{t.value.includes(e.id)?t.value=t.value.filter(s=>s!==e.id):t.value=[...t.value,e.id]},h=()=>{const e=b.value;v.value=e&&e.id?e.id:"error-message"},D=()=>{var e,s,o;return a.dataError&&((e=a.dataError)==null?void 0:e.active)&&((o=(s=a.dataError)==null?void 0:s.message)==null?void 0:o.length)},F=()=>a.options.legend?a.options.legend:a.options.groupName,k=()=>{const e=f.value;y.value=e&&e.id?e.id:"legend"},P=()=>{var e;return(e=a.dataError)!=null&&e.active||a.error?"group":void 0};return H(()=>{h(),k()}),J(()=>{h(),k()}),(e,s)=>{var o;return n(),d("div",Y,[c("fieldset",{class:q(["checkbox-group__wrapper",[{"checkbox-group--error":e.error||e.dataError&&e.dataError.active}]]),role:P(),"aria-describedby":x(),"aria-labelledby":A(),"aria-invalid":I()},[e.options.legend||e.options.groupName?E((n(),d("legend",{key:0,ref_key:"legend",ref:f,class:"checkbox-group__name"},[L(u(F()),1)])),[[C(g),"legend--"]]):p("",!0),e.options.parent&&(e.layout==="vertical nested"||e.nesting)?(n(),V(B,{key:1,id:e.options.parent.id,modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=r=>i.value=r),name:e.options.parent.name,color:e.color,disabled:e.disabled,readonly:e.readonly,indeterminate:S.value,class:"checkbox-group__parent"},{default:M(()=>[c("span",ee,u(e.options.parent.value),1)]),_:1},8,["id","modelValue","name","color","disabled","readonly","indeterminate"])):p("",!0),(n(!0),d(K,null,Q(e.options.optionsList,(r,T)=>(n(),V(B,{key:`${r.id}-${T}`,id:r.id,"model-value":t.value.includes(r.id),name:r.name,color:e.color,disabled:e.disabled||r.disabled,readonly:e.readonly||r.readonly,error:w(e.disabled||r.disabled,r.readonly),class:q(["checkbox-group__option",N.value]),"onUpdate:modelValue":oe=>z(r)},{default:M(()=>[c("span",ae,u(r.id),1)]),_:2},1032,["id","model-value","name","color","disabled","readonly","error","class","onUpdate:modelValue"]))),128)),D()?E((n(),d("p",{key:2,ref_key:"errorMessage",ref:b,class:"checkbox-group__error-message","aria-live":"polite"},[L(u((o=e.dataError)==null?void 0:o.message),1)])),[[C(g),"checkbox-group-error-message--"]]):p("",!0)],10,Z)])}}}),le=X(G,[["__scopeId","data-v-b013363e"]]);G.__docgenInfo={exportName:"default",displayName:"CheckboxGroup",description:"",tags:{},props:[{name:"nesting",required:!1,type:{name:"boolean"}},{name:"options",required:!0,type:{name:"Group"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"layout",required:!1,type:{name:"union",elements:[{name:'"vertical"'},{name:'"vertical nested"'},{name:'"horizontal"'}]},defaultValue:{func:!1,value:"'vertical'"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"emphasis"'},{name:'"quiet"'},{name:'"default"'},{name:'"error"'},{name:'"vsmp"'}]},defaultValue:{func:!1,value:"'emphasis'"}},{name:"error",required:!1,type:{name:"boolean"}},{name:"dataError",required:!1,type:{name:"DataErrorType"}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/solaris/vue3/src/components/atoms/Checkbox/Group/CheckboxGroup.vue"]};export{le as S};
