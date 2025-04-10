import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as m}from"./Textarea-C2EQ-K5x.js";import{r as d}from"./vue.esm-bundler-BiAlgFmf.js";import{L as e}from"./types-DKXD8uiR.js";import"./v4-CQkTLCs1.js";import"./generateId-CVaf2GGW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p=`{
  active: boolean,
  message: string
}`,x={title:"Atoms/Textarea",argTypes:{autofocus:{description:"Change the environment from the textarea to the focus.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:p}},control:{type:"object"}},description:{description:"The textarea description",table:{type:{summary:"string"}}},disabled:{description:"Make the text area disabled.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},id:{description:"The textarea id",table:{type:{summary:"string"}}},label:{description:"The textarea id",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{defaultValue:{summary:e.inside}},control:{type:"select"},options:[e.inside,e.outside]},mandatory:{description:"Make the text area mandatory.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"text"}},name:{description:"The textarea name",table:{type:{summary:"string"}}},placeholder:{description:"The textarea placeholder",table:{type:{summary:"string"}}},readonly:{description:"Make the text area readonly.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},row:{description:"The number of rows for the textarea.",table:{type:{summary:"number"}}},size:{description:"The size of the textarea.",table:{type:{summary:"string"}},defaultValue:{summary:"medium"},control:{type:"select"},options:["default","compact","small","medium"]},error:{description:'Display an error. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},category:"Deprecated"},defaultValue:{summary:"false"},control:{type:"boolean"}}},args:{autofocus:!1,dataError:{active:!1,message:""},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",labelPosition:e.inside,mandatory:!1,message:"Voilà le message",name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default"}},a={render:s=>({components:{SolarisTextarea:m},setup(){const l=n("blur"),i=d("");return{args:s,textareaModel:i,blurElement:l}},template:`<div>
    <SolarisTextarea v-model="textareaModel" v-bind="args" @blur="blurElement"/>
  </div>`}),args:{autofocus:!1,dataError:{active:!1,message:""},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",mandatory:!1,message:"Voilà le message",name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default"}};var t,r,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTextarea
    },
    setup() {
      const blurElement = action('blur');
      const textareaModel = ref('');
      return {
        args,
        textareaModel,
        blurElement
      };
    },
    template: \`<div>
    <SolarisTextarea v-model="textareaModel" v-bind="args" @blur="blurElement"/>
  </div>\`
  }),
  args: {
    autofocus: false,
    dataError: {
      active: false,
      message: ''
    },
    description: '',
    disabled: false,
    error: false,
    id: 'monId',
    label: 'My super Input Text',
    // labelPosition: 'inside',
    mandatory: false,
    message: 'Voilà le message',
    name: 'name',
    placeholder: 'Placeholder',
    readonly: false,
    row: 5,
    size: 'default'
  }
}`,...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const T=["Default"];export{a as Default,T as __namedExportsOrder,x as default};
