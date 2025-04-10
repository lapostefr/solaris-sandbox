import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as i}from"./Textarea-C2EQ-K5x.js";import{L as o}from"./types-DKXD8uiR.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./generateId-CVaf2GGW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={maxlength:{description:"Maximum number of characters allowed",table:{type:{summary:"number"}}},autofocus:{description:"Automatically focus the textarea on load",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},dataError:{description:"Error data object",table:{type:{summary:"object"}}},description:{description:"Textarea description",table:{type:{summary:"string"}}},disabled:{description:"Disable the textarea",table:{type:{summary:"boolean"}},control:{type:"boolean"}},error:{description:"Error state of the textarea",table:{type:{summary:"boolean"}},control:{type:"boolean"}},id:{description:"ID of the textarea",table:{type:{summary:"string"}}},label:{description:"Label of the textarea",table:{type:{summary:"string"}}},labelPosition:{description:"Position of the label",table:{type:{summary:"string"}},control:{type:"select"},options:Object.values(o)},mandatory:{description:"Is the textarea mandatory",table:{type:{summary:"boolean"}},control:{type:"boolean"}},message:{description:"Message below the textarea",table:{type:{summary:"string"}}},name:{description:"Name of the textarea",table:{type:{summary:"string"}}},placeholder:{description:"Placeholder text",table:{type:{summary:"string"}}},readonly:{description:"Read-only state",table:{type:{summary:"boolean"}},control:{type:"boolean"}},row:{description:"Number of rows",table:{type:{summary:"number"}}},size:{description:"Size of the textarea",table:{type:{summary:"string"}},control:{type:"select"},options:["default","small","large"]}},g={title:"Atoms/Textarea",argTypes:m,args:{autofocus:!1,dataError:{active:!1,message:""},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",labelPosition:o.inside,mandatory:!1,message:"Voilà le message",maxlength:900,name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default"}},e={render:s=>({components:{SolarisTextarea:i},setup(){const l=n("blur");return{args:s,blurElement:l}},template:`<div>
      <SolarisTextarea v-bind="args" @blur="blurElement"/>
    </div>`}),args:{autofocus:!1,dataError:{active:!1,message:""},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",mandatory:!1,message:"Voilà le message",maxlength:900,name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default"}};var a,t,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTextarea
    },
    setup() {
      const blurElement = action('blur');
      return {
        args,
        blurElement
      };
    },
    template: \`<div>
      <SolarisTextarea v-bind="args" @blur="blurElement"/>
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
    mandatory: false,
    message: 'Voilà le message',
    maxlength: 900,
    name: 'name',
    placeholder: 'Placeholder',
    readonly: false,
    row: 5,
    size: 'default'
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const x=["WithCounter"];export{e as WithCounter,x as __namedExportsOrder,g as default};
