import{S as i}from"./RangeSlider-D71mOKRo.js";import{r as l}from"./vue.esm-bundler-DD7xIM0D.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o=`{
  min: number,
  max: number
}`,m=`{
  active: boolean,
  message: string
}`,c={title:"Atoms/Range Slider",argTypes:{color:{description:"Color between selected values.",table:{type:{summary:["default","emphasis","quiet"].join(" | ")},defaultValue:{summary:"default"}},control:{type:"select"},options:["default","emphasis","quiet"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:m}},control:{type:"object"}},id:{description:"Field s ID",table:{type:{summary:"string"}}},label:{description:"Add a label or not.",table:{type:{summary:"string"}}},max:{description:"Slider possible max value.",table:{type:{summary:"number"}}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"text"}},min:{description:"Slider possible min value.",table:{type:{summary:"number"}}},rangeValues:{description:"Data range for the Range Slider.",table:{type:{summary:"object",detail:o}}},step:{description:"Step size when you change values.",table:{type:{summary:"number"}}},unit:{description:"The unit in the fields.",table:{table:{type:{summary:"string"}},defaultValue:{summary:"€"}}}},args:{color:"default",dataError:{active:!1,message:""},id:"monId",label:"Label",max:200,message:"Voilà le message",min:2,rangeValues:{min:15,max:76},step:1,unit:"€"}},e={render:a=>({components:{SolarisRangeSlider:i},setup(){const s=l(a.rangeValues);return{args:a,range:s}},template:`<div style="margin: auto; width: 300px;">
    <SolarisRangeSlider v-bind="args" v-model="range" />
  </div>`}),args:{color:"default",dataError:{active:!1,message:""},id:"monId",label:"Label",max:200,message:"Voilà le message",min:0,rangeValues:{min:12,max:76},step:1,unit:"€"}};var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisRangeSlider
    },
    setup() {
      const range = ref(args.rangeValues);
      return {
        args,
        range
      };
    },
    template: \`<div style="margin: auto; width: 300px;">
    <SolarisRangeSlider v-bind="args" v-model="range" />
  </div>\`
  }),
  args: {
    color: 'default',
    dataError: {
      active: false,
      message: ''
    },
    id: 'monId',
    label: 'Label',
    max: 200,
    message: 'Voilà le message',
    min: 0,
    rangeValues: {
      min: 12,
      max: 76
    },
    step: 1,
    unit: '€'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const b=["RangeSlider"];export{e as RangeSlider,b as __namedExportsOrder,c as default};
