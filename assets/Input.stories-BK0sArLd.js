import{a as u}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as p}from"./Input-BadM2x4F.js";import{d as c,a as d,b as y,c as b}from"./details-UtBJFu9L.js";import{L as l}from"./types-Dd7QR7uO.js";import{r as f,w as g}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./useInput-MMiNY_C_.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const r=[{label:"Item 1",value:1},{label:"Item 2",value:2}],h=Object.values(l),j={title:"Atoms/TextInput/Default",argTypes:{aria:{description:"Aria attributes",table:{type:{summary:"object",detail:c}},control:{type:"object"}},autocomplete:{description:"Active autocompletion.",table:{type:{summary:"string"}},defaultValue:{summary:"on"},control:{type:"select"},options:["on","off"]},autofocus:{description:"Change the environment from the text input to the focus.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:d}},control:{type:"object"}},disabled:{description:"Disables the field.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},hideLabel:{description:"Hide the label.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},icon:{description:"Display an icon.",table:{type:{summary:"string"}}},id:{description:"The Input Text id",table:{type:{summary:"string"}},required:!0},inputRefStr:{description:"The Input Text reference.",table:{type:{summary:"string"}},defaultValue:{summary:"input"}},isQuiet:{description:"Changes the appearance of the text input.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},label:{description:"The text for the label.",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:h},defaultValue:{summary:"inside"}},control:{type:"select"},options:l},mandatory:{description:"Make the text input mandatory.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},max:{description:"Maximum value for the input. *Works with input type number or if numericonly is setted to true.*",table:{type:{summary:"number"}}},maxlength:{description:"Maximum length of the input. *Does not apply to the type number.*",table:{type:{summary:"number"}}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"string"}},min:{description:"Minimum value for the input. *Works with input type number or if numericonly is setted to true.*",table:{type:{summary:"number"}}},name:{description:"The Input Text name.",table:{type:{summary:"string"}},required:!0},placeholder:{description:"The Input Text placeholder.",table:{type:{summary:"string"}}},readonly:{description:"Make the text input readonly.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},size:{description:"Size of input",table:{type:{summary:"string"}},defaultValue:{summary:"medium"},control:{type:"select"},options:["default","compact","small","medium"]},success:{description:"Display success.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},suggestions:{description:"Display suggestions.",table:{type:{summary:"array",detail:y}}},tooltip:{description:"The text of the tooltip.",table:{type:{summary:"string"}}},type:{description:"Type of input",table:{type:{summary:["text","number","email","tel"]}},defaultValue:{summary:"text"},control:{type:"select"},options:["text","number","email","tel"]},unit:{description:"Displays a unit and its full description. If label is an abbreviation (ex: cm), the description is required (ex: centimeters).",table:{type:{summary:"object",detail:b}},control:{type:"object"}},error:{description:'Display error. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},category:"Deprecated"},defaultValue:{summary:!1},control:{type:"boolean"}}},args:{aria:{label:"test"},autocomplete:"off",autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,hideLabel:!1,icon:"search-loupe",id:"monId",inputRefStr:"input",isQuiet:!1,label:"My super Input Text",mandatory:!1,max:99,maxlength:30,message:"Voilà le message",min:10,numericonly:!1,name:"name",placeholder:"",readonly:!1,size:"medium",success:!1,suggestions:r,tooltip:"Tooltip text",type:"text",unit:{label:"cm",description:"centimeter"}}},e={render:t=>({components:{SolarisInput:p},setup(){const a=f();g(()=>t.value,m=>{a.value=m});const i=u("Change");return{args:t,changeElement:i,inputData:a}},template:`<div style="height: calc(100vh - 2rem); padding: 15vh 3vw;" @input="changeElement">
    <SolarisInput v-model="inputData" v-bind="args"/>
  </div>`}),args:{autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",label:"My super Input Text",mandatory:!1,message:"Voilà le message",name:"name",placeholder:"",readonly:!1,size:"medium",success:!1,suggestions:r,tooltip:"Tooltip text",type:"text",unit:{label:"cm",description:"centimeter"}}};var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisInput
    },
    setup() {
      const inputData = ref();
      watch(() => args.value, (value: boolean) => {
        inputData.value = value;
      });
      const changeElement = action('Change');
      return {
        args,
        changeElement,
        inputData
      };
    },
    template: \`<div style="height: calc(100vh - 2rem); padding: 15vh 3vw;" @input="changeElement">
    <SolarisInput v-model="inputData" v-bind="args"/>
  </div>\`
  }),
  args: {
    autofocus: false,
    dataError: {
      active: false,
      message: ''
    },
    disabled: false,
    error: false,
    id: 'monId',
    label: 'My super Input Text',
    // labelPosition: 'inside',
    mandatory: false,
    message: 'Voilà le message',
    name: 'name',
    placeholder: '',
    readonly: false,
    size: 'medium',
    success: false,
    suggestions: suggestions,
    tooltip: 'Tooltip text',
    type: 'text',
    unit: {
      label: 'cm',
      description: 'centimeter'
    }
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,j as default};
