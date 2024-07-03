import{l as _,E as m,G as B,r as d,c as x,m as p,b as V,x as S,L as f,q as T,s as I,t as k,J as h}from"./vue.esm-bundler-DD7xIM0D.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const c=_({__name:"InputButton",props:m({cancelText:{default:"Annuler"},initButtonState:{type:Boolean},validateText:{default:"Valider"},dataError:{},mobileLabel:{},aria:{},autocomplete:{default:"on"},autofocus:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},hideLabel:{type:Boolean},icon:{},id:{},inputRefStr:{},isQuiet:{type:Boolean},label:{},labelPosition:{},mandatory:{type:Boolean},message:{},max:{},maxlength:{},min:{},name:{},numericonly:{type:Boolean},placeholder:{},readonly:{type:Boolean},size:{default:"default"},success:{type:Boolean},suggestions:{},type:{default:"text"},tooltip:{},unit:{},value:{}},{modelValue:{},modelModifiers:{}}),emits:m(["input","buttonClicked"],["update:modelValue"]),setup(l,{emit:y}){const n=l,o=y,u=B(l,"modelValue"),a=d(!1),r=d(!1),s=x(()=>{let e="primary",t=n.validateText;return a.value&&(e="secondary",t=n.cancelText),{type:e,name:t}}),b=e=>{o("input",e)},i=()=>{r.value?a.value=!a.value:(a.value=n.initButtonState,r.value=!0),o("buttonClicked",a.value)};return i(),(e,t)=>{const g=p("SolarisButton"),q=p("SolarisInput");return V(),S(q,h({modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=v=>u.value=v)},e.$props,{onInput:b}),{inputRight:f(()=>[T(g,{class:"input__button",type:s.value.type,disabled:e.disabled,size:"small",color:"darkgrey",onClick:i},{default:f(()=>[I(k(s.value.name),1)]),_:1},8,["type","disabled"])]),_:1},16,["modelValue"])}}}),L=C(c,[["__scopeId","data-v-bf073dad"]]);c.__docgenInfo={exportName:"default",displayName:"InputButton",description:"",tags:{},props:[{name:"cancelText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Annuler'"}},{name:"initButtonState",required:!1,type:{name:"boolean"}},{name:"validateText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Valider'"}},{name:"dataError",required:!1,type:{name:"DataErrorType"}},{name:"mobileLabel",required:!1,type:{name:"string"}},{name:"aria",required:!1,type:{name:`{
  [key: string]: string
}`}},{name:"autocomplete",required:!1,type:{name:"union",elements:[{name:'"on"'},{name:'"off"'}]},defaultValue:{func:!1,value:"'on'"}},{name:"autofocus",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"error",required:!1,type:{name:"boolean"}},{name:"hideLabel",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"string"}},{name:"id",required:!0,type:{name:"string"}},{name:"inputRefStr",required:!1,type:{name:"string"}},{name:"isQuiet",required:!1,type:{name:"boolean"}},{name:"label",required:!1,type:{name:"string"}},{name:"labelPosition",required:!1,type:{name:"LabelPosition"}},{name:"mandatory",required:!1,type:{name:"boolean"}},{name:"message",required:!1,type:{name:"string"}},{name:"max",required:!1,type:{name:"number"}},{name:"maxlength",required:!1,type:{name:"number"}},{name:"min",required:!1,type:{name:"number"}},{name:"name",required:!0,type:{name:"string"}},{name:"numericonly",required:!1,type:{name:"boolean"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"compact"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"success",required:!1,type:{name:"boolean"}},{name:"suggestions",required:!1,type:{name:"Array",elements:[{name:"SuggestionType"}]}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"number"'},{name:'"email"'},{name:'"tel"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"tooltip",required:!1,type:{name:"string"}},{name:"unit",required:!1,type:{name:"UnitProp"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"inputRef",defaultValue:{func:!1,value:"'input'"}}],events:[{name:"input"},{name:"buttonClicked"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue-solaris/src/components/atoms/TextInput/Button/InputButton.vue"]};const j=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{L as S,j as _};
