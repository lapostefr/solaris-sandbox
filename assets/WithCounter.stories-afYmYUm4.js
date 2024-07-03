import{a as t}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as o}from"./Textarea-DaTl6yFv.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={title:"Atoms/Textarea",args:{autofocus:!1,dataError:{active:!1,message:""},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",mandatory:!1,message:"Voilà le message",maxlength:900,name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default",value:""}},e={render:s=>({components:{SolarisTextarea:o},setup(){const l=t("blur");return{args:s,blurElement:l}},template:`<div>
    <SolarisTextarea v-bind="args" @blur="blurElement"/>
  </div>`}),args:{autofocus:!1,dataError:{active:!1,message:""},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",mandatory:!1,message:"Voilà le message",maxlength:900,name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default",value:""}};var a,r,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    // labelPosition: 'inside',
    mandatory: false,
    message: 'Voilà le message',
    maxlength: 900,
    name: 'name',
    placeholder: 'Placeholder',
    readonly: false,
    row: 5,
    size: 'default',
    value: ''
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const g=["WithCounter"];export{e as WithCounter,g as __namedExportsOrder,f as default};
