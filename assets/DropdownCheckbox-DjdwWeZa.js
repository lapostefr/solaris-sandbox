import{l as ee,r as m,P as oe,c as ae,w as se,a as ne,o as te,m as v,b as n,d as p,p as u,z as f,u as o,t as S,y as w,D as b,v as O,q,L as re,H as le,Q as ie,O as de,x as C,K as pe,F as B,C as ue,T as ce,n as me}from"./vue.esm-bundler-DD7xIM0D.js";import{o as fe,u as be}from"./index-ADTFLffw.js";import{u as he}from"./useDropdown-BVv9J1eL.js";import{_ as ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";const we={class:"dropdown__wrapper"},ge=["aria-describedby"],ye=["for"],_e={class:"dropdown__container"},ke={key:0,class:"dropdown__placeholder"},Se={class:"dropdown__value"},qe=["id"],Ce={key:1,class:"dropdown__no-result"},H=ee({__name:"DropdownCheckbox",props:{nesting:{type:Boolean},active:{default:"active"},activeGroup:{type:Boolean},dataError:{},id:{},label:{},labelPosition:{default:"inside"},listboxHeight:{default:0},message:{},name:{},options:{},phoneCode:{},picto:{default:"arrow-bottom"},placeholder:{},size:{default:"default"},searchField:{type:Boolean},searchFieldMode:{default:"contains"}},emits:["multiSelected"],setup($,{emit:A}){const t=$,N=A,D=m(null),c=m([]),g=m(),y=m(null),E=m(""),{id:r,options:M,phoneCode:R,searchField:V,searchFieldMode:j}=oe(t),{multiSelected:F,toggleListBox:i,close:l,dynamicListboxHeight:K,opened:d,dynamicHeight:G,searches:_,noSearchResult:T,multiValue:k,dynamicOptions:U,focusedIndex:Ee,dynamicOptionsList:Me}=he(N,r,M,R,V,j,c,g);fe(D,e=>l());const Q=ae(()=>{let e=!1;return M.value.every(s=>s.parent)&&(e=!0),e});se(d,async()=>{await me(),K();const{focused:e}=be(g.value,{initialValue:!1});d.value&&t.searchField&&(e.value=!e.value)});const J=()=>{var e,s;return(e=t.dataError)!=null&&e.active&&((s=t.dataError)!=null&&s.message)?E.value:void 0},x=()=>{E.value=y.value.idMessage?y.value.idMessage:"error-message"},h=()=>t.options.length&&!!t.options[0].optionsList&&t.options[0].optionsList.length?t.active:"disabled";return ne(()=>{x()}),te(()=>{x()}),(e,s)=>{var z,P,L;const W=v("SolarisIcon"),X=v("SolarisDropdownMessage"),Y=v("SolarisInput"),I=v("SolarisCheckboxGroup");return n(),p("div",we,[u("fieldset",{class:f(["dropdown",[`dropdown--${e.labelPosition}`,{"dropdown--small":e.size=="small"||e.size=="compact","dropdown--medium":e.size=="medium"||e.size=="default","dropdown--disabled":h()==="disabled","dropdown--readonly":h()==="readonly","dropdown--isOpen":o(d),"dropdown--filled":!!o(k),"dropdown--placeholder":!!e.placeholder,"dropdown--error":(z=e.dataError)==null?void 0:z.active}]]),ref_key:"targetDropdown",ref:D,"aria-describedby":J()},[e.label?(n(),p("legend",{key:0,class:f(["dropdown__label",`dropdown__label--${e.labelPosition}`]),ref:a=>c.value[o(r)]=a,for:o(r)},S(e.label),11,ye)):w("",!0),u("div",{ref:a=>c.value[o(r)]=a,tabindex:"0",class:f(["dropdown__element",[`dropdown__element--${e.labelPosition}`,{"dropdown__element--inside-label":!!e.label&&e.labelPosition==="inside","dropdown__element--inside-no-label":!e.label&&e.labelPosition==="inside","dropdown__element--disabled":h()==="disabled","dropdown__element--readonly":h()==="readonly","dropdown__element--error":(P=e.dataError)==null?void 0:P.active}]]),onClick:s[0]||(s[0]=(...a)=>o(i)&&o(i)(...a)),onKeydown:[s[1]||(s[1]=b(O((...a)=>o(i)&&o(i)(...a),["prevent"]),["space","enter"])),s[2]||(s[2]=b((...a)=>o(i)&&o(i)(...a),["down","up"])),s[3]||(s[3]=b((...a)=>o(l)&&o(l)(...a),["esc"])),s[4]||(s[4]=b(O((...a)=>o(l)&&o(l)(...a),["shift","exact"]),["tab"]))]},[u("span",_e,[e.placeholder&&!o(k)?(n(),p("span",ke,S(e.placeholder),1)):w("",!0),u("span",Se,S(o(k)),1)]),q(W,{name:e.picto,class:f(["dropdown__picto",{"dropdown__picto--isActive":e.picto==="arrow-bottom"&&o(d)}])},null,8,["name","class"])],34),q(X,{ref_key:"childMessage",ref:y,message:e.message,error:(L=e.dataError)==null?void 0:L.message,dataError:e.dataError},null,8,["message","error","dataError"]),q(ce,{name:"lightbox"},{default:re(()=>[le(u("div",{ref:a=>c.value[`${o(r)}-lightbox`]=a,id:`${o(r)}-lightbox`,class:f(["dropdown__lightbox",{"dropdown__lightbox--noFocus":!o(d)}]),role:"listbox","aria-multiselectable":"true",style:de([e.listboxHeight&&e.listboxHeight>16?{"max-height":e.listboxHeight+"px"}:"",o(G)?{height:o(G)+"px"}:""]),onKeydown:s[6]||(s[6]=b((...a)=>o(l)&&o(l)(...a),["esc"]))},[o(V)?(n(),C(Y,{key:0,ref_key:"search",ref:g,class:"dropdown__search",modelValue:o(_),"onUpdate:modelValue":s[5]||(s[5]=a=>pe(_)?_.value=a:null),name:"nameSearch",id:"idSearch",type:"text",label:"Rechercher",icon:"search-loupe",autocomplete:"off"},null,8,["modelValue"])):w("",!0),u("div",{ref:a=>c.value[`${o(r)}-optionsList`]=a,class:"dropdown__optionsList"},[(n(!0),p(B,null,ue(o(U),(a,Z)=>(n(),p(B,{key:`dropdown-${o(r)}-checkboxNesting-${Z}`},[e.nesting&&Q.value?(n(),C(I,{key:0,nesting:"",options:a,activeGroup:e.activeGroup,class:"dropdown__checkboxNesting",color:"quiet",onInput:o(F)},null,8,["options","activeGroup","onInput"])):(n(),C(I,{key:1,options:a,activeGroup:e.activeGroup,class:"dropdown__checkboxGroup",color:"quiet",onInput:o(F)},null,8,["options","activeGroup","onInput"]))],64))),128))],512),o(T)?(n(),p("span",Ce,"Aucun résultat")):w("",!0)],46,qe),[[ie,o(d)]])]),_:1})],10,ge)])}}}),De=ve(H,[["__scopeId","data-v-222f305f"]]);H.__docgenInfo={exportName:"default",displayName:"DropdownCheckbox",description:"",tags:{},props:[{name:"nesting",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"union",elements:[{name:'"disabled"'},{name:'"readonly"'},{name:'"active"'}]},defaultValue:{func:!1,value:"'active'"}},{name:"activeGroup",required:!1,type:{name:"boolean"}},{name:"dataError",required:!1,type:{name:"DataError"}},{name:"id",required:!0,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"labelPosition",required:!1,type:{name:"union",elements:[{name:'"inside"'},{name:'"outside"'}]},defaultValue:{func:!1,value:"'inside'"}},{name:"listboxHeight",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"message",required:!1,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"Group"}]}},{name:"phoneCode",required:!1,type:{name:"string"}},{name:"picto",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'arrow-bottom'"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"compact"'},{name:'"regular"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"searchField",required:!1,type:{name:"boolean"}},{name:"searchFieldMode",required:!1,type:{name:"union",elements:[{name:'"contains"'},{name:'"startswith"'}]},defaultValue:{func:!1,value:"'contains'"}}],events:[{name:"multiSelected"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue-solaris/src/components/atoms/Dropdown/Checkbox/DropdownCheckbox.vue"]};const ze=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"}));export{De as S,ze as _};
