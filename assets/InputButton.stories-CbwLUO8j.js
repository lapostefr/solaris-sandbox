import{a as u}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as m}from"./InputButton-DKLgXn9j.js";import{d as p,a as c,b as d,c as y}from"./details-UtBJFu9L.js";import{L as l}from"./types-Dd7QR7uO.js";import{r as b,w as f}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i=[{label:"un",value:1},{label:"deux",value:2}],g=Object.values(l),S={title:"Atoms/TextInput/Button",argTypes:{aria:{description:"Aria attributes",table:{type:{summary:"object",detail:p}},control:"object"},autocomplete:{description:"Active autocompletion.",table:{type:{summary:"string"}},defaultValue:{summary:"on"},control:{type:"select"},options:["on","off"]},autofocus:{description:"Change the environment from the text input to the focus.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},cancelText:{description:"Text for cancellation.",table:{type:{summary:"string"},defaultValue:{summary:"Annuler"}}},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:c}},control:"object"},disabled:{description:"Disables the field.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},hideLabel:{description:"Hide the label.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},icon:{description:"Display an icon.",table:{type:{summary:"string"}}},id:{description:"The Input Text id",table:{type:{summary:"string"}},required:!0},initButtonState:{description:"Change the status of the button when loading.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},isQuiet:{description:"Changes the appearance of the text input.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},label:{description:"The text for the label.",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:g},defaultValue:{summary:"inside"}},control:{type:"select"},options:l},mandatory:{description:"Make the text input mandatory.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},max:{description:"Maximum value for the input.",table:{type:{summary:"number"}}},maxlength:{description:"Maximum length of the input.",table:{type:{summary:"number"}}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"string"}},min:{description:"Minimum value for the input.",table:{type:{summary:"number"}}},name:{description:"The Input Text name.",table:{type:{summary:"string"}}},placeholder:{description:"The Input Text placeholder.",table:{type:{summary:"string"}}},readonly:{description:"Make the text input readonly.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},size:{description:"Size of input",table:{type:{summary:"string"}},defaultValue:{summary:"medium"},control:{type:"select"},options:["default","compact","small","medium"]},success:{description:"Display success.",table:{type:{summary:"boolean"}},defaultValue:{summary:"default"},control:{type:"boolean"}},suggestions:{description:"Display suggestions.",table:{type:{summary:"array",detail:d}}},tooltip:{description:"The text of the tooltip.",table:{type:{summary:"string"}}},type:{description:"Type of input",table:{type:{summary:["text","number","email","tel"]}},defaultValue:{summary:"text"},control:{type:"select"},options:["text","number","email","tel"]},unit:{description:"Displays a unit and its full description. If label is an abbreviation (ex: cm), the description is required (ex: centimeters).",table:{type:{summary:"object",detail:y}},control:{type:"object"}},validateText:{description:"The text of the button.",table:{type:{summary:"string"}},defaultValue:{summary:"Valider"}},error:{description:'Display error. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},category:"Deprecated"},defaultValue:{summary:!1},control:{type:"boolean"}}},args:{aria:{label:"test"},autocomplete:"on",autofocus:!1,cancelText:"Annuler",dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"",id:"monId",initButtonState:!1,inputRef:"input",isQuiet:!1,hideLabel:!1,label:"My super Input Text",mandatory:!1,max:120,maxlength:30,message:"Voilà le message",min:0,name:"name",placeholder:"",readonly:!1,size:"default",success:!1,suggestions:i,tooltip:"Tooltip text",type:"text",unit:{label:"cm",description:"centimeter"},validateText:"Valider"}},e={render:t=>({components:{SolarisInputButton:m},setup(){const a=b();return f(()=>t.value,r=>{a.value=r}),{args:t,actionButton:()=>u("click"),inputData:a}},template:`<div style="height: calc(100vh - 2rem); padding: 15vh 3vw;">
    <SolarisInputButton v-model="inputData" v-bind="args" @buttonClicked="actionButton"/>
  </div>`}),args:{autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",label:"My super Input Text",labelPosition:"inside",mandatory:!1,message:"Voilà le message",max:120,maxlength:30,name:"name",placeholder:"",readonly:!1,size:"default",success:!1,suggestions:i,tooltip:"Tooltip text",type:"text",unit:{label:"cm",description:"centimeter"},validateText:"Valider"}};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisInputButton
    },
    setup() {
      const inputData = ref();
      watch(() => args.value, val => {
        inputData.value = val;
      });
      const actionButton = () => action('click');
      return {
        args,
        actionButton,
        inputData
      };
    },
    template: \`<div style="height: calc(100vh - 2rem); padding: 15vh 3vw;">
    <SolarisInputButton v-model="inputData" v-bind="args" @buttonClicked="actionButton"/>
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
    labelPosition: 'inside',
    mandatory: false,
    message: 'Voilà le message',
    max: 120,
    maxlength: 30,
    name: 'name',
    placeholder: '',
    readonly: false,
    size: 'default',
    success: false,
    suggestions: suggestions,
    tooltip: 'Tooltip text',
    type: 'text',
    unit: {
      label: 'cm',
      description: 'centimeter'
    },
    validateText: 'Valider'
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const M=["Button"];export{e as Button,M as __namedExportsOrder,S as default};
