import{a as i}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as p}from"./RadioGroup-a65ZfBUv.js";import{r as d}from"./vue.esm-bundler-DD7xIM0D.js";import{o as r}from"./optionsGroup-BeSfFgL2.js";import"./v4-D8aEg3BZ.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m=`{
  groupName: string (deprecated),
  legend: string,
  optionsList: [
    id: string,
    name: string,
    value: string,
    val?: string
  ]
}`,u=`{
  active: boolean,
  message: string
}`,S={title:"Atoms/Radio/Group",argTypes:{colorStyle:{description:"Colors of the radio button.",table:{type:{summary:["emphasis","default","quiet"]},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["emphasis","default","quiet"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:u}},control:{type:"object"}},disabled:{description:"Shows that a selection exists.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},layout:{description:"The radio buttons group layout.",table:{type:{summary:["vertical","horizontal"]},defaultValue:{summary:"vertical"}},control:{type:"select"},options:["vertical","horizontal"]},options:{description:"The list of radios.",table:{type:{summary:"object",detail:m}},required:!0},readonly:{description:"The label must remain readable by users.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},type:{description:'*Colors of the radio button. <span style="color:orange">This prop is deprecated</span>*. Use the colorStyle prop instead. ',table:{type:{summary:["emphasis","default","quiet"]},defaultValue:{summary:"emphasis"},category:"Deprecated"},control:{type:"select"},options:["emphasis","default","quiet"]}},args:{dataError:{active:!1,message:""},disabled:!1,layout:"vertical",options:r,readonly:!1,colorStyle:"emphasis",type:"emphasis"}},e={render:s=>({components:{SolarisRadioGroup:p},setup(){const l=d(null),n=i("input");return{args:s,model:l,elementChange:n}},template:'<SolarisRadioGroup v-model="model" v-bind="args" @input="elementChange"></SolarisRadioGroup>'}),args:{colorStyle:"emphasis",dataError:{active:!1,message:""},disabled:!1,layout:"vertical",options:r,readonly:!1,type:"default"}};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisRadioGroup
    },
    setup() {
      const model = ref(null);
      const elementChange = action('input');
      return {
        args,
        model,
        elementChange
      };
    },
    template: \`<SolarisRadioGroup v-model="model" v-bind="args" @input="elementChange"></SolarisRadioGroup>\`
  }),
  args: {
    colorStyle: 'emphasis',
    dataError: {
      active: false,
      message: ''
    },
    disabled: false,
    layout: 'vertical',
    options: options,
    readonly: false,
    type: 'default'
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const G=["Group"];export{e as Group,G as __namedExportsOrder,S as default};
