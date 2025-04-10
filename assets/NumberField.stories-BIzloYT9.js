import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{_ as d}from"./NumberField-DppsO7MG.js";import{r as n}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./generateId-CVaf2GGW.js";const m=`{
  active: boolean,
  message: string
}`,f={title:"Atoms/Number Field",parameters:{layout:"centered"},argTypes:{dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:m}},control:{type:"object"}},disabled:{description:"Disabled the NumberField.",table:{type:{summary:"boolean"}}},id:{description:"Field s ID",table:{type:{summary:"string"}}},label:{description:"Defines the text for the label.",table:{type:{summary:"string"},defaultValue:{summary:"Quantité"}}},labelPosition:{description:'Specifies how the label is displayed, "visually-hidden" for accessibility or "outside" for a standard label display.',table:{type:{summary:["visually-hidden","outside"].join(" | ")},defaultValue:{summary:"visually-hidden"}},control:{type:"select"},options:["visually-hidden","outside"]},max:{description:"The maximum possible value.",table:{type:{summary:"number"}}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{summary:"string"}},min:{description:"The minimum possible value.",table:{type:{summary:"number"}}},small:{description:"Enables the small size.",table:{type:{summary:"string"}}},type:{description:"Type of Number Field",table:{type:{summary:["emphasis","default","quiet","ghost"].join(" | ")},defaultValue:{summary:"quiet"}},control:{type:"select"},options:["emphasis","default","quiet","ghost"]},error:{description:'Enables the error display. <span style="color:orange">deprecated</span>*',table:{type:{summary:"string"},category:"Deprecated"}}},args:{dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",label:"Label",labelPosition:"visually-hidden",max:100,message:"Voilà le message",min:1,small:!1,type:"quiet"}},a={render:i=>({components:{SolarisNumberField:d},setup(){const t=n(2);return{args:i,model:t,onInput:e=>{s("input")(e)},onModelUpdate:e=>{s("update:modelValue")(e),t.value=e}}},template:'<div><SolarisNumberField v-model="model" v-bind="args" @input="onInput" @update:modelValue="onModelUpdate" /></div>'})};var o,l,r;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNumberField
    },
    setup() {
      const model = ref(2);
      const onInput = value => {
        action('input')(value);
      };
      const onModelUpdate = value => {
        action('update:modelValue')(value);
        model.value = value;
      };
      return {
        args,
        model,
        onInput,
        onModelUpdate
      };
    },
    template: '<div>' + '<SolarisNumberField v-model="model" v-bind="args" @input="onInput" @update:modelValue="onModelUpdate" />' + '</div>'
  })
}`,...(r=(l=a.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const h=["NumberField"];export{a as NumberField,h as __namedExportsOrder,f as default};
