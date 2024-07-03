import{a as l}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as i}from"./Radio-BKuK5rYQ.js";import{r as d}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Atoms/Radio/Default",argTypes:{aria:{description:"Aria attributes for accessibility.",table:{type:{summary:"object",detail:"key (string) : string"}},control:"object"},colorStyle:{description:"Colors of the radio button.",table:{type:{summary:["emphasis","default","quiet"]},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["emphasis","default","quiet"]},disabled:{description:"Shows that a selection exists.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},error:{description:"Shows that a selection exists.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},id:{description:"The Radio id.",table:{type:{summary:"string"}},required:!0},name:{description:"The Radio name.",table:{type:{summary:"string"}},required:!0},readonly:{description:"The label must remain readable by users.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},value:{description:"The Radio value.",table:{type:{summary:"string"}},required:!0},type:{description:'*Colors of the radio button. <span style="color:orange">This prop is deprecated</span>*. Use the colorStyle prop instead. ',table:{type:{summary:["emphasis","default","quiet"]},defaultValue:{summary:"emphasis"},category:"Deprecated"},control:{type:"select"},options:["emphasis","default","quiet"]}},args:{aria:{label:"test"},disabled:!1,error:!1,id:"monId",name:"name",readonly:!1,colorStyle:"emphasis",value:"test",type:"emphasis"}},e={render:o=>({components:{SolarisRadio:i},setup(){const r=d(null),n=l("input");return{args:o,elementChange:n,model:r}},template:`<div>
    <SolarisRadio v-model="model" v-bind="args" @input="elementChange">
      Radiobutton label
    </SolarisRadio>
    </div>`}),args:{aria:{label:"test"},disabled:!1,error:!1,id:"monId",name:"name",readonly:!1,colorStyle:"emphasis",value:"test",type:"emphasis"}};var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisRadio
    },
    setup() {
      const model = ref(null);
      const elementChange = action('input');
      return {
        args,
        elementChange,
        model
      };
    },
    template: \`<div>
    <SolarisRadio v-model="model" v-bind="args" @input="elementChange">
      Radiobutton label
    </SolarisRadio>
    </div>\`
  }),
  args: {
    aria: {
      label: 'test'
    },
    disabled: false,
    error: false,
    id: 'monId',
    name: 'name',
    readonly: false,
    colorStyle: 'emphasis',
    value: 'test',
    // |-- Deprecated
    type: 'emphasis'
    // Deprecated --|
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,b as default};
