import{a as t}from"./chunk-MZXVCX43-DWuJqIWT.js";import{d as m,e as d}from"./details-EClPA87j.js";import{L as n}from"./types-Dd7QR7uO.js";import{S as c}from"./Dropdown-ssfIt1WQ.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./index-ADTFLffw.js";import"./useDropdown-BVv9J1eL.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const r=[{groupName:"Groupe 1",optionsList:[{id:"option1-A-id",checkboxName:"option1-A-name",radioName:"option-name",label:"Téléphone",value:"option-1A",color:"red",checked:!1},{id:"option2-A-id",checkboxName:"option2-A-name",radioName:"option-name",label:"Micro-informatique",value:"option-2A",color:"green",checked:!0},{id:"option3-A-id",checkboxName:"option3-A-name",radioName:"option-name",label:"Jeux vidéo",value:"option-3A",color:"orange",checked:!1},{id:"option4-A-id",checkboxName:"option4-A-name",radioName:"option-name",label:"Électroménager",value:"option-4A",color:"purple",checked:!1,disabled:!0}]},{groupName:"Groupe 2",optionsList:[{id:"option1-B-id",checkboxName:"option1-B-name",radioName:"option-name",label:"Traçage et mesure",value:"option-1B",icon:"search-keyboard",checked:!1},{id:"option2-B-id",checkboxName:"option2-B-name",radioName:"option-name",label:"Encre",value:"option-2B",icon:"search-keyboard",checked:!1,disabled:!0},{id:"option3-B-id",checkboxName:"option3-B-name",radioName:"option-name",label:"Enveloppes",value:"option-3B",icon:"search-keyboard",checked:!1},{id:"option4-B-id",checkboxName:"option4-B-name",radioName:"option-name",label:"Classement",value:"option-4B",icon:"search-keyboard",checked:!0}]},{groupName:"Groupe 3",optionsList:[{id:"option1-C-id",checkboxName:"option1-C-name",radioName:"option-name",label:"Toutes nos offres",value:"option-1C",image:{width:26,height:26,defaultSource:{url:"https://picsum.photos/26/26",alt:"my image title"}},checked:!1},{id:"option2-C-id",checkboxName:"option2-C-name",radioName:"option-name",label:"Autres équipements",value:"option-2C",image:{width:26,height:26,defaultSource:{url:"https://picsum.photos/26/26",alt:"my image title"}},checked:!1},{id:"option3-C-id",checkboxName:"option3-C-name",radioName:"option-name",label:"Applications",value:"option-3C",image:{width:26,height:26,defaultSource:{url:"https://picsum.photos/26/26",alt:"my image title"}},checked:!1,disabled:!0},{id:"option4-C-id",checkboxName:"option4-C-name",radioName:"option-name",label:"Souscrire un abonnement",value:"option-4C",image:{width:26,height:26,defaultSource:{url:"https://picsum.photos/26/26",alt:"my image title"}},checked:!1}]}],u=Object.values(n),N={title:"Atoms/Dropdown/Defaultgroup",argTypes:{activeGroup:{description:"Enable/disable group mode.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},active:{description:"State of the dropdown.",table:{type:{summary:"string"},defaultValue:{summary:"active"}},control:{type:"select"},options:["active","readonly","disabled"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:m}},control:{type:"object"}},id:{description:"ID to associate label property.",table:{type:{summary:"string"}}},label:{description:"The label of dropdown.",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:u},defaultValue:{summary:"inside"}},control:{type:"select"},options:n},listboxHeight:{description:"Fix height for options List.",table:{type:{summary:"number"},defaultValue:{summary:0}}},loadFlags:{description:"Display flags.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},message:{description:"Message under the dropdown.",table:{type:{summary:"string"}}},name:{description:"Name for API.",table:{type:{summary:"string"}}},options:{description:"Define all options details.",table:{type:{summary:"array",detail:d}}},picto:{description:"The picto to the right.",table:{type:{summary:"string"},defaultValue:{summary:"arrow-bottom"}}},placeholder:{description:"The placeholder of dropdown.",table:{type:{summary:"string"}}},size:{description:"Size of dropdown.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}},control:{type:"select"},options:["default","compact","regular","small","medium"]},type:{description:"2 type of dropdown.",table:{type:{summary:"string"},defaultValue:{summary:"simple"}},control:{type:"select"},options:["simple","multi"]},searchField:{description:"Show or hide a search field in the top of the lightbox.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},searchFieldMode:{description:"Search results listed in alphabetical order. <strong>contains</strong> returns results containing the search character while <strong>startswith</strong> returns results starting with the search character.",table:{type:{summary:"string"},defaultValue:{summary:"contains"}},control:{type:"select"},options:["contains","startswith"]},multiSelected:{description:"Event at change on the selection in the list if type is multi.",table:{category:"Events"}},simpleSelected:{description:"Event at the close of the dropdown if type is simple.",table:{category:"Events"}},error:{description:'Error message under the dropdown. *<span style="color:orange">deprecated</span>*',table:{type:{summary:"string"},category:"Deprecated"}}},args:{active:"active",activeGroup:!0,dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label",labelPosition:"inside",listboxHeight:300,loadFlags:!1,message:"Message pour le test",name:"nameTemp",options:r,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"default",type:"multi"}},e={render:l=>({components:{SolarisDropdownGroup:c},setup(){const s=t("MultiSelected"),p=t("Change");return{args:l,elementSelectedMulti:s,elementChange:p}},template:`<div style="margin: auto; width: 300px; height: 100vh;">
    <SolarisDropdownGroup v-bind="args" @multiSelected="elementSelectedMulti" @change="elementChange"/>    
    </div>`}),args:{active:"active",activeGroup:!0,dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label",labelPosition:"inside",listboxHeight:300,loadFlags:!1,message:"Message pour le test",name:"nameTemp",options:r,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"default",type:"multi"}};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisDropdownGroup
    },
    setup() {
      const elementSelectedMulti = action('MultiSelected');
      const elementChange = action('Change');
      return {
        args,
        elementSelectedMulti,
        elementChange
      };
    },
    template: \`<div style="margin: auto; width: 300px; height: 100vh;">
    <SolarisDropdownGroup v-bind="args" @multiSelected="elementSelectedMulti" @change="elementChange"/>    
    </div>\`
  }),
  args: {
    active: 'active',
    activeGroup: true,
    dataError: {
      active: false,
      message: ''
    },
    error: '',
    id: 'idTemp',
    label: 'Label',
    labelPosition: 'inside',
    listboxHeight: 300,
    loadFlags: false,
    message: 'Message pour le test',
    name: 'nameTemp',
    options: options,
    picto: 'arrow-bottom',
    placeholder: '-Sélectionner une option-',
    searchField: false,
    searchFieldMode: 'contains',
    size: 'default',
    type: 'multi'
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const x=["Group"];export{e as Group,x as __namedExportsOrder,N as default};
