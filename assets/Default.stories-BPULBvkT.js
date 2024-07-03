import{a as o}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as d}from"./Textarea-DaTl6yFv.js";import{r as m}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Atoms/Textarea",args:{autofocus:!1,dataError:{active:!1,message:""},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",mandatory:!1,message:"Voilà le message",name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default"}},e={render:n=>({components:{SolarisTextarea:d},setup(){const l=o("blur"),t=m("");return{args:n,textareaModel:t,blurElement:l}},template:`<div>
    <SolarisTextarea v-model="textareaModel" v-bind="args" @blur="blurElement"/>
  </div>`}),args:{autofocus:!1,dataError:{active:!1,message:""},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",mandatory:!1,message:"Voilà le message",name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default"}};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,g as default};
