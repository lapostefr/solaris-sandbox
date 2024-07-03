import{a as t}from"./chunk-MZXVCX43-DWuJqIWT.js";import{o as r}from"./defaultOptions-wvr5blgf.js";import{d,b as c}from"./details-EClPA87j.js";import{S as u}from"./Dropdown-ssfIt1WQ.js";import{L as l}from"./types-Dd7QR7uO.js";import{r as h}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./index-ADTFLffw.js";import"./useDropdown-BVv9J1eL.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y=Object.values(l),D={title:"Atoms/Dropdown/Default",argTypes:{active:{description:"State of the dropdown.",table:{type:{summary:"string"},defaultValue:{summary:"active"}},control:{type:"select"},options:["active","readonly","disabled"]},activeGroup:{description:"Enable/disable group mode.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:d}},control:{type:"object"}},id:{description:"ID to associate label property.",table:{type:{summary:"string"}},required:!0},label:{description:"The dropdown's label.",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:y},defaultValue:{summary:"inside"}},control:{type:"select"},options:l},lazyload:{description:"Enable the lazyloading. ",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},listboxHeight:{description:"Fix height for options List.",table:{type:{summary:"number"},defaultValue:{summary:0}}},loadFlags:{description:"Enables the loading of flags.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},message:{description:"Message under the dropdown and above the possible error message.",table:{type:{summary:"string"}}},name:{description:"Name of the component for API.",table:{type:{summary:"string"}},required:!0},options:{description:"Define all options details.",table:{type:{summary:"array",detail:c}},required:!0},placeholder:{description:"The dropdown's placeholder.",table:{type:{summary:"string"}}},picto:{description:"The picto to the right.",table:{type:{summary:"string"},defaultValue:{summary:"arrow-bottom"}}},size:{description:"Size of the dropdown.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}},control:{type:"select"},options:["default","compact","regular","small","medium"]},type:{description:"Two types of dropdown are possible.",table:{type:{summary:"string"},defaultValue:{summary:"simple"}},control:{type:"select"},options:["simple","multi"]},searchField:{description:"Show or hide a search field in the top of the lightbox.",table:{type:{summary:"boolean"}},control:"boolean"},searchFieldMode:{description:"Search results listed in alphabetical order. <strong>contains</strong> returns results containing the search character while <strong>startswith</strong> returns results starting with the search character.",table:{type:{summary:"string"},defaultValue:{summary:"contains"}},control:{type:"select"},options:["contains","startswith"]},multiSelected:{description:"Event at change on the selection in the list if type is multi.",table:{category:"Events"}},simpleSelected:{description:"Event at the close of the dropdown if type is simple.",table:{category:"Events"}}},args:{active:"active",activeGroup:!1,dataError:{active:!1,message:""},id:"idTemp",label:"Label",labelPosition:"inside",lazyload:!1,listboxHeight:300,loadFlags:!0,message:"Message pour le test",name:"nameTemp",options:r,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"default",type:"simple"}},e={render:i=>({components:{SolarisDropdown:u},setup(){const n=h(),p=t("SimpleSelected"),m=t("Change");return{args:i,elementSelectedSimple:p,elementChange:m,selection:n}},template:`<div style="margin: auto; width: 300px; height: 100vh;">
    <SolarisDropdown v-model="selection" v-bind="args" @simpleSelected="elementSelectedSimple" @change="elementChange"/>
    </div>`}),args:{active:"active",activeGroup:!1,dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label",labelPosition:"inside",lazyload:!1,listboxHeight:300,loadFlags:!0,message:"Message pour le test",name:"nameTemp",options:r,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"default",type:"simple"}};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisDropdown
    },
    setup() {
      const selection = ref();
      const elementSelectedSimple = action('SimpleSelected');
      const elementChange = action('Change');
      return {
        args,
        elementSelectedSimple,
        elementChange,
        selection
      };
    },
    template: \`<div style="margin: auto; width: 300px; height: 100vh;">
    <SolarisDropdown v-model="selection" v-bind="args" @simpleSelected="elementSelectedSimple" @change="elementChange"/>
    </div>\`
  }),
  args: {
    active: 'active',
    activeGroup: false,
    dataError: {
      active: false,
      message: ''
    },
    error: '',
    id: 'idTemp',
    label: 'Label',
    labelPosition: 'inside',
    lazyload: false,
    listboxHeight: 300,
    loadFlags: true,
    message: 'Message pour le test',
    name: 'nameTemp',
    options: options,
    picto: 'arrow-bottom',
    placeholder: '-Sélectionner une option-',
    searchField: false,
    searchFieldMode: 'contains',
    size: 'default',
    type: 'simple'
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,D as default};
