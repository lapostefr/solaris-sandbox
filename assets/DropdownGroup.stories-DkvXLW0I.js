import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as h,c as b}from"./details-Bf6ArIKY.js";import{L as e}from"./types-DKXD8uiR.js";import{S as g}from"./DropdownLegacy-Du02tr_J.js";import{A as l,S as s,a as n,T as p}from"./Input-BClLXKNP.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Flag-ijPpsKLe.js";import"./iframe-BnG0fEMb.js";import"../sb-preview/runtime.js";import"./index-a4aneQim.js";import"./Picture-Bv3IzpnC.js";import"./generateId-CVaf2GGW.js";import"./Tooltip-BdO2vyV2.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";const m=[{groupName:"Groupe 1",optionsList:[{id:"option1-A-id",checkboxName:"option1-A-name",radioName:"option-name",label:"Téléphone",value:"option-1A",color:"red",checked:!1},{id:"option2-A-id",checkboxName:"option2-A-name",radioName:"option-name",label:"Micro-informatique",value:"option-2A",color:"green",checked:!0},{id:"option3-A-id",checkboxName:"option3-A-name",radioName:"option-name",label:"Jeux vidéo",value:"option-3A",color:"orange",checked:!1},{id:"option4-A-id",checkboxName:"option4-A-name",radioName:"option-name",label:"Électroménager",value:"option-4A",color:"purple",checked:!1,disabled:!0}]},{groupName:"Groupe 2",optionsList:[{id:"option1-B-id",checkboxName:"option1-B-name",radioName:"option-name",label:"Traçage et mesure",value:"option-1B",icon:"search-keyboard",checked:!1},{id:"option2-B-id",checkboxName:"option2-B-name",radioName:"option-name",label:"Encre",value:"option-2B",icon:"search-keyboard",checked:!1,disabled:!0},{id:"option3-B-id",checkboxName:"option3-B-name",radioName:"option-name",label:"Enveloppes",value:"option-3B",icon:"search-keyboard",checked:!1},{id:"option4-B-id",checkboxName:"option4-B-name",radioName:"option-name",label:"Classement",value:"option-4B",icon:"search-keyboard",checked:!0}]},{groupName:"Groupe 3",optionsList:[{id:"option1-C-id",checkboxName:"option1-C-name",radioName:"option-name",label:"Toutes nos offres",value:"option-1C",image:{width:26,height:26,defaultSource:{url:"https://picsum.photos/26/26",alt:"my image title"}},checked:!1},{id:"option2-C-id",checkboxName:"option2-C-name",radioName:"option-name",label:"Autres équipements",value:"option-2C",image:{width:26,height:26,defaultSource:{url:"https://picsum.photos/26/26",alt:"my image title"}},checked:!1},{id:"option3-C-id",checkboxName:"option3-C-name",radioName:"option-name",label:"Applications",value:"option-3C",image:{width:26,height:26,defaultSource:{url:"https://picsum.photos/26/26",alt:"my image title"}},checked:!1,disabled:!0},{id:"option4-C-id",checkboxName:"option4-C-name",radioName:"option-name",label:"Souscrire un abonnement",value:"option-4C",image:{width:26,height:26,defaultSource:{url:"https://picsum.photos/26/26",alt:"my image title"}},checked:!1}]}],y=Object.values(e),P={title:"Atoms/Dropdown/Defaultgroup",argTypes:{activeGroup:{description:"Enable/disable group mode.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},active:{description:"State of the dropdown.",table:{type:{summary:"string"},defaultValue:{summary:"active"}},control:{type:"select"},options:["active","readonly","disabled"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:h}},control:{type:"object"}},id:{description:"ID to associate label property.",table:{type:{summary:"string"}}},label:{description:"The label of dropdown.",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:y.join(" | ")},defaultValue:{summary:"inside"}},control:{type:"select"},options:[e.inside,e.outside]},listboxHeight:{description:"Fix height for options List.",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},loadFlags:{description:"Display flags.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},mandatory:{description:"Make the Dropdown mandatory.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},message:{description:"Message under the dropdown.",table:{type:{summary:"string"}}},name:{description:"Name for API.",table:{type:{summary:"string"}}},options:{description:"Define all options details.",table:{type:{summary:"array",detail:b}}},picto:{description:"The picto to the right.",table:{type:{summary:"string"},defaultValue:{summary:"arrow-bottom"}}},placeholder:{description:"The placeholder of dropdown.",table:{type:{summary:"string"}}},size:{description:"Size of dropdown.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}},control:{type:"select"},options:["default","compact","regular","small","medium"]},type:{description:"2 type of dropdown.",table:{type:{summary:"string"},defaultValue:{summary:"simple"}},control:{type:"select"},options:["simple","multi"]},searchField:{description:"Show or hide a search field in the top of the lightbox.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},searchFieldMode:{description:"Search results listed in alphabetical order. <strong>contains</strong> returns results containing the search character while <strong>startswith</strong> returns results starting with the search character.",table:{type:{summary:"string"},defaultValue:{summary:"contains"}},control:{type:"select"},options:["contains","startswith"]}},args:{active:l.active,activeGroup:!0,dataError:{active:!1,message:""},id:"idTemp",label:"Label",labelPosition:e.inside,listboxHeight:300,loadFlags:!1,mandatory:!1,message:"Message pour le test",name:"nameTemp",options:m,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:s.contains,size:n.default,type:p.multi}},o={render:d=>({components:{SolarisDropdownGroup:g},setup(){const c=t("MultiSelected"),u=t("Change");return{args:d,elementSelectedMulti:c,elementChange:u}},template:`<div style="margin: auto; width: 300px; height: 100vh;">
    <SolarisDropdownGroup v-bind="args" @multiSelected="elementSelectedMulti" @change="elementChange"/>    
    </div>`}),args:{active:l.active,activeGroup:!0,dataError:{active:!1,message:""},id:"idTemp",label:"Label",labelPosition:e.inside,listboxHeight:300,loadFlags:!1,message:"Message pour le test",name:"nameTemp",options:m,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:s.contains,size:n.default,type:p.multi}};var a,i,r;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    active: Active.active,
    activeGroup: true,
    dataError: {
      active: false,
      message: ''
    },
    id: 'idTemp',
    label: 'Label',
    labelPosition: LabelPosition.inside,
    listboxHeight: 300,
    loadFlags: false,
    message: 'Message pour le test',
    name: 'nameTemp',
    options: options as Group[],
    picto: 'arrow-bottom',
    placeholder: '-Sélectionner une option-',
    searchField: false,
    searchFieldMode: SearchFieldMode.contains,
    size: Size.default,
    type: Type.multi
  }
}`,...(r=(i=o.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const z=["DropdownGroup"];export{o as DropdownGroup,z as __namedExportsOrder,P as default};
