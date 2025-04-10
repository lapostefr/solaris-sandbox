import{S as L}from"./Icon-C-Sturzh.js";import{S as K,C as P}from"./Tooltip-BdO2vyV2.js";import{d as R,c as n,U as y,f as d,g as v,F as G,z as H,v as u,J as V,I as B,y as p,A as _,B as h,r as b,w as J,t as C,H as w,C as A,L as M}from"./vue.esm-bundler-BiAlgFmf.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as Q}from"./index-a4aneQim.js";const N=R({name:"StepperList",components:{SolarisIcon:L},props:{steps:{required:!0,type:Array},tooltipOpen:{required:!1,type:Boolean},colors:{required:!1,type:String},isResponsiveSmall:{required:!1,type:Boolean},version:{required:!1,type:String},current:{required:!1,type:Number},modelValue:{required:!1,type:Number}},emits:["change","goBack","update:modelValue"],setup(e,o){const i=n({get(){return e.modelValue||e.current||1},set(s){e.modelValue?o.emit("update:modelValue",s):o.emit("change",s)}}),r=s=>i.value>s+1?0:void 0;return{goBack:(s,a)=>{o.emit("goBack",s,a)},tabindexForStep:r,setTabIndex:s=>{const a=e.version==="small"||e.isResponsiveSmall;return e.isResponsiveSmall?e.tooltipOpen?r(s):-1:a&&!e.tooltipOpen?-1:r(s)},setAriaLabel:s=>{if(i.value>s+1)return`Etape ${s+1} : ${e.steps[s].label} complétée`},currentStep:i}}}),W=["aria-valuemax","aria-valuenow"],X=["role","tabindex","aria-current","aria-label","onKeydown"],Y=["onClick"],Z=["onClick"];function x(e,o,i,r,f,c){const m=y("SolarisIcon");return d(),v("ol",{role:"progressbar",class:"steps","aria-valuemin":1,"aria-valuemax":e.steps.length,"aria-valuenow":e.currentStep},[(d(!0),v(G,null,H(e.steps,(s,a)=>(d(),v("li",{key:s.id,class:u(["step",[`step--${e.colors}`,{"step--current":e.currentStep===a+1}]]),role:e.setTabIndex(a)===0?"link":void 0,tabindex:e.setTabIndex(a),"aria-current":e.currentStep===a+1?"step":void 0,"aria-label":e.setAriaLabel(a),onKeydown:[V(B(t=>e.goBack(s,a),["prevent"]),["enter"]),V(B(t=>e.goBack(s,a),["prevent"]),["space"])]},[p("i",{class:u(["step__picto",`step__picto--${e.colors}`]),onClick:t=>e.goBack(s,a)},null,10,Y),p("span",{class:u(["step__label",{"step__label--active":a+1<e.currentStep}]),onClick:t=>e.goBack(s,a)},_(s.label),11,Z),h(m,{class:"step__edit",name:"action-pen",size:"small",onClick:t=>e.goBack(s,a)},null,8,["onClick"])],42,X))),128))],8,W)}const ee=I(N,[["render",x],["__scopeId","data-v-0467f7dd"]]);N.__docgenInfo={displayName:"StepperList",exportName:"default",description:"",tags:{},props:[{name:"steps",type:{name:"Array<StepType>"},required:!0},{name:"tooltipOpen",type:{name:"boolean"},required:!1},{name:"colors",type:{name:"string"},required:!1},{name:"isResponsiveSmall",type:{name:"boolean"},required:!1},{name:"version",type:{name:"string"},required:!1},{name:"current",type:{name:"number"},required:!1},{name:"modelValue",type:{name:"number"},required:!1}],events:[{name:"change"},{name:"goBack"},{name:"update:modelValue"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/solaris/vue3/src/components/organisms/Steps/StepperList/StepperList.vue"]};const O=R({name:"Steps",components:{SolarisTooltip:K,SolarisStepperList:ee,SolarisIcon:L},model:{prop:"current",event:"change"},props:{steps:{required:!0,type:Array},color:{required:!1,type:String,default:"supernova"},version:{required:!1,default:"responsive",type:String},current:{required:!1,type:Number},modelValue:{required:!1,type:Number}},emits:["change","goToStep","state","update:modelValue"],setup(e,o){const i=b(!1),r=b(),f=b(null),c=n(()=>e.modelValue||e.current||1);J(()=>c.value,l=>{i.value=!0,e.modelValue?o.emit("update:modelValue",l):o.emit("change",l),setTimeout(()=>{i.value=!1},500)},{immediate:!0});const m=n(()=>k.value?"small__popover":S.value?"large__popover":e.version!=="large"?"small__popover":"large__popover"),s=n(()=>({long:!0,trigger:"clickToToggle",placement:"bottom",forceShow:e.version==="large"||S.value,ref:"tooltipRef",onTriggerEvent:$,onClose:q,type:"default",color:"default",displayElement:"div",forcePlacement:!1,offset:0,ariaLabel:"Tooltip",ariaDescribedBy:"tooltip-description"})),t=Q({tablet:992}).smaller("tablet"),g=n(()=>t.value||!1),k=n(()=>e.version==="responsive"&&g.value),T=n(()=>k.value||e.version==="small"),S=n(()=>e.version==="responsive"&&!g.value),E=(l,D)=>{D+1<c.value&&o.emit("goToStep",l.id)},$=l=>{l==="open"?r.value=!0:l==="closed"&&(r.value=!1),o.emit("state",l)},q=()=>{r.value=!1},z=n(()=>T.value?"Ouverture du panneau d'étapes":void 0),F=l=>T.value?l:void 0,j=b(!1),U=n(()=>e.color);return{handleResize:()=>{S.value&&f.value&&(r.value=!1)},tooltipOpen:r,handleTriggerEvent:$,goToStep:E,setAriaAttributes:F,closeTooltip:q,changed:i,showPopover:j,colors:U,currentStep:c,isResponsiveSmall:k,isResponsiveLarge:S,theClass:m,tooltipParams:s,setAriaLabel:z}},computed:{Colors(){return P}}}),se={class:"stepper__inner"},ae=["aria-label","aria-controls","aria-expanded"],oe={key:0,class:"stepper__content"},re={class:"stepper__current"},te={class:"stepper__qty"},le={key:1,class:"stepper__list"};function ne(e,o,i,r,f,c){const m=y("SolarisStepperList"),s=y("SolarisIcon"),a=y("SolarisTooltip");return d(),v("section",{class:u(["stepper",`stepper--${e.version}`])},[p("div",se,[h(a,{ref:"tooltipRef",class:u(e.theClass),long:!0,trigger:"clickToToggle",placement:"bottom","force-show":e.version==="large"||e.isResponsiveLarge,type:"default",color:e.Colors.default,"display-element":"div","force-placement":!1,offset:0,"aria-label":"Tooltip","aria-described-by":"tooltip-description",onTriggerEvent:e.handleTriggerEvent,onClose:e.closeTooltip},{tooltip:C(()=>[h(m,{modelValue:e.currentStep,"onUpdate:modelValue":o[0]||(o[0]=t=>e.currentStep=t),"tooltip-open":e.tooltipOpen,"is-responsive-small":e.isResponsiveSmall,version:e.version,steps:e.steps,colors:e.colors,onGoBack:e.goToStep},null,8,["modelValue","tooltip-open","is-responsive-small","version","steps","colors","onGoBack"])]),trigger:C(({ariaControls:t,ariaExpanded:g})=>[p("button",{class:"stepper__btnTrigger","aria-label":e.setAriaLabel,"aria-controls":e.setAriaAttributes(t),"aria-expanded":e.setAriaAttributes(g)},[h(s,{class:"stepper__trigger",name:"settings-menu-action-vertical"})],8,ae)]),_:1},8,["class","force-show","color","onTriggerEvent","onClose"]),e.version!=="large"||e.isResponsiveSmall?(d(),v("span",oe,[o[1]||(o[1]=w(" Etape ")),p("span",re,_(e.currentStep),1),o[2]||(o[2]=w(" sur ")),p("span",te,_(e.steps.length),1),p("span",{class:u(["stepper__name",{"stepper__name--changed":e.changed}])},_(e.steps[e.currentStep-1].label),3)])):A("",!0),e.version!=="large"||e.isResponsiveSmall?(d(),v("div",le,[p("span",{class:u(["stepper__steps",`stepper__steps--${e.colors}`]),style:M(`width: calc(100% * ${e.currentStep-1} / ${e.steps.length-1})`)},null,6)])):A("",!0)])],2)}const ve=I(O,[["render",ne],["__scopeId","data-v-e3dab8b2"]]);O.__docgenInfo={displayName:"Steps",exportName:"default",description:"",tags:{},props:[{name:"steps",type:{name:"Array<StepType>"},required:!0},{name:"color",values:["supernova","colissimo"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'supernova'"}},{name:"version",values:["small","large","responsive"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'responsive'"}},{name:"v-model",type:{name:"number"},required:!1},{name:"modelValue",type:{name:"number"},required:!1}],events:[{name:"change"},{name:"goToStep"},{name:"state"},{name:"update:modelValue"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/solaris/vue3/src/components/organisms/Steps/Steps.vue"]};export{ve as S};
